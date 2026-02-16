'use client';

import { useCallback, useState, useRef, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WorkflowNode, DecisionNode, TopRightFlowNode, MultiInputFlowNode, VerticalFlowNode, CTANode, type WorkflowNodeData, type CTANodeData, type WorkflowNodeStatus } from './WorkflowNode';

const S3_BASE = 'https://lunnoa-assets-global.s3.eu-central-1.amazonaws.com/assets';

// Node types registration
const nodeTypes: NodeTypes = {
  workflowNode: WorkflowNode,
  decisionNode: DecisionNode,
  topRightFlowNode: TopRightFlowNode,
  multiInputFlowNode: MultiInputFlowNode,
  verticalFlowNode: VerticalFlowNode,
  ctaNode: CTANode,
};

const HORIZONTAL_GAP = 145;
const VERTICAL_GAP = 125;

const initialNodes: Node<WorkflowNodeData | CTANodeData>[] = [
  // Row 0 - Main flow entry (left to right)
  {
    id: 'trigger',
    type: 'workflowNode',
    position: { x: 0, y: 0 },
    data: { label: 'Trigger', icon: `${S3_BASE}/triggers/flow-control_trigger_manual.svg`, status: 'pending' },
  },
  {
    id: 'dealcloud',
    type: 'workflowNode',
    position: { x: HORIZONTAL_GAP, y: 0 },
    data: { label: 'DealCloud', icon: `${S3_BASE}/apps/dealcloud.png`, status: 'pending' },
  },
  {
    id: 'deal-agent',
    type: 'workflowNode',
    position: { x: HORIZONTAL_GAP * 2, y: 0 },
    data: { label: 'Deal Agent', icon: `${S3_BASE}/actions/ai_action_message-agent.svg`, status: 'pending' },
  },
  // Row 1 - Decision node
  {
    id: 'decision',
    type: 'decisionNode',
    position: { x: HORIZONTAL_GAP * 2.5, y: VERTICAL_GAP },
    data: { label: 'Decision', icon: `${S3_BASE}/actions/flow-control_action_conditional-paths.svg`, status: 'pending' },
  },
  // Row 2 - Parallel branches
  {
    id: 'slack',
    type: 'verticalFlowNode',
    position: { x: HORIZONTAL_GAP * 1.5, y: VERTICAL_GAP * 2 },
    data: { label: 'Slack', icon: `${S3_BASE}/apps/slack.svg`, status: 'pending' },
  },
  {
    id: 'excel',
    type: 'verticalFlowNode',
    position: { x: HORIZONTAL_GAP * 3.5, y: VERTICAL_GAP * 2 },
    data: { label: 'Excel', icon: `${S3_BASE}/apps/microsoft-excel-365.svg`, status: 'pending' },
  },
  // Row 3 - Convergence
  {
    id: 'guidepoint',
    type: 'topRightFlowNode',
    position: { x: HORIZONTAL_GAP * 1.5, y: VERTICAL_GAP * 3 },
    data: { label: 'Guidepoint', icon: 'https://www.jetro.go.jp/ext_images/_Newsroom/2018/3rd/0712b1.jpg', status: 'pending' },
  },
  {
    id: 'compliance',
    type: 'multiInputFlowNode',
    position: { x: HORIZONTAL_GAP * 3.5, y: VERTICAL_GAP * 3.5 },
    data: { label: 'KYC Agent', icon: `${S3_BASE}/actions/ai_action_message-agent.svg`, status: 'pending' },
  },
];

// Edges
const initialEdges: Edge[] = [
  { id: 'e-trigger-dealcloud', source: 'trigger', target: 'dealcloud', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-dealcloud-agent', source: 'dealcloud', target: 'deal-agent', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-agent-decision', source: 'deal-agent', target: 'decision', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-decision-slack', source: 'decision', sourceHandle: 'left', target: 'slack', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-decision-excel', source: 'decision', sourceHandle: 'right', target: 'excel', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-slack-guidepoint', source: 'slack', target: 'guidepoint', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-guidepoint-compliance', source: 'guidepoint', target: 'compliance', targetHandle: 'left', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
  { id: 'e-excel-compliance', source: 'excel', target: 'compliance', targetHandle: 'top', type: 'smoothstep', animated: false, style: { stroke: '#374151', strokeWidth: 2 } },
];

interface HeroWorkflowDemoProps {
  onComplete?: () => void;
}

export const HeroWorkflowDemo = ({ onComplete }: HeroWorkflowDemoProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout[]>([]);
  const hasStartedRef = useRef(false);
  const onCompleteCalledRef = useRef(false);
  const NODE_DURATION = 1000;

  // Update node status
  const updateNodeStatus = useCallback((nodeId: string, status: WorkflowNodeStatus) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, status } } : node
      )
    );
  }, [setNodes]);

  // Update edge style
  const updateEdgeStyle = useCallback((edgeId: string, active: boolean, complete: boolean) => {
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === edgeId
          ? {
              ...edge,
              animated: active,
              style: {
                stroke: complete ? '#10b981' : active ? '#3b82f6' : '#374151',
                strokeWidth: active ? 2.5 : 2,
              },
            }
          : edge
      )
    );
  }, [setEdges]);

  // Reset all nodes and edges
  const resetAllNodes = useCallback(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: { ...node.data, status: 'pending' as WorkflowNodeStatus },
      }))
    );
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        animated: false,
        style: { stroke: '#374151', strokeWidth: 2 },
      }))
    );
  }, [setNodes, setEdges]);

  // First run: Slack path
  const runFirstPath = useCallback(() => {
    let delay = 0;

    const schedule = (fn: () => void, d: number) => {
      const t = setTimeout(fn, d);
      timerRef.current.push(t);
    };

    schedule(() => updateNodeStatus('trigger', 'running'), delay);
    delay += NODE_DURATION;
    schedule(() => updateNodeStatus('trigger', 'complete'), delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-trigger-dealcloud', true, false); updateNodeStatus('dealcloud', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-trigger-dealcloud', false, true); updateNodeStatus('dealcloud', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-dealcloud-agent', true, false); updateNodeStatus('deal-agent', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-dealcloud-agent', false, true); updateNodeStatus('deal-agent', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-agent-decision', true, false); updateNodeStatus('decision', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-agent-decision', false, true); updateNodeStatus('decision', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-decision-slack', true, false); updateNodeStatus('slack', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-decision-slack', false, true); updateNodeStatus('slack', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-slack-guidepoint', true, false); updateNodeStatus('guidepoint', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-slack-guidepoint', false, true); updateNodeStatus('guidepoint', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-guidepoint-compliance', true, false); updateNodeStatus('compliance', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-guidepoint-compliance', false, true); updateNodeStatus('compliance', 'complete'); }, delay);
  }, [updateNodeStatus, updateEdgeStyle]);

  // Second run: Excel path
  const runSecondPath = useCallback(() => {
    let delay = 0;

    const schedule = (fn: () => void, d: number) => {
      const t = setTimeout(fn, d);
      timerRef.current.push(t);
    };

    schedule(() => updateNodeStatus('trigger', 'running'), delay);
    delay += NODE_DURATION;
    schedule(() => updateNodeStatus('trigger', 'complete'), delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-trigger-dealcloud', true, false); updateNodeStatus('dealcloud', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-trigger-dealcloud', false, true); updateNodeStatus('dealcloud', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-dealcloud-agent', true, false); updateNodeStatus('deal-agent', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-dealcloud-agent', false, true); updateNodeStatus('deal-agent', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-agent-decision', true, false); updateNodeStatus('decision', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-agent-decision', false, true); updateNodeStatus('decision', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-decision-excel', true, false); updateNodeStatus('excel', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => { updateEdgeStyle('e-decision-excel', false, true); updateNodeStatus('excel', 'complete'); }, delay);
    delay += 100;

    schedule(() => { updateEdgeStyle('e-excel-compliance', true, false); updateNodeStatus('compliance', 'running'); }, delay);
    delay += NODE_DURATION;
    schedule(() => {
      updateEdgeStyle('e-excel-compliance', false, true);
      updateNodeStatus('compliance', 'complete');
      setIsComplete(true);
    }, delay);
  }, [updateNodeStatus, updateEdgeStyle]);

  // Run both paths sequentially
  const runDemo = useCallback(() => {
    const firstPathDuration = 7 * NODE_DURATION + 6 * 100;
    const resetDelay = firstPathDuration + 500;

    const resetTimer = setTimeout(() => resetAllNodes(), resetDelay);
    timerRef.current.push(resetTimer);

    const secondPathTimer = setTimeout(() => runSecondPath(), resetDelay + 100);
    timerRef.current.push(secondPathTimer);

    runFirstPath();
  }, [runFirstPath, runSecondPath, resetAllNodes]);

  // Auto-start animation on mount
  useEffect(() => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      runDemo();
    }
    return () => {
      timerRef.current.forEach(clearTimeout);
    };
  }, [runDemo]);

  // Call onComplete when workflow finishes
  useEffect(() => {
    if (isComplete && onComplete && !onCompleteCalledRef.current) {
      onCompleteCalledRef.current = true;
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <div className="workflow-demo-wrapper">
      <div className="workflow-rf-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{
            padding: 0.15,
            minZoom: 0.6,
            maxZoom: 1.2,
          }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          panOnDrag={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}>
          <Background color="transparent" />
        </ReactFlow>
      </div>
    </div>
  );
};

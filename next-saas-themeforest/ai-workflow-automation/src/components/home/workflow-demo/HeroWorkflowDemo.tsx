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

// Clean tree-like layout with no overlapping connections
// Layout:
//   Row 0: Trigger → DealCloud → Deal Agent
//   Row 1:                        Decision (below Deal Agent)
//   Row 2:          Slack ←───── Decision ─────→ Excel  
//   Row 3:            ↓                            ↓
//   Row 4:      Guidepoint ──→ Compliance ←────────┘
//   Row 5:                      Book a Call

const HORIZONTAL_GAP = 145; // Compact horizontal spacing
const VERTICAL_GAP = 125;   // More vertical space for smoother curves

const initialNodes: Node<WorkflowNodeData | CTANodeData>[] = [
  // Row 0 - Main flow entry (left to right)
  {
    id: 'trigger',
    type: 'workflowNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Trigger',
      icon: `${S3_BASE}/triggers/flow-control_trigger_manual.svg`,
      status: 'pending',
    },
  },
  {
    id: 'dealcloud',
    type: 'workflowNode',
    position: { x: HORIZONTAL_GAP, y: 0 },
    data: {
      label: 'DealCloud',
      icon: `${S3_BASE}/apps/dealcloud.png`,
      status: 'pending',
    },
  },
  {
    id: 'deal-agent',
    type: 'workflowNode',
    position: { x: HORIZONTAL_GAP * 2, y: 0 },
    data: {
      label: 'Deal Agent',
      icon: `${S3_BASE}/actions/ai_action_message-agent.svg`,
      status: 'pending',
    },
  },
  // Row 1 - Decision node (centered, shifted right for visual flow)
  {
    id: 'decision',
    type: 'decisionNode',
    position: { x: HORIZONTAL_GAP * 2.5, y: VERTICAL_GAP },
    data: {
      label: 'Decision',
      icon: `${S3_BASE}/actions/flow-control_action_conditional-paths.svg`,
      status: 'pending',
    },
  },
  // Row 2 - Parallel branches (Slack left, Excel right)
  {
    id: 'slack',
    type: 'verticalFlowNode',
    position: { x: HORIZONTAL_GAP * 1.5, y: VERTICAL_GAP * 2 },
    data: {
      label: 'Slack',
      icon: `${S3_BASE}/apps/slack.svg`,
      status: 'pending',
    },
  },
  {
    id: 'excel',
    type: 'verticalFlowNode',
    position: { x: HORIZONTAL_GAP * 3.5, y: VERTICAL_GAP * 2 },
    data: {
      label: 'Excel',
      icon: `${S3_BASE}/apps/microsoft-excel-365.svg`,
      status: 'pending',
    },
  },
  // Row 3 - Convergence (Guidepoint and Compliance merge)
  {
    id: 'guidepoint',
    type: 'topRightFlowNode',
    position: { x: HORIZONTAL_GAP * 1.5, y: VERTICAL_GAP * 3 },
    data: {
      label: 'Guidepoint',
      icon: 'https://www.jetro.go.jp/ext_images/_Newsroom/2018/3rd/0712b1.jpg',
      status: 'pending',
    },
  },
  {
    id: 'compliance',
    type: 'multiInputFlowNode',
    position: { x: HORIZONTAL_GAP * 3.5, y: VERTICAL_GAP * 3.5 },
    data: {
      label: 'KYC Agent',
      icon: `${S3_BASE}/actions/ai_action_message-agent.svg`,
      status: 'pending',
    },
  },
];

// Clean edges with step connections to avoid overlaps
const initialEdges: Edge[] = [
  // Main flow: Trigger → DealCloud → Deal Agent
  {
    id: 'e-trigger-dealcloud',
    source: 'trigger',
    target: 'dealcloud',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  {
    id: 'e-dealcloud-agent',
    source: 'dealcloud',
    target: 'deal-agent',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Deal Agent → Decision (diagonal down-right)
  {
    id: 'e-agent-decision',
    source: 'deal-agent',
    target: 'decision',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Decision branches: left to Slack, right to Excel
  {
    id: 'e-decision-slack',
    source: 'decision',
    sourceHandle: 'left',
    target: 'slack',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  {
    id: 'e-decision-excel',
    source: 'decision',
    sourceHandle: 'right',
    target: 'excel',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Left branch: Slack → Guidepoint (straight down)
  {
    id: 'e-slack-guidepoint',
    source: 'slack',
    target: 'guidepoint',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Guidepoint → Compliance (horizontal left)
  {
    id: 'e-guidepoint-compliance',
    source: 'guidepoint',
    target: 'compliance',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Right branch: Excel → Compliance (from top)
  {
    id: 'e-excel-compliance',
    source: 'excel',
    target: 'compliance',
    targetHandle: 'top',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
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
  const NODE_DURATION = 1000; // 1 second per node

  // Update node status
  const updateNodeStatus = useCallback((nodeId: string, status: WorkflowNodeStatus) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, status } } : node
      )
    );
  }, [setNodes]);

  // Update edge style (animated and colored)
  const updateEdgeStyle = useCallback((edgeId: string, active: boolean, complete: boolean) => {
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === edgeId
          ? {
              ...edge,
              animated: active,
              style: {
                stroke: complete ? '#10b981' : active ? '#6f00ff' : '#374151',
                strokeWidth: active ? 2.5 : 2,
              },
            }
          : edge
      )
    );
  }, [setEdges]);

  // Reset all nodes and edges to initial state
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
        style: {
          stroke: '#374151',
          strokeWidth: 2,
        },
      }))
    );
  }, [setNodes, setEdges]);

  // First run: Slack path
  const runFirstPath = useCallback(() => {
    let delay = 0;

    // Trigger
    const triggerStart = setTimeout(() => {
      updateNodeStatus('trigger', 'running');
    }, delay);
    timerRef.current.push(triggerStart);
    delay += NODE_DURATION;
    const triggerComplete = setTimeout(() => {
      updateNodeStatus('trigger', 'complete');
    }, delay);
    timerRef.current.push(triggerComplete);
    delay += 100; // Small gap between nodes

    // DealCloud
    const dealcloudStart = setTimeout(() => {
      updateEdgeStyle('e-trigger-dealcloud', true, false);
      updateNodeStatus('dealcloud', 'running');
    }, delay);
    timerRef.current.push(dealcloudStart);
    delay += NODE_DURATION;
    const dealcloudComplete = setTimeout(() => {
      updateEdgeStyle('e-trigger-dealcloud', false, true);
      updateNodeStatus('dealcloud', 'complete');
    }, delay);
    timerRef.current.push(dealcloudComplete);
    delay += 100;

    // Deal Agent
    const agentStart = setTimeout(() => {
      updateEdgeStyle('e-dealcloud-agent', true, false);
      updateNodeStatus('deal-agent', 'running');
    }, delay);
    timerRef.current.push(agentStart);
    delay += NODE_DURATION;
    const agentComplete = setTimeout(() => {
      updateEdgeStyle('e-dealcloud-agent', false, true);
      updateNodeStatus('deal-agent', 'complete');
    }, delay);
    timerRef.current.push(agentComplete);
    delay += 100;

    // Decision
    const decisionStart = setTimeout(() => {
      updateEdgeStyle('e-agent-decision', true, false);
      updateNodeStatus('decision', 'running');
    }, delay);
    timerRef.current.push(decisionStart);
    delay += NODE_DURATION;
    const decisionComplete = setTimeout(() => {
      updateEdgeStyle('e-agent-decision', false, true);
      updateNodeStatus('decision', 'complete');
    }, delay);
    timerRef.current.push(decisionComplete);
    delay += 100;

    // Slack branch
    const slackStart = setTimeout(() => {
      updateEdgeStyle('e-decision-slack', true, false);
      updateNodeStatus('slack', 'running');
    }, delay);
    timerRef.current.push(slackStart);
    delay += NODE_DURATION;
    const slackComplete = setTimeout(() => {
      updateEdgeStyle('e-decision-slack', false, true);
      updateNodeStatus('slack', 'complete');
    }, delay);
    timerRef.current.push(slackComplete);
    delay += 100;

    // Guidepoint
    const guidepointStart = setTimeout(() => {
      updateEdgeStyle('e-slack-guidepoint', true, false);
      updateNodeStatus('guidepoint', 'running');
    }, delay);
    timerRef.current.push(guidepointStart);
    delay += NODE_DURATION;
    const guidepointComplete = setTimeout(() => {
      updateEdgeStyle('e-slack-guidepoint', false, true);
      updateNodeStatus('guidepoint', 'complete');
    }, delay);
    timerRef.current.push(guidepointComplete);
    delay += 100;

    // Compliance
    const complianceStart = setTimeout(() => {
      updateEdgeStyle('e-guidepoint-compliance', true, false);
      updateNodeStatus('compliance', 'running');
    }, delay);
    timerRef.current.push(complianceStart);
    delay += NODE_DURATION;
    const complianceComplete = setTimeout(() => {
      updateEdgeStyle('e-guidepoint-compliance', false, true);
      updateNodeStatus('compliance', 'complete');
    }, delay);
    timerRef.current.push(complianceComplete);
  }, [updateNodeStatus, updateEdgeStyle]);

  // Second run: Excel path
  const runSecondPath = useCallback(() => {
    let delay = 0;

    // Trigger
    const triggerStart = setTimeout(() => {
      updateNodeStatus('trigger', 'running');
    }, delay);
    timerRef.current.push(triggerStart);
    delay += NODE_DURATION;
    const triggerComplete = setTimeout(() => {
      updateNodeStatus('trigger', 'complete');
    }, delay);
    timerRef.current.push(triggerComplete);
    delay += 100;

    // DealCloud
    const dealcloudStart = setTimeout(() => {
      updateEdgeStyle('e-trigger-dealcloud', true, false);
      updateNodeStatus('dealcloud', 'running');
    }, delay);
    timerRef.current.push(dealcloudStart);
    delay += NODE_DURATION;
    const dealcloudComplete = setTimeout(() => {
      updateEdgeStyle('e-trigger-dealcloud', false, true);
      updateNodeStatus('dealcloud', 'complete');
    }, delay);
    timerRef.current.push(dealcloudComplete);
    delay += 100;

    // Deal Agent
    const agentStart = setTimeout(() => {
      updateEdgeStyle('e-dealcloud-agent', true, false);
      updateNodeStatus('deal-agent', 'running');
    }, delay);
    timerRef.current.push(agentStart);
    delay += NODE_DURATION;
    const agentComplete = setTimeout(() => {
      updateEdgeStyle('e-dealcloud-agent', false, true);
      updateNodeStatus('deal-agent', 'complete');
    }, delay);
    timerRef.current.push(agentComplete);
    delay += 100;

    // Decision
    const decisionStart = setTimeout(() => {
      updateEdgeStyle('e-agent-decision', true, false);
      updateNodeStatus('decision', 'running');
    }, delay);
    timerRef.current.push(decisionStart);
    delay += NODE_DURATION;
    const decisionComplete = setTimeout(() => {
      updateEdgeStyle('e-agent-decision', false, true);
      updateNodeStatus('decision', 'complete');
    }, delay);
    timerRef.current.push(decisionComplete);
    delay += 100;

    // Excel branch
    const excelStart = setTimeout(() => {
      updateEdgeStyle('e-decision-excel', true, false);
      updateNodeStatus('excel', 'running');
    }, delay);
    timerRef.current.push(excelStart);
    delay += NODE_DURATION;
    const excelComplete = setTimeout(() => {
      updateEdgeStyle('e-decision-excel', false, true);
      updateNodeStatus('excel', 'complete');
    }, delay);
    timerRef.current.push(excelComplete);
    delay += 100;

    // Compliance
    const complianceStart = setTimeout(() => {
      updateEdgeStyle('e-excel-compliance', true, false);
      updateNodeStatus('compliance', 'running');
    }, delay);
    timerRef.current.push(complianceStart);
    delay += NODE_DURATION;
    const complianceComplete = setTimeout(() => {
      updateEdgeStyle('e-excel-compliance', false, true);
      updateNodeStatus('compliance', 'complete');
      setIsComplete(true);
    }, delay);
    timerRef.current.push(complianceComplete);
  }, [updateNodeStatus, updateEdgeStyle]);

  // Run both paths sequentially
  const runDemo = useCallback(() => {
    // Calculate first path duration: 7 nodes * 1000ms + 6 gaps * 100ms = 7600ms
    const firstPathDuration = 7 * NODE_DURATION + 6 * 100;
    const resetDelay = firstPathDuration + 500; // 500ms pause before reset

    // Reset after first path completes
    const resetTimer = setTimeout(() => {
      resetAllNodes();
    }, resetDelay);
    timerRef.current.push(resetTimer);

    // Start second path after reset
    const secondPathStart = resetDelay + 100; // Small delay after reset
    const secondPathTimer = setTimeout(() => {
      runSecondPath();
    }, secondPathStart);
    timerRef.current.push(secondPathTimer);

    // Start first path immediately
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
          proOptions={{ hideAttribution: true }}
        >
          <Background color="transparent" />
        </ReactFlow>
      </div>
    </div>
  );
};

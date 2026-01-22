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
import { WorkflowNode, VerticalFlowNode, CTANode, type WorkflowNodeData, type CTANodeData, type WorkflowNodeStatus } from './WorkflowNode';

const S3_BASE = 'https://lunnoa-assets-global.s3.eu-central-1.amazonaws.com/assets';

// Node types registration
const nodeTypes: NodeTypes = {
  workflowNode: WorkflowNode,
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
    type: 'verticalFlowNode',
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
    type: 'verticalFlowNode',
    position: { x: HORIZONTAL_GAP * 1.5, y: VERTICAL_GAP * 3 },
    data: {
      label: 'Guidepoint',
      icon: 'https://www.jetro.go.jp/ext_images/_Newsroom/2018/3rd/0712b1.jpg',
      status: 'pending',
    },
  },
  {
    id: 'compliance',
    type: 'verticalFlowNode',
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
    target: 'slack',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  {
    id: 'e-decision-excel',
    source: 'decision',
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
  // Guidepoint → Compliance (horizontal right)
  {
    id: 'e-guidepoint-compliance',
    source: 'guidepoint',
    target: 'compliance',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#374151', strokeWidth: 2 },
  },
  // Right branch: Excel → Compliance (diagonal down-left to merge)
  {
    id: 'e-excel-compliance',
    source: 'excel',
    target: 'compliance',
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

  // Run the demo animation - zigzag flow (~2 seconds longer for smoother pacing)
  const runDemo = useCallback(() => {
    let delay = 1000;

    // Row 1: Trigger → DealCloud → Deal Agent → Decision
    const row1 = [
      { node: 'trigger', edge: null, duration: 600 },
      { node: 'dealcloud', edge: 'e-trigger-dealcloud', duration: 800 },
      { node: 'deal-agent', edge: 'e-dealcloud-agent', duration: 1000 },
      { node: 'decision', edge: 'e-agent-decision', duration: 600 },
    ];

    row1.forEach(({ node, edge, duration }) => {
      const startTimer = setTimeout(() => {
        updateNodeStatus(node, 'running');
        if (edge) updateEdgeStyle(edge, true, false);
      }, delay);
      timerRef.current.push(startTimer);

      delay += duration;

      const completeTimer = setTimeout(() => {
        updateNodeStatus(node, 'complete');
        if (edge) updateEdgeStyle(edge, false, true);
      }, delay);
      timerRef.current.push(completeTimer);

      delay += 150;
    });

    // Row 2: Decision branches to Slack and Excel
    const branchDelay = delay;

    // Slack branch
    setTimeout(() => {
      updateEdgeStyle('e-decision-slack', true, false);
      updateNodeStatus('slack', 'running');
    }, branchDelay);
    timerRef.current.push(setTimeout(() => {}, branchDelay));

    setTimeout(() => {
      updateEdgeStyle('e-decision-slack', false, true);
      updateNodeStatus('slack', 'complete');
    }, branchDelay + 700);
    timerRef.current.push(setTimeout(() => {}, branchDelay + 700));

    // Excel branch (slight delay)
    setTimeout(() => {
      updateEdgeStyle('e-decision-excel', true, false);
      updateNodeStatus('excel', 'running');
    }, branchDelay + 200);
    timerRef.current.push(setTimeout(() => {}, branchDelay + 200));

    setTimeout(() => {
      updateEdgeStyle('e-decision-excel', false, true);
      updateNodeStatus('excel', 'complete');
    }, branchDelay + 200 + 600);
    timerRef.current.push(setTimeout(() => {}, branchDelay + 800));

    delay = branchDelay + 950;

    // Row 3: Guidepoint → Compliance
    // Slack connects to Guidepoint
    setTimeout(() => {
      updateEdgeStyle('e-slack-guidepoint', true, false);
      updateNodeStatus('guidepoint', 'running');
    }, delay);
    timerRef.current.push(setTimeout(() => {}, delay));

    setTimeout(() => {
      updateEdgeStyle('e-slack-guidepoint', false, true);
      updateNodeStatus('guidepoint', 'complete');
    }, delay + 700);
    timerRef.current.push(setTimeout(() => {}, delay + 700));

    delay += 850;

    // Compliance (receives from both Guidepoint and Excel)
    setTimeout(() => {
      updateEdgeStyle('e-guidepoint-compliance', true, false);
      updateEdgeStyle('e-excel-compliance', true, false);
      updateNodeStatus('compliance', 'running');
    }, delay);
    timerRef.current.push(setTimeout(() => {}, delay));

    setTimeout(() => {
      updateEdgeStyle('e-guidepoint-compliance', false, true);
      updateEdgeStyle('e-excel-compliance', false, true);
      updateNodeStatus('compliance', 'complete');
      setIsComplete(true);
    }, delay + 800);
    timerRef.current.push(setTimeout(() => {}, delay + 800));
  }, [updateNodeStatus, updateEdgeStyle]);

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

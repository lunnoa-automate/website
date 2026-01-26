'use client';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export type WorkflowNodeStatus = 'pending' | 'running' | 'complete';

export interface WorkflowNodeData {
  label: string;
  icon: string;
  status: WorkflowNodeStatus;
}

export interface CTANodeData {
  label: string;
  status: WorkflowNodeStatus;
  href: string;
}

const CheckIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

function WorkflowNodeComponent({ data }: { data: WorkflowNodeData }) {
  const { label, icon, status } = data;

  const getBorderClass = () => {
    switch (status) {
      case 'running':
        return 'border-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]';
      case 'complete':
        return 'border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12),0_6px_16px_-4px_rgba(16,185,129,0.25)]';
      default:
        return 'border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  return (
    <div className="workflow-rf-node">
      {/* Input handle - LEFT (invisible) */}
      <Handle
        type="target"
        position={Position.Left}
        className="!opacity-0 !w-0 !h-0"
      />

      {/* Node content */}
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 ${getBorderClass()}`}
        animate={status === 'running' ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain rounded"
          unoptimized
        />

        {/* Status badge */}
        {status !== 'pending' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
              status === 'running'
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]'
                : 'bg-gradient-to-br from-emerald-500 to-emerald-400'
            }`}
          >
            {status === 'running' ? <SpinnerIcon /> : <CheckIcon />}
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[90px]">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
          {label}
        </p>
      </div>

      {/* Output handle - RIGHT (invisible) */}
      <Handle
        type="source"
        position={Position.Right}
        className="!opacity-0 !w-0 !h-0"
      />
    </div>
  );
}

// Decision Node - uses Top input handle and Left/Right output handles
function DecisionNodeComponent({ data }: { data: WorkflowNodeData }) {
  const { label, icon, status } = data;

  const getBorderClass = () => {
    switch (status) {
      case 'running':
        return 'border-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]';
      case 'complete':
        return 'border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12),0_6px_16px_-4px_rgba(16,185,129,0.25)]';
      default:
        return 'border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  return (
    <div className="workflow-rf-node">
      {/* Input handle - TOP (invisible) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-0 !h-0"
      />

      {/* Node content */}
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 ${getBorderClass()}`}
        animate={status === 'running' ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain rounded"
          unoptimized
        />

        {/* Status badge */}
        {status !== 'pending' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
              status === 'running'
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]'
                : 'bg-gradient-to-br from-emerald-500 to-emerald-400'
            }`}
          >
            {status === 'running' ? <SpinnerIcon /> : <CheckIcon />}
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[90px]">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
          {label}
        </p>
      </div>

      {/* Output handles - LEFT and RIGHT (invisible) */}
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-0 !h-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-0 !h-0"
      />
    </div>
  );
}

// Top-Right Flow Node - uses Top input handle and Right output handle for horizontal connections
function TopRightFlowNodeComponent({ data }: { data: WorkflowNodeData }) {
  const { label, icon, status } = data;

  const getBorderClass = () => {
    switch (status) {
      case 'running':
        return 'border-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]';
      case 'complete':
        return 'border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12),0_6px_16px_-4px_rgba(16,185,129,0.25)]';
      default:
        return 'border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  return (
    <div className="workflow-rf-node">
      {/* Input handle - TOP (invisible) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-0 !h-0"
      />

      {/* Node content */}
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 ${getBorderClass()}`}
        animate={status === 'running' ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain rounded"
          unoptimized
        />

        {/* Status badge */}
        {status !== 'pending' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
              status === 'running'
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]'
                : 'bg-gradient-to-br from-emerald-500 to-emerald-400'
            }`}
          >
            {status === 'running' ? <SpinnerIcon /> : <CheckIcon />}
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[90px]">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
          {label}
        </p>
      </div>

      {/* Output handle - RIGHT (invisible) */}
      <Handle
        type="source"
        position={Position.Right}
        className="!opacity-0 !w-0 !h-0"
      />
    </div>
  );
}

// Multi-Input Flow Node - uses Top and Left input handles for converging connections
function MultiInputFlowNodeComponent({ data }: { data: WorkflowNodeData }) {
  const { label, icon, status } = data;

  const getBorderClass = () => {
    switch (status) {
      case 'running':
        return 'border-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]';
      case 'complete':
        return 'border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12),0_6px_16px_-4px_rgba(16,185,129,0.25)]';
      default:
        return 'border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  return (
    <div className="workflow-rf-node">
      {/* Input handles - TOP and LEFT (invisible) */}
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-0 !h-0"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-0 !h-0"
      />

      {/* Node content */}
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 ${getBorderClass()}`}
        animate={status === 'running' ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain rounded"
          unoptimized
        />

        {/* Status badge */}
        {status !== 'pending' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
              status === 'running'
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]'
                : 'bg-gradient-to-br from-emerald-500 to-emerald-400'
            }`}
          >
            {status === 'running' ? <SpinnerIcon /> : <CheckIcon />}
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[90px]">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
          {label}
        </p>
      </div>
    </div>
  );
}

// Vertical Flow Node - uses Top/Bottom handles for vertical connections
function VerticalFlowNodeComponent({ data }: { data: WorkflowNodeData }) {
  const { label, icon, status } = data;

  const getBorderClass = () => {
    switch (status) {
      case 'running':
        return 'border-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]';
      case 'complete':
        return 'border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12),0_6px_16px_-4px_rgba(16,185,129,0.25)]';
      default:
        return 'border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  return (
    <div className="workflow-rf-node">
      {/* Input handle - TOP (invisible) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-0 !h-0"
      />

      {/* Node content */}
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 ${getBorderClass()}`}
        animate={status === 'running' ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain rounded"
          unoptimized
        />

        {/* Status badge */}
        {status !== 'pending' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
              status === 'running'
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]'
                : 'bg-gradient-to-br from-emerald-500 to-emerald-400'
            }`}
          >
            {status === 'running' ? <SpinnerIcon /> : <CheckIcon />}
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[90px]">
        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
          {label}
        </p>
      </div>

      {/* Output handle - BOTTOM (invisible) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!opacity-0 !w-0 !h-0"
      />
    </div>
  );
}

// Arrow icon for the button
const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

// CTA Node - Button style that receives the workflow connection
function CTANodeComponent({ data }: { data: CTANodeData }) {
  const { label, status, href } = data;

  const isClickable = status === 'complete';

  return (
    <div className="workflow-rf-node">
      {/* Input handle - RIGHT (invisible) */}
      <Handle
        type="target"
        position={Position.Right}
        className="!opacity-0 !w-0 !h-0"
      />

      {/* CTA Button style */}
      <Link href={href} className={isClickable ? 'cursor-pointer' : 'pointer-events-none'}>
        <motion.div
          className={`relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-full transition-all duration-300 ${
            status === 'complete'
              ? 'bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] shadow-[0_0_0_4px_rgba(59,130,246,0.2),0_12px_32px_-6px_rgba(59,130,246,0.5)]'
              : status === 'running'
              ? 'bg-gradient-to-r from-[#3b82f6]/80 to-[#60a5fa]/80 shadow-[0_0_0_3px_rgba(59,130,246,0.15),0_8px_20px_-4px_rgba(59,130,246,0.35)]'
              : 'bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
          }`}
          animate={
            status === 'complete'
              ? { scale: [1, 1.03, 1] }
              : status === 'running'
              ? { scale: [1, 1.02, 1] }
              : {}
          }
          transition={{
            repeat: status !== 'pending' ? Infinity : 0,
            duration: status === 'complete' ? 1.5 : 1.8,
          }}
          whileHover={isClickable ? { scale: 1.05, boxShadow: '0 0 0 5px rgba(59,130,246,0.25), 0 16px 40px -6px rgba(59,130,246,0.6)' } : {}}
          whileTap={isClickable ? { scale: 0.97 } : {}}
        >
          {/* Button text */}
          <span className={`text-base font-bold whitespace-nowrap ${
            status === 'pending' ? 'text-gray-500 dark:text-gray-400' : 'text-white'
          }`}>
            {label}
          </span>
          
          {/* Arrow icon */}
          <span className={`${status === 'pending' ? 'text-gray-500 dark:text-gray-400' : 'text-white'}`}>
            <ArrowIcon />
          </span>

          {/* Pulse effect when complete */}
          {status === 'complete' && (
            <motion.div
              className="absolute inset-0 rounded-full bg-[#3b82f6]"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0, scale: 1.4 }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          )}
        </motion.div>
      </Link>
    </div>
  );
}

export const WorkflowNode = memo(WorkflowNodeComponent);
export const DecisionNode = memo(DecisionNodeComponent);
export const TopRightFlowNode = memo(TopRightFlowNodeComponent);
export const MultiInputFlowNode = memo(MultiInputFlowNodeComponent);
export const VerticalFlowNode = memo(VerticalFlowNodeComponent);
export const CTANode = memo(CTANodeComponent);

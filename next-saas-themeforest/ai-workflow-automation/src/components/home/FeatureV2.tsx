'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import { useICP, type ICPType } from '@/context/ICPContext';
import gradient6 from '@public/images/ns-img-498.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

/* ══════════════════════════════════════════════════
   ICP-Specific Feature Data
   ══════════════════════════════════════════════════ */

interface FeatureItem {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

const featuresByICP: Record<ICPType, FeatureItem[]> = {
  pe: [
    { id: 1, title: 'Custom Objects', shortDescription: 'Define Deals, Funds, Portfolio Companies', icon: 'ns-shape-34', description: 'Create your own objects\u2014Deals, Portfolio Companies, Funds\u2014with custom fields and relationships. Track every entity through its entire lifecycle.' },
    { id: 2, title: 'End-to-End Processes', shortDescription: 'From deal intake to closing', icon: 'ns-shape-36', description: 'Run deals through complete processes\u2014multiple workflows and AI agents working together. From intake to closing, fully orchestrated.' },
    { id: 3, title: 'Control Room', shortDescription: 'Monitor every deal in real-time', icon: 'ns-shape-8', description: 'See every deal and portfolio company moving through your processes. Intervene when needed. Full visibility and control from one dashboard.' },
    { id: 4, title: 'AI Agents', shortDescription: 'MNPI screening, due diligence, KYC', icon: 'ns-shape-41', description: 'Create AI agents for MNPI screening, document analysis, KYC checks, and due diligence. Each agent has defined roles, tools, and audit trails.' },
    { id: 5, title: 'Central Knowledge Base', shortDescription: 'Your validated data powers AI decisions', icon: 'ns-shape-3', description: 'Connect your fund documents, policies, and deal history. AI agents and workflows access validated content\u2014no hallucinations, no outdated info.' },
    { id: 6, title: 'Full Audit Trails', shortDescription: 'Every action logged and traceable', icon: 'ns-shape-8', description: 'Every AI decision, workflow step, and user action is logged. Complete transparency for compliance reviews and regulatory audits.' },
  ],
  wealth: [
    { id: 1, title: 'Custom Objects', shortDescription: 'Define Clients, Portfolios, Mandates', icon: 'ns-shape-34', description: 'Create your own objects\u2014Clients, Portfolios, Mandates\u2014with custom fields and relationships. Track every entity through its entire lifecycle.' },
    { id: 2, title: 'End-to-End Processes', shortDescription: 'From onboarding to activation', icon: 'ns-shape-36', description: 'Run clients through complete processes\u2014multiple workflows and AI agents working together. From onboarding to portfolio activation, fully orchestrated.' },
    { id: 3, title: 'Control Room', shortDescription: 'Monitor every client in real-time', icon: 'ns-shape-8', description: 'See every client and portfolio moving through your processes. Intervene when needed. Full visibility and control from one dashboard.' },
    { id: 4, title: 'AI Agents', shortDescription: 'KYC reviews, suitability, reporting', icon: 'ns-shape-41', description: 'Create AI agents for KYC reviews, suitability assessments, regulatory reporting, and more. Each agent has defined roles, tools, and audit trails.' },
    { id: 5, title: 'Central Knowledge Base', shortDescription: 'Your validated data powers AI decisions', icon: 'ns-shape-3', description: 'Connect your advisory guidelines, policies, and client history. AI agents and workflows access validated content\u2014no hallucinations, no outdated info.' },
    { id: 6, title: 'Full Audit Trails', shortDescription: 'Every action logged and traceable', icon: 'ns-shape-8', description: 'Every AI decision, workflow step, and user action is logged. Complete transparency for compliance reviews and regulatory audits.' },
  ],
  banking: [
    { id: 1, title: 'Custom Objects', shortDescription: 'Define Accounts, Loans, Transactions', icon: 'ns-shape-34', description: 'Create your own objects\u2014Accounts, Loans, Transactions\u2014with custom fields and relationships. Track every entity through its entire lifecycle.' },
    { id: 2, title: 'End-to-End Processes', shortDescription: 'From application to disbursement', icon: 'ns-shape-36', description: 'Run loans through complete processes\u2014multiple workflows and AI agents working together. From application to disbursement, fully orchestrated.' },
    { id: 3, title: 'Control Room', shortDescription: 'Monitor every case in real-time', icon: 'ns-shape-8', description: 'See every account, loan, and compliance case moving through your processes. Intervene when needed. Full visibility and control from one dashboard.' },
    { id: 4, title: 'AI Agents', shortDescription: 'AML screening, credit analysis, compliance', icon: 'ns-shape-41', description: 'Create AI agents for AML screening, credit analysis, compliance monitoring, and more. Each agent has defined roles, tools, and audit trails.' },
    { id: 5, title: 'Central Knowledge Base', shortDescription: 'Your validated data powers AI decisions', icon: 'ns-shape-3', description: 'Connect your lending policies, regulatory requirements, and compliance history. AI agents and workflows access validated content\u2014no hallucinations, no outdated info.' },
    { id: 6, title: 'Full Audit Trails', shortDescription: 'Every action logged and traceable', icon: 'ns-shape-8', description: 'Every AI decision, workflow step, and user action is logged. Complete transparency for compliance reviews and regulatory audits.' },
  ],
};

/* ══════════════════════════════════════════════════
   ICP-Specific Visual Data
   ══════════════════════════════════════════════════ */

const objectsDataByICP: Record<ICPType, { name: string; type: string; status: string; statusColor: string; dotColor: string; fields: { label: string; value: string }[] }[]> = {
  pe: [
    { name: 'Series B Funding', type: 'Deal', status: 'Active', statusColor: 'bg-ns-green/20 text-ns-green', dotColor: 'bg-ns-green', fields: [{ label: 'Company', value: 'Acme Corp' }, { label: 'Amount', value: '$12M' }] },
    { name: 'Meridian Capital', type: 'Client', status: 'Verified', statusColor: 'bg-primary-500/15 text-primary-500', dotColor: 'bg-primary-500', fields: [{ label: 'Type', value: 'Institutional' }, { label: 'AUM', value: '$2.4B' }] },
    { name: 'Growth Fund III', type: 'Investment', status: 'Pending', statusColor: 'bg-ns-yellow/20 text-ns-yellow', dotColor: 'bg-ns-yellow', fields: [{ label: 'Strategy', value: 'PE' }, { label: 'Commitment', value: '$50M' }] },
  ],
  wealth: [
    { name: 'Anderson Family', type: 'Client', status: 'Active', statusColor: 'bg-ns-green/20 text-ns-green', dotColor: 'bg-ns-green', fields: [{ label: 'Segment', value: 'UHNW' }, { label: 'AUM', value: '\u20AC8.2M' }] },
    { name: 'Conservative Growth', type: 'Portfolio', status: 'Rebalancing', statusColor: 'bg-primary-500/15 text-primary-500', dotColor: 'bg-primary-500', fields: [{ label: 'Risk', value: 'Moderate' }, { label: 'Return', value: '+7.3%' }] },
    { name: 'Discretionary Q4', type: 'Mandate', status: 'Pending', statusColor: 'bg-ns-yellow/20 text-ns-yellow', dotColor: 'bg-ns-yellow', fields: [{ label: 'Type', value: 'Advisory' }, { label: 'Value', value: '\u20AC2.1M' }] },
  ],
  banking: [
    { name: 'Meridian Corp', type: 'Account', status: 'Active', statusColor: 'bg-ns-green/20 text-ns-green', dotColor: 'bg-ns-green', fields: [{ label: 'Type', value: 'Corporate' }, { label: 'Balance', value: '\u20AC4.8M' }] },
    { name: 'Commercial RE Loan', type: 'Loan', status: 'In Review', statusColor: 'bg-primary-500/15 text-primary-500', dotColor: 'bg-primary-500', fields: [{ label: 'Amount', value: '\u20AC15M' }, { label: 'Term', value: '10yr' }] },
    { name: 'Wire #4521', type: 'Transaction', status: 'Flagged', statusColor: 'bg-ns-yellow/20 text-ns-yellow', dotColor: 'bg-ns-yellow', fields: [{ label: 'Amount', value: '\u20AC890K' }, { label: 'Risk', value: 'Medium' }] },
  ],
};

const processDataByICP: Record<ICPType, { stages: { name: string; status: string }[]; activeStage: string; tasks: { task: string; status: string }[] }> = {
  pe: {
    stages: [{ name: 'Intake', status: 'completed' }, { name: 'Review', status: 'completed' }, { name: 'Due Diligence', status: 'active' }, { name: 'Approval', status: 'pending' }, { name: 'Closing', status: 'pending' }],
    activeStage: 'Due Diligence',
    tasks: [{ task: 'Document Analysis', status: 'done' }, { task: 'Risk Assessment', status: 'running' }, { task: 'Compliance Check', status: 'queued' }],
  },
  wealth: {
    stages: [{ name: 'Onboarding', status: 'completed' }, { name: 'KYC Review', status: 'completed' }, { name: 'Risk Profile', status: 'active' }, { name: 'Portfolio Setup', status: 'pending' }, { name: 'Activation', status: 'pending' }],
    activeStage: 'Risk Profile',
    tasks: [{ task: 'Identity Verification', status: 'done' }, { task: 'Suitability Assessment', status: 'running' }, { task: 'PEP Screening', status: 'queued' }],
  },
  banking: {
    stages: [{ name: 'Application', status: 'completed' }, { name: 'Credit Check', status: 'completed' }, { name: 'Underwriting', status: 'active' }, { name: 'Approval', status: 'pending' }, { name: 'Disbursement', status: 'pending' }],
    activeStage: 'Underwriting',
    tasks: [{ task: 'Income Verification', status: 'done' }, { task: 'Collateral Assessment', status: 'running' }, { task: 'Risk Scoring', status: 'queued' }],
  },
};

const controlRoomDataByICP: Record<ICPType, { name: string; stage: string; progress: number }[]> = {
  pe: [
    { name: 'Deal #847 \u2014 Series B', stage: 'Due Diligence', progress: 65 },
    { name: 'KYC \u2014 Meridian Capital', stage: 'Document Review', progress: 40 },
    { name: 'Fund III \u2014 Quarterly Report', stage: 'AI Analysis', progress: 90 },
  ],
  wealth: [
    { name: 'Client #312 \u2014 Anderson Family', stage: 'Risk Profiling', progress: 65 },
    { name: 'Portfolio Rebalance \u2014 Q4', stage: 'Execution', progress: 80 },
    { name: 'KYC Review \u2014 Smith Trust', stage: 'Document Check', progress: 35 },
  ],
  banking: [
    { name: 'Loan #1847 \u2014 Commercial RE', stage: 'Underwriting', progress: 55 },
    { name: 'AML Check \u2014 Wire #4521', stage: 'Risk Analysis', progress: 70 },
    { name: 'Compliance \u2014 Quarterly Audit', stage: 'Report Generation', progress: 90 },
  ],
};

const agentDataByICP: Record<ICPType, { agentName: string; processing: string; tools: { tool: string; status: string; result: string }[]; summary: string; accuracy: string }> = {
  pe: {
    agentName: 'MNPI Screening Agent',
    processing: 'Processing Deal #847',
    tools: [
      { tool: 'SEC Filing Search', status: 'done', result: 'No flags found' },
      { tool: 'Communication Scanner', status: 'done', result: '3 items reviewed' },
      { tool: 'Risk Assessment', status: 'running', result: 'Analyzing...' },
    ],
    summary: '12,450 documents processed this month',
    accuracy: '96.8% accuracy rate across all agents',
  },
  wealth: {
    agentName: 'KYC Review Agent',
    processing: 'Processing Client #312',
    tools: [
      { tool: 'Identity Verification', status: 'done', result: 'Match confirmed' },
      { tool: 'Document Validation', status: 'done', result: '5 docs verified' },
      { tool: 'PEP Screening', status: 'running', result: 'Checking...' },
    ],
    summary: '4,200 client reviews completed this month',
    accuracy: '99.1% compliance rate across all agents',
  },
  banking: {
    agentName: 'AML Screening Agent',
    processing: 'Processing Transaction #4521',
    tools: [
      { tool: 'Transaction Pattern Analysis', status: 'done', result: 'Pattern normal' },
      { tool: 'Sanctions Check', status: 'done', result: 'No matches' },
      { tool: 'Risk Scoring', status: 'running', result: 'Scoring...' },
    ],
    summary: '89,000 transactions screened this month',
    accuracy: '99.7% detection rate across all agents',
  },
};

const knowledgeDataByICP: Record<ICPType, { name: string; type: string; typeColor: string; chunks: string; updated: string }[]> = {
  pe: [
    { name: 'Investment Policy v2.3', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '847 chunks', updated: '2h ago' },
    { name: 'Compliance Guidelines 2025', type: 'DOC', typeColor: 'bg-primary-500/15 text-primary-500', chunks: '1,240 chunks', updated: '1d ago' },
    { name: 'KYC Requirements \u2014 EU', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '363 chunks', updated: '3d ago' },
    { name: 'Fund III \u2014 Offering Memo', type: 'XLS', typeColor: 'bg-ns-green/15 text-ns-green', chunks: '2,890 chunks', updated: '1w ago' },
  ],
  wealth: [
    { name: 'Client Suitability Policy', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '620 chunks', updated: '3h ago' },
    { name: 'Advisory Guidelines 2025', type: 'DOC', typeColor: 'bg-primary-500/15 text-primary-500', chunks: '940 chunks', updated: '1d ago' },
    { name: 'KYC/AML Procedures', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '510 chunks', updated: '2d ago' },
    { name: 'Portfolio Mandate Templates', type: 'XLS', typeColor: 'bg-ns-green/15 text-ns-green', chunks: '1,450 chunks', updated: '5d ago' },
  ],
  banking: [
    { name: 'Lending Policy Framework', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '1,120 chunks', updated: '1h ago' },
    { name: 'AML/CFT Procedures', type: 'DOC', typeColor: 'bg-primary-500/15 text-primary-500', chunks: '2,340 chunks', updated: '12h ago' },
    { name: 'Regulatory Requirements \u2014 EU', type: 'PDF', typeColor: 'bg-ns-red/15 text-ns-red', chunks: '890 chunks', updated: '2d ago' },
    { name: 'Credit Risk Framework', type: 'XLS', typeColor: 'bg-ns-green/15 text-ns-green', chunks: '1,780 chunks', updated: '3d ago' },
  ],
};

const auditDataByICP: Record<ICPType, { time: string; action: string; detail: string; user: string; color: string }[]> = {
  pe: [
    { time: '10:24 AM', action: 'State changed', detail: 'Review \u2192 Approved', user: 'Sarah K.', color: 'bg-ns-green' },
    { time: '09:15 AM', action: 'Document uploaded', detail: 'KYC_Report.pdf', user: 'AI Agent', color: 'bg-primary-500' },
    { time: '08:30 AM', action: 'Process started', detail: 'Deal Intake Pipeline', user: 'System', color: 'bg-ns-purple' },
    { time: '08:00 AM', action: 'Object created', detail: 'Deal #847 \u2014 Series B', user: 'Michael R.', color: 'bg-ns-cyan' },
  ],
  wealth: [
    { time: '10:24 AM', action: 'KYC approved', detail: 'Client #312 \u2192 Verified', user: 'Compliance Bot', color: 'bg-ns-green' },
    { time: '09:15 AM', action: 'Document uploaded', detail: 'Passport_Scan.pdf', user: 'Client Portal', color: 'bg-primary-500' },
    { time: '08:30 AM', action: 'Onboarding started', detail: 'Anderson Family', user: 'System', color: 'bg-ns-purple' },
    { time: '08:00 AM', action: 'Client created', detail: 'Anderson Family \u2014 UHNW', user: 'Julia M.', color: 'bg-ns-cyan' },
  ],
  banking: [
    { time: '10:24 AM', action: 'AML cleared', detail: 'Transaction #4521 \u2192 Clean', user: 'AML Agent', color: 'bg-ns-green' },
    { time: '09:15 AM', action: 'Report generated', detail: 'Quarterly_Compliance.pdf', user: 'System', color: 'bg-primary-500' },
    { time: '08:30 AM', action: 'Loan application', detail: 'Commercial RE \u2014 \u20AC15M', user: 'Branch Portal', color: 'bg-ns-purple' },
    { time: '08:00 AM', action: 'Account flagged', detail: 'Wire #4521 \u2014 Review', user: 'AML Agent', color: 'bg-ns-cyan' },
  ],
};

/* ══════════════════════════════════════════════════
   Visual Components (data-driven)
   ══════════════════════════════════════════════════ */

const CustomObjectsVisual = ({ items }: { items: typeof objectsDataByICP.pe }) => (
  <div className="space-y-2.5">
    {items.map((item, i) => (
      <div key={i} className="bg-background-3 dark:bg-background-8 rounded-xl p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn('h-2.5 w-2.5 rounded-full', item.dotColor)} />
            <span className="text-tagline-2 text-secondary dark:text-accent font-semibold">{item.name}</span>
          </div>
          <span className={cn('text-tagline-3 rounded-md px-2 py-0.5 font-medium', item.statusColor)}>
            {item.status}
          </span>
        </div>
        <div className="text-tagline-3 flex items-center gap-3">
          <span className="text-secondary/50 dark:text-accent/50 font-medium">{item.type}</span>
          <span className="text-secondary/20 dark:text-accent/20">|</span>
          {item.fields.map((f, j) => (
            <span key={j}>
              <span className="text-secondary/50 dark:text-accent/50">{f.label}: </span>
              <span className="font-medium">{f.value}</span>
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ProcessesVisual = ({ data }: { data: typeof processDataByICP.pe }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      {data.stages.map((stage, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full border-2 text-tagline-3 font-semibold transition-all sm:h-10 sm:w-10',
                stage.status === 'completed' && 'border-ns-green bg-ns-green text-secondary',
                stage.status === 'active' && 'border-primary-500 bg-primary-500 text-white ring-4 ring-primary-500/20',
                stage.status === 'pending' && 'border-stroke-1 bg-background-3 dark:border-stroke-6 dark:bg-background-8',
              )}>
              {stage.status === 'completed' ? '\u2713' : i + 1}
            </div>
            <span
              className={cn(
                'text-tagline-3 text-center font-medium whitespace-nowrap',
                stage.status === 'active' && 'text-primary-500',
                stage.status === 'completed' && 'text-secondary dark:text-accent',
                stage.status === 'pending' && 'text-secondary/40 dark:text-accent/40',
              )}>
              {stage.name}
            </span>
          </div>
          {i < data.stages.length - 1 && (
            <div className={cn('mx-1 mb-6 h-0.5 w-3 sm:mx-2 sm:w-6 lg:w-5 xl:w-8', stage.status === 'completed' ? 'bg-ns-green' : 'bg-stroke-1 dark:bg-stroke-6')} />
          )}
        </div>
      ))}
    </div>
    <div className="bg-background-3 dark:bg-background-8 rounded-xl p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
          <span className="text-tagline-2 font-semibold">{data.activeStage}</span>
        </div>
        <span className="text-tagline-3 rounded-md bg-primary-50 px-2 py-0.5 font-medium text-primary-500 dark:bg-primary-800/30">In Progress</span>
      </div>
      <div className="space-y-2">
        {data.tasks.map((item, i) => (
          <div key={i} className="text-tagline-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={cn('flex h-4 w-4 items-center justify-center rounded text-[10px]', item.status === 'done' && 'bg-ns-green text-secondary', item.status === 'running' && 'bg-primary-500/20 text-primary-500', item.status === 'queued' && 'bg-background-2 dark:bg-background-5')}>
                {item.status === 'done' ? '\u2713' : item.status === 'running' ? '\u25CF' : ''}
              </div>
              <span>{item.task}</span>
            </div>
            <span className={cn(item.status === 'running' ? 'text-primary-500' : 'text-secondary/40 dark:text-accent/40')}>
              {item.status === 'done' ? 'Done' : item.status === 'running' ? 'Running' : 'Queued'}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ControlRoomVisual = ({ processes }: { processes: typeof controlRoomDataByICP.pe }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: 'Running', value: '24', color: 'text-primary-500' },
        { label: 'Pending', value: '8', color: 'text-ns-yellow' },
        { label: 'Done', value: '156', color: 'text-ns-green' },
        { label: 'Failed', value: '2', color: 'text-ns-red' },
      ].map((item, i) => (
        <div key={i} className="bg-background-3 dark:bg-background-8 rounded-xl p-2.5 text-center sm:p-3">
          <div className={cn('text-heading-6 font-bold', item.color)}>{item.value}</div>
          <div className="text-tagline-3 text-secondary/50 dark:text-accent/50">{item.label}</div>
        </div>
      ))}
    </div>
    <div className="bg-background-3 dark:bg-background-8 rounded-xl p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-tagline-3 text-secondary dark:text-accent font-semibold">Live Processes</span>
        <span className="text-tagline-3 text-secondary/40 dark:text-accent/40">Updated just now</span>
      </div>
      <div className="space-y-3">
        {processes.map((item, i) => (
          <div key={i} className="space-y-1.5">
            <div className="text-tagline-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500" />
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-secondary/40 dark:text-accent/40">{item.stage}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-background-2 dark:bg-background-5">
              <div className="h-full rounded-full bg-primary-500 transition-all" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AIAgentsVisual = ({ data }: { data: typeof agentDataByICP.pe }) => (
  <div className="space-y-3">
    <div className="bg-background-3 dark:bg-background-8 rounded-xl p-3 sm:p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ns-purple/20 text-sm">
          <span className="ns-shape-41 text-ns-purple text-[18px]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-tagline-2 font-semibold">{data.agentName}</div>
          <div className="text-tagline-3 text-secondary/50 dark:text-accent/50">{data.processing}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-ns-green" />
          <span className="text-tagline-3 font-medium text-ns-green">Active</span>
        </div>
      </div>
      <div className="space-y-2 pl-11">
        {data.tools.map((step, i) => (
          <div key={i} className="text-tagline-3 flex items-center justify-between rounded-lg bg-background-2 px-3 py-2 dark:bg-background-5">
            <div className="flex items-center gap-2">
              <div className={cn('flex h-4 w-4 items-center justify-center rounded text-[10px]', step.status === 'done' ? 'bg-ns-green text-secondary' : 'bg-primary-500/20 text-primary-500')}>
                {step.status === 'done' ? '\u2713' : '\u25CF'}
              </div>
              <span className="font-medium">{step.tool}</span>
            </div>
            <span className={cn(step.status === 'running' ? 'text-primary-500' : 'text-secondary/50 dark:text-accent/50')}>{step.result}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-xl bg-ns-green/10 p-3 sm:p-4">
      <div className="text-secondary flex h-6 w-6 items-center justify-center rounded-full bg-ns-green text-xs font-bold">{'\u2713'}</div>
      <div>
        <div className="text-tagline-3 text-secondary dark:text-accent font-semibold">{data.summary}</div>
        <div className="text-tagline-3 text-secondary/50 dark:text-accent/50">{data.accuracy}</div>
      </div>
    </div>
  </div>
);

const KnowledgeBaseVisual = ({ docs }: { docs: typeof knowledgeDataByICP.pe }) => (
  <div className="space-y-3">
    <div className="bg-background-3 dark:bg-background-8 flex items-center gap-3 rounded-xl px-4 py-3">
      <svg className="h-4 w-4 text-secondary/30 dark:text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="text-tagline-2 text-secondary/30 dark:text-accent/30">Search knowledge base...</span>
      <div className="text-tagline-3 text-secondary/40 dark:text-accent/40 ml-auto rounded bg-background-2 px-2 py-0.5 dark:bg-background-5">{'\u2318'}K</div>
    </div>
    <div className="space-y-1.5">
      {docs.map((doc, i) => (
        <div key={i} className="bg-background-3 dark:bg-background-8 flex items-center justify-between rounded-xl px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-3">
            <span className={cn('text-tagline-3 rounded px-1.5 py-0.5 font-bold', doc.typeColor)}>{doc.type}</span>
            <div>
              <div className="text-tagline-2 font-medium">{doc.name}</div>
              <div className="text-tagline-3 text-secondary/40 dark:text-accent/40">{doc.chunks}</div>
            </div>
          </div>
          <span className="text-tagline-3 text-secondary/40 dark:text-accent/40 hidden sm:block">{doc.updated}</span>
        </div>
      ))}
    </div>
  </div>
);

const AuditTrailVisual = ({ entries }: { entries: typeof auditDataByICP.pe }) => (
  <div className="space-y-0">
    {entries.map((entry, i, arr) => (
      <div key={i} className="flex gap-3 sm:gap-4">
        <div className="flex flex-col items-center">
          <div className={cn('mt-1.5 h-3 w-3 rounded-full border-2 border-background-2 dark:border-background-5', entry.color)} />
          {i < arr.length - 1 && <div className="my-1 w-px flex-1 bg-stroke-1 dark:bg-stroke-6" />}
        </div>
        <div className={cn('bg-background-3 dark:bg-background-8 flex-1 rounded-xl px-3 py-2.5 sm:px-4', i < arr.length - 1 ? 'mb-2' : '')}>
          <div className="mb-0.5 flex items-center justify-between">
            <span className="text-tagline-2 font-semibold">{entry.action}</span>
            <span className="text-tagline-3 text-secondary/40 dark:text-accent/40">{entry.time}</span>
          </div>
          <div className="text-tagline-3 flex items-center justify-between">
            <span>{entry.detail}</span>
            <span className="text-secondary/50 dark:text-accent/50">{entry.user}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════
   Main Section
   ══════════════════════════════════════════════════ */

const FeatureV2 = () => {
  const { icp } = useICP();
  const data = featuresByICP[icp];
  const [selectedFeature, setSelectedFeature] = useState(data[3]);

  // When ICP changes, reset selection to AI Agents (index 3)
  const currentData = featuresByICP[icp];
  const activeFeature = currentData.find((f) => f.id === selectedFeature.id) || currentData[3];

  const handleFeatureClick = (feature: FeatureItem) => {
    setSelectedFeature(feature);
  };

  // Build visuals per ICP
  const featureVisuals: Record<number, React.ReactNode> = {
    1: <CustomObjectsVisual items={objectsDataByICP[icp]} />,
    2: <ProcessesVisual data={processDataByICP[icp]} />,
    3: <ControlRoomVisual processes={controlRoomDataByICP[icp]} />,
    4: <AIAgentsVisual data={agentDataByICP[icp]} />,
    5: <KnowledgeBaseVisual docs={knowledgeDataByICP[icp]} />,
    6: <AuditTrailVisual entries={auditDataByICP[icp]} />,
  };

  return (
    <section className="bg-background-3 dark:bg-background-7 relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="dark:bg-background-8 relative space-y-[70px] overflow-hidden rounded-4xl bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-[42px] md:py-14">
          <RevealAnimation delay={0.3} direction="up" offset={100}>
            <figure className="pointer-events-none absolute -top-[15%] -right-[72%] max-h-[480px] max-w-[420px] rotate-[103deg] blur-[4px] select-none min-[470px]:-right-[60%] sm:-right-[40%] lg:-top-[30%] lg:-right-[24%] xl:-top-[27%] xl:-right-[21%]">
              <Image src={gradient6} className="h-full w-full object-cover" alt="Gradient" />
            </figure>
          </RevealAnimation>

          <div className="space-y-4 text-center sm:space-y-7 sm:text-left">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto w-full max-w-[350px] sm:mx-0 sm:max-w-[500px] lg:max-w-[731px]">
                Everything you need. In one platform.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div>
                <LinkButton
                  href="/integrations"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto w-[90%] md:w-auto">
                  Explore Integrations
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <div>
            <div className="grid grid-cols-12 gap-y-8 min-[575px]:gap-8 md:gap-6 lg:gap-10 xl:gap-[60px]">
              {/* Left feature buttons (1-3) */}
              <div className="order-1 col-span-12 min-[575px]:col-span-6 lg:order-1 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {currentData.slice(0, 3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="left" offset={100} key={`${icp}-${item.id}`}>
                      <button
                        onClick={() => handleFeatureClick(item)}
                        className={cn(
                          'w-full space-y-4 rounded-lg p-4 text-left transition-all duration-300 hover:bg-background-2 dark:hover:bg-background-5',
                          activeFeature.id === item.id && 'bg-background-2 ring-2 ring-primary/20 dark:bg-background-5',
                        )}>
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.shortDescription}</p>
                        </div>
                      </button>
                    </RevealAnimation>
                  ))}
                </div>
              </div>

              {/* Center panel */}
              <div className="order-3 col-span-12 lg:order-2 lg:col-span-6">
                <RevealAnimation delay={0.3} offset={100}>
                  <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-4 sm:p-6 xl:p-8">
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">{activeFeature.title}</h3>
                      <p className="text-tagline-2">{activeFeature.description}</p>
                    </div>
                    <div>{featureVisuals[activeFeature.id]}</div>
                  </div>
                </RevealAnimation>
              </div>

              {/* Right feature buttons (4-6) */}
              <div className="order-2 col-span-12 min-[575px]:col-span-6 lg:order-3 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {currentData.slice(3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="right" offset={100} key={`${icp}-${item.id}`}>
                      <button
                        onClick={() => handleFeatureClick(item)}
                        className={cn(
                          'w-full space-y-4 rounded-lg p-4 text-left transition-all duration-300 hover:bg-background-2 dark:hover:bg-background-5',
                          activeFeature.id === item.id && 'bg-background-2 ring-2 ring-primary/20 dark:bg-background-5',
                        )}>
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.shortDescription}</p>
                        </div>
                      </button>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;

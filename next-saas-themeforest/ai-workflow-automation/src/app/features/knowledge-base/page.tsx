import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Knowledge Base | RAG-Powered AI for Finance | Lunnoa',
  description:
    'Connect your documents, policies, and data to power AI-driven decisions. Retrieval-augmented generation ensures accurate, grounded responses.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-3',
    title: 'Document Ingestion',
    description: 'Upload PDFs, Word docs, spreadsheets, and more. Automatic parsing and indexing for instant search.',
  },
  {
    icon: 'ns-shape-34',
    title: 'Smart Chunking',
    description: 'Intelligent document splitting preserves context. Tables, lists, and sections stay coherent.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Vector Search',
    description: "Semantic search finds relevant information even when exact keywords don't match.",
  },
  {
    icon: 'ns-shape-8',
    title: 'Source Citations',
    description: 'Every AI response includes citations to source documents. Verify information with one click.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Access Control',
    description: 'Fine-grained permissions control which users and agents can access which knowledge.',
  },
  {
    icon: 'ns-shape-36',
    title: 'Auto-Updates',
    description: 'Connect to document management systems for automatic knowledge base updates.',
  },
];

const detailsFeatures = [
  'Support for 50+ file formats',
  'Optical character recognition (OCR) for scanned documents',
  'Multi-language support',
  'Automatic deduplication',
  'Version history for all documents',
  'Bulk import from cloud storage',
];

const useCases = [
  {
    icon: 'ns-shape-8',
    title: 'Policy & Procedure Lookup',
    description: 'Agents and workflows access your internal policies to make compliant decisions automatically.',
  },
  {
    icon: 'ns-shape-41',
    title: 'RFP Response Generation',
    description: 'Pull answers from past RFPs, proposals, and marketing materials to draft responses faster.',
    href: '/use-cases/rfp-automation',
  },
  {
    icon: 'ns-shape-7',
    title: 'Regulatory Reference',
    description: 'Keep regulatory guidance, rulings, and interpretations accessible for compliance workflows.',
  },
];

const ctaFeatures = [
  'Connect your existing document repositories',
  'No data leaves your infrastructure',
  'Scales to millions of documents',
  'Full audit trail of document access',
];

const metrics = [
  { value: '50+', label: 'File Formats' },
  { value: 'Millions', label: 'Documents Supported' },
  { value: '< 1 sec', label: 'Search Response' },
];

export default function KnowledgeBaseFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-primary"
        title="Your Knowledge,"
        titleHighlight="AI-Ready"
        description="Turn your documents, policies, and institutional knowledge into a searchable, AI-accessible knowledge base. No hallucinations—just accurate, sourced information."
        primaryCta={{ text: 'See Knowledge Base Demo', href: '/contact-us' }}
        secondaryCta={{ text: 'Learn About RAG', href: '/resources/ai-handbook' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="How It Works"
        title="From Documents to Decisions"
        description="Upload your documents, and our system automatically processes, indexes, and makes them available to your AI agents and workflows—all within your secure infrastructure."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="left"
      />
      <FeatureUseCases
        badge="Applications"
        title="Power Every Process with Knowledge"
        description="Your knowledge base becomes the foundation for accurate AI decisions across your organization."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready to unlock the value in your documents?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}

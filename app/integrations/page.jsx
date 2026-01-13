'use client';

import Link from 'next/link';
import { ArrowLeft, Search, ExternalLink } from 'lucide-react';
import { useState, useMemo } from 'react';
import { SlideUp } from '@/components/animations/SlideUp';
import { FadeIn } from '@/components/animations/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';

// All available integrations with their details
const integrations = [
  // AI & LLM
  { id: 'openai', name: 'OpenAI', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/openai.svg', description: { en: 'Powerful AI model provider for generating human-like text and images.', de: 'Leistungsstarker KI-Modellanbieter für menschenähnliche Texte und Bilder.' } },
  { id: 'anthropic', name: 'Anthropic Claude', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/anthropic.svg', description: { en: 'Advanced AI model Claude for human-like text generation.', de: 'Fortschrittliches KI-Modell Claude für menschenähnliche Textgenerierung.' } },
  { id: 'gemini', name: 'Google Gemini', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/gemini.svg', description: { en: 'Google\'s powerful AI models for text generation.', de: 'Googles leistungsstarke KI-Modelle für Textgenerierung.' } },
  { id: 'deepseek', name: 'DeepSeek', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/deepseek.svg', description: { en: 'Open source Large Language Models.', de: 'Open-Source Large Language Models.' } },
  { id: 'xai', name: 'xAI (Grok)', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/xai.svg', description: { en: 'Grok LLM models provided by xAI.', de: 'Grok LLM-Modelle von xAI.' } },
  { id: 'perplexity', name: 'Perplexity AI', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/perplexity-ai.svg', description: { en: 'AI search engine revolutionizing information discovery.', de: 'KI-Suchmaschine, die die Informationssuche revolutioniert.' } },
  { id: 'together', name: 'Together.ai', category: 'ai', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/together-ai.png', description: { en: 'Train, fine-tune, and run inference on AI models.', de: 'AI-Modelle trainieren, feinabstimmen und Inferenz ausführen.' } },

  // Google Suite
  { id: 'google-drive', name: 'Google Drive', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-drive.svg', description: { en: 'Cloud-based storage for files online.', de: 'Cloud-basierter Speicher für Online-Dateien.' } },
  { id: 'google-sheets', name: 'Google Sheets', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-sheets.svg', description: { en: 'Create and edit online spreadsheets.', de: 'Online-Tabellen erstellen und bearbeiten.' } },
  { id: 'gmail', name: 'Gmail', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/gmail.svg', description: { en: 'Email service developed by Google.', de: 'E-Mail-Dienst von Google.' } },
  { id: 'google-calendar', name: 'Google Calendar', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-calendar.svg', description: { en: 'Time-management and scheduling calendar service.', de: 'Terminverwaltung und Kalender-Service.' } },
  { id: 'google-docs', name: 'Google Docs', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-docs.svg', description: { en: 'Create and collaborate on online documents.', de: 'Online-Dokumente erstellen und gemeinsam bearbeiten.' } },
  { id: 'google-contacts', name: 'Google Contacts', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-contacts.svg', description: { en: 'Store and manage contacts across devices.', de: 'Kontakte geräteübergreifend speichern und verwalten.' } },
  { id: 'google-forms', name: 'Google Forms', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-forms.svg', description: { en: 'Create online forms and surveys.', de: 'Online-Formulare und Umfragen erstellen.' } },
  { id: 'google-slides', name: 'Google Slides', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/google-slides.svg', description: { en: 'Slideshow presentation program.', de: 'Präsentationsprogramm für Folien.' } },
  { id: 'youtube', name: 'YouTube', category: 'google', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/youtube.svg', description: { en: 'Online video sharing platform.', de: 'Online-Videoplattform.' } },

  // Microsoft
  { id: 'microsoft-excel', name: 'Microsoft Excel 365', category: 'microsoft', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/microsoft-excel-365.svg', description: { en: 'Industry leading spreadsheet software.', de: 'Branchenführende Tabellenkalkulation.' } },
  { id: 'microsoft-outlook', name: 'Microsoft Outlook', category: 'microsoft', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/microsoft-outlook.svg', description: { en: 'Email and calendar application from Office 365.', de: 'E-Mail- und Kalenderanwendung von Office 365.' } },

  // Productivity & Collaboration
  { id: 'slack', name: 'Slack', category: 'productivity', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/slack.svg', description: { en: 'Messaging app connecting teams to information.', de: 'Messaging-App, die Teams mit Informationen verbindet.' } },
  { id: 'notion', name: 'Notion', category: 'productivity', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/notion.svg', description: { en: 'Space to think, write, and plan.', de: 'Raum zum Denken, Schreiben und Planen.' } },
  { id: 'confluence', name: 'Confluence', category: 'productivity', logoUrl: 'https://www.svgrepo.com/show/353597/confluence.svg', description: { en: 'Automate your Confluence workspace.', de: 'Automatisieren Sie Ihren Confluence-Workspace.' } },
  { id: 'monday', name: 'monday.com', category: 'productivity', logoUrl: 'https://images.seeklogo.com/logo-png/39/2/monday-logo-png_seeklogo-394605.png', description: { en: 'Work OS for projects and workflows.', de: 'Work OS für Projekte und Workflows.' } },
  { id: 'airtable', name: 'Airtable', category: 'productivity', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/airtable.svg', description: { en: 'Cloud-based project management tool.', de: 'Cloud-basiertes Projektmanagement-Tool.' } },
  { id: 'calendly', name: 'Calendly', category: 'productivity', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/calendly.svg', description: { en: 'Modern scheduling platform.', de: 'Moderne Terminplanungsplattform.' } },
  { id: 'dropbox', name: 'Dropbox', category: 'productivity', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/dropbox.svg', description: { en: 'Cloud-based file storage and sync.', de: 'Cloud-basierter Dateispeicher und Synchronisation.' } },

  // CRM & Sales
  { id: 'hubspot', name: 'HubSpot', category: 'crm', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/hubspot.svg', description: { en: 'Cloud-based CRM platform for marketing, sales, and service.', de: 'Cloud-basierte CRM-Plattform für Marketing, Vertrieb und Service.' } },
  { id: 'zoho-crm', name: 'Zoho CRM', category: 'crm', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/zoho-crm.svg', description: { en: 'Sales, marketing, and customer support in one place.', de: 'Vertrieb, Marketing und Kundensupport an einem Ort.' } },
  { id: 'zoho-books', name: 'Zoho Books', category: 'crm', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/zoho-books.png', description: { en: 'Cloud-based accounting software.', de: 'Cloud-basierte Buchhaltungssoftware.' } },
  { id: 'bsi', name: 'BSI Customer Suite', category: 'crm', logoUrl: 'https://cdn.brandfetch.io/idLPTH2Bhb/w/2048/h/2048/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1744229196436', description: { en: 'Cloud-based CRM platform for Swiss enterprises.', de: 'Cloud-basierte CRM-Plattform für Schweizer Unternehmen.' } },
  { id: 'salesrabbit', name: 'SalesRabbit', category: 'crm', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/sales-rabbit.svg', description: { en: 'Leading field sales management solution.', de: 'Führende Lösung für Aussendienst-Management.' } },

  // Social Media
  { id: 'linkedin', name: 'LinkedIn', category: 'social', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/linkedin.svg', description: { en: 'Professional networking platform.', de: 'Professionelle Networking-Plattform.' } },
  { id: 'x', name: 'X (Twitter)', category: 'social', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/x.svg', description: { en: 'Social media platform for posts and interactions.', de: 'Social-Media-Plattform für Beiträge und Interaktionen.' } },

  // Search & Web
  { id: 'brave-search', name: 'Brave Search', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/brave-search.png', description: { en: 'Independent search engine for AI apps.', de: 'Unabhängige Suchmaschine für KI-Apps.' } },
  { id: 'serper', name: 'Serper', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/serper.jpg', description: { en: 'Fast and affordable Google Search API.', de: 'Schnelle und günstige Google Search API.' } },
  { id: 'web', name: 'Web', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/web.svg', description: { en: 'Access the web using pre-built actions.', de: 'Web-Zugriff mit vorgefertigten Aktionen.' } },
  { id: 'firecrawl', name: 'Firecrawl', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/firecrawl.png', description: { en: 'Crawl websites and convert to markdown.', de: 'Websites crawlen und in Markdown konvertieren.' } },
  { id: 'apify', name: 'Apify', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/apify.png', description: { en: 'Cloud platform for web scraping and automation.', de: 'Cloud-Plattform für Web-Scraping und Automatisierung.' } },
  { id: 'anchor-browser', name: 'Anchor Browser', category: 'search', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/anchor-browser.png', description: { en: 'Define, deploy, and maintain browser automations.', de: 'Browser-Automatisierungen definieren, bereitstellen und warten.' } },

  // Database & Storage
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', logoUrl: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', description: { en: 'Connect to and interact with PostgreSQL databases.', de: 'Mit PostgreSQL-Datenbanken verbinden und interagieren.' } },
  { id: 'pinecone', name: 'Pinecone', category: 'database', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/pinecone.png', description: { en: 'Build accurate, secure, and scalable AI applications.', de: 'Genaue, sichere und skalierbare KI-Anwendungen erstellen.' } },

  // Communication
  { id: 'vapi', name: 'Vapi', category: 'communication', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/vapi.svg', description: { en: 'Platform to build, test and deploy voice agents.', de: 'Plattform für Voice Agents.' } },
  { id: 'surge', name: 'Surge SMS', category: 'communication', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/surgemsg.png', description: { en: 'Easiest way to send texts from your application.', de: 'Einfachste Möglichkeit, Textnachrichten zu senden.' } },
  { id: 'phone', name: 'Phone', category: 'communication', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/phone.svg', description: { en: 'Make phone calls from your workflows.', de: 'Telefonanrufe aus Ihren Workflows tätigen.' } },

  // Developer Tools
  { id: 'codesandbox', name: 'CodeSandbox', category: 'developer', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/codesandbox.svg', description: { en: 'Run isolated sandboxes securely.', de: 'Isolierte Sandboxen sicher ausführen.' } },

  // Platform Features
  { id: 'flow-control', name: 'Flow Control', category: 'platform', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/flow-control.svg', description: { en: 'Control the flow of your workflow.', de: 'Steuerung des Workflow-Ablaufs.' } },
  { id: 'agents', name: 'Agents', category: 'platform', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/agents.svg', description: { en: 'Message and manage your AI agents.', de: 'AI-Agents verwalten und kommunizieren.' } },
  { id: 'knowledge', name: 'Knowledge', category: 'platform', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/knowledge.svg', description: { en: 'Store and retrieve information.', de: 'Informationen speichern und abrufen.' } },
  { id: 'variables', name: 'Variables', category: 'platform', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/variables.svg', description: { en: 'Reuse data across your workflows.', de: 'Daten in Workflows wiederverwenden.' } },
  { id: 'queues', name: 'Queues', category: 'platform', logoUrl: 'https://lunnoa-assets-global.s3.eu-central-1.amazonaws.com/assets/list-ordered.svg', description: { en: 'Process items systematically.', de: 'Elemente systematisch verarbeiten.' } },

  // Data Tools
  { id: 'text', name: 'Text Tools', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/text.svg', description: { en: 'Tools to manage text data.', de: 'Tools zur Textverwaltung.' } },
  { id: 'list', name: 'List Tools', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/list.svg', description: { en: 'Tools to manage list data.', de: 'Tools zur Listenverwaltung.' } },
  { id: 'json', name: 'JSON Tools', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/json.svg', description: { en: 'Tools to manage JSON data.', de: 'Tools zur JSON-Verwaltung.' } },
  { id: 'csv', name: 'CSV Tools', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/csv.svg', description: { en: 'Tools to manage CSV data.', de: 'Tools zur CSV-Verwaltung.' } },
  { id: 'date', name: 'Date Tools', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/date.svg', description: { en: 'Tools to manage dates.', de: 'Tools zur Datumsverwaltung.' } },
  { id: 'math', name: 'Math', category: 'tools', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/math.svg', description: { en: 'Math operations for your workflows.', de: 'Mathematische Operationen für Workflows.' } },

  // Industry-Specific
  { id: 'finnova', name: 'Finnova', category: 'finance', logoUrl: 'https://images.seeklogo.com/logo-png/45/2/finnova-logo-png_seeklogo-453869.png', description: { en: 'Banking software integration for Swiss banks.', de: 'Banking-Software-Integration für Schweizer Banken.' } },
  { id: 'guidepoint', name: 'Guidepoint', category: 'finance', logoUrl: 'https://www.jetro.go.jp/ext_images/_Newsroom/2018/3rd/0712b1.jpg', description: { en: 'Expert network for on-demand insights.', de: 'Expertennetzwerk für On-Demand-Insights.' } },
  { id: 'paradigm-vendo', name: 'Paradigm Vendo', category: 'crm', logoUrl: 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/paradigm-vendo.webp', description: { en: 'Digital selling solution for contractors.', de: 'Digitale Verkaufslösung für Auftragnehmer.' } },
];

const categories = [
  { id: 'all', label: { en: 'All', de: 'Alle' } },
  { id: 'ai', label: { en: 'AI & LLM', de: 'KI & LLM' } },
  { id: 'google', label: { en: 'Google', de: 'Google' } },
  { id: 'microsoft', label: { en: 'Microsoft', de: 'Microsoft' } },
  { id: 'productivity', label: { en: 'Productivity', de: 'Produktivität' } },
  { id: 'crm', label: { en: 'CRM & Sales', de: 'CRM & Vertrieb' } },
  { id: 'social', label: { en: 'Social Media', de: 'Social Media' } },
  { id: 'search', label: { en: 'Search & Web', de: 'Suche & Web' } },
  { id: 'database', label: { en: 'Database', de: 'Datenbank' } },
  { id: 'communication', label: { en: 'Communication', de: 'Kommunikation' } },
  { id: 'developer', label: { en: 'Developer', de: 'Entwickler' } },
  { id: 'platform', label: { en: 'Platform', de: 'Plattform' } },
  { id: 'tools', label: { en: 'Data Tools', de: 'Daten-Tools' } },
  { id: 'finance', label: { en: 'Finance', de: 'Finanzen' } },
];

export default function IntegrationsPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description[language].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, language]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-linear" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto relative py-20 lg:py-32">
          <SlideUp>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {t.integrations.backToHome}
            </Link>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-muted-foreground max-w-3xl">
              {t.integrations.title}
              <span className="text-primary">.</span>
            </h1>
            <p className="text-xl text-foreground mt-6 max-w-2xl leading-relaxed">
              {t.integrations.subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="bg-white/80 dark:bg-accent/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
                <span className="text-4xl font-extrabold text-primary">60+</span>
                <p className="text-sm text-foreground font-medium mt-1">{t.integrations.stats.integrations}</p>
              </div>
              <div className="bg-white/80 dark:bg-accent/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
                <span className="text-4xl font-extrabold text-green">∞</span>
                <p className="text-sm text-foreground font-medium mt-1">{t.integrations.stats.possibilities}</p>
              </div>
              <div className="bg-white/80 dark:bg-accent/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
                <span className="text-4xl font-extrabold text-purple">0</span>
                <p className="text-sm text-foreground font-medium mt-1">{t.integrations.stats.codeRequired}</p>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto py-8 lg:py-12">
        <SlideUp delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50" size={20} />
              <input
                type="text"
                placeholder={t.integrations.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-muted-foreground"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-gray text-foreground hover:bg-accent hover:text-muted-foreground'
                    }`}
                >
                  {category.label[language]}
                </button>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>

      {/* Integrations Grid */}
      <div className="container mx-auto pb-20 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <FadeIn key={integration.id} delay={index * 0.02}>
              <div className="group bg-gray rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={integration.logoUrl}
                      alt={integration.name}
                      className="w-9 h-9 object-contain"
                      onError={(e) => {
                        e.target.src = 'https://lecca-io.s3.us-east-2.amazonaws.com/assets/apps/flow-control.svg';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-muted-foreground group-hover:text-primary transition-colors truncate">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-foreground mt-1 line-clamp-2">
                      {integration.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <SlideUp>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray flex items-center justify-center mx-auto mb-6">
                <Search className="text-foreground/30" size={32} />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                {t.integrations.noResults}
              </h3>
              <p className="text-foreground">
                {t.integrations.tryDifferent}
              </p>
            </div>
          </SlideUp>
        )}

        {/* CTA Section */}
        <SlideUp delay={0.2}>
          <div className="mt-20 rounded-3xl bg-accent p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-muted-foreground mb-4">
              {t.integrations.cta.title}
            </h2>
            <p className="text-foreground max-w-2xl mx-auto mb-8">
              {t.integrations.cta.subtitle}
            </p>
            <a
              href="https://calendly.com/sasakelebuda-lunnoalabs/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              {t.integrations.cta.button}
              <ExternalLink size={18} />
            </a>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}

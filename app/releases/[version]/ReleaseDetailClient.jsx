'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Tag, Sparkles } from 'lucide-react';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';

export default function ReleaseDetailClient({ release }) {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-linear py-20 lg:py-32">
        <div className="container mx-auto">
          <SlideUp>
            <Link 
              href="/releases" 
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {language === 'de' ? 'Alle Versionen' : 'All Releases'}
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {release.highlight && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  <Sparkles size={14} />
                  {t.releaseNotes?.latest || 'Latest'}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 text-gray-700 text-sm font-medium rounded-full">
                <Tag size={14} />
                v{release.version}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar size={14} />
                {formatDate(release.date)}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-muted-foreground">
              {release.title}
            </h1>
          </SlideUp>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 lg:py-20">
        <SlideUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-12">
              <div className="prose prose-lg max-w-none
                prose-headings:text-muted-foreground 
                prose-h1:hidden
                prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-foreground prose-p:leading-relaxed
                prose-li:text-foreground prose-li:my-1
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-strong:text-muted-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              ">
                <ReactMarkdown>
                  {release.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </SlideUp>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto pb-20">
        <SlideUp delay={0.2}>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-muted-foreground mb-3">
              {t.releaseNotes?.ctaTitle || 'Want to see these features in action?'}
            </h3>
            <p className="text-foreground mb-6">
              {t.releaseNotes?.ctaSubtitle || 'Book a free demo and discover how Lunnoa Automate can transform your workflows.'}
            </p>
            <a 
              href="https://calendly.com/sasakelebuda-lunnoalabs/45min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              {t.releaseNotes?.ctaButton || 'Book Free Demo'}
            </a>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}

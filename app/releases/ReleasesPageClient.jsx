'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Tag, Sparkles, ChevronDown } from 'lucide-react';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';

export default function ReleasesPageClient({ releases }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Find the highlighted (latest) release to open by default
  const latestIndex = releases.findIndex(r => r.highlight);
  const [openIndex, setOpenIndex] = useState(latestIndex >= 0 ? latestIndex : 0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-linear py-20 lg:py-32">
        <div className="container mx-auto">
          <SlideUp>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {t.releaseNotes?.backToHome || 'Back to Home'}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-muted-foreground">
                {t.releaseNotes?.title || 'Release Notes'}
              </h1>
            </div>
            <p className="text-foreground mt-4 text-lg max-w-2xl">
              {t.releaseNotes?.subtitle || 'Stay up to date with the latest features, improvements, and fixes in Lunnoa Automate.'}
            </p>
          </SlideUp>
        </div>
      </div>

      {/* Release Notes Accordion */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {releases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {t.releaseNotes?.noReleases || 'No releases available yet.'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {releases.map((release, index) => (
                <SlideUp key={release.version} delay={index * 0.05}>
                  <div 
                    className={`
                      bg-white rounded-2xl border overflow-hidden
                      shadow-sm transition-all duration-300
                      ${release.highlight ? 'border-primary/30' : 'border-gray-100'}
                      ${openIndex === index ? 'shadow-lg' : 'hover:shadow-md'}
                    `}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 lg:p-8 flex items-center justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {release.highlight && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                              <Sparkles size={14} />
                              {t.releaseNotes?.latest || 'Latest'}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            <Tag size={14} />
                            v{release.version}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar size={14} />
                            {formatDate(release.date)}
                          </span>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-muted-foreground">
                          {release.title}
                        </h2>
                      </div>
                      <div 
                        className={`
                          flex-shrink-0 p-2 rounded-full bg-gray-100 text-gray-500
                          transition-transform duration-300
                          ${openIndex === index ? 'rotate-180' : ''}
                        `}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <div 
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                        <article className="pt-6">
                          <div className="prose prose-lg max-w-none
                            prose-headings:text-muted-foreground 
                            prose-h1:hidden
                            prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:first:mt-0
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
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto pb-20">
        <SlideUp>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
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

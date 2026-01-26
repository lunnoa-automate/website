import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Tag, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import { useTracking } from '../../hooks/useTracking';
import { EVENTS, CTA_LOCATIONS } from '../../lib/tracking-events';

export default function ReleaseNotes() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [releases, setReleases] = useState([]);
  const [releaseContents, setReleaseContents] = useState({});
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const { trackEvent, trackCtaClick, trackCalendlyClick } = useTracking();
  const hasTrackedPageView = useRef(false);

  // Track page view on mount
  useEffect(() => {
    if (!hasTrackedPageView.current) {
      hasTrackedPageView.current = true;
      trackEvent(EVENTS.RELEASE_NOTES_PAGE_VIEW, {
        entry_source: document.referrer ? 'referral' : 'direct',
      });
    }
  }, [trackEvent]);

  useEffect(() => {
    // Fetch the releases manifest
    fetch('/releases/releases.json')
      .then(res => res.json())
      .then(data => {
        setReleases(data.releases);
        // Expand the first (latest) release by default
        if (data.releases.length > 0) {
          setExpandedRelease(data.releases[0].version);
          // Fetch the first release content
          fetchReleaseContent(data.releases[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load releases:', err);
        setLoading(false);
      });
  }, []);

  const fetchReleaseContent = async (release) => {
    if (releaseContents[release.version]) return;
    
    try {
      const res = await fetch(`/releases/${release.file}`);
      const content = await res.text();
      setReleaseContents(prev => ({
        ...prev,
        [release.version]: content
      }));
    } catch (err) {
      console.error(`Failed to load release ${release.version}:`, err);
    }
  };

  const toggleRelease = (release) => {
    if (expandedRelease === release.version) {
      setExpandedRelease(null);
    } else {
      setExpandedRelease(release.version);
      fetchReleaseContent(release);
      
      // Track version click
      trackEvent(EVENTS.RELEASE_VERSION_CLICK, {
        version_number: release.version,
        release_title: release.title,
        release_date: release.date,
      });
    }
  };

  // Handle CTA click
  const handleCtaClick = () => {
    trackCtaClick('release-notes');
    trackCalendlyClick('release-notes');
  };

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
            <a 
              href="#/" 
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {t.releaseNotes?.backToHome || 'Back to Home'}
            </a>
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

      {/* Release Notes List */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : releases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {t.releaseNotes?.noReleases || 'No releases available yet.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {releases.map((release, index) => (
                <SlideUp key={release.version} delay={index * 0.05}>
                  <div 
                    className={`
                      bg-white rounded-2xl border border-gray-100 overflow-hidden
                      shadow-sm hover:shadow-md transition-all duration-300
                      ${release.highlight ? 'ring-2 ring-primary/20' : ''}
                    `}
                  >
                    {/* Release Header - Clickable */}
                    <button
                      onClick={() => toggleRelease(release)}
                      className="w-full p-6 lg:p-8 flex items-start justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors"
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
                      <div className="flex-shrink-0 p-2 rounded-full bg-gray-100 text-gray-500">
                        {expandedRelease === release.version ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </button>

                    {/* Release Content - Expandable */}
                    {expandedRelease === release.version && (
                      <div className="px-6 lg:px-8 pb-8 border-t border-gray-100">
                        <div className="pt-6 prose prose-lg max-w-none
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
                          {releaseContents[release.version] ? (
                            <ReactMarkdown>
                              {releaseContents[release.version]}
                            </ReactMarkdown>
                          ) : (
                            <div className="flex items-center justify-center py-8">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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
              href="https://calendly.com/lunnoalabs-sasakelebuda/discovery-call-lunnoa" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
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

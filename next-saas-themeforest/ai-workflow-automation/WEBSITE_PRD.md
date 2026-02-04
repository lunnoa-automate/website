# Website Redesign PRD: Lunnoa Automate

**Document Version:** 1.0  
**Last Updated:** February 3, 2026  
**Author:** Website Strategy  

---

## Executive Summary

This PRD outlines strategic changes to the Lunnoa Automate website based on competitive analysis of Langdock and Model ML. The goal is to strengthen ICP-focused messaging, improve conversion paths, and establish credibility through social proof—while keeping the existing template design intact.

---

## Competitive Analysis Key Takeaways

### From Langdock
1. **Clear product-centric navigation** - Platform dropdown with distinct products (Chat, Workflows, Agents, Integrations, API)
2. **Educational content as lead magnet** - "Handbook zur KI-Einführung" (AI Adoption Handbook)
3. **Product Tour CTA** - 4-minute video overview prominently featured
4. **Customer video stories** - Not just quotes, but video testimonials showing real usage
5. **Trust badges prominent** - ISO 27001, SOC 2, DSGVO/GDPR, EU-hosted

### From Model ML
1. **ICP-specific hero messaging** - "Digital Teammates for Finance" speaks directly to financial services
2. **Advisory board/credibility** - Former CEOs of HSBC, UBS, Julius Baer prominently featured
3. **Use case carousel** - Specific deliverables: "Strip Profiles", "IC Memo Writing", "VDR Q&A"
4. **Industry testimonials** - Named individuals with titles from target companies
5. **Partner ecosystem** - Data vendor integrations (S&P, Crunchbase) as trust signals
6. **Vertical-specific pages** - Content speaks to PE, wealth management, banking separately
7. **Security deployment options** - Self-hosted, Azure deployment, on-premise clearly explained

---

## Strategic Changes

### 1. Navigation Restructure

**Current Navigation:**
- Company | Platform | Resources | Plans & Support | Pricing

**Proposed Navigation:**

```
Platform              Solutions              Resources            Company         [Pricing]  [Get Demo]
├─ AI Agents         ├─ Private Equity      ├─ Blog              ├─ About
├─ Workflows         ├─ Wealth Management   ├─ Case Studies      ├─ Careers
├─ Knowledge Base    ├─ Real Estate         ├─ Whitepapers       ├─ Press
├─ Integrations      ├─ Banking             ├─ Documentation     ├─ Contact
├─ Analytics         └─ By Use Case         └─ AI Handbook
└─ Security              ├─ MNPI Screening
                         ├─ Capital Calls
                         ├─ KYC/AML
                         ├─ RFP Automation
                         └─ Due Diligence
```

**Rationale:**
- **Solutions by industry** mirrors how ICPs search ("AI for Private Equity" not "AI Workflows")
- **Use cases** allow prospects to self-qualify ("I need MNPI screening")
- **Security as platform feature** signals enterprise-readiness
- **AI Handbook** as educational lead magnet (similar to Langdock's approach)

---

### 2. New Pages to Create

#### 2.1 Industry Landing Pages (High Priority)

| Page | Path | Purpose |
|------|------|---------|
| Private Equity | `/solutions/private-equity` | Primary ICP landing page with PE-specific messaging, use cases, testimonials |
| Wealth Management | `/solutions/wealth-management` | Secondary ICP with KYC/onboarding focus |
| Real Estate | `/solutions/real-estate` | Tertiary ICP with lease abstraction, property ops |
| Banking | `/solutions/banking` | Tertiary ICP with transaction monitoring, regulatory |

**Page Structure (each industry page):**
1. Hero with industry-specific headline and metrics
2. Key pain points (with "sound familiar?" positioning)
3. 3-4 relevant use cases with workflow previews
4. Industry-specific ROI calculator or metrics
5. Customer testimonials from that vertical
6. Case study teaser
7. CTA: "See Lunnoa for [Industry]" demo request

#### 2.2 Use Case Pages (High Priority)

| Page | Path | Primary ICP |
|------|------|-------------|
| MNPI Screening | `/use-cases/mnpi-screening` | PE |
| Capital Call Processing | `/use-cases/capital-calls` | PE |
| KYC/AML Automation | `/use-cases/kyc-aml` | Wealth/Banking |
| RFP Response Automation | `/use-cases/rfp-automation` | PE/Wealth |
| Due Diligence | `/use-cases/due-diligence` | PE |
| Client Onboarding | `/use-cases/client-onboarding` | Wealth |
| Regulatory Reporting | `/use-cases/regulatory-reporting` | Banking |
| Portfolio Monitoring | `/use-cases/portfolio-monitoring` | PE/Wealth |

**Page Structure (each use case):**
1. Problem statement with quantified pain
2. Current state vs. Lunnoa state comparison
3. Workflow visualization/animation
4. Metrics: "85% time reduction, 2-4 hours → 15-30 minutes"
5. Self-hosted/compliance callout
6. Related case study
7. "See it in action" CTA

#### 2.3 AI Handbook / Resource Center (Medium Priority)

| Page | Path | Purpose |
|------|------|---------|
| AI Adoption Handbook | `/resources/ai-handbook` | Gated educational content, lead magnet |
| Implementation Guide | `/resources/implementation-guide` | Post-demo nurture content |

**AI Handbook Topics:**
- How to evaluate AI automation for financial services
- Building the business case for AI agents
- Data security considerations for regulated industries
- Change management for AI adoption
- ROI frameworks for workflow automation

#### 2.4 Security & Compliance Hub (High Priority)

| Page | Path | Purpose |
|------|------|---------|
| Security Overview | `/security` | Already exists, needs enhancement |
| Trust Center | `/trust` | SOC 2, ISO 27001, audit reports |
| Deployment Options | `/security/deployment` | Self-hosted, on-premise, cloud options |

**Content to Add:**
- Deployment architecture diagrams
- Data residency by region
- Compliance certifications (with badges)
- Security whitepaper download
- Penetration test summary (redacted)

#### 2.5 Customer Evidence Pages (High Priority)

| Page | Path | Purpose |
|------|------|---------|
| Customer Stories | `/customers` | Already exists, needs restructure |
| Video Testimonials | `/customers/videos` | New - Model ML style video stories |
| ROI Calculator | `/roi-calculator` | Interactive tool showing projected savings |

---

### 3. Homepage Changes

#### Current Homepage Flow:
1. Hero
2. Statistics
3. FeatureV2 (platform features)
4. Case Studies
5. Testimonial
6. Integration
7. FAQ
8. CTA

#### Proposed Homepage Flow:

```
1. Hero (UPDATED)
   - Headline: "Scale Operations 10x Without Adding Headcount"
   - Subhead: ICP-specific (PE, Wealth, Banking callout)
   - Dual CTA: "Get Demo" + "Watch Product Tour"
   - Animated workflow demo (keep existing)
   - Trust badges below: SOC 2, ISO 27001, Self-hosted

2. Logo Bar (NEW)
   - "Trusted by leading financial institutions"
   - 8-10 customer/partner logos (anonymized if needed)

3. Value Pillars (NEW)
   - Three cards: Speed & Efficiency | Focus on Core Business | Reduce Team Friction
   - Each with specific metric: "50-80% time savings" | "40-60% admin reduction" | "Break down silos"

4. Use Case Showcase (UPDATED from FeatureV2)
   - Tabbed interface: MNPI Screening | Capital Calls | KYC/AML | RFP Automation
   - Each tab shows: Problem → Solution → Metric
   - "Explore all use cases" link

5. Product Demo Video (NEW)
   - Embedded 4-minute product overview
   - "See Lunnoa in action"
   - Thumbnail with play button, not autoplay

6. Testimonial Carousel (UPDATED)
   - Named individuals with titles and company (when possible)
   - Photo + quote + metric achieved
   - Include advisory board members if applicable

7. Industry Solutions (NEW)
   - 4-column grid: PE | Wealth | Real Estate | Banking
   - Each with icon, tagline, 3 key use cases, "Learn more"

8. Case Studies (KEEP)
   - Restructure to show: Company type | Challenge | Result | "Read story"

9. Security & Compliance (NEW)
   - "Built for regulated industries"
   - Self-hosted callout
   - Certification badges
   - "How we handle your data" link

10. Integration Partners (UPDATED)
    - More prominent
    - Categorized: CRM | Data Vendors | Document Systems | Banking Systems

11. AI Handbook CTA (NEW)
    - "Download the AI Adoption Handbook"
    - Lead capture form
    - Teaser of what's inside

12. FAQ (KEEP)
    - Add: "Is my data secure?", "What's the deployment model?", "How long to implement?"

13. Final CTA (UPDATED)
    - "Start automating in days, not months"
    - "Schedule a demo" + "Talk to sales"
```

---

### 4. Hero Section Updates

**Current Hero:**
> "Give Your Team Hours Back Every Week"

**Proposed Hero Options (A/B test):**

**Option A (Outcome-focused):**
> "Scale Operations 10x Without Adding Headcount"
> 
> AI agents that handle MNPI screening, capital calls, KYC, and due diligence—so your team focuses on deals and clients, not document processing.
> 
> Built for Private Equity, Wealth Management, and Banking.

**Option B (Time-focused, similar to current):**
> "Automate 50-80% of Your Operations Work"
> 
> Deploy AI agents for MNPI screening, capital calls, and compliance workflows in days—fully self-hosted with complete audit trails.
> 
> Trusted by PE firms, wealth managers, and banks.

**Option C (Pain-point focused, Model ML style):**
> "Your Team is Drowning in Document Work"
> 
> MNPI screening takes hours. Capital calls pile up. KYC reassessments drag for weeks. Lunnoa's AI agents handle it in minutes—on your infrastructure, with full compliance.

---

### 5. Social Proof Enhancements

#### 5.1 Testimonial Structure (Model ML pattern)
Each testimonial should include:
- **Photo** (headshot)
- **Name** (real name)
- **Title** (specific role: "COO, Mid-Market PE Fund")
- **Company** (logo if possible, anonymized if needed: "€2B AUM PE Firm")
- **Quote** (specific outcome: "Cut MNPI screening from 3 hours to 20 minutes")
- **Metric** (quantified result)

#### 5.2 Advisory Board Section (if applicable)
If you have advisors from financial services:
- Create `/about/advisors` page
- Feature on homepage
- Include their endorsement quotes

#### 5.3 Partner Ecosystem
Create visual ecosystem showing:
- Data vendors (if any: CapIQ, PitchBook, Bloomberg integrations)
- System integrations (Salesforce, SharePoint, etc.)
- Implementation partners (if any)

---

### 6. Messaging Updates by Section

#### Value Proposition Bar
**Current:** (implicit in features)
**Proposed:** Explicit three-pillar structure

| Pillar | Headline | Metric | Icon |
|--------|----------|--------|------|
| Speed & Efficiency | Reduce process times by 50-80% | "MNPI: 2-4 hours → 15-30 minutes" | Clock |
| Focus on Core Business | Free 40-60% of team time | "Analysts back on deals, not docs" | Target |
| Reduce Team Friction | Break down departmental silos | "Compliance ↔ Deal Team ↔ Ops" | Link |

#### Feature Descriptions
**Current FeatureV2 needs updates:**

| Feature | Current | Proposed |
|---------|---------|----------|
| AI Agents | "Create specialized AI agents in minutes" | "AI agents for MNPI screening, KYC review, and document analysis—with full audit trails" |
| Workflows | "Automate repetitive tasks without programming" | "Automate capital calls, compliance checks, and client onboarding—no code required" |
| Workspace | "Maintain control over users and data" | "Assign AI agents by fund, client, or deal—clear data boundaries for compliance" |
| Analytics | "Track time saved, money saved" | "See €75k-150k annual savings per workflow—real ROI, not projections" |

---

### 7. CTA Strategy

#### Primary CTAs (throughout site)
1. **"Get a Demo"** - Main conversion action, leads to contact/demo request
2. **"Watch Product Tour"** - Lower commitment, video overview
3. **"Download AI Handbook"** - Lead magnet, gated content

#### Secondary CTAs
- "Talk to Sales" - For enterprise/custom needs
- "See Pricing" - Self-service path
- "Read Case Study" - Proof-seeking path

#### CTA Placement Rules
- Hero: Primary + Secondary
- After features: Primary
- After testimonials: Primary
- After case studies: "Read more stories"
- Footer: Primary + Lead magnet

---

### 8. Technical/SEO Considerations

#### New URL Structure
```
/solutions/
├─ private-equity
├─ wealth-management
├─ real-estate
└─ banking

/use-cases/
├─ mnpi-screening
├─ capital-calls
├─ kyc-aml
├─ rfp-automation
├─ due-diligence
├─ client-onboarding
├─ regulatory-reporting
└─ portfolio-monitoring

/resources/
├─ ai-handbook
├─ implementation-guide
└─ roi-calculator

/security/
├─ trust
└─ deployment
```

#### Meta Titles (SEO)
- Homepage: "AI Workflow Automation for Financial Services | Lunnoa Automate"
- PE Page: "AI Automation for Private Equity | MNPI, Capital Calls, Due Diligence | Lunnoa"
- MNPI Page: "MNPI Screening Automation | 85% Faster Compliance | Lunnoa Automate"

#### Structured Data
- Add Organization schema
- Add Product schema for each use case
- Add FAQ schema on FAQ sections
- Add Review/Testimonial schema

---

## Implementation Priority

### Phase 1: Foundation (Week 1-2)
1. ✅ Update navigation structure
2. ✅ Revise homepage hero with new messaging
3. ✅ Add logo bar with trust badges
4. ✅ Update testimonial section with named individuals
5. ✅ Add value pillars section

### Phase 2: Industry Pages (Week 3-4)
1. ✅ Create `/solutions/private-equity` (primary ICP)
2. ✅ Create `/solutions/wealth-management`
3. ✅ Update navbar with Solutions dropdown

### Phase 3: Use Case Pages (Week 5-6)

1. ✅ Create `/use-cases/mnpi-screening`
2. ✅ Create `/use-cases/capital-calls`
3. ✅ Create `/use-cases/kyc-aml`
4. ✅ Create `/use-cases/rfp-automation`

### Phase 4: Content & Trust (Week 7-8)
1. ✅ Create AI Handbook landing page
2. ✅ Enhance Security page
3. ✅ Create Trust Center page
4. ✅ Add video testimonials section

### Phase 5: Optimization (Ongoing)
1. A/B test hero headlines
2. Add ROI calculator
3. Implement analytics tracking
4. Gather real customer testimonials

---

## Success Metrics

| Metric | Current Baseline | Target |
|--------|------------------|--------|
| Demo requests/month | TBD | +50% |
| Time on site | TBD | +30% |
| Pages per session | TBD | +40% |
| Bounce rate | TBD | -20% |
| Industry page conversions | N/A | Track new |

---

## Content Requirements

### Copy Needed (by page)
1. **Homepage hero** - 3 headline variations for A/B test
2. **Value pillars** - 3 x (headline + description + metric)
3. **PE landing page** - Full page copy (~800 words)
4. **Wealth landing page** - Full page copy (~800 words)
5. **4 use case pages** - Each ~600 words
6. **AI Handbook** - 5-10 page PDF + landing page copy
7. **Updated testimonials** - 6-8 with full attribution

### Visual Assets Needed
1. **Logo bar** - 8-10 customer/partner logos
2. **Product screenshots** - Updated for each use case
3. **Workflow animations** - For use case pages
4. **Headshots** - For testimonials
5. **Trust badges** - SOC 2, ISO 27001, Self-hosted icons
6. **Industry icons** - PE, Wealth, Real Estate, Banking

---

## Appendix: Competitor Feature Comparison

| Feature | Langdock | Model ML | Lunnoa (Current) | Lunnoa (Proposed) |
|---------|----------|----------|------------------|-------------------|
| Industry-specific pages | ❌ | ✅ | ❌ | ✅ |
| Use case pages | ❌ | ✅ | Partial | ✅ |
| Named testimonials | ✅ | ✅ | ❌ | ✅ |
| Video testimonials | ✅ | ❌ | ❌ | ✅ |
| Product tour video | ✅ | ❌ | ❌ | ✅ |
| Educational content | ✅ (Handbook) | ❌ | ❌ | ✅ |
| Trust center | ✅ | ✅ | Partial | ✅ |
| ROI calculator | ❌ | ❌ | ❌ | ✅ |
| Advisory board | ❌ | ✅ | ❌ | TBD |
| Partner logos | ✅ | ✅ | ❌ | ✅ |

---

## Notes

- **Keep template design** - All changes work within existing design system
- **Incremental rollout** - Phase changes to avoid breaking site
- **Content-first** - Many changes are copy/content, not structural
- **Mobile-first** - All new sections must work on mobile
- **Performance** - New video content should be lazy-loaded

---

*End of PRD*

export const basePath = "";

export interface CaseStudy {
  slug: string;
  title: string;
  serviceLine: string;
  engagementModel: string;
  country: string;
  client: string;
  industry: string;
  duration: string;
  location: string;
  standfirst: string;
  coverImage?: string;
  tags?: string[];
  results: { val: string; lbl: string }[];
  overview: string[];
  whatWeDid: { title: string; desc: string }[];
  deliverables: string[];
  impact: { title: string; desc: string }[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "apparel-financial-modelling": {
    slug: "apparel-financial-modelling",
    title: "From Idea to Investor Ready: Financial Modelling and Launch Strategy for a New Zealand Apparel Start-up",
    serviceLine: "Financial modelling",
    engagementModel: "Corporate Finance",
    country: "New Zealand",
    client: "Early-stage underwear and activewear brand",
    industry: "Consumer / Apparel",
    duration: "6 weeks",
    location: "New Zealand",
    standfirst: "How CKS built an investor ready five year financial model for a New Zealand underwear and activewear start-up with no in-house finance function. Covers sourcing and cost build-up, channel expansion sequencing, unit economics, cash flow, break-even analysis, and valuation.",
    coverImage: `${basePath}/images/case-studies/apparel/cover.jpg`,
    results: [
      { val: "5 Years", lbl: "Modelled from pre-launch to scale" },
      { val: "Multi-Channel", lbl: "Sequenced & modelled independently" },
      { val: "Month 14", lbl: "Modelled break-even milestone" },
    ],
    overview: [
      "The client is an early stage underwear and activewear brand based in New Zealand. The founding team brought deep product expertise and a clear market proposition, but no finance capability and no financial model.",
      "With a fundraise ahead of them, they needed to translate a product idea into a defensible commercial case that an investor would take seriously.",
      "CKS was engaged to build a full five year financial model spanning pre-launch through to a scaled multi-channel operation, together with the launch sequencing and channel strategy that the model was built to test.",
    ],
    whatWeDid: [
      {
        title: "Cost Base and Sourcing Analysis",
        desc: "The starting point was the cost side, because in apparel it determines everything downstream. CKS gathered and validated sourcing data across supplier options, built landed cost by SKU, and layered in the fixed cost base including salaries, overheads, and the hiring plan. Sourcing expansion was modelled as a staged decision to surface volume thresholds for minimum order quantities.",
      },
      {
        title: "Launch Roadmap and Channel Expansion",
        desc: "Revenue was not modelled as a single growth curve. CKS built the product launch roadmap into the model and modelled each sales channel separately with its own ramp profile, cost to serve, and margin structure, allowing the client to test channel sequencing directly.",
      },
      {
        title: "Unit Economics",
        desc: "Captured gross margin by product and channel, sales commissions, return rates, and the effect of promotional discounting on realised margin rather than list margin. Modelling returns and discounts explicitly revealed how much promotional activity the business could absorb.",
      },
      {
        title: "Cash Flow and Break-even",
        desc: "Built a full cash flow view incorporating inventory purchase timing, supplier payment terms, and receipts by channel. Surfaced the working capital requirement at each stage and identified the break-even point in both volume and timing terms.",
      },
      {
        title: "Valuation and Investor Readiness",
        desc: "Produced an indicative valuation providing a reasoned basis for the raise. Structured the model with dynamic assumptions, allowing founders to run investor sensitivity questions live during diligence meetings.",
      },
    ],
    deliverables: [
      "Excel / Google Sheets Financial Model — dynamic 5-year assumption-driven model covering costs, sourcing, unit economics, and valuation",
      "Launch and Channel Strategy Framework Document",
      "Investor-Facing Executive Summary Pack & Diligence Deck",
      "Working Capital & Inventory Purchase Timing Schedule",
    ],
    impact: [
      {
        title: "A Model the Founders Could Defend",
        desc: "The client went into investor conversations with a fully assumption-driven model, answering scenario questions live in the room instead of taking them away.",
      },
      {
        title: "Visible Path to Break-even",
        desc: "Identified the break-even point in both volume and timing and the working capital required to reach it, converting an open-ended funding ask into a specific, justifiable number.",
      },
      {
        title: "Channel Sequencing Decided on Evidence",
        desc: "Modelling each sales channel independently with its own margin and cost to serve allowed the launch sequence to be chosen on contribution rather than instinct.",
      },
      {
        title: "Realistic Margin Expectations",
        desc: "Returns, commissions, and promotional discounting were built in from the outset, enabling planning against realised margin rather than list margin.",
      },
    ],
  },

  "waterproofing-valuation-buyout": {
    slug: "waterproofing-valuation-buyout",
    title: "Resolving a Shareholder Impasse: Valuation and Buy-out Plan for a Family Run Waterproofing Business",
    serviceLine: "Financial modelling",
    engagementModel: "Corporate Finance",
    country: "Australia",
    client: "Family owned painting and waterproofing contractor",
    industry: "Construction and Building Services",
    duration: "8 weeks",
    location: "Australia",
    standfirst: "How CKS valued a family run painting and waterproofing business facing a post-pandemic construction slowdown and a failing external investor relationship, returning full ownership to the family at fair value.",
    coverImage: `${basePath}/images/case-studies/waterproofing/cover.jpg`,
    results: [
      { val: "100%", lbl: "Ownership returned to family" },
      { val: "Fair Value", lbl: "Buy-out completed independently" },
      { val: "Ongoing", lbl: "Finance function overhaul retainer" },
    ],
    overview: [
      "The client is a family owned painting and waterproofing contractor. The business had taken on an external investor, but the anticipated synergies had not materialised, and a post-pandemic slowdown in construction activity had compressed the market at the same time.",
      "The combination left the business at a decision point: continue under a shareholder structure that was no longer serving it, or find a way to unwind it.",
      "The family engaged CKS to establish what the business was actually worth, understand its cash position with precision, and build a plan that could support a buy-out of the external investor.",
    ],
    whatWeDid: [
      {
        title: "Independent Valuation",
        desc: "A shareholder exit is only negotiable if both sides can point to a defensible number. CKS conducted a full valuation of the business, working from its financial history, contract pipeline, and asset base against the realities of a soft construction market.",
      },
      {
        title: "Cash Flow Analysis",
        desc: "Contracting businesses live or die on the gap between work delivered and cash received. Built a detailed cash flow analysis covering receivables ageing, project payment profiles, supplier terms, and working capital tied up in active contracts to establish if the business could fund a buy-out.",
      },
      {
        title: "Restructuring Plan",
        desc: "With the valuation and cash position established, CKS built an operational restructuring plan setting out how the business would operate post buy-out, tailored to be directly executable by the family management team.",
      },
      {
        title: "Buy-out Support",
        desc: "Supported the family through the negotiation itself, providing the valuation basis and financial analysis underpinning discussions with the external investor, leading to a successful stake acquisition at fair value.",
      },
    ],
    deliverables: [
      "Comprehensive Independent Valuation Report",
      "Aged Receivables & Working Capital Cash Flow Model",
      "Post-Buyout Operational Restructuring Plan",
      "Investor Negotiation Briefing & Settlement Structure",
    ],
    impact: [
      {
        title: "Ownership Resolved at Fair Value",
        desc: "The family bought out the external investor on the basis of an independently established valuation, ending a shareholder relationship that was no longer generating value.",
      },
      {
        title: "Clarity on Cash Before Committing",
        desc: "The cash flow analysis established whether the business could fund the buy-out and continue trading through a soft market, committing on evidence rather than intent.",
      },
      {
        title: "A Plan for What Comes Next",
        desc: "The engagement did not end at the transaction; the restructuring plan set out how the business would operate under sole family ownership and what had to change to grow.",
      },
      {
        title: "Finance Function Overhaul",
        desc: "CKS remains engaged on retainer, overseeing the rebuild of the client's finance function to execute ongoing operational transformation.",
      },
    ],
  },

  "higher-education-tam-analysis": {
    slug: "higher-education-tam-analysis",
    title: "Sizing the Unmeasurable Market: TAM Analysis for a Top Tier Higher Education Institution",
    serviceLine: "Strategy and research",
    engagementModel: "Education Intelligence",
    country: "United Kingdom",
    client: "Global advisory firm on behalf of a premier university",
    industry: "Higher Education",
    duration: "5 weeks",
    location: "Global / UK",
    standfirst: "How CKS built a total addressable market analysis for a leading higher education institution where published data was too coarse to size the opportunity, combining income distribution modelling with primary research.",
    coverImage: `${basePath}/images/case-studies/higher-ed-tam/cover.jpg`,
    results: [
      { val: "12 Markets", lbl: "Sized and prioritised" },
      { val: "Income-Lens", lbl: "Demand segmented by affordability" },
      { val: "Actionable", lbl: "Strategy for resource allocation" },
    ],
    overview: [
      "CKS was engaged by a global advisory firm to deliver a total addressable market analysis for one of its clients, a top tier higher education institution.",
      "The institution needed to identify where its next student opportunities were, but available published international student data describes broad flows between countries without indicating how many families can actually afford premium tuition.",
      "CKS was brought in to close that specific analytical data gap.",
    ],
    whatWeDid: [
      {
        title: "Diagnosing the Data Gap",
        desc: "Established what existing data could and could not support. Standard datasets count students who go abroad, not students who could plausibly attend a selective institution at a premium price point. CKS isolated the specific analytical gaps before modelling.",
      },
      {
        title: "Income Distribution Analysis",
        desc: "Built an income distribution model to segment each target country by household affordability, identifying households sitting above the realistic fee threshold to deliver a comparable, high-resolution addressable market.",
      },
      {
        title: "Complementary Research",
        desc: "Combined the income analysis with targeted primary and secondary research covering competitor presence, subject demand, agent landscapes, and pricing sensitivity to evaluate opportunity character alongside scale.",
      },
      {
        title: "Strategy and Prioritisation",
        desc: "Translated the analysis into an actionable strategy setting out where marketing resources should be directed, in what sequence, and on what analytical basis.",
      },
    ],
    deliverables: [
      "Granular Total Addressable Market (TAM) Affordability Model",
      "International Market Prioritisation & Resource Strategy Report",
      "Executive Leadership & Stakeholder Presentation Pack",
      "Competitive Intelligence & Channel Landscape Synthesis",
    ],
    impact: [
      {
        title: "A Realistic Market Size",
        desc: "Segmenting by household income produced an addressable market grounded in who can actually afford the institution, rather than an inflated headline mobility figure.",
      },
      {
        title: "Comparable Markets",
        desc: "Applying a consistent affordability lens across markets allowed genuine like-for-like comparison, basing prioritisation on relative opportunity.",
      },
      {
        title: "Opportunity Type, Not Just Size",
        desc: "Established the character of each opportunity alongside scale, recognising that markets of similar size can require completely different recruitment approaches.",
      },
      {
        title: "Resource Allocation Decided on Evidence",
        desc: "The institution received a prioritised roadmap directing marketing investment to specific markets on a defensible analytical foundation.",
      },
    ],
  },

  "ai-search-visibility-dental-clinic": {
    slug: "ai-search-visibility-dental-clinic",
    title: "How we grew AI and Search Engine Visibility for a Dental Clinic in Australia",
    serviceLine: "Marketing",
    engagementModel: "SEO & AI Search",
    country: "Australia",
    client: "Aminya St Dental",
    industry: "Healthcare",
    duration: "1 month",
    location: "Brisbane, Australia",
    standfirst: "How CKS transformed organic and AI search visibility for a general and family dental clinic in Brisbane, securing Page 1 Google positions and ChatGPT citations within 1 month.",
    coverImage: `${basePath}/images/case-studies/1/1.png`,
    results: [
      { val: "+193%", lbl: "Impressions Surge" },
      { val: "+57%", lbl: "Organic Clicks Growth" },
      { val: "Page 1 & AI", lbl: "Ranking & AI Citing" },
    ],
    overview: [
      "Aminya St Dental is a general and family dental clinic serving the community of Mansfield, Brisbane for over 40 years. Despite the years of expertise their online visibility was limited.",
      "The website was not ranking for many of the high-demand keywords potential patients were searching for, and it had no visibility in AI search.",
      "The goal was to increase organic search visibility, secure top positions for the clinic's most valuable keywords, and build authority that would enable AI engines to reference and cite the practice.",
    ],
    whatWeDid: [
      {
        title: "Search Trend & Patient Behaviour Analysis",
        desc: "Analyzed how potential patients search for dental services across Mansfield and greater Brisbane, uncovering clinical query patterns and local intent.",
      },
      {
        title: "Competitor Search Visibility Analysis",
        desc: "Reviewed competitor websites to map out keyword gaps, authority structures, and regional ranking opportunities.",
      },
      {
        title: "Keyword Opportunity Identification",
        desc: "Identified the clinic's most valuable keywords based on search demand, patient urgency, and conversion viability.",
      },
      {
        title: "Search Intent Mapping & Content Engine",
        desc: "Structured queries into treatment-specific, local service, and informational categories to feed an authoritative content engine.",
      },
    ],
    deliverables: [
      "High-Intent Search & AI Intent Keyword Matrix",
      "Localized Website & Clinical On-Page Content Optimization",
      "ChatGPT & Google AI Overview Citation Strategy",
      "Continuous SERP, Impression & Conversion Tracking Dashboard",
    ],
    impact: [
      {
        title: "More Patients Discovering the Clinic (+193% Impressions)",
        desc: "Immediate surge in organic search impressions, capturing patient interest at the exact moment of care need.",
      },
      {
        title: "Wider Reach Across Patient Journey (+57% Clicks)",
        desc: "Substantial traffic growth expanding beyond brand queries into high-value treatment inquiries.",
      },
      {
        title: "Page 1 Organic Rankings",
        desc: "Key local commercial terms reached Google Page 1 within a short period of new content going live.",
      },
      {
        title: "Early-Mover Advantage in AI Search",
        desc: "Positioned the clinic as an authoritative clinical entity, referenced and cited directly in ChatGPT and Google AI overviews.",
      },
    ],
  },

  "b2b-supplier-seo-audit": {
    slug: "b2b-supplier-seo-audit",
    title: "179 problems were affecting the ranking ability of a B2B supplier. A SEO audit found it all.",
    serviceLine: "Marketing",
    engagementModel: "Technical SEO",
    country: "Global",
    client: "B2B Wholesale Supplier",
    industry: "Manufacturing",
    duration: "2 weeks (Starter product - SEO)",
    location: "Global",
    standfirst: "How a comprehensive SEO and technical audit for a B2B water treatment wholesale supplier uncovered 179 missing title tags, orphan URLs, and JavaScript rendering blockers.",
    coverImage: `${basePath}/images/case-studies/2/1.png`,
    tags: ["Manufacturing", "Technical SEO", "B2B"],
    results: [
      { val: "179+", lbl: "Title tag issues identified" },
      { val: "Orphan Pages", lbl: "Multiple pages with no internal links" },
      { val: "Sitemap", lbl: "Outdated and unindexed" },
    ],
    overview: [
      "The client is an established B2B wholesale supplier of water treatment solutions and industrial equipment.",
      "Despite supplying high-grade commercial accounts, the business was virtually invisible on search engines for high-intent procurement queries.",
      "A 2-week Starter SEO Audit was conducted to diagnose the architectural bottlenecks and establish an actionable remediation strategy.",
    ],
    whatWeDid: [
      {
        title: "Brand and local SEO",
        desc: "Audited brand identity, directory listings, and geographic signals to ensure B2B searchers reliably locate wholesale operations.",
      },
      {
        title: "Technical SEO",
        desc: "Investigated JavaScript rendering and discovered 179 core product pages with title tags missing in the source HTML.",
      },
      {
        title: "Analytics & tracking",
        desc: "Configured Google Search Console and GA4 conversion tracking, identifying orphan URLs only accessible via sitemap.",
      },
      {
        title: "Content optimization",
        desc: "Designed an E-E-A-T structured content strategy tailored to commercial buyers, specification engineers, and facility managers.",
      },
    ],
    deliverables: [
      "Technical JavaScript Rendering & HTML Title Audit Report",
      "Orphan URL & Internal Linking Architecture Plan",
      "Google Search Console & GA4 Conversion Tracking Setup",
      "B2B Wholesale E-E-A-T Content Strategy Blueprint",
    ],
    impact: [
      {
        title: "Complete Visibility of 179 Missing Title Tags",
        desc: "Surfaced critical rendering bottlenecks where client-side JavaScript was preventing search crawlers from reading essential meta tags.",
      },
      {
        title: "Elimination of Orphan Pages",
        desc: "Identified pages disconnected from internal navigation so they can receive link equity and rank for commercial search terms.",
      },
      {
        title: "Actionable 7-Point Business Roadmap",
        desc: "Equipped executive leadership with clear engineering and content recommendations to achieve durable organic growth.",
      },
    ],
  },

  "dental-clinic-google-visibility-growth": {
    slug: "dental-clinic-google-visibility-growth",
    title: "How a Dental Clinic in Australia Grew Their Google Visibility by 193% in 30 Days",
    serviceLine: "Marketing",
    engagementModel: "SEO & AI Search",
    country: "Australia",
    client: "Aminya St Dental",
    industry: "Healthcare",
    duration: "1 month",
    location: "Brisbane, Australia",
    standfirst: "Delivering a 400% increase in contact page conversions, +193% growth in impressions, and primary AI Overview citations for a local dental practice within 30 days.",
    coverImage: `${basePath}/images/case-studies/3/1.png`,
    tags: ["Healthcare", "SEO & AI Search", "Australia"],
    results: [
      { val: "+400%", lbl: "Contact Clicks" },
      { val: "+193%", lbl: "Impression Growth" },
      { val: "+153%", lbl: "CTR Improvement" },
    ],
    overview: [
      "Aminya St dental is a local dentist based in Mansfield, Brisbane Australia who was looking to grow their online presence to attract more local patients through organic search.",
      "Despite having over 40 years of experience offering quality dental care they had untapped potential in search visibility.",
      "Ancore Partners was engaged to deliver three things: provide AI search Optimization and website optimization, SEO and content writing.",
    ],
    whatWeDid: [
      {
        title: "SEO Fundamentals Audit & Fixes",
        desc: "On-page & technical SEO fixes, meta titles, descriptions, heading structure (H1/H2/H3), canonical tags, and indexing fixes.",
      },
      {
        title: "Keyword Research",
        desc: "Targeted high-intent local search terms used by Australian dental patients across Mansfield and greater Brisbane.",
      },
      {
        title: "Content Optimization",
        desc: "SEO-optimised informative blog content structured for crawlers and reader conversion with strong internal linking.",
      },
    ],
    deliverables: [
      "Technical On-Page SEO & Hierarchy Restructure",
      "High-Intent Local Dental Keyword Target Matrix",
      "Conversion-Oriented Content Optimization Suite",
      "Google AI Overview & Local Map Pack Citation Framework",
    ],
    impact: [
      {
        title: "Cited by Google AI overview",
        desc: "Articles written for Aminya St Dental were cited by Google's AI Overview for one of the most competitive local dental queries.",
      },
      {
        title: "5x Potential Patient Reach (+400% Contact Clicks)",
        desc: "Direct contact-us page clicks increased by 400%, generating 5x more patient booking inquiries.",
      },
      {
        title: "+193% Growth in Impressions",
        desc: "Over 5,370 impressions generated in a single month with click-through rate surging to 4.3%.",
      },
    ],
  },

  "personal-branding-global-talent-founder": {
    slug: "personal-branding-global-talent-founder",
    title: "Building the Personal Brand of a Global Talent Search Founder",
    serviceLine: "Marketing",
    engagementModel: "Personal Branding",
    country: "International",
    client: "Global Talent Search Founder",
    industry: "Talent & Recruitment",
    duration: "1 Month",
    location: "Global",
    standfirst: "Rebuilding a global recruitment founder's LinkedIn presence from the ground up, coupled with a 6-month bespoke thought leadership and content calendar.",
    coverImage: `${basePath}/images/case-studies/4/1.png`,
    tags: ["Personal Branding", "Executive Search", "LinkedIn"],
    results: [
      { val: "Complete", lbl: "Profile Rebuild" },
      { val: "6 Months", lbl: "Content Roadmap" },
      { val: "1 Month", lbl: "Timeline" },
    ],
    overview: [
      "The client is the founder of a global talent search organisation, placing senior professionals across international markets.",
      "With a strong track record built over years of hands-on work, the founder had credibility. What he didn't have was a LinkedIn presence that reflected it.",
      "Ancore was engaged to deliver two things: a full LinkedIn profile overhaul, and an ongoing thought leadership content programme built around his voice and areas of expertise.",
    ],
    whatWeDid: [
      {
        title: "Profile Audit and Rebuild",
        desc: "Conducted a thorough audit of the existing profile, then rewrote and restructured headlines, about section, experience entries, and featured media.",
      },
      {
        title: "Content Calendar and Thought Leadership",
        desc: "Designed a structured intake questionnaire to capture the founder's authentic voice, and developed a monthly thought leadership content calendar.",
      },
    ],
    deliverables: [
      "Full LinkedIn Profile Audit & Structural Overhaul",
      "Executive Voice Intake & Positioning Matrix",
      "6-Month Industry Thought Leadership Calendar",
      "Monthly Collaborative Draft & Review Operating Cadence",
    ],
    impact: [
      {
        title: "A Profile That Reflects the Work",
        desc: "The founder now has a LinkedIn presence that accurately represents his experience and the calibre of work he has built.",
      },
      {
        title: "A Voice, Not Just Content",
        desc: "Every post is built on his authentic perspectives and areas of expertise, establishing credible authority with target partners.",
      },
      {
        title: "A Repeatable System",
        desc: "A hands-off monthly review workflow that consistently builds industry presence without creating operational overhead.",
      },
    ],
  },

  "preparing-for-ipo-higher-education-valuation": {
    slug: "preparing-for-ipo-higher-education-valuation",
    title: "Preparing for IPO: Valuing a Higher Education Data and Analytics Company",
    serviceLine: "Financial modelling",
    engagementModel: "Corporate Finance",
    country: "United Kingdom",
    client: "Confidential (Higher Education Analytics)",
    industry: "Higher Education",
    duration: "1 Month",
    location: "UK",
    standfirst: "Delivering an indicative pre-IPO company valuation, dual peer-group multiple segmentation, and multi-scenario early investor return models.",
    coverImage: `${basePath}/images/case-studies/5/1.png`,
    tags: ["Corporate Finance", "Valuation", "Pre-IPO"],
    results: [
      { val: "Delivered", lbl: "Company Valuation" },
      { val: "2 Evaluated", lbl: "Peer Groups" },
      { val: "3 Scenarios", lbl: "Return Models" },
    ],
    overview: [
      "The client is a data analytics and information services business focused on the higher education sector.",
      "With an IPO under consideration, the leadership team engaged Ancore to deliver an indicative company valuation and a calculation of early investor total returns.",
      "The engagement required evaluating the client's financial profile, benchmarking against a peer group, and producing a comprehensive investor return analysis.",
    ],
    whatWeDid: [
      {
        title: "Financial Review & Data Gathering",
        desc: "Reviewed financial metrics and gathered investment dates, shareholding structures, purchase prices, and historical dividends.",
      },
      {
        title: "Peer Group Evaluation & Segmentation",
        desc: "Segmented comparables into Education Sector Peers vs Data Analytics & Information Services Peers to reflect margin and scalability nuances.",
      },
      {
        title: "Relative Valuation & Multiple Selection",
        desc: "Delivered a rigorous P/E and EV/EBITDA valuation alongside clear guidance on operational factors to justify higher multiples.",
      },
      {
        title: "Investor Return Calculation",
        desc: "Calculated annualised total returns for early investors benchmarked against public equity indices and government bonds.",
      },
    ],
    deliverables: [
      "Structured Google Sheets Relative Valuation & Returns Model",
      "Executive Leadership Pre-IPO Valuation Report",
      "Dual-Cohort Peer Group Benchmarking Analysis",
      "Multi-Scenario Investor Holding Period Return Schedule",
    ],
    impact: [
      {
        title: "Indicative Valuation",
        desc: "A rigorous, data-driven pre-IPO valuation providing clear, independent guidance on corporate value.",
      },
      {
        title: "Peer Benchmarking",
        desc: "Segmented dual peer analysis enabling defensible multiple selection across education and data verticals.",
      },
      {
        title: "Valuation Uplift Roadmap",
        desc: "Identified operational levers that would justify an expansion in valuation multiples before going to market.",
      },
    ],
  },

  "cybersecurity-client-portal-protection": {
    slug: "cybersecurity-client-portal-protection",
    title: "Securing the Client Portal of a Global EdTech Intelligence Platform",
    serviceLine: "Cybersecurity",
    engagementModel: "Penetration Testing",
    country: "US, UK, Australia",
    client: "Global EdTech Intelligence Platform",
    industry: "Cybersecurity",
    duration: "3 weeks",
    location: "Global",
    standfirst: "Delivering an independent penetration test, identifying critical risk vectors, and establishing a prioritized vulnerability remediation roadmap to secure sensitive portal data.",
    coverImage: `${basePath}/images/case-studies/6/1.png`,
    tags: ["Cybersecurity", "Penetration Testing", "Intelligence Platforms"],
    results: [
      { val: "1 Issue", lbl: "Critical Averted" },
      { val: "Complete", lbl: "Risk Mitigation" },
      { val: "4 Mitigated", lbl: "High Issues" },
    ],
    overview: [
      "The client is one of the world's leading intelligence platforms, providing research, analytics and AI-powered tools across education, climate and health.",
      "As a data-driven business handling sensitive client information through a dedicated portal, portal security is mission critical.",
      "Ancore was engaged to carry out an independent, expert-led penetration test of the client portal to identify and remediate external attack vectors.",
    ],
    whatWeDid: [
      {
        title: "Scoping and Approach",
        desc: "Defined boundaries, systems in scope, and testing methodology to ensure thorough alignment with their specific threat landscape.",
      },
      {
        title: "Penetration Testing",
        desc: "Systematically tested the client portal across authentication, access controls, data exposure, and session management.",
      },
      {
        title: "Detailed Findings Report",
        desc: "Produced a comprehensive written report detailing every identified vulnerability, exploitability impact, and remediation steps.",
      },
      {
        title: "Live Walkthrough Session",
        desc: "Conducted a collaborative session with the engineering team to explain risk context and establish the optimal remediation sequence.",
      },
    ],
    deliverables: [
      "Comprehensive Penetration Testing Findings & Technical Report",
      "Executive Risk & Severity Assessment Presentation",
      "Prioritized Vulnerability Remediation Roadmap",
      "Interactive Remediation & Engineering Walkthrough Session",
    ],
    impact: [
      {
        title: "Risk Averted",
        desc: "Eliminated a critical vulnerability that would have exposed sensitive client data and caused severe financial damage.",
      },
      {
        title: "Full Visibility",
        desc: "Equipped leadership with a complete picture of portal security posture and clear preventative guidance.",
      },
      {
        title: "Team Enablement",
        desc: "Internal engineers gained immediate context on real-world exploit mechanics through live walkthrough sessions.",
      },
    ],
  },

  "financial-modelling-private-equity-education-africa": {
    slug: "financial-modelling-private-equity-education-africa",
    title: "Financial Modelling for a Private Equity Education Rollup Across Africa",
    serviceLine: "Financial modelling",
    engagementModel: "Corporate Finance",
    country: "Africa / UK",
    client: "Alwin Education",
    industry: "Private Equity",
    duration: "8 weeks",
    location: "Africa",
    standfirst: "Developing a cohort-level bottom-up financial model, 3-stage DCF valuation with exit IRR scenarios, and an executive C-level rollup dashboard for an African educational buyout.",
    coverImage: `${basePath}/images/case-studies/7/1.png`,
    tags: ["Private Equity", "Financial Modelling", "Education"],
    results: [
      { val: "3-Stage", lbl: "DCF Model" },
      { val: "Multi-Country", lbl: "Asset Scope" },
      { val: "C-Level", lbl: "Dashboard" },
    ],
    overview: [
      "Alwin Education, A UK-based private equity firm with deep roots in the education sector was executing a rollup strategy across a portfolio of African education institutions.",
      "The client had a basic operational model in place but needed something significantly more sophisticated to withstand investor due diligence.",
      "Ancore was engaged to deliver two core services: financial modelling and company valuation.",
    ],
    whatWeDid: [
      {
        title: "Deep Industry and Market Research",
        desc: "Conducted extensive research into enrollment dynamics, tuition pricing, retention patterns, and CAC across target African geographies.",
      },
      {
        title: "Collaborative Model Design",
        desc: "Held scoping calls to surface gaps between initial assumptions and on-the-ground dynamics, restructuring core business model inputs.",
      },
      {
        title: "Cohort-Level Financial Model",
        desc: "Built a detailed bottom-up model breaking down revenue, retention, and contribution margins by institution and student cohort.",
      },
      {
        title: "Three-Stage DCF and Valuation",
        desc: "Integrated a 3-stage DCF with exit multiples, IRR calculations across multiple scenarios, and linked 3-statement financials.",
      },
    ],
    deliverables: [
      "Integrated 3-Statement & Cohort-Level Financial Model",
      "Three-Stage Discounted Cash Flow (DCF) & IRR Valuation Engine",
      "Executive C-Level Rollup Performance Dashboard",
      "On-the-Ground Educational Market Research & Benchmark Deck",
    ],
    impact: [
      {
        title: "Investor-Ready Output",
        desc: "A defensible financial model built to withstand rigorous external investor due diligence.",
      },
      {
        title: "Independent Business Model Review",
        desc: "Key operational assumptions revised based on factual on-the-ground market dynamics.",
      },
      {
        title: "C-Level Dashboard",
        desc: "Executive visibility across multi-asset performance metrics without spreadsheet complexity.",
      },
    ],
  },

  "scaling-b2b-tech-brand-content": {
    slug: "scaling-b2b-tech-brand-content",
    title: "Scaling a B2B Tech Brand Through Content",
    serviceLine: "Marketing",
    engagementModel: "Content Strategy",
    country: "Global",
    client: "Confidential (Fast-Scaling Tech Startup)",
    industry: "Technology",
    duration: "18 Months",
    location: "Global",
    standfirst: "Driving a 50x LinkedIn follower growth, 3.2x organic traffic surge, and industry-leading newsletter engagement via multi-subsidiary content marketing.",
    coverImage: `${basePath}/images/case-studies/8/1.png`,
    tags: ["Technology", "B2B Marketing", "Content Strategy"],
    results: [
      { val: "50x", lbl: "LinkedIn Scale" },
      { val: "3.2x", lbl: "Organic Traffic" },
      { val: "6.8%", lbl: "Engagement" },
    ],
    overview: [
      "A fast-scaling technology startup was gaining strong momentum in the B2B space and recognised that their next phase of growth required a more structured content and brand presence.",
      "With a lean internal team and no dedicated marketing function, the company needed a structured approach to establish brand authority and build a tech community brand without a large paid media budget.",
      "Our team took full ownership of the content marketing function, designing and executing a multi-channel strategy from the ground up across an 18-month engagement.",
    ],
    whatWeDid: [
      {
        title: "Content Marketing and Social Media Operations",
        desc: "Produced and managed multi-channel content across the engineering, UI/UX, and AI arms with dedicated weekly calendars.",
      },
      {
        title: "Product Marketing",
        desc: "Translated technical capabilities into market-ready messaging, brochures, lead magnets, and customer-facing collateral.",
      },
      {
        title: "Website, SEO, and Performance Content",
        desc: "Restructured core web properties, optimized high-intent search keywords, and designed high-converting landing pages.",
      },
      {
        title: "AEO and GEO (Answer and Generative Engine Optimisation)",
        desc: "Structured FAQs, implemented rich schema markup, and expanded community presence for AI-driven citation authority.",
      },
    ],
    deliverables: [
      "Omni-Channel Multi-Subsidiary Content Operations Engine",
      "Product Marketing Collateral & Technical Positioning Suite",
      "Full-Funnel Organic Search & Schema Architecture",
      "Executive Thought Leadership & Tech Community Programme",
    ],
    impact: [
      {
        title: "Brand Authority",
        desc: "Recognised regional voice with leadership posts achieving viral reach and compound organic impressions.",
      },
      {
        title: "Talent Acquisition",
        desc: "Significant surge in organic inbound candidate applications, lowering dependency on external recruitment agencies.",
      },
      {
        title: "Inbound Interest",
        desc: "Consistent pipeline of prospective enterprise partners and clients reaching out directly through owned channels.",
      },
    ],
  },
};
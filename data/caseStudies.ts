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
};
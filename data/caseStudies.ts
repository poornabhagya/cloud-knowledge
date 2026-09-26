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
    engagementModel: "Projects",
    country: "New Zealand",
    client: "Early-stage underwear and activewear start-up",
    industry: "Consumer / Apparel",
    duration: "6 weeks",
    location: "New Zealand",
    standfirst: "Built an investor-ready 5-year financial model covering sourcing build-up, channel sequencing, and unit economics.",
    results: [
      { val: "5 Yrs", lbl: "Modelled from pre-launch to scale" },
      { val: "100%", lbl: "Unit economics captured" },
      { val: "Month 14", lbl: "Modelled break-even point" },
    ],
    overview: [
      "The client brought deep product expertise and a clear market proposition, but had no internal finance capability and no financial model.",
      "With a fundraise ahead, they needed to translate a product concept into a defensible commercial plan that institutional investors would take seriously.",
    ],
    whatWeDid: [
      {
        title: "Cost Base and Sourcing Analysis",
        desc: "Gathered and validated supplier cost data, built landed cost per SKU, and structured fixed operating overheads.",
      },
      {
        title: "Launch Roadmap and Channel Sequencing",
        desc: "Modelled individual sales channels independently with separate margins and customer acquisition costs.",
      },
      {
        title: "Unit Economics and Cash Flow",
        desc: "Incorporated returns, commissions, and promotional discounts to identify genuine working capital requirements.",
      },
    ],
    deliverables: [
      "Assumption-driven 5-year dynamic financial model",
      "Launch and channel sequencing strategic document",
      "Investor-facing executive summary pack",
      "Sensitivity and scenario analysis matrix",
    ],
    impact: [
      {
        title: "Defensible Investor Positioning",
        desc: "Founders answered diligence questions live in the room using an assumption-driven model.",
      },
      {
        title: "Specific Capital Ask",
        desc: "Converted an open-ended funding target into an exact, justifiable working capital requirement.",
      },
      {
        title: "Data-Backed Launch",
        desc: "Sequenced retail and direct-to-consumer rollouts based on margin contribution rather than instinct.",
      },
    ],
  },
  "waterproofing-valuation-buyout": {
    slug: "waterproofing-valuation-buyout",
    title: "Resolving a Shareholder Impasse: Valuation and Buy-out Plan for a Family Run Business",
    serviceLine: "Financial modelling",
    engagementModel: "Retainer",
    country: "Australia",
    client: "Family-owned painting and waterproofing contractor",
    industry: "Construction Services",
    duration: "8 weeks",
    location: "Australia",
    standfirst: "Delivered an independent valuation and cash flow analysis supporting a full family buy-out at fair value.",
    results: [
      { val: "100%", lbl: "Ownership returned to family" },
      { val: "Fair Value", lbl: "Transaction completed" },
      { val: "Ongoing", lbl: "Finance overhaul retainer" },
    ],
    overview: [
      "The business had taken on an external investor without realizing expected synergies, while post-pandemic slowdown compressed industry margins.",
      "The family needed to know what the company was genuinely worth and whether operational cash flow could support a complete investor buy-out.",
    ],
    whatWeDid: [
      {
        title: "Independent Valuation",
        desc: "Valued historical contracts, asset base, and future pipeline against post-pandemic construction market realities.",
      },
      {
        title: "Cash Flow & Working Capital Review",
        desc: "Audited aged receivables, retentions, and payment cycles to confirm the business could fund the transaction.",
      },
      {
        title: "Post-Buyout Restructuring",
        desc: "Designed an executable operational plan for sole family ownership and overhead management.",
      },
    ],
    deliverables: [
      "Independent valuation report",
      "Cash flow forecasting and debt service model",
      "Post-transaction restructuring plan",
      "Shareholder negotiation support briefing",
    ],
    impact: [
      {
        title: "Impasse Resolved",
        desc: "Acquired the external investor's stake at an independently established fair value.",
      },
      {
        title: "Cash Clarity Before Commitment",
        desc: "Confirmed debt repayment viability under soft construction market scenarios.",
      },
      {
        title: "Long-Term Finance Overhaul",
        desc: "CKS remains engaged on retainer to modernise ongoing management reporting.",
      },
    ],
  },
  "higher-education-tam-analysis": {
    slug: "higher-education-tam-analysis",
    title: "Sizing the Unmeasurable Market: TAM Analysis for a Top Tier Higher Education Institution",
    serviceLine: "Strategy and research",
    engagementModel: "Projects",
    country: "United Kingdom",
    client: "Global advisory firm on behalf of a premier university",
    industry: "Higher Education",
    duration: "5 weeks",
    location: "United Kingdom",
    standfirst: "Income distribution modelling and primary research to determine real international student demand.",
    results: [
      { val: "12", lbl: "Target markets sized and ranked" },
      { val: "Income-Lens", lbl: "Affordability segmentation" },
      { val: "Actionable", lbl: "Resource roadmap delivered" },
    ],
    overview: [
      "Published international mobility figures only track gross student movements, not how many families can afford premium selective tuition.",
      "The institution needed granular data to decide where to deploy regional recruitment and marketing resources.",
    ],
    whatWeDid: [
      {
        title: "Diagnosing Published Data Gaps",
        desc: "Separated generic student migration flows from families meeting selective academic and financial criteria.",
      },
      {
        title: "Income Distribution Modelling",
        desc: "Segmented target countries by disposable household income above university fee thresholds.",
      },
      {
        title: "Prioritised Resource Allocation",
        desc: "Created a sequenced marketing deployment roadmap based on conversion likelihood and market scale.",
      },
    ],
    deliverables: [
      "Granular Total Addressable Market (TAM) model",
      "Cross-market affordability ranking report",
      "Executive leadership presentation deck",
    ],
    impact: [
      {
        title: "Realistic Market Size",
        desc: "Isolated realistic student demand rather than inflated national migration headlines.",
      },
      {
        title: "Evidence-Based Spend",
        desc: "Redirected international recruitment budgets toward validated high-converting regions.",
      },
      {
        title: "Like-for-Like Comparison",
        desc: "Enabled senior leadership to compare disparate international markets under a unified framework.",
      },
    ],
  },
};
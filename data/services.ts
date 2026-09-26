export interface SubProduct {
  title: string;
  desc: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  offerIntro: string;
  subProducts: SubProduct[];
}

export const servicesData: Record<string, ServiceItem> = {
  "strategy-research": {
    slug: "strategy-research",
    title: "Strategy and research",
    headline: "We help you test the market before you bet on it.",
    intro: "Validate market opportunities before capital is committed with deep sector research, regulatory intelligence, and benchmarking.",
    offerIntro: "Six specialist research and strategic capabilities designed for clear board and executive decisions.",
    subProducts: [
      { title: "Deep-Dive Sector Reports", desc: "Comprehensive research into target industries and sectors before capital commitments are locked." },
      { title: "Emerging Trends & Market Outlook", desc: "Forward-looking briefings tracking commercial, consumer, and competitive movements." },
      { title: "Regulatory Landscape Analyses", desc: "Granular breakdown of rules, operational mandates, and compliance hurdles across target markets." },
      { title: "Best Practice Benchmarking", desc: "Structured comparative studies against international peer performance and operational standards." },
      { title: "Thought Leadership & Whitepapers", desc: "Authoritative, citation-grade publications establishing market leadership and executive authority." },
      { title: "Policy & Sovereign Risk Reviews", desc: "In-depth evaluations of trade exposure, currency dynamics, and jurisdictional stability." },
    ],
  },
  "financial-modelling-planning": {
    slug: "financial-modelling-planning",
    title: "Financial modelling and planning",
    headline: "We help you build financial models you can bet the business on.",
    intro: "Forecasts, budgets, and scenario models designed to survive scrutiny from investors, lenders, and corporate boards.",
    offerIntro: "Six core financial workstreams delivering decision-grade forecasting and planning architecture.",
    subProducts: [
      { title: "Financial Modelling & Valuations", desc: "Fully integrated 3-statement models supporting capital raises, M&A, and debt financing." },
      { title: "Budget Development & Variance Tracking", desc: "Operational budget frameworks and live tracking systems that identify margin leakage early." },
      { title: "Capex Planning & ROI Modelling", desc: "Rigorous return analysis and capital allocation structures prior to resource allocation." },
      { title: "Pricing Strategy & Margins", desc: "Unit economics and dynamic pricing tools engineered to protect contribution margins." },
      { title: "Cash Flow Stress Testing", desc: "Multi-scenario liquidity models preparing management for downturns and supply volatility." },
      { title: "Board & Investor Presentation Decks", desc: "Audit-ready financial synthesis translated into clear visual models for external review." },
    ],
  },
  "data-driven-insights": {
    slug: "data-driven-insights",
    title: "Data driven insights",
    headline: "We help you turn data into decisions.",
    intro: "Convert siloed, messy raw data into predictive intelligence and executive dashboards that direct everyday execution.",
    offerIntro: "Six analytical models built to extract immediate operational value from your data infrastructure.",
    subProducts: [
      { title: "Predictive Analytics & Forecasting", desc: "Algorithmic forecasting models anticipating customer churn, demand cycles, and pipeline velocity." },
      { title: "Customer Segmentation & LTV", desc: "Behavioral segmentation frameworks pinpointing high-yield customer cohorts and expansion paths." },
      { title: "Operational Dashboards", desc: "Automated business intelligence views connecting disparate data points into live metric tracking." },
      { title: "Statistical Hypothesis Testing", desc: "Rigorous quantitative testing validating commercial bets before budget deployment." },
      { title: "Data Quality Audits", desc: "Systematic sweeps discovering reporting anomalies, collection gaps, and calculation errors." },
      { title: "Automated Data Pipeline Setup", desc: "Lightweight, reliable ETL scripting connecting operational tools directly into executive BI." },
    ],
  },
  "marketing": {
    slug: "marketing",
    title: "Marketing",
    headline: "We help you turn marketing into a growth engine someone actually owns.",
    intro: "Turn brand messaging into measurable revenue pipeline with structured commercial narratives, SEO, and distribution execution.",
    offerIntro: "Six technical and strategic marketing capabilities designed for sustained organic customer acquisition.",
    subProducts: [
      { title: "AI Search Optimisation (GEO)", desc: "Engineering content footprints to ensure citation inside ChatGPT, Perplexity, and Claude." },
      { title: "Brand Positioning & Narrative", desc: "Diligence-grade positioning built to persuade institutional buyers and strategic enterprise clients." },
      { title: "Executive Thought Leadership", desc: "Publishing ghostwritten, high-conviction commentary positioning leadership as sector authorities." },
      { title: "SEO & Pipeline Optimisation", desc: "Search architecture focused on high-intent conversion terms over vanity traffic volume." },
      { title: "Website Architecture & Development", desc: "Speed-optimised, brand-aligned web builds structured for clarity and lead capture." },
      { title: "Content Distribution Strategy", desc: "Multi-channel amplification playbooks turning long-form research into targeted micro-assets." },
    ],
  },
  "retail-operations": {
    slug: "retail-operations",
    title: "Retail operations",
    headline: "We help you run a tighter operation.",
    intro: "Eliminate stockouts, optimise inventory holding costs, and sharpen promotional margin performance across omni-channel retail.",
    offerIntro: "Six supply and store operational capabilities built to streamline inventory and maximize cash flow.",
    subProducts: [
      { title: "Inventory & Stock Planning", desc: "Reorder trigger models and buffer stock optimization minimizing dead stock and stockout risk." },
      { title: "Retail KPI Dashboards", desc: "Unified store-level performance metrics comparing basket sizes, footfall, and inventory turn." },
      { title: "Customer Purchasing Analysis", desc: "Transaction-level basket analysis identifying cross-sell patterns and pricing thresholds." },
      { title: "Discount & Promotion Analysis", desc: "Incrementality modelling isolating true sales lift from margin-eroding discount promotions." },
      { title: "Operational Bottleneck Audits", desc: "End-to-end supply chain reviews locating manual friction and operational delays." },
      { title: "Omnichannel Order Fulfilment", desc: "Inventory routing logic connecting warehouse stock smoothly with multi-point retail distribution." },
    ],
  },
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    headline: "We help you find the gaps before attackers do.",
    intro: "Offensive security assessments, third-party vendor audits, and defense engineering delivered by senior infosec practitioners.",
    offerIntro: "Six rigorous security capabilities ensuring data integrity, compliance, and enterprise resilience.",
    subProducts: [
      { title: "Penetration Testing", desc: "Simulated adversary attacks testing external perimeters, web applications, and API defenses." },
      { title: "Cyber Vendor Audits", desc: "Comprehensive supply chain vendor evaluations identifying security gaps in upstream partners." },
      { title: "Cybersecurity Blueprint", desc: "Maturity gap analyses mapping defense requirements directly against NIST CSF and ISO 27001." },
      { title: "Managed SOC & Triage", desc: "Continuous perimeter and log telemetry analysis identifying intrusions before lateral movement." },
      { title: "Red Team Exercises", desc: "Comprehensive multi-stage attack simulations testing detection speed and incident containment." },
      { title: "Remediation Retesting", desc: "Formal technical verification confirming that discovered vulnerabilities are completely closed." },
    ],
  },
};
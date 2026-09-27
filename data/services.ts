export interface SubProduct {
  title: string;
  desc: string;
  slug?: string; // අලුත් sub-pages වලට යන්න
}

export interface InfoBox {
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
  whyCks?: InfoBox[];
  whySriLanka?: string;
  trustIntro?: string;
  trustSecurity?: InfoBox[];
}

export const servicesData: Record<string, ServiceItem> = {
  "strategy-research": {
    slug: "strategy-research",
    title: "Strategy and research",
    headline: "We help you test the market before you bet on it.",
    intro: "Validate market opportunities before capital is committed, with company, sector, or policy strategy grounded in deep market intelligence and research.\n\nMost strategic decisions get made with incomplete information, because proper research takes time and depth that internal teams rarely have spare.\n\nCKS gives you a dedicated research team. Our analysts combine primary and secondary intelligence with rigorous analysis to answer the questions that actually determine outcomes without the cost or delay of building that capability in-house.\n\nWhether you need a single sector deep-dive, an ongoing intelligence function, or a dedicated analyst embedded in your strategy team, we scope the engagement around the decision you're trying to make.",
    offerIntro: "Our Strategy and Research services include:",
    subProducts: [
      { title: "Deep-Dive Sector Reports", slug: "deep-dive-sector-reports", desc: "In-depth research into specific sectors (health, climate, education, and beyond) giving leadership the data and context needed before capital or policy decisions are made." },
      { title: "Emerging Trends & Market Outlook Briefs", slug: "emerging-trends-market-outlook", desc: "Concise, forward-looking briefings that track where a market or sector is heading, so decisions can be made ahead of the shift rather than in reaction to it." },
      { title: "Regulatory Landscape Analyses", slug: "regulatory-landscape-analyses", desc: "A clear, current map of the rules, obligations, and regulatory shifts that affect strategy, investment decisions, or market entry." },
      { title: "Best Practice Benchmarking Studies", slug: "best-practice-benchmarking", desc: "Structured comparisons against peers and global standards, showing exactly where performance stands and what closing the gap would take." },
      { title: "Thought Leadership & Whitepaper Development", slug: "thought-leadership-whitepapers", desc: "Research-backed publications that position your organisation as a credible voice on the issues that matter most to your sector." },
    ],
    whyCks: [
      { title: "Specialised Sri Lankan Talent", desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs." },
      { title: "Cost-Efficient Delivery", desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring." },
      { title: "International Quality Standards", desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one." },
      { title: "Flexible Engagement Models", desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in." },
      { title: "Seamless Integration", desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor, joining your workflows, tools, and communication rhythms." }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates, many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      { title: "Data Security", desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery." },
      { title: "Confidentiality", desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement." },
      { title: "Access Controls", desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis." },
      { title: "Quality Assurance", desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed." },
      { title: "Data Protection", desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle." },
      { title: "Secure Infrastructure", desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit." }
    ]
  },
  
  "financial-modelling-planning": {
    slug: "financial-modelling-planning",
    title: "Financial modelling and planning",
    headline: "We help you build financial models you can bet the business on.",
    intro: "Develop the forecasts, budgets, and scenario models that support key business decisions, funding rounds, and long-term strategy.\n\nEvery major financial decision rests on a model somewhere and when that model is built in a rush, or by someone without the time to stress-test it properly, the numbers behind the decision are only as good as the assumptions no one checked.\n\nCKS gives you a dedicated financial modelling team. Our analysts build the forecasts, valuations, and planning frameworks that CFOs, investors, and boards can rely on.\n\nWhether you need a single valuation model, an ongoing FP&A function, or a dedicated analyst embedded in your finance team, we scope the engagement around your business, your assumptions, and the decisions riding on the output.",
    offerIntro: "Our Financial Modelling & Planning services include:",
    subProducts: [
      { title: "Financial Modelling & Valuations", slug: "financial-modelling-valuations", desc: "Build the models that underpin funding rounds, M&A, and board-level capital decisions." },
      { title: "Budget Development & Variance Analysis", slug: "budget-development-variance-analysis", desc: "Set realistic budgets and track performance against them, so surprises get caught early, not at year-end." },
      { title: "Capital Expenditure Planning & ROI Modelling", slug: "capex-planning-roi-modelling", desc: "Evaluate major spending decisions against expected returns before capital is committed." },
      { title: "Pricing Strategy & Margin Optimisation Models", slug: "pricing-strategy-margin-optimisation", desc: "Find the pricing structure that protects margin while staying competitive in your market." },
      { title: "Cash Flow Forecasting & Stress Testing", slug: "cash-flow-forecasting-stress-testing", desc: "Model best- and worst-case scenarios so leadership can plan for volatility before it hits." }
    ],
    whyCks: [
      { title: "Specialised Sri Lankan Talent", desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs." },
      { title: "Cost-Efficient Delivery", desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring." },
      { title: "International Quality Standards", desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one." },
      { title: "Flexible Engagement Models", desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in." },
      { title: "Seamless Integration", desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor, joining your workflows, tools, and communication rhythms." }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates, many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      { title: "Data Security", desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery." },
      { title: "Confidentiality", desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement." },
      { title: "Access Controls", desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis." },
      { title: "Quality Assurance", desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed." },
      { title: "Data Protection", desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle." },
      { title: "Secure Infrastructure", desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit." }
    ]
  },

  "data-driven-insights": {
    slug: "data-driven-insights",
    title: "Data Driven Insights",
    headline: "We help you turn data into decisions.",
    intro: "Convert complex data into predictive models and actionable intelligence that optimise decision-making across operations and strategy. Companies might be sitting on more data than they can act on because there's no dedicated team with the time or the skillset to dig in.\n\nCKS gives you that team. Our data analysts and data scientists work as an extension of your business, building the models, dashboards, and analysis that turn raw data into decisions you can act on without the cost or delay of hiring in-house.\n\nWhether you need a single forecasting model, an ongoing analytics function, or a dedicated analyst embedded in your team, we scope the engagement around your data, your tools, and the decisions you're trying to make.",
    offerIntro: "Our Data-Driven Insights services include:",
    subProducts: [
      { title: "Predictive Analytics & Forecasting Models", slug: "predictive-analytics", desc: "Build models on your own data to anticipate demand, revenue, and risk before it hits." },
      { title: "Customer Segmentation & Lifetime Value Analysis", slug: "customer-segmentation", desc: "Know which customers matter most and what each one is worth over time." },
      { title: "Operational Performance Dashboards", slug: "operational-dashboards", desc: "See how the business is running at a glance, with the numbers that actually matter." },
      { title: "Statistical Analysis & Hypothesis Testing", slug: "statistical-analysis", desc: "Find out what really drives your results, so decisions rest on evidence not hunches." },
      { title: "Data Validation & Quality Audits", slug: "data-validation", desc: "Catch errors and gaps in your data before they reach a report or a board deck." }
    ],
    whyCks: [
      { title: "Specialised Sri Lankan Talent", desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs." },
      { title: "Cost-Efficient Delivery", desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring." },
      { title: "International Quality Standards", desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one." },
      { title: "Flexible Engagement Models", desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in." },
      { title: "Seamless Integration", desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor joining your workflows, tools, and communication rhythms." }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      { title: "Data Security", desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery." },
      { title: "Confidentiality", desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement." },
      { title: "Access Controls", desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis." },
      { title: "Quality Assurance", desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed." },
      { title: "Data Protection", desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle." },
      { title: "NDA / Confidentiality Agreements", desc: "Every engagement is backed by a signed NDA, giving you a clear, enforceable commitment to confidentiality before any work begins." },
      { title: "Secure Infrastructure", desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit." }
    ]
  },
  
"marketing": {
    slug: "marketing",
    title: "Marketing",
    headline: "We help you turn marketing into a growth engine someone actually owns.",
    intro: "Turn marketing into consistent demand: positioning, content, and campaigns built for momentum, so you drive leads, brand strength, and measurable performance.\n\nMost founders have a backlog of marketing initiatives that never get done. The ideas are there. The strategy is there. What's missing is someone senior enough to own the execution, connect the channels, and make sure it all adds up to something measurable.\n\nCKS gives you that ownership. Our marketing specialists execute the positioning, content, and technical work that turns a marketing plan into consistent, measurable demand without the cost or delay of hiring a full in-house function.\n\nWhether you need a single project like a website rebuild, an ongoing content and SEO function, or a dedicated marketer embedded in your team, we scope the engagement around the growth you're trying to drive.",
    offerIntro: "Our Marketing services include:",
    subProducts: [
      {
        title: "AI Search Optimisation",
        slug: "ai-search-optimisation",
        desc: "Get your organisation cited in AI-generated answers as well as traditional search, across thought-leadership content, sector reports, and policy publications."
      },
      {
        title: "Brand Positioning & Narrative Strategy",
        slug: "brand-positioning-narrative",
        desc: "Build the positioning and story that resonates with investors, regulators, and enterprise stakeholders, not just a general audience."
      },
      {
        title: "Executive & Thought Leadership",
        slug: "executive-thought-leadership",
        desc: "Build the founder or executive presence that opens doors with investors, policymakers, and enterprise clients."
      },
      {
        title: "SEO & Website Optimisation",
        slug: "seo-website-optimisation",
        desc: "Turn visibility into a pipeline with channel strategy and performance measurement leadership can act on."
      },
      {
        title: "Website Development",
        slug: "website-development",
        desc: "Design and build a site that carries your brand properly: fast, secure, and easy to update as you grow."
      }
    ],
    whyCks: [
      {
        title: "Specialised Sri Lankan Talent",
        desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs."
      },
      {
        title: "Cost-Efficient Delivery",
        desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring."
      },
      {
        title: "International Quality Standards",
        desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one."
      },
      {
        title: "Flexible Engagement Models",
        desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in."
      },
      {
        title: "Seamless Integration",
        desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor, joining your workflows, tools, and communication rhythms."
      }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates, many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      {
        title: "Data Security",
        desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery."
      },
      {
        title: "Confidentiality",
        desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement."
      },
      {
        title: "Access Controls",
        desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis."
      },
      {
        title: "Quality Assurance",
        desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed."
      },
      {
        title: "Data Protection",
        desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle."
      },
      {
        title: "Secure Infrastructure",
        desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit."
      }
    ]
  },
  
"retail-operations": {
    slug: "retail-operations",
    title: "Operations & Performance",
    headline: "We help you run a tighter operation.",
    intro: "Enhance retail and business operations through inventory optimisation, customer analytics, and data-driven performance management.\n\nRetail margins get won or lost in the details. Most operations teams know something's off but don't have the bandwidth to dig into where, or the analytical horsepower to fix it properly.\n\nCKS gives you that capacity. Our analysts work through your inventory, sales, and customer data to find where efficiency is leaking and build the systems that keep it from leaking again without the cost or delay of hiring in-house.\n\nWhether you need a single operational audit, an ongoing performance-management function, or a dedicated analyst embedded in your operations team, we scope the engagement around the numbers you're trying to move.",
    offerIntro: "Our Operations & Performance Optimisation services include:",
    subProducts: [
      {
        title: "Inventory Optimisation & Stock Planning Systems",
        slug: "inventory-stock-planning",
        desc: "Keep the right stock in the right place, so capital isn't tied up in inventory that isn't moving."
      },
      {
        title: "Retail KPI Dashboards & Reporting Frameworks",
        slug: "retail-kpi-dashboards",
        desc: "See the metrics that actually drive the business, in one place, updated on a cadence you can act on."
      },
      {
        title: "Customer Analytics & Behaviour Segmentation",
        slug: "customer-analytics-segmentation",
        desc: "Understand who's buying, why, and what that means for merchandising, marketing, and stock decisions."
      },
      {
        title: "Discount Strategy & Promotional Effectiveness Analysis",
        slug: "discount-strategy-promotions",
        desc: "Know which promotions actually drive incremental sales, and which ones are just discounting revenue you'd have earned anyway."
      },
      {
        title: "Operational Efficiency Audits & Process Improvement Plans",
        slug: "operational-efficiency-audits",
        desc: "Find where time, stock, or margin is being lost in day-to-day operations, and get a clear plan to fix it."
      }
    ],
    whyCks: [
      {
        title: "Specialised Sri Lankan Talent",
        desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs."
      },
      {
        title: "Cost-Efficient Delivery",
        desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring."
      },
      {
        title: "International Quality Standards",
        desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one."
      },
      {
        title: "Flexible Engagement Models",
        desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in."
      },
      {
        title: "Seamless Integration",
        desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor, joining your workflows, tools, and communication rhythms."
      }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates, many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      {
        title: "Data Security",
        desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery."
      },
      {
        title: "Confidentiality",
        desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement."
      },
      {
        title: "Access Controls",
        desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis."
      },
      {
        title: "Quality Assurance",
        desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed."
      },
      {
        title: "Data Protection",
        desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle."
      },
      {
        title: "Secure Infrastructure",
        desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit."
      }
    ]
  },
  
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    headline: "We help you find the gaps before attackers do.",
    intro: "Risk assessments, controls, policies, penetration testing, and incident preparedness, delivered by senior cybersecurity specialists.\n\nMost organisations don't find out their security has a gap until something has already gone wrong. Building a security function that catches problems before that point takes senior, specialized expertise. Most teams can't justify hiring full-time until the risk becomes too big to ignore.\n\nCKS embeds a specialist inside your business who finds the vulnerabilities before an attacker does, builds the defences that actually hold, and keeps your security posture current as your systems and the threat landscape evolve without the cost or delay of building that capability in-house.\n\nWhether you need a single penetration test, an ongoing security operations function, or a dedicated specialist embedded in your team, we scope the engagement around your systems, your risk profile, and your compliance requirements.",
    offerIntro: "Our Cybersecurity services include:",
    subProducts: [
      {
        title: "Penetration Testing",
        slug: "penetration-testing",
        desc: "Simulated attacks that reveal exactly how an intruder could get in, before one actually does."
      },
      {
        title: "AI Security Review",
        slug: "ai-security-review",
        desc: "Assess how AI tools and models are being used across the organisation, and close the risks they introduce."
      },
      {
        title: "Cybersecurity Blueprint",
        slug: "cybersecurity-blueprint",
        desc: "A clear, prioritised security roadmap built around actual risk, not a generic checklist."
      },
      {
        title: "Cyber Vendor Audit",
        slug: "cyber-vendor-audit",
        desc: "Assess the security posture of vendors and third parties who have access to your systems or data."
      },
      {
        title: "Cyber Vendor Support",
        slug: "cyber-vendor-support",
        desc: "Ongoing oversight of vendor security commitments, so accountability doesn't disappear once a contract is signed."
      },
      {
        title: "Network Setup and Migration",
        slug: "network-setup-migration",
        desc: "Design and migrate network infrastructure with security built in from day one, not bolted on after."
      },
      {
        title: "Security Operations Centre",
        slug: "security-operations-centre",
        desc: "Continuous monitoring and threat detection, without building an in-house team from scratch."
      },
      {
        title: "Red Team Exercise",
        slug: "red-team-exercise",
        desc: "Adversarial simulations that test detection and response, not just the strength of your defences."
      }
    ],
    whyCks: [
      {
        title: "Specialised Sri Lankan Talent",
        desc: "Access skilled professionals across finance, research, analytics, and business operations who are trained to global standards and matched to the specific skills your project needs."
      },
      {
        title: "Cost-Efficient Delivery",
        desc: "Extend your capabilities without carrying the full cost of an in-house team. You get dedicated expertise at a fraction of the overhead of local hiring."
      },
      {
        title: "International Quality Standards",
        desc: "Structured processes, quality control, and professional delivery on every engagement, so output is consistent and audit-ready from day one."
      },
      {
        title: "Flexible Engagement Models",
        desc: "Use CKS for a single project, ongoing support, or a dedicated team. Scale up or down as your needs change, with no long-term lock-in."
      },
      {
        title: "Seamless Integration",
        desc: "Our teams work as an extension of your organisation rather than as a disconnected vendor, joining your workflows, tools, and communication rhythms."
      }
    ],
    whySriLanka: "Sri Lanka has become a trusted hub for outsourced professional services. It offers one of Asia's most educated, English-fluent workforces, with a steady pipeline of finance, analytics, and research graduates, many holding globally recognised qualifications such as ACCA, CFA, and CIMA. Its time zone bridges Asia, Europe, and the Middle East, making real-time collaboration easy for Western and Gulf-region clients, while operating costs remain significantly lower than Western markets without a drop in output quality. The country's business services sector has a long track record of stable, reliable delivery, built on a professional culture that's used to working closely with international clients and adapting to their standards.",
    trustIntro: "We know that handing over your data means handing over a level of trust. Every CKS engagement is built around protecting your information, your systems, and your business.",
    trustSecurity: [
      {
        title: "Data Security",
        desc: "Your data is handled under strict internal security protocols at every stage of an engagement, from intake to delivery."
      },
      {
        title: "Confidentiality",
        desc: "Every team member operates under binding confidentiality obligations, and client information is never shared or used outside the scope of the engagement."
      },
      {
        title: "Access Controls",
        desc: "Access to your data and systems is limited strictly to the people working on your account, on a need-to-know basis."
      },
      {
        title: "Quality Assurance",
        desc: "Every deliverable goes through a structured review process before it reaches you, so accuracy and consistency are built in, not assumed."
      },
      {
        title: "Data Protection",
        desc: "We follow data protection practices aligned with international standards, keeping your information handled responsibly throughout its lifecycle."
      },
      {
        title: "Secure Infrastructure",
        desc: "Our systems and infrastructure are built with security controls to safeguard data in storage and in transit."
      }
    ]
  },
};
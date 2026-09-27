export const subServicesData: Record<string, any> = {
  "predictive-analytics": {
    hero: {
      title: "Demand, revenue, and risk, modelled for your business",
      subtitle: "Most teams plan by looking backwards. Predictive Analytics & Forecasting Models flip that: custom-built on your own data, they surface what's likely to happen next in demand, revenue, and risk, with enough lead time to actually act on it."
    },
    intro: {
      title: "Know Tomorrow's Demand, Revenue & Risk Today",
      desc: "Predictive Analytics & Forecasting Models turn your historical and operational data into a forward-looking decision engine. Instead of reacting to what already happened, you get statistically grounded projections of what's likely to happen next.\n\nCKS will build custom models trained on your data, using techniques ranging from time-series forecasting and regression to machine learning classification models, depending on what you're trying to predict."
    },
    whatWeDo: [
      { title: "Data audit and readiness check", desc: "We check whether your data is complete and clean enough to forecast on before building anything." },
      { title: "Historical trend analysis", desc: "Understand the patterns in your past performance, seasonality, and turning points." },
      { title: "Driver identification", desc: "Find the factors that actually move your numbers, so the model focuses on what matters." },
      { title: "The right approach", desc: "We choose an approach that fits your data and that your team can actually trust and maintain." }
    ],
    howModelIsBuilt: [
      { title: "Demand, revenue and risk models", desc: "Forecast the things your business plans around, tailored to how you operate." },
      { title: "Scenario and sensitivity modelling", desc: "Test best case, worst case, and the levers in between so you can plan for a range." },
      { title: "The right method, not the fanciest", desc: "We choose an approach that fits your data and that your team can actually trust and maintain." }
    ],
    valueFromCks: [
      { title: "Catch issues before they happen", desc: "Identify demand spikes, revenue shortfalls, or risk exposure while there's still time to act." },
      { title: "Models built on your data", desc: "Models reflect your actual customers, seasonality, and operations." },
      { title: "Faster, more confident decisions", desc: "Give leadership clear, quantified projections." }
    ],
    howItWorks: [
      { step: "01", title: "Understand the decision", desc: "Define what you're forecasting and why it matters to the business." },
      { step: "02", title: "Get the data right", desc: "Audit, clean, and connect the data sources the model will train on." },
      { step: "03", title: "Build and validate the model", desc: "Train, test, and tune against your own historical outcomes." },
      { step: "04", title: "Launch and keep it current", desc: "Put forecasts in front of your team and retrain as new data arrives." }
    ],
    faqs: [
      { question: "How much data do we need to forecast?", answer: "It depends on what you're forecasting, but most useful models start with 12 to 24 months of consistent history." },
      { question: "What if our data is incomplete?", answer: "The data audit step flags gaps up front, so we can decide together what's usable and what needs cleaning first." },
      { question: "How accurate are the forecasts?", answer: "We report accuracy with confidence intervals rather than a single number, and validate against held-out historical data." },
      { question: "What forecasting methods do you use?", answer: "Whatever fits the question and the data, from time-series methods to regression and machine learning classification." },
      { question: "Is it different from our current spreadsheet forecast?", answer: "Yes. A spreadsheet forecast is a static guess; this is a trained model that improves and stays current as new data comes in." }
    ],
    cta: {
      title: "Ready to plan with confidence instead of guesswork?",
      btnText: "Talk with an expert"
    }
  },

  "customer-segmentation": {
    hero: {
      title: "Know which customers matter the most and what each one is worth over time",
      subtitle: "Businesses almost always spend the same effort on every customer, even though a small share usually drives most of the value. Customer Segmentation and Lifetime Value Analysis groups your customers by behavior and value, and projects what each segment is worth going forward, so spend, retention, and outreach go where they actually pay off."
    },
    intro: {
      title: "Find your highest value customers",
      desc: "Customer Segmentation & Lifetime Value Analysis groups your customers by how they actually behave and projects what each customer and segment is worth over time. Instead of treating every customer the same, you get a clear picture of who drives the most value, who's at risk of leaving, and where your spend and attention will pay off most.\n\nCKS builds this on your own customer data; purchase history, usage patterns, engagement, and support activity rather than generic personas. We identify the behavioral segments that actually exist in your customer base, model each segment's lifetime value with confidence ranges, and flag early churn signals before valuable customers disengage. The result is a living model: customers get re-scored as new data comes in, so segments and LTV stay accurate rather than going stale after a single snapshot."
    },
    whatWeDo: [
      { title: "Customer data audit", desc: "We check what purchase, usage, and engagement data you have and where the gaps are before segmenting anything." },
      { title: "Behavioral segmentation", desc: "Group customers by how they actually buy and engage, not just by demographics." },
      { title: "Churn and risk signals", desc: "Spot the early behaviors that flag a valuable customer is drifting away." }
    ],
    valueFromCks: [
      { title: "Catch churn before it happens", desc: "Early behavioral signals flag high-value customers at risk of leaving, while there's still time to act." },
      { title: "Know what a customer is really worth", desc: "Lifetime value projections go beyond last purchase to show forward-looking value per customer and segment." },
      { title: "Built on your data, not personas", desc: "Segments reflect how your customers actually behave, not generic demographic assumptions." },
      { title: "Sharper, faster decisions", desc: "Give marketing, sales, and support teams clear segment priorities instead of one-size-fits-all campaigns." },
      { title: "Stays current", desc: "Customers are re-scored as new data comes in, so segments and LTV never go stale." }
    ],
    howItWorks: [
      { step: "01", title: "Bring your customer data together", desc: "Connect purchase, usage, and engagement history from wherever it lives today." },
      { step: "02", title: "Build the segments", desc: "Group customers by real behavior patterns, not assumptions." },
      { step: "03", title: "Model lifetime value", desc: "Project forward value per customer and per segment, with confidence ranges." },
      { step: "04", title: "Put it in front of your team", desc: "Hand off segments and scores your marketing, sales, and support teams can act on, refreshed as data updates." }
    ],
    faqs: [
      { question: "What data do we need for this?", answer: "Purchase or transaction history is the core input; usage, support, and engagement data sharpen the segments further." },
      { question: "How is this different from basic demographic segments?", answer: "Segments are built from actual behavior and value, not age or location, so they reflect how customers really act." },
      { question: "How is lifetime value calculated?", answer: "We model expected future value from historical spend, frequency, and retention patterns for each segment." },
      { question: "How often do segments and scores update?", answer: "On a cadence that fits your data flow, so segments and value scores reflect recent behavior, not a one-time snapshot." },
      { question: "Can this plug into our CRM or marketing tools?", answer: "Yes. Segments and scores are built to be exported or connected into the systems your teams already use." }
    ],
    cta: {
      title: "Ready to know who your best customers really are?",
      btnText: "Get started"
    }
  },

  "operational-dashboards": {
    hero: {
      title: "See how the business is operating at a glance",
      subtitle: "Most teams pull numbers from five different places and still can't answer a simple question fast. Operational Performance Dashboards bring the metrics that actually matter into one live view, built around how your business runs, not a generic template.",
      btn1: "Book a scoping call",
      btn2: "See a sample dashboard"
    },
    overTitle: "OPERATIONAL PERFORMANCE DASHBOARDS",
    intro: {
      title: "Operational performance dashboard.",
      desc: "Operational Performance Dashboards give you a single, live view of how the business is actually running. This includes the handful of numbers that matter, updated automatically, instead of scattered across spreadsheets, disconnected tools, and end-of-month reports. Rather than a generic analytics template, each dashboard is built around the metrics your team already tracks (or should be), pulled from your existing systems and presented in a way that's fast to read and easy to act on.\n\nThe goal isn't more data. It's the right data, visible at a glance, so problems surface early and decisions don't wait for someone to manually pull a report."
    },
    whatWeDo: [
      { title: "Metric definition workshop", desc: "We work with your team to identify which numbers actually drive decisions, and cut the ones that don't." },
      { title: "Data source integration", desc: "Connect your dashboard directly to the systems you already use (CRM, ERP, POS, spreadsheets, databases) so numbers update without manual entry." },
      { title: "Custom dashboard build", desc: "A dashboard designed around your operations and reporting rhythm, not a one-size-fits-all template." },
      { title: "Role-based views", desc: "Different teams see the metrics relevant to them, from frontline operations to leadership summaries." },
      { title: "Alerts and thresholds", desc: "Get flagged automatically when a metric moves outside the range that matters, instead of finding out at month-end." }
    ],
    valueFromCks: [
      { title: "See problems while you can still fix them", desc: "Live numbers surface issues days or weeks before a monthly report would." },
      { title: "One source of truth", desc: "Everyone works from the same numbers, instead of arguing over whose spreadsheet is right." },
      { title: "Time back for your team", desc: "No more manually pulling and reformatting reports every week." },
      { title: "Decisions backed by data, not instinct", desc: "Leadership gets a clear, current view instead of a stale snapshot." },
      { title: "Built around how you actually operate", desc: "Metrics and views reflect your business, not a generic dashboard template." },
      { title: "Scales as you grow", desc: "Add new metrics, data sources, or views as the business changes." }
    ],
    howItWorks: [
      { step: "01", title: "Identify what matters", desc: "A short workshop to define the metrics that actually drive your decisions." },
      { step: "02", title: "Connect your data", desc: "Link the systems your numbers already live in, so the dashboard updates on its own." },
      { step: "03", title: "Build the dashboard", desc: "Design a live view suited to how your teams actually work and report." },
      { step: "04", title: "Launch and refine", desc: "Roll it out, then adjust metrics and views as your business and reporting needs evolve." }
    ],
    faqs: [
      { question: "What data sources can you connect to?", answer: "Most common business systems including CRMs, ERPs, POS systems, spreadsheets, and databases. If it holds structured data, it can usually feed the dashboard." },
      { question: "How long does it take to build?", answer: "It depends on how many data sources and metrics are involved, but most dashboards go from workshop to live view within a few weeks." },
      { question: "Can different teams see different things?", answer: "Yes. Dashboards can be role-based, so operations sees operational detail while leadership sees a summary view." },
      { question: "What if our data isn't clean?", answer: "We flag data quality issues during setup so you know what's reliable and what needs fixing before it feeds the dashboard." },
      { question: "Do we need technical staff to maintain it?", answer: "No. Once built, the dashboard updates automatically from your connected data sources there is no manual maintenance required day to day." }
    ],
    cta: {
      title: "Ready to see your business at glance?",
      btnText: "Talk with an expert"
    }
  },

  "statistical-analysis": {
    hero: {
      title: "Statistical analysis and hypothesis testing",
      subtitle: "Most business decisions are made on assumptions. Statistical Analysis & Hypothesis Testing replaces the guesswork with evidence, so you know what's actually driving your results and what's just noise.",
    },
    overTitle: "STATISTICAL ANALYSIS & HYPOTHESIS TESTING",
    intro: {
      title: "Find out what actually drives your results",
      desc: "Statistical Analysis & Hypothesis Testing determines whether the patterns you're seeing in your data are real and meaningful, or just random variation. Instead of assuming a price change, marketing campaign, or process tweak worked because results moved afterward, we test it using rigorous statistical methods to confirm whether there's genuine evidence behind the outcome, and how confident you can be in it."
    },
    whatWeDo: [
      { title: "Hypothesis framing", desc: "We help translate a business question into a testable hypothesis." },
      { title: "A/B and experiment analysis", desc: "Evaluate test results properly, including sample size, statistical significance, and practical significance." },
      { title: "Correlation and driver analysis", desc: "Identify which variables actually move your key metrics, and rule out the ones that just look related." },
      { title: "Significance testing", desc: "T-tests, chi-square tests, ANOVA, regression analysis, and other methods matched to your specific question and data." },
      { title: "Confidence-backed reporting", desc: "Results delivered with clear confidence levels and plain-language interpretation, not just p-values." }
    ],
    valueFromCks: [
      { title: "Stop acting on noise", desc: "Know whether a result is a real pattern or random variation before you invest further in it." },
      { title: "Make the case with evidence", desc: "Back decisions with statistically sound analysis your stakeholders and leadership can trust." },
      { title: "Avoid costly false positives", desc: "Catch \"wins\" that aren't actually significant before you scale a change that doesn't work." },
      { title: "Understand true drivers", desc: "Find out what's actually moving your results, not just what's correlated with them." },
      { title: "Clear, plain-language answers", desc: "Get findings explained in terms your team can act on, not just statistical jargon." },
      { title: "Rigor without the overhead", desc: "Access proper statistical methodology without needing an in-house statistician." }
    ],
    howItWorks: [
      { step: "01", title: "Define the question", desc: "Turn your business question into a clear, testable hypothesis." },
      { step: "02", title: "Assess the data", desc: "Check whether you have enough clean data to test the hypothesis properly." },
      { step: "03", title: "Run the analysis", desc: "Apply the statistical method suited to your question, data type, and sample size." },
      { step: "04", title: "Report the findings", desc: "Deliver results with confidence levels and clear, actionable interpretation." }
    ],
    faqs: [
      { question: "What kinds of questions can this answer?", answer: "Anything where you're asking whether a change, campaign, or difference actually caused an effect from A/B test results to performance differences between regions or time periods." },
      { question: "How much data do we need?", answer: "It depends on the test and the effect size you're looking for, but we'll tell you upfront if your sample size is too small to draw a reliable conclusion." },
      { question: "What's the difference between correlation and causation here?", answer: "Correlation shows two things move together; our analysis is designed to test whether one is actually driving the other, or if both are being influenced by something else." },
      { question: "What if the result isn't statistically significant?", answer: "That's still a useful answer; it tells you not to act on the assumption yet, and can save you from scaling a change that doesn't actually work." },
      { question: "Do we need a background in statistics to understand the results?", answer: "No. Findings are delivered in plain language with the statistical backing available if your team wants to dig deeper." }
    ],
    cta: {
      title: "Ready to find out what’s actually driving your results?",
      btnText: "Talk with an expert"
    }
  },

  "data-validation": {
    hero: {
      title: "Data you can actually rely on",
      subtitle: "Bad data doesn't announce itself; it just quietly ends up in a report, a forecast, or a board deck, and nobody notices until the numbers don't add up. Data Validation & Quality Audits catch the errors, gaps, and inconsistencies before they reach a decision-maker."
    },
    overTitle: "DATA VALIDATION & QUALITY AUDITS",
    intro: {
      title: "Trust the numbers before you present them",
      desc: "Data Validation & Quality Audits systematically check your data for the errors that quietly undermine everything built on top of it ; duplicate records, missing values, inconsistent formats, broken relationships between systems, outdated entries, and figures that don't reconcile. Instead of finding out something's wrong when a number in a report looks off, you catch it at the source.\n\nThis isn't a one-time cleanup. It's a structured audit process and where useful, an ongoing validation layer that gives you a clear picture of how trustworthy your data is, what needs fixing, and where the recurring problems come from, so the same errors don't keep resurfacing."
    },
    whatWeDo: [
      { title: "Data quality audit", desc: "A full assessment of your key datasets against accuracy, completeness, consistency, and timeliness." },
      { title: "Duplicate and anomaly detection", desc: "Identify duplicate records, outliers, and values that don't match expected patterns." },
      { title: "Cross-system reconciliation", desc: "Check that numbers match across the systems that should agree (CRM vs. finance, sales vs. inventory, and so on)." },
      { title: "Validation rule design", desc: "Build the checks and rules that catch bad data automatically going forward, not just this one time." },
      { title: "Root-cause reporting", desc: "Trace recurring errors back to where they enter the system, so you can fix the source, not just the symptom." }
    ],
    valueFromCks: [
      { title: "Catch errors before they cost you", desc: "Find the mistake before it's in a board deck, not after someone questions it in the meeting." },
      { title: "Trust your own numbers", desc: "Know your reports and dashboards are built on data that's actually been checked." },
      { title: "Stop firefighting the same issues", desc: "Root-cause findings mean the same data errors don't keep quietly reappearing." },
      { title: "Fewer surprises during audits", desc: "Cleaner, more consistent data holds up better under external or regulatory scrutiny." },
      { title: "Better decisions, less second-guessing", desc: "Leadership can act on numbers without wondering if they're accurate." },
      { title: "A clear view of your data health", desc: "Know exactly where your data is strong and where it needs work, instead of guessing." }
    ],
    howItWorks: [
      { step: "01", title: "Scope the audit", desc: "Identify which datasets and systems matter most and what \"accurate\" needs to mean for each." },
      { step: "02", title: "Run the checks", desc: "Assess completeness, consistency, duplicates, and cross-system alignment against your data." },
      { step: "03", title: "Report the findings", desc: "A clear breakdown of what's wrong, how significant it is, and where it's coming from." },
      { step: "04", title: "Fix and prevent", desc: "Resolve the issues found, and put validation rules in place so they don't keep coming back." }
    ],
    faqs: [
      { question: "What kinds of data can you audit?", answer: "Most structured business data including CRM records, financial data, inventory, transaction logs, spreadsheets, and data warehouses." },
      { question: "Will this disrupt our current reporting?", answer: "No. The audit runs alongside your existing reporting; nothing needs to pause while we assess your data." },
      { question: "What happens after the audit?", answer: "You get a clear report of the issues found and their severity, plus a recommendation on what to fix first and how to prevent recurrence." },
      { question: "Can you set up ongoing checks, not just a one-time audit?", answer: "Yes. We can build validation rules that run automatically, so new errors get flagged as they enter your systems." },
      { question: "How long does an audit take?", answer: "It depends on the size and number of datasets involved, but most audits are scoped and completed within a few weeks." }
    ],
    cta: {
      title: "Trust your numbers before you present them",
      btnText: "Talk with an expert"
    }
  },
  "financial-modelling-valuations": {
    hero: {
      title: "The numbers behind every big decision",
      subtitle: "Funding rounds, M&A, and board approvals all come down to a model someone has to defend under scrutiny. Financial Modelling & Valuations builds that model right the first time, so it holds up when investors, acquirers, or the board start asking questions."
    },
    overTitle: "FINANCIAL MODELLING & VALUATIONS",
    intro: {
      title: "Models built to survive diligence",
      desc: "Financial Modelling & Valuations builds the financial models and valuations that sit behind your biggest capital decisions : fundraising, M&A, board approvals, and strategic planning. This isn't a generic template with your numbers dropped in; it's a model built around your business, your assumptions, and the specific decision it needs to support, structured so every number can be traced back and defended.\n\nWhether you need a valuation to anchor a funding round, a three-statement model to support a board decision, or deal modelling for an acquisition, the output is built to withstand scrutiny from investors, acquirers, auditors, or your own board."
    },
    whatWeDo: [
      { title: "Three-statement financial models", desc: "Fully linked income statement, balance sheet, and cash flow models built around your actual business drivers." },
      { title: "Valuation analysis", desc: "DCF, comparable company, and precedent transaction valuations, matched to what the decision actually requires." },
      { title: "Fundraising models", desc: "Cap tables, dilution scenarios, and investor-ready models that support your raise." },
      { title: "M&A and deal modelling", desc: "Accretion/dilution analysis, deal structuring support, and integration modelling for acquisitions." },
      { title: "Scenario and sensitivity analysis", desc: "Stress-test key assumptions so decision-makers see the range of outcomes, not just one number." },
      { title: "Board-ready materials", desc: "Models and outputs packaged clearly enough to present and defend in the room." }
    ],
    valueFromCks: [
      { title: "A model that holds up under scrutiny", desc: "Built with defensible assumptions and traceable logic, not just formulas that produce a plausible-looking number." },
      { title: "Stronger position at the table", desc: "Walk into a funding round, M&A negotiation, or board meeting backed by a model you can explain and stand behind." },
      { title: "Clarity on what actually drives value", desc: "Understand which assumptions and levers matter most to your valuation, not just the final figure." },
      { title: "Faster, more confident capital decisions", desc: "Give your board or investors a clear basis to decide on, instead of a black-box spreadsheet." },
      { title: "Built around your business", desc: "Models reflect your actual structure, unit economics, and growth plan, not a generic industry template." },
      { title: "Support when it matters most", desc: "Access senior financial modelling expertise for high-stakes decisions, without building the capability in-house." }
    ],
    howItWorks: [
      { step: "01", title: "Scope the decision", desc: "Understand what the model needs to support (fundraising, M&A, board approval) and what \"right\" looks like for that decision." },
      { step: "02", title: "Build the model", desc: "Construct the financial model or valuation around your actual data, assumptions, and business drivers." },
      { step: "03", title: "Stress-test the assumptions", desc: "Run scenarios and sensitivities so you understand the range of outcomes, not just the base case." },
      { step: "04", title: "Present and defend", desc: "Deliver a model and supporting materials built to hold up when investors, acquirers, or your board start asking questions." }
    ],
    faqs: [
      { question: "What kinds of decisions is this used for?", answer: "Most commonly fundraising rounds, M&A transactions, board-level capital decisions, and strategic planning that requires a defensible valuation or financial model." },
      { question: "Do you build the model from scratch or work with what we have?", answer: "Either. We can build a new model from your data or review and rebuild an existing one so it holds up to scrutiny." },
      { question: "What valuation methods do you use?", answer: "Whichever fits the situation : DCF, comparable company analysis, precedent transactions, or a combination, depending on your stage and the decision being made." },
      { question: "How involved does our team need to be?", answer: "We'll need input on your business drivers and assumptions, but we lead the modelling work so it doesn't pull your team away from running the business." },
      { question: "Can you present the model directly to our board or investors?", answer: "Yes, either directly or by preparing your team with materials built to be presented and defended in the room." }
    ],
    cta: {
      title: "Ready to build a model that holds up in the room?",
      btnText: "Talk to an expert"
    }
  },
  "budget-development-variance-analysis": {
    hero: {
      title: "Know you’re off plan before it’s too late",
      subtitle: "Most budgets are built once a year and quietly ignored until year-end, when the surprises are too big to fix. Budget Development & Variance Analysis builds realistic budgets and tracks performance against them continuously, so gaps get caught while there's still time to act."
    },
    overTitle: "BUDGET DEVELOPMENT & VARIANCE ANALYSIS",
    intro: {
      title: "Set budgets that actually hold up",
      desc: "Budget Development & Variance Analysis builds budgets grounded in your actual historical performance and operating reality, not last year's number with a flat percentage added on. Once the budget is set, we track actual performance against it on an ongoing basis, flagging variances as they emerge instead of waiting for a year-end reconciliation to reveal the gap.\n\nThis isn't a static annual exercise. It's a working budget you can revisit through the year, paired with variance reporting that tells you not just that you're off plan, but where, by how much, and why so corrections happen while they're still cheap to make."
    },
    whatWeDo: [
      { title: "Budget development", desc: "Build department, project, or company-wide budgets grounded in historical performance and realistic assumptions." },
      { title: "Driver-based modelling", desc: "Tie budget lines to the actual operational drivers behind them (headcount, volume, pricing) rather than flat percentage increases." },
      { title: "Variance tracking and reporting", desc: "Ongoing comparison of actual performance against budget, with variances flagged as they happen." },
      { title: "Root-cause variance analysis", desc: "Understand why a variance occurred, not just that one exists, so the same gap doesn't reappear next period." },
      { title: "Rolling forecast updates", desc: "Revise the budget through the year as conditions change, instead of locking it in once and ignoring reality." }
    ],
    valueFromCks: [
      { title: "Catch surprises early, not at year-end", desc: "Variances get flagged as they happen, with enough time to actually respond." },
      { title: "Budgets built on evidence, not guesswork", desc: "Grounded in your real historical performance and operating drivers, not arbitrary targets." },
      { title: "Understand the \"why\" behind every gap", desc: "Root-cause analysis means you know what drove a variance, not just its size." },
      { title: "A budget that flexes with the business", desc: "Rolling updates mean the budget stays relevant instead of going stale by Q2." },
      { title: "Accountability without the blame game", desc: "Clear variance reporting gives teams a shared, factual basis for the conversation." },
      { title: "More confident planning cycles", desc: "Walk into next year's budget with a track record of what actually happened against plan." }
    ],
    howItWorks: [
      { step: "01", title: "Understand the business", desc: "Review historical performance and the operational drivers behind each budget line." },
      { step: "02", title: "Build the budget", desc: "Construct a realistic, driver-based budget for the department, project, or business as a whole." },
      { step: "03", title: "Track performance", desc: "Compare actuals against budget on an ongoing basis, flagging variances as they emerge." },
      { step: "04", title: "Analyze and adjust", desc: "Investigate the root cause of significant variances and update the forecast as conditions change." }
    ],
    faqs: [
      { question: "How is this different from a standard annual budget?", answer: "It's grounded in your actual operational drivers rather than a flat percentage increase, and it's tracked and revisited through the year instead of set once and forgotten." },
      { question: "How often is variance reporting delivered?", answer: "On a cadence that fits how your business operates — commonly monthly, though it can be more or less frequent depending on the budget line and how fast conditions change." },
      { question: "Can this work at the department level, not just company-wide?", answer: "Yes. Budgets and variance tracking can be built for individual departments, projects, or the business as a whole." },
      { question: "What happens when a significant variance shows up?", answer: "We investigate the root cause and report back on what drove it, so you understand the \"why,\" not just the size of the gap." },
      { question: "Do you update the budget through the year, or is it locked in?", answer: "It can be updated on a rolling basis as conditions change, so the budget stays a useful working tool rather than a static document." }
    ],
    cta: {
      title: "Ready to catch the budget surprises before the year ends?",
      btnText: "Talk with an expert"
    }
  },

  "capex-planning-roi-modelling": {
    hero: {
      title: "Know the return before you commit capital",
      subtitle: "Major spending decisions are hard to reverse once capital is committed. Capital Expenditure Planning & ROI Modelling evaluates the expected return before you commit, so the decision is grounded in numbers, not conviction."
    },
    overTitle: "CAPITAL EXPENDITURE PLANNING & ROI MODELLING",
    intro: {
      title: "Set budgets that actually hold up",
      desc: "Capital Expenditure Planning & ROI Modelling evaluates major spending decisions against their expected financial return, before the capital is committed. Instead of a business case built on optimism and round numbers, you get a rigorous model of the costs, expected returns, payback period, and risk involved, so the decision can be made with a clear view of what it's actually likely to deliver.\n\nThis applies anywhere a significant, hard-to-reverse spending decision is on the table. The model shows not just whether a project is expected to pay off, but how sensitive that outcome is to the assumptions behind it so you know how much confidence to place in the number before you commit."
    },
    whatWeDo: [
      { title: "Capital project evaluation", desc: "Build the financial case for a specific capital investment, from cost structure through to expected return." },
      { title: "ROI and payback modelling", desc: "Calculate ROI, payback period, NPV, and IRR so returns can be compared on a consistent basis." },
      { title: "Scenario and risk analysis", desc: "Stress-test the investment against best case, worst case, and the assumptions that matter most." },
      { title: "Capital project prioritization", desc: "Compare multiple proposed investments against each other so limited capital goes to the highest-return options." },
      { title: "Post-investment tracking", desc: "Measure actual returns against the original model once capital is deployed, to sharpen future decisions." }
    ],
    valueFromCks: [
      { title: "Commit capital with confidence", desc: "Know the expected return and payback period before the decision is made, not after." },
      { title: "Avoid costly overcommitment", desc: "Catch a weak business case before capital is locked into a project that won't pay off." },
      { title: "Compare investments on equal footing", desc: "Prioritize competing capital projects using consistent, comparable financial metrics." },
      { title: "Understand what could go wrong", desc: "Sensitivity analysis shows how the return holds up if key assumptions don't play out as expected." },
      { title: "A model the board can trust", desc: "Decisions backed by a defensible, evidence-based case, not a gut-feel business case." },
      { title: "Sharper decisions over time", desc: "Post-investment tracking means each new capital decision is informed by how past ones actually performed." }
    ],
    howItWorks: [
      { step: "01", title: "Define the investment", desc: "Understand the capital project, its costs, and the outcome it's expected to deliver." },
      { step: "02", title: "Build the model", desc: "Construct the ROI, payback, and return model based on realistic costs and expected performance." },
      { step: "03", title: "Stress-test the case", desc: "Run scenarios and sensitivities to see how the return holds up under different conditions." },
      { step: "04", title: "Decide and track", desc: "Support the capital decision, then track actual performance against the model once deployed." }
    ],
    faqs: [
      { question: "What kinds of capital decisions is this used for?", answer: "Equipment purchases, facility investments, technology upgrades, expansion projects, and any other significant, hard-to-reverse spending decision." },
      { question: "What financial metrics do you calculate?", answer: "Typically ROI, payback period, NPV, and IRR, matched to what's most relevant for the specific investment and decision." },
      { question: "Can you help us choose between multiple projects, not just evaluate one?", answer: "Yes. Competing capital projects can be modelled on a consistent basis so they can be compared and prioritized against each other." },
      { question: "What if our cost or return assumptions turn out to be wrong?", answer: "Sensitivity analysis is built into the model, so you can see upfront how the return changes if key assumptions shift." },
      { question: "Do you track how the investment performs after we commit?", answer: "Yes, where useful. Comparing actual performance against the original model helps sharpen future capital decisions." }
    ],
    cta: {
      title: "Ready to model the return before you commit",
      btnText: "Talk with an expert"
    }
  },
  "pricing-strategy-margin-optimisation": {
    hero: {
      title: "Competitive pricing without the margin hit",
      subtitle: "Most pricing gets set once, based on competitors or gut feel, and then never revisited even as costs and demand shift. Pricing Strategy & Margin Optimisation Models find the pricing structure that protects your margin while staying competitive, grounded in your actual cost base and market position."
    },
    overTitle: "PRICING STRATEGY & MARGIN OPTIMISATION",
    intro: {
      title: "Price for margin not just for the market",
      desc: "Pricing Strategy & Margin Optimisation Models find the pricing structure that holds margin without pricing you out of the market. We model how price changes actually flow through to margin, volume, and revenue accounting for your real cost structure, customer price sensitivity, and competitive position so pricing decisions are backed by numbers, not instinct.\n\nThis applies to new product pricing, repricing an existing line, discount and promotion strategy, or segment-level pricing where different customers can reasonably support different prices. The output is a pricing structure you can defend, along with a clear view of the margin impact before you make the change."
    },
    whatWeDo: [
      { title: "Cost and margin analysis", desc: "Build a clear picture of your true cost base per product or service line, so pricing is set against real margin, not assumptions." },
      { title: "Price sensitivity modelling", desc: "Estimate how demand responds to price changes, so you can see the volume trade-off before committing." },
      { title: "Competitive pricing analysis", desc: "Benchmark your pricing against the market to understand where you have room to move and where you don't." },
      { title: "Segment and tiered pricing design", desc: "Model pricing structures that capture more value from different customer segments without alienating price-sensitive ones." },
      { title: "Discount and promotion modelling", desc: "Evaluate the true margin cost of discounting strategies before they go live." }
    ],
    valueFromCks: [
      { title: "Protect margin without guessing", desc: "Know the volume trade-off of a price change before you make it, not after." },
      { title: "Price with evidence, not instinct", desc: "Decisions backed by your actual cost base and demand data, not a competitor's sticker price." },
      { title: "Find the room you didn't know you had", desc: "Cost and sensitivity analysis often reveal pricing flexibility that gut-feel pricing missed." },
      { title: "Stop discounting into your own margin", desc: "See the real cost of promotions before they run, not in the quarter-end numbers." },
      { title: "A pricing structure that scales", desc: "Segment and tiered models built to capture value across your whole customer base, not a single flat price." },
      { title: "Confidence at the leadership table", desc: "Present a pricing recommendation backed by a defensible model, not a hunch." }
    ],
    howItWorks: [
      { step: "01", title: "Understand the cost base", desc: "Build a clear picture of true costs and current margin per product or service line." },
      { step: "02", title: "Model price sensitivity", desc: "Estimate how volume and demand respond to different pricing scenarios." },
      { step: "03", title: "Test the pricing structure", desc: "Model the margin and revenue impact of proposed pricing, tiers, or discount strategies." },
      { step: "04", title: "Recommend and monitor", desc: "Deliver a pricing recommendation with the margin case behind it, and track performance once it's live." }
    ],
    faqs: [
      { question: "What kinds of pricing decisions is this used for?", answer: "New product pricing, repricing an existing line, discount and promotion strategy, and segment or tiered pricing design." },
      { question: "How do you estimate how demand will respond to a price change?", answer: "Using your historical sales and pricing data where available, combined with market and competitive benchmarks to fill in the gaps." },
      { question: "Will this tell us the exact price to charge?", answer: "It gives you a modelled recommendation and the margin trade-offs behind it — the final call is a business decision, but it's made with the numbers in front of you." },
      { question: "Can this help with discount and promotion strategy, not just base pricing?", answer: "Yes. We model the actual margin cost of discounts and promotions before they run, so you know what a promotion really costs." },
      { question: "Do you monitor pricing performance after a change goes live?", answer: "Where useful, yes. Tracking actual performance against the model sharpens future pricing decisions." }
    ],
    cta: {
      title: "Find the pricing that protects your margin",
      btnText: "Talk with an expert"
    }
  },
  "cash-flow-forecasting-stress-testing": {
    hero: {
      title: "Plan for volatility before it hits",
      subtitle: "Most cash flow forecasts show one version of the future, the one everyone hopes plays out. Cash Flow Forecasting & Stress Testing models best- and worst-case scenarios alongside it, so leadership can plan for volatility before it becomes a crisis."
    },
    overTitle: "CASH FLOW FORECASTING & STRESS TESTING",
    intro: {
      title: "Price for margin not just for the market",
      desc: "Cash Flow Forecasting & Stress Testing projects your cash position forward and tests it against a range of scenarios not just the expected case, but the conditions that could actually strain it: a slow quarter, a delayed receivable, a cost spike, a lost customer. Instead of finding out you have a cash problem when it's already happening, you see it coming with enough lead time to act.\n\nThis isn't a single static forecast. It's a working model that shows how your cash position holds up under different conditions, so leadership knows the range of outcomes to plan for, not just the base case everyone is hoping for."
    },
    whatWeDo: [
      { title: "Cash flow forecasting", desc: "Build a rolling cash flow forecast grounded in your actual receivables, payables, and operating cycle." },
      { title: "Scenario modelling", desc: "Model best-case, base-case, and worst-case cash positions so you can see the full range of outcomes." },
      { title: "Stress testing", desc: "Test the forecast against specific shocks for example: a revenue drop, a delayed payment or a cost increase to see how much runway you actually have." },
      { title: "Liquidity and runway analysis", desc: "Understand exactly how much buffer you have before cash becomes a real constraint." },
      { title: "Covenant and funding readiness", desc: "Model cash position against lender covenants or funding requirements so surprises don't show up at the worst time." }
    ],
    valueFromCks: [
      { title: "See the crunch before it hits", desc: "Stress-tested forecasts flag cash strain while there's still time to respond." },
      { title: "Plan for the range, not just the average", desc: "Leadership sees best-case and worst-case outcomes, not a single number that assumes everything goes right." },
      { title: "Know your real runway", desc: "A clear, current view of how long your cash lasts under different conditions." },
      { title: "Fewer last-minute scrambles", desc: "Early warning on tightening cash means financing or cost decisions happen on your timeline, not in a panic." },
      { title: "Confidence with lenders and investors", desc: "Walk into a funding conversation or covenant review with a forecast that's already been stress-tested." },
      { title: "A forecast that stays current", desc: "Updated on a rolling basis as actuals come in, not built once and left stale." }
    ],
    howItWorks: [
      { step: "01", title: "Build the base forecast", desc: "Construct a rolling cash flow forecast from your actual receivables, payables, and operating patterns." },
      { step: "02", title: "Define the scenarios", desc: "Identify the best-case, worst-case, and specific shocks worth testing against." },
      { step: "03", title: "Stress-test the model", desc: "Run the forecast against each scenario to see how cash position and runway respond." },
      { step: "04", title: "Monitor and update", desc: "Track actuals against the forecast and refresh scenarios as conditions change." }
    ],
    faqs: [
      { question: "How far out does the forecast typically look?", answer: "It depends on the business, but most rolling forecasts cover 13 weeks to 12 months, updated regularly as actuals come in." },
      { question: "What kinds of scenarios do you stress-test against?", answer: "Common ones include a revenue slowdown, delayed customer payments, a cost spike, or loss of a major customer plus any specific risks relevant to your business." },
      { question: "Can this help with lender or investor conversations?", answer: "Yes. A stress-tested forecast is often exactly what lenders and investors want to see before extending funding or assessing covenant risk." },
      { question: "How often is the forecast updated?", answer: "On a rolling basis, commonly weekly or monthly depending on how tight your cash position is and how fast conditions change." },
      { question: "Do we need to be in a cash crunch already for this to be useful?", answer: "No. It's most valuable before a crunch happens, giving you the lead time to act instead of reacting under pressure." }
    ],
    cta: {
      title: "Ready to know how your cash position holds up under pressure?",
      btnText: "Talk with an expert"
    }
  },

  "deep-dive-sector-reports": {
    hero: {
      title: "Know the sector before you commit to it",
      subtitle: "Capital and policy decisions in unfamiliar territory are only as good as the research behind them. Deep-Dive Sector Reports give leadership the data, context, and analysis needed to understand a sector (health, climate, education, and beyond) before the decision gets made."
    },
    overTitle: "DEEP-DIVE SECTOR REPORTS",
    intro: {
      title: "Beyond the surface briefing",
      desc: "Deep-Dive Sector Reports are in-depth research reports built to give leadership a genuine understanding of a specific sector before a major capital allocation or policy decision. Rather than a surface-level briefing, each report combines quantitative data, market and regulatory context, key players, trends, and risks into a single, structured resource built around the specific decision it needs to inform.\n\nThis applies wherever leadership is moving into unfamiliar territory: entering a new sector, evaluating an investment, informing policy, or assessing risk in an area the organization doesn't have deep in-house expertise in. The goal is to provide the depth and specificity needed to make a high-stakes decision with confidence."
    },
    whatWeDo: [
      { title: "Sector scoping", desc: "Define exactly what the decision needs to know, so the research is targeted rather than generic." },
      { title: "Quantitative and market research", desc: "Gather and analyze the data, market sizing, and trends relevant to the sector and decision." },
      { title: "Regulatory and policy context", desc: "Map the regulatory landscape, policy environment, and relevant compliance considerations." },
      { title: "Competitive and stakeholder landscape", desc: "Identify the key players, dynamics, and stakeholders shaping the sector." },
      { title: "Risk and opportunity analysis", desc: "Surface the risks, dependencies, and opportunities leadership needs to weigh before deciding." }
    ],
    valueFromCks: [
      { title: "Decide with real understanding, not a surface briefing", desc: "Go into a capital or policy decision with genuine depth on the sector." },
      { title: "Reduce the risk of unfamiliar territory", desc: "Spot the risks and dependencies specific to a sector before they surface as problems." },
      { title: "Move faster with confidence", desc: "A structured report shortens the ramp-up time your team would otherwise spend building this understanding from scratch." },
      { title: "Evidence-based positioning", desc: "Back capital or policy decisions with research your board, investors, or stakeholders can trust." },
      { title: "Context you won't get from a generic industry report", desc: "Research scoped to your specific decision, not a repackaged off-the-shelf overview." },
      { title: "Access to depth without building it in-house", desc: "Get sector expertise for a specific decision without hiring or building the capability internally." }
    ],
    howItWorks: [
      { step: "01", title: "Scope the report", desc: "We define the sector, the decision it needs to inform, and the specific questions leadership needs answered." },
      { step: "02", title: "Conduct the research", desc: "Gathering of quantitative data, market context, regulatory landscape, and stakeholder dynamics." },
      { step: "03", title: "Analyze and synthesize", desc: "Pull the research into a structured narrative that connects findings back to the decision at hand." },
      { step: "04", title: "Deliver and brief", desc: "Present the report, with the option to brief leadership directly on the findings and their implications." }
    ],
    faqs: [
      { question: "What sectors do you cover?", answer: "A wide range including health, climate, education, and beyond. Reports are scoped to the sector and decision at hand rather than limited to a fixed list." },
      { question: "How is this different from a generic industry report?", answer: "It's built around your specific decision: the questions leadership actually needs answered rather than a repackaged, one-size-fits-all overview." },
      { question: "How long does a report take to produce?", answer: "It depends on the scope and depth required, but most sector reports are delivered within a few weeks of scoping." },
      { question: "Can you present the findings directly to our board or leadership team?", answer: "Yes. Reports can be delivered as a written document, a presentation, or both, with a direct briefing available if useful." },
      { question: "Do you cover regulatory and policy context, or just market data?", answer: "Both. Reports typically combine quantitative market data with the regulatory, policy, and stakeholder context relevant to the decision." }
    ],
    cta: {
      title: "Ready to understand the sector before you commit?",
      btnText: "Talk to an expert"
    }
  },
  "emerging-trends-market-outlook": {
    hero: {
      title: "Move before the market does",
      subtitle: "By the time a shift is obvious, everyone's already reacting to it. Emerging Trends & Market Outlook Briefs track where a market or sector is heading, so decisions can be made ahead of the shift, not in response to it."
    },
    overTitle: "EMERGING TRENDS & MARKET OUTLOOK",
    intro: {
      title: "Stay ahead of the curve",
      desc: "Emerging Trends & Market Outlook Briefs are concise, forward-looking reports that track the signals of where a market or sector is heading. This includes shifting demand, emerging technologies, regulatory movement, competitive changes, and early indicators most organizations don't catch until they've already become the story. Rather than a lagging summary of what's already happened, these briefs are built to give leadership a genuine read on what's coming next.\n\nThis applies wherever staying ahead of a shift matters more than reacting to it ; entering a market, planning next year's strategy, evaluating a potential disruption, or simply keeping leadership current on a sector that moves faster than quarterly reviews can track. Briefs are kept concise and decision-focused."
    },
    whatWeDo: [
      { title: "Trend scanning and signal tracking", desc: "Monitor the early indicators across a market or sector before they become mainstream narrative." },
      { title: "Outlook synthesis", desc: "Pull scattered signals into a clear, forward-looking view of where things are likely headed." },
      { title: "Competitive and disruption watch", desc: "Track emerging players, technologies, or business models that could reshape the space." },
      { title: "Regulatory and policy horizon scanning", desc: "Flag policy and regulatory shifts on the horizon before they land." },
      { title: "Recurring or one-off briefs", desc: "Delivered as a standalone report or on an ongoing cadence, depending on how fast your market moves." }
    ],
    valueFromCks: [
      { title: "Move ahead of the shift", desc: "Make proactive decisions before structural market changes become industry-wide narratives." },
      { title: "High-signal, concise intelligence", desc: "Cut through commercial noise with decision-focused briefings leadership can act on quickly." },
      { title: "Early disruption detection", desc: "Spot challenger technologies and shifting customer behaviors before they impact revenue." }
    ],
    howItWorks: [
      { step: "01", title: "Define the focus", desc: "Identify the market, sector, or specific question the brief needs to inform." },
      { step: "02", title: "Scan and gather signals", desc: "Track the data, news, regulatory movement, and early indicators relevant to that focus." },
      { step: "03", title: "Synthesize the outlook", desc: "Pull the signals into a clear, forward-looking view of where things are likely heading." },
      { step: "04", title: "Deliver the brief", desc: "A concise report, with the option for an ongoing cadence to keep the outlook current." }
    ],
    faqs: [
      { question: "How is this different from a standard market research report?", answer: "It's forward-looking and concise by design built to flag what's coming next for a specific decision, not to catalog everything that's already happened." },
      { question: "Can this be a recurring service, not just a one-off?", answer: "Yes. Briefs can be delivered on an ongoing cadence monthly, quarterly, or whatever fits how fast your market moves." },
      { question: "How far ahead do these briefs typically look?", answer: "It varies by sector, but the focus is on emerging signals worth acting on now, not speculative long-range predictions." },
      { question: "What sectors or markets do you cover?", answer: "A wide range, scoped to whatever market or sector is relevant to your decision, rather than a fixed list." },
      { question: "How long is a typical brief?", answer: "Deliberately concise built to be read and acted on quickly, with more detail available if leadership wants to go deeper." }
    ],
    cta: {
      title: "Ready to see where the market is heading before it gets there?",
      btnText: "Talk to an expert"
    }
  },
  "regulatory-landscape-analyses": {
    hero: {
      title: "Regulatory clarity before you commit",
      subtitle: "Regulation rarely announces itself clearly, and by the time it's obvious, it's often already binding. Regulatory Landscape Analyses give you a clear, current map of the rules, obligations, and regulatory shifts that affect your strategy, investment, or market entry, before they catch you off guard."
    },
    overTitle: "REGULATORY LANDSCAPE ANALYSES",
    intro: {
      title: "A clear map of a complicated landscape",
      desc: "Regulatory Landscape Analyses map the rules, obligations, and regulatory movement relevant to a specific strategic decision Rather than a generic compliance checklist, each analysis is scoped to the decision at hand, covering the regulations that actually apply, the obligations they create, and the shifts on the horizon that could change the picture.\n\nThis matters most wherever regulation is complex, unfamiliar, or moving for example: new jurisdictions, regulated industries, or sectors facing active policy change. The goal is a clear, current picture leadership can act on."
    },
    whatWeDo: [
      { title: "Regulatory scoping", desc: "Identify exactly which rules, bodies, and jurisdictions are relevant to your specific decision." },
      { title: "Obligation mapping", desc: "Translate the applicable regulations into a clear picture of what they actually require of you." },
      { title: "Regulatory horizon scanning", desc: "Track upcoming regulatory or policy changes that could affect the decision." },
      { title: "Cross-jurisdiction comparison", desc: "Compare regulatory requirements across markets or jurisdictions you're evaluating." },
      { title: "Risk flagging", desc: "Surface the compliance risks and gray areas that carry the most weight for your decision." }
    ],
    valueFromCks: [
      { title: "Enter new territory with eyes open", desc: "Understand the regulatory obligations before you commit, not after you're already exposed." },
      { title: "Avoid costly compliance surprises", desc: "Spot the regulations that actually apply before they become a problem." },
      { title: "See what's coming, not just what's current", desc: "Horizon scanning means you're not caught off guard by a shift already in motion." },
      { title: "Compare markets on equal footing", desc: "Cross-jurisdiction analysis makes it possible to weigh regulatory burden as part of the decision." },
      { title: "A clear map, not a legal document", desc: "Findings delivered in a way leadership can actually use to decide, not a dense compliance file." },
      { title: "Confidence without an in-house regulatory team", desc: "Access the analysis you need for a specific decision without building the capability internally." }
    ],
    howItWorks: [
      { step: "01", title: "Scope the decision", desc: "Define the market, jurisdiction, or activity the analysis needs to cover." },
      { step: "02", title: "Map the regulatory landscape", desc: "Identify the applicable rules, bodies, and obligations relevant to the decision." },
      { step: "03", title: "Scan the horizon", desc: "Flag regulatory or policy shifts already in motion that could affect the picture." },
      { step: "04", title: "Deliver the analysis", desc: "A clear report connecting the regulatory landscape back to the decision at hand." }
    ],
    faqs: [
      { question: "What kinds of decisions is this used for?", answer: "Market entry, new jurisdiction expansion, investment decisions, product launches, and any strategic move into a regulated or unfamiliar regulatory environment." },
      { question: "Do you cover multiple jurisdictions in one analysis?", answer: "Yes. Cross-jurisdiction comparisons are common when you're weighing markets or regions against each other." },
      { question: "Is this a substitute for legal advice?", answer: "No. This gives leadership a clear strategic picture of the regulatory landscape; legal counsel should still review binding compliance decisions." },
      { question: "How current is the analysis?", answer: "Analyses include horizon scanning for regulatory or policy shifts already in motion, not just the rules as they stand today." },
      { question: "How long does an analysis take to produce?", answer: "It depends on the scope and number of jurisdictions involved, but most analyses are delivered within a few weeks of scoping." }
    ],
    cta: {
      title: "Ready to see the regulatory landscape before you commit?",
      btnText: "Talk to an expert"
    }
  },
  "best-practice-benchmarking": {
    hero: {
      title: "See yourself the way your peers would",
      subtitle: "Most organizations assume they know how they compare to peers and industry standards until someone actually measures it. Best Practice Benchmarking Studies provide a structured comparison against peers and global standards, showing exactly where performance stands and what closing the gap would take."
    },
    overTitle: "BEST PRACTICE BENCHMARKING STUDIES",
    intro: {
      title: "Know Exactly Where You Stand",
      desc: "Best Practice Benchmarking Studies compare your performance against relevant peers and recognized global standards, across the metrics and practices that actually matter for your industry. You get a structured, evidence-based picture of where you stand, where the gaps are, and what meaningful improvement would actually require.\n\nThis applies wherever leadership needs an honest external reference point : evaluating operational performance, assessing readiness for growth or investment, or building the case for a specific improvement initiative. The output isn't just a score; it's a clear, actionable view of the gap and the path to closing it."
    },
    whatWeDo: [
      { title: "Benchmark scoping", desc: "Identify the right peer set and standards to compare against, relevant to your industry and goals." },
      { title: "Data collection and comparison", desc: "Gather the performance data needed to build an accurate, apples-to-apples comparison." },
      { title: "Gap analysis", desc: "Pinpoint exactly where performance falls short of peers or best-practice standards, and by how much." },
      { title: "Root-cause diagnosis", desc: "Understand why the gap exists, not just that it does." },
      { title: "Improvement roadmap", desc: "Outline what closing the gap would actually take, prioritized by impact and effort." }
    ],
    valueFromCks: [
      { title: "Replace assumption with evidence", desc: "Know exactly how you compare, instead of relying on internal impressions." },
      { title: "See the gap clearly, not vaguely", desc: "A structured comparison shows precisely where and how far behind (or ahead) you are." },
      { title: "Prioritize improvement efforts", desc: "Focus resources on the gaps that matter most, instead of guessing where to start." },
      { title: "Build the case for change", desc: "A credible external benchmark makes it easier to secure buy-in for improvement initiatives." },
      { title: "Understand what \"good\" actually looks like", desc: "Comparison against real peers and standards, not an arbitrary internal target." },
      { title: "A path forward, not just a scorecard", desc: "The roadmap shows what closing the gap would realistically take." }
    ],
    howItWorks: [
      { step: "01", title: "Define the scope", desc: "We identify the metrics, practices, or functions to benchmark and the peer set or standards to compare against." },
      { step: "02", title: "Gather the data", desc: "Performance data for your organization and the relevant comparison group will be collected." },
      { step: "03", title: "Analyze the gap", desc: "Compare performance and diagnose where and why gaps exist." },
      { step: "04", title: "Build the roadmap", desc: "Outline what closing the gap would take, prioritized by impact and effort." }
    ],
    faqs: [
      { question: "How do you choose the peer set or standards to compare against?", answer: "Based on your industry, size, and goals we scope the comparison group to be genuinely relevant, not just convenient." },
      { question: "What if we don't have data as detailed as our peers?", answer: "We flag data gaps upfront and work with what's available, while noting where a fuller comparison would need better data." },
      { question: "Does this only cover financial performance?", answer: "No. Benchmarking can cover operational, financial, or process performance, depending on what's relevant to your goals." },
      { question: "Will this tell us exactly how to close the gap?", answer: "It gives you a prioritized roadmap of what closing the gap would take; implementation support can be scoped separately if needed." },
      { question: "How current are the peer and standard comparisons?", answer: "Benchmarks are built using current, relevant data at the time of the study, so the comparison reflects where the market actually stands now." }
    ],
    cta: {
      title: "Ready to see how you compare with your peers?",
      btnText: "Talk to an expert"
    }
  },
  "thought-leadership-whitepapers": {
    hero: {
      title: "Say something worth citing",
      subtitle: "Most thought leadership says nothing new and gets forgotten by the next scroll. Thought Leadership & Whitepaper Development builds research-backed publications that position your organisation as a credible voice on the issues that matter most to your sector, not just another opinion piece."
    },
    overTitle: "THOUGHT LEADERSHIP & WHITEPAPERS",
    intro: {
      title: "Publications that command industry attention",
      desc: "Thought Leadership & Whitepaper Development builds research-backed publications : whitepapers, reports, and long-form pieces that establish your organisation as a genuine, credible voice on the issues your sector actually cares about. Rather than repackaged opinion or generic content, each publication is grounded in real research, data, and analysis, built to be cited, shared, and taken seriously by the audience that matters to you.\n\nThis applies wherever credibility and visibility matter (positioning ahead of a funding round, entering a new market, informing policy conversations, or simply building the kind of reputation that gets your organisation into rooms it wouldn't otherwise be in). The goal isn't volume of content; it's a small number of publications substantial enough to actually move your standing in the sector."
    },
    whatWeDo: [
      { title: "Topic and angle development", desc: "Identify the issues your sector actually cares about, and the angle that makes your organisation the right voice on it." },
      { title: "Research and data analysis", desc: "Ground the publication in real research, data, and evidence, not recycled opinion." },
      { title: "Whitepaper and report writing", desc: "Structured, credible long-form writing built to be read, cited, and shared by a serious audience." },
      { title: "Editorial and fact review", desc: "Ensure the publication holds up to scrutiny before it goes out under your name." },
      { title: "Distribution-ready formatting", desc: "Deliver publications formatted and packaged for the channels and audiences you need to reach." }
    ],
    valueFromCks: [
      { title: "Be seen as credible, not promotional", desc: "Research-backed publications carry weight that marketing content doesn't." },
      { title: "Get cited and shared", desc: "Substantive work gets picked up and referenced in ways generic content never does." },
      { title: "Open doors that visibility alone won't", desc: "Credibility built through real thought leadership can open conversations, partnerships, and opportunities." },
      { title: "Say something that hasn't already been said", desc: "Genuine research surfaces an angle worth publishing, not a repeat of what's already out there." },
      { title: "Free your team's time", desc: "Get a rigorous publication without pulling internal staff away from their day-to-day work." },
      { title: "A body of work that compounds", desc: "Each publication adds to a growing case for your organisation as a credible voice in the space." }
    ],
    howItWorks: [
      { step: "01", title: "Define the angle", desc: "Identify the issue, audience, and angle that positions your organisation as a credible voice." },
      { step: "02", title: "Research the topic", desc: "Gather the data, evidence, and analysis the publication will be built on." },
      { step: "03", title: "Write and review", desc: "Draft the publication and put it through editorial and fact review before it goes out." },
      { step: "04", title: "Format and deliver", desc: "Package the final publication for the channels and audiences you need to reach." }
    ],
    faqs: [
      { question: "What kinds of publications do you produce?", answer: "Whitepapers, in-depth reports, and other long-form research-backed pieces, scoped to your sector and goals." },
      { question: "Do we need to provide the research, or do you conduct it?", answer: "We conduct the research and analysis; your team's input on direction and internal expertise strengthens the final piece." },
      { question: "How do you make sure this doesn't read like generic content marketing?", answer: "By grounding every publication in real research and data, and by developing an angle that says something not already being said." },
      { question: "Can this be published under our brand, or does CKS co-author it?", answer: "It's built to be published under your organisation's name; co-authorship or attribution can be arranged if that fits your goals better." },
      { question: "How long does a publication take to produce?", answer: "It depends on the depth of research required, but most whitepapers or reports are delivered within a few weeks of scoping." }
    ],
    cta: {
      title: "Become the voice your sector can trust",
      btnText: "Talk to an expert"
    }
  },
  "inventory-stock-planning": {
    hero: {
      title: "Stop choosing between stockouts and overstock",
      subtitle: "Most inventory decisions are made on habit order what you ordered last time, plus a buffer. Inventory Optimisation & Stock Planning Systems replace that guesswork with a system built on your actual demand patterns, so you carry the stock you need."
    },
    overTitle: "INVENTORY OPTIMISATION & STOCK PLANNING SYSTEMS",
    intro: {
      title: "Stock Planning Built on Data",
      desc: "Inventory Optimisation & Stock Planning Systems build a data-driven approach to how much stock you hold, where, and when to reorder it replacing gut-feel buffers with a system grounded in your actual demand patterns, lead times, and cost structure. The goal is to hit the balance most businesses struggle with: enough stock to avoid missed sales, without so much that cash sits idle on a shelf.\n\nThis applies across single-location and multi-location inventory, seasonal and steady-state demand, and any business where stockouts and overstock are both live risks. The output is a working system with reorder points, safety stock levels, and planning logic."
    },
    whatWeDo: [
      { title: "Demand pattern analysis", desc: "Understand how demand actually moves for each stock keeping unit (SKU) or product line, including seasonality and trend." },
      { title: "Reorder point and safety stock modelling", desc: "Calculate the stock levels and reorder triggers that balance service level against carrying cost." },
      { title: "Multi-location stock optimisation", desc: "Model stock allocation across warehouses or locations to reduce redundant buffers." },
      { title: "ABC and SKU-level prioritization", desc: "Focus planning effort where it matters most, rather than treating every SKU the same." },
      { title: "Ongoing planning system design", desc: "Build a reusable planning approach your team can run going forward, not a one-time analysis." }
    ],
    valueFromCks: [
      { title: "Fewer stockouts, less lost revenue", desc: "Stock levels grounded in real demand mean you're less likely to run out when it matters." },
      { title: "Free up cash tied in excess inventory", desc: "Right-sized stock levels mean less capital sitting idle in the warehouse." },
      { title: "Plan with confidence through seasonality", desc: "Demand modelling accounts for seasonal swings instead of reacting to them after the fact." },
      { title: "Less firefighting, more planning", desc: "A working reorder system reduces the day-to-day scramble of manual stock decisions." },
      { title: "Smarter allocation across locations", desc: "See where stock should actually sit, instead of duplicating buffers at every site." },
      { title: "A system that keeps working", desc: "Built as a repeatable planning approach, not a one-time fix that goes stale." }
    ],
    howItWorks: [
      { step: "01", title: "Understand demand", desc: "Analyze historical demand, seasonality, and lead times at the SKU and location level." },
      { step: "02", title: "Model stock levels", desc: "Calculate reorder points and safety stock that balance service level against carrying cost." },
      { step: "03", title: "Design the planning system", desc: "Build the reusable logic and process your team will run going forward." },
      { step: "04", title: "Launch and refine", desc: "Roll out the system, then adjust as demand patterns and business conditions change." }
    ],
    faqs: [
      { question: "Does this work for multi-location inventory, or just one warehouse?", answer: "Both. The model can optimize stock allocation across multiple locations, not just a single site." },
      { question: "How do you handle seasonal or unpredictable demand?", answer: "Demand analysis accounts for seasonality and trend directly, so reorder points and safety stock reflect how demand actually moves, not a flat average." },
      { question: "Do we need new software or systems to use this?", answer: "Not necessarily. The planning logic can often run within your existing inventory or ERP system rather than requiring new tools." },
      { question: "What if some SKUs matter more than others?", answer: "ABC-style prioritization focuses the most rigorous planning on the SKUs that matter most, while keeping lower-impact items simple." },
      { question: "Is this a one-time analysis or an ongoing system?", answer: "It's built as a reusable planning system your team can run going forward, with the option for ongoing support as demand patterns shift." }
    ],
    cta: {
      title: "Stop choosing between stockouts and overstock",
      btnText: "Talk to us"
    }
  },
  "retail-kpi-dashboards": {
    hero: {
      title: "Retail KPIs That Tell You Something Useful",
      subtitle: "Most retail reporting is a pile of spreadsheets nobody has time to read, built store by store with no consistent way to compare. Retail KPI Dashboards & Reporting Frameworks bring the numbers that actually matter into one live, consistent view across every location, so performance is visible at a glance, not buried in a monthly file."
    },
    overTitle: "RETAIL KPI DASHBOARDS & REPORTING FRAMEWORKS",
    intro: {
      title: "Retail Performance, Visible at a Glance",
      desc: "Retail KPI Dashboards & Reporting Frameworks give you a single, consistent view of how every store or location is actually performing in terms of sales, margin, conversion, foot traffic, inventory turn, labor cost, and whatever else drives your business. This is updated automatically instead of stitched together from separate spreadsheets each month. Rather than a generic retail analytics template, the framework is built around the KPIs that actually matter to your business and how your stores operate.\n\nThis matters most for multi-location retailers where comparing performance across stores, regions, or formats is difficult without a consistent structure. The output is a live dashboard and a reporting framework your team can trust and use."
    },
    whatWeDo: [
      { title: "KPI definition workshop", desc: "Identify the metrics that actually drive decisions for your retail business, and standardize how they're calculated across every location." },
      { title: "Data source integration", desc: "Connect POS, inventory, labor, and e-commerce systems so the dashboard updates without manual entry." },
      { title: "Store and regional comparison views", desc: "See performance side by side across locations, regions, or formats on a consistent basis." },
      { title: "Custom dashboard build", desc: "A live dashboard designed around your reporting rhythm, from daily store checks to monthly leadership reviews." },
      { title: "Alerts and exception reporting", desc: "Get flagged automatically when a store or metric moves outside the expected range." }
    ],
    valueFromCks: [
      { title: "Spot underperformance early", desc: "A struggling store or category shows up in the dashboard, not three months later in a review." },
      { title: "Compare stores on equal footing", desc: "Consistent KPI definitions mean you're comparing performance, not just formatting differences." },
      { title: "One source of truth across locations", desc: "Store managers, regional leads, and head office all work from the same numbers." },
      { title: "Time back for store and regional teams", desc: "No more manually compiling reports from separate systems every week." },
      { title: "Decisions backed by current data", desc: "Leadership sees what's happening now, not a stale monthly snapshot." },
      { title: "Scales as you grow", desc: "Add new stores, regions, or metrics without rebuilding the reporting framework from scratch." }
    ],
    howItWorks: [
      { step: "01", title: "Identify what matters", desc: "A short workshop to define the KPIs that actually drive decisions across your stores." },
      { step: "02", title: "Connect your data", desc: "Link POS, inventory, labor, and other systems so the dashboard updates on its own." },
      { step: "03", title: "Build the dashboard", desc: "Design store, regional, and leadership views suited to how your teams actually report." },
      { step: "04", title: "Launch and refine", desc: "Roll it out across locations, then adjust metrics and views as the business evolves." }
    ],
    faqs: [
      { question: "What data sources can you connect to?", answer: "Most common retail systems including POS platforms, inventory and ERP systems, labor scheduling tools, e-commerce platforms, and spreadsheets where needed." },
      { question: "Can this handle dozens or hundreds of store locations?", answer: "Yes. The framework is built to scale across multiple locations and regions with consistent KPI definitions throughout." },
      { question: "How is this different from what our POS system already reports?", answer: "POS reporting is usually siloed by store or transaction; this brings everything into one consistent, comparable view across your whole retail footprint." },
      { question: "Can store managers and head office see different views?", answer: "Yes. Dashboards can be role-based, so store teams see store-level detail while regional and leadership views show the broader picture." },
      { question: "How long does it take to build?", answer: "It depends on how many data sources and locations are involved, but most frameworks go from workshop to live dashboard within a few weeks." }
    ],
    cta: {
      title: "See every store’s performance at a glance.",
      btnText: "Talk to us"
    }
  },
  "customer-analytics-segmentation": {
    hero: {
      title: "Turn customer behavior into strategy",
      subtitle: "Most customer data gets collected and never really used, sitting in a CRM or POS system as numbers nobody's connected into a pattern. Customer Analytics & Behavior Segmentation turns that raw activity into a clear picture of how your customers actually behave, so marketing, merchandising, and service decisions are based on real patterns, not assumptions."
    },
    overTitle: "CUSTOMER ANALYTICS & BEHAVIOR SEGMENTATION",
    intro: {
      title: "Retail Performance, Visible at a Glance",
      desc: "Customer Analytics & Behavior Segmentation analyzes how customers actually interact with your business and groups them into segments based on real behavior rather than broad demographics. Instead of treating your customer base as one audience or guessing at personas, you get a clear, evidence-based picture of the distinct behavior patterns actually present in your data.\n\nThis applies to purchase behavior, browsing and engagement patterns, channel preference, and response to promotions or campaigns. The output is a practical view of what drives each group, so marketing, merchandising, and customer experience decisions can be built around how customers actually behave."
    },
    whatWeDo: [
      { title: "Behavioral data analysis", desc: "Analyze purchase history, browsing activity, channel usage, and engagement patterns to find the real behavior groups in your customer base." },
      { title: "Segmentation model development", desc: "Build segments based on actual behavior, not assumed personas or basic demographics." },
      { title: "Purchase and journey pattern mapping", desc: "Understand the paths customers take from first interaction to repeat purchase, and where they commonly drop off." },
      { title: "Campaign and channel response analysis", desc: "See how different segments respond to promotions, channels, and messaging." },
      { title: "Segment activation support", desc: "Translate segments into something your marketing and merchandising teams can actually act on." }
    ],
    valueFromCks: [
      { title: "Stop marketing to everyone the same way", desc: "Target messaging, offers, and channels to how each segment actually behaves." },
      { title: "Understand what actually drives loyalty", desc: "See the behavior patterns that separate repeat customers from one-time buyers." },
      { title: "Spend smarter on acquisition and retention", desc: "Focus effort and budget on the segments and behaviors that drive the most value." },
      { title: "Fewer wasted campaigns", desc: "Know which segments respond to which channels and offers before you spend on the next one." },
      { title: "A single, evidence-based view of your customers", desc: "Replace scattered assumptions with one clear picture everyone can work from." },
      { title: "Segments that reflect reality", desc: "Grouped by what customers actually do, not by generic demographic buckets." }
    ],
    howItWorks: [
      { step: "01", title: "Gather the behavioral data", desc: "Pull together purchase, browsing, channel, and engagement data across your systems." },
      { step: "02", title: "Identify the patterns", desc: "Analyze the data to find the real behavior groups present in your customer base." },
      { step: "03", title: "Build the segments", desc: "Define segments around actual behavior, with a clear picture of what drives each one." },
      { step: "04", title: "Activate the insight", desc: "Hand off segments and findings your marketing, merchandising, and CX teams can put into action." }
    ],
    faqs: [
      { question: "What data do you need for this?", answer: "Purchase history is the core input; browsing, channel, and engagement data sharpen the segmentation further where available." },
      { question: "How is this different from basic customer segmentation?", answer: "It's built from actual behavior patterns in your data, not assumed personas or demographic categories, so the segments reflect how customers really act." },
      { question: "Can this help with marketing campaigns directly?", answer: "Yes. Segments come with a view of how each group responds to channels and offers, which can inform targeting and campaign design." },
      { question: "Do you need access to our marketing or CRM platforms?", answer: "Typically yes, to pull the behavioral data needed we can work with whatever systems you currently use to track customer activity." },
      { question: "How often should segments be updated?", answer: "It depends on how fast customer behavior shifts in your business, but segments are commonly refreshed on a quarterly or biannual basis." }
    ],
    cta: {
      title: "What’s really driving your customer’s behavior",
      btnText: "Find out"
    }
  },
  "discount-strategy-promotions": {
    hero: {
      title: "Stop Discounting Into Your Own Margin",
      subtitle: "Most promotions get run on instinct. Discount Strategy & Promotional Effectiveness Analysis shows what each promotion actually did to sales, margin, and customer behavior, so the next one is planned, not guessed at."
    },
    overTitle: "DISCOUNT STRATEGY & PROMOTIONAL EFFECTIVENESS",
    intro: {
      title: "Discount with a plan",
      desc: "Discount Strategy & Promotional Effectiveness Analysis measures what your discounts and promotions actually deliver and whether it drove genuine new demand or just pulled forward sales that would have happened anyway. Instead of judging a promotion by gut feel or a surface-level sales bump, you get a clear read on whether it was actually worth running.\n\nThis applies to seasonal sales, markdown strategy, loyalty and member discounts, bundle and BOGO offers, and any recurring promotional calendar. The output isn't just a scorecard on past promotions, it's a framework for deciding which types of discounts are worth repeating and which are quietly eating into your margin."
    },
    whatWeDo: [
      { title: "Promotional performance analysis", desc: "Measure the true sales lift, margin impact, and cost of past promotions and discounts." },
      { title: "Incrementality testing", desc: "Separate genuine incremental demand from sales that would have happened anyway, at a lower margin." },
      { title: "Customer behavior analysis", desc: "See how discounts affect repeat purchase behavior and whether they train customers to wait for the next sale." },
      { title: "Discount strategy design", desc: "Build a promotional approach and calendar grounded in what actually drives profitable results." },
      { title: "Markdown optimization", desc: "Model markdown timing and depth to move inventory while protecting as much margin as possible." }
    ],
    valueFromCks: [
      { title: "Know the real cost of every promotion", desc: "See the true margin impact before deciding to run it again." },
      { title: "Stop repeating discounts that don't pay off", desc: "Cut the promotions that move volume but quietly erode profitability." },
      { title: "Understand what's incremental and what isn't", desc: "Know whether a promotion created new demand or just discounted sales you'd have made anyway." },
      { title: "Protect customer perception of value", desc: "Avoid training your best customers to wait for the next markdown." },
      { title: "A promotional calendar with a plan behind it", desc: "Decisions grounded in performance data, not habit or the calendar from last year." },
      { title: "Move inventory without giving away more margin than necessary", desc: "Markdown strategy designed to balance clearance against profitability." }
    ],
    howItWorks: [
      { step: "01", title: "Review past promotions", desc: "Analyze the sales, margin, and customer behavior data from your promotional history." },
      { step: "02", title: "Measure incrementality", desc: "Separate genuine incremental lift from sales that would have happened without the discount." },
      { step: "03", title: "Identify what works", desc: "Determine which discount types, depths, and timing actually deliver profitable results." },
      { step: "04", title: "Build the go-forward strategy", desc: "Design a promotional approach and calendar grounded in what the data shows." }
    ],
    faqs: [
      { question: "What kinds of promotions can you analyze?", answer: "Seasonal sales, markdowns, loyalty and member discounts, bundle and BOGO offers, and any other recurring promotional activity." },
      { question: "How do you know if a sale was incremental or would have happened anyway?", answer: "By comparing behavior against a baseline (e.g., similar periods, similar customers, or control groups where available) to isolate the actual lift the promotion caused." },
      { question: "Can this help us plan future promotions, not just review past ones?", answer: "Yes. Analysis of past performance feeds directly into a go-forward strategy for which discounts, depths, and timing are worth repeating." },
      { question: "Does this apply to online, in-store, or both?", answer: "Both, where data is available. Behavior can differ by channel, so cross-channel analysis is part of the picture where relevant." },
      { question: "How much promotional history do you need to analyze?", answer: "More history gives a clearer read, but even a handful of past campaigns can surface useful patterns to start from." }
    ],
    cta: {
      title: "See what your promotions are really delivering",
      btnText: "Talk to an expert"
    }
  },
  "operational-efficiency-audits": {
    hero: {
      title: "See the Inefficiency Before It Becomes the Norm",
      subtitle: "Inefficiency doesn't show up as one obvious problem; it's a dozen small delays, workarounds, and manual steps that quietly cost time and money every day. Operational Efficiency Audits & Process Improvement Plans map exactly where those losses are happening and what fixing them would actually take."
    },
    overTitle: "OPERATIONAL EFFICIENCY AUDITS & PROCESS IMPROVEMENT PLANS",
    intro: {
      title: "Every Bottleneck Has a Cost Behind It",
      desc: "Operational Efficiency Audits & Process Improvement Plans systematically examine how work actually gets done to find the bottlenecks, redundant steps, manual workarounds, and handoff delays that quietly drain time and money. Instead of a vague sense that \"things could run better,\" you get a clear map of where the inefficiency actually lives, how much it's costing, and what a realistic fix looks like.\n\nThis applies to any recurring operational process (order fulfilment, production, service delivery, back-office workflows, approvals) anywhere friction has built up over time without anyone stepping back to look at the whole picture. The output is a prioritized improvement plan, not just a list of problems."
    },
    whatWeDo: [
      { title: "Process mapping", desc: "Document how work actually flows today, including the informal workarounds that don't show up in any manual." },
      { title: "Bottleneck and delay analysis", desc: "Identify where time is being lost, and quantify the cost of each delay or inefficiency." },
      { title: "Root-cause diagnosis", desc: "Understand why the inefficiency exists, not just where it shows up." },
      { title: "Improvement plan development", desc: "Build a prioritized set of process changes, ranked by impact and effort to implement." },
      { title: "Implementation support", desc: "Help put the highest-priority changes into practice, not just hand over a report." }
    ],
    valueFromCks: [
      { title: "See exactly where time and money are being lost", desc: "A clear map of inefficiency, not a vague sense that something's off." },
      { title: "Fix the cause, not just the symptom", desc: "Root-cause diagnosis means changes actually stick instead of resurfacing later." },
      { title: "Prioritize what actually matters", desc: "Focus effort on the fixes with the biggest impact, not everything at once." },
      { title: "Free up capacity without adding headcount", desc: "Efficiency gains often unlock capacity that would otherwise require hiring." },
      { title: "A plan your team can actually execute", desc: "Practical, prioritized recommendations, not an abstract efficiency framework." },
      { title: "An outside view of processes you're too close to see clearly", desc: "Fresh eyes catch friction that's become invisible from the inside." }
    ],
    howItWorks: [
      { step: "01", title: "Map the process", desc: "Document how the work actually happens today, including informal workarounds." },
      { step: "02", title: "Identify the bottlenecks", desc: "Pinpoint where delays, redundancies, and inefficiencies occur, and quantify their cost." },
      { step: "03", title: "Diagnose the root cause", desc: "Understand why each inefficiency exists, not just where it shows up." },
      { step: "04", title: "Build and support the plan", desc: "Deliver a prioritized improvement plan, with implementation support where useful." }
    ],
    faqs: [
      { question: "What kinds of processes can you audit?", answer: "Any recurring operational workflow; order fulfilment, production, service delivery, back-office processes, and approval chains among them." },
      { question: "Will this disrupt our day-to-day operations?", answer: "No. The audit is designed to run alongside normal operations, typically through observation, data review, and team interviews." },
      { question: "Do you just deliver a report, or help implement the changes?", answer: "Both are available. We deliver a prioritized plan, and can support implementation of the highest-priority changes if useful." },
      { question: "How do you quantify the cost of an inefficiency?", answer: "By measuring the time, resources, or delay involved and translating it into a cost figure your team can weigh against the effort to fix it." },
      { question: "How long does an audit typically take?", answer: "It depends on the scope and number of processes involved, but most audits are completed within a few weeks." }
    ],
    cta: {
      title: "How much is inefficiency actually costing you?",
      btnText: "Find out"
    }
  },
  "ai-search-optimisation": {
    hero: {
      title: "Rank on AI search engines like ChatGPT, Claude & Perplexity.",
      subtitle: "We help brands win in AI search and get them to appear on Perplexity, Claude, Gemini, and more, driving visibility where your customers search."
    },
    overTitle: "AI SEARCH OPTIMISATION",
    intro: {
      title: "Win AI overviews, answer boxes and build a qualified pipeline.",
      desc: "We build an end-to-end search presence that performs across traditional search and AI-driven discovery. That means: fixing technical and indexing friction, restructuring your site around high-intent questions, creating \"answer-ready\" content that engines can lift cleanly, and strengthening your brand’s authority signals so AI systems confidently reference you."
    },
    whatWeDo: [
      { title: "AEO technical audit", desc: "Spot the technical issues stopping search engines from reading your site." },
      { title: "AEO competitive analysis", desc: "See what your competitors are doing in AI search that you're not." },
      { title: "Content intent analysis", desc: "Understand what your potential customers are actually searching for." },
      { title: "AEO strategy development", desc: "A practical roadmap for showing up in AI and Google search results." },
      { title: "FAQ optimization", desc: "Get your answers to show up when buyers ask questions online." },
      { title: "Site architecture", desc: "Structure your website so search engines can easily understand it." },
      { title: "Internal link building", desc: "Connect your pages so visitors and search engines find more of your content." },
      { title: "Dynamic copy updates", desc: "Keep your website copy fresh and relevant as search trends change." },
      { title: "Schema markup and structured data", desc: "Help AI and Google understand exactly what your business is about." },
      { title: "AI search performance monitoring", desc: "See how often your brand appears in AI-generated answers over time." },
      { title: "Ongoing monitoring and goal setup", desc: "Regular check-ins to measure growth and adjust what needs fixing." },
      { title: "Authority and citation analysis", desc: "Check if trusted sources are referencing and linking to your brand." }
    ],
    valueFromCks: [
      { title: "Win AI answer citations", desc: "Get referenced cleanly by LLMs and search engines like Perplexity, ChatGPT, and Claude." },
      { title: "High-intent buyer traffic", desc: "Target users asking specific commercial questions rather than generic informational queries." },
      { title: "Future-proof SEO architecture", desc: "Build structural authority that satisfies both legacy Google algorithms and modern generative engines." }
    ],
    howItWorks: [
      { step: "01", title: "Discovery", desc: "We review how you currently show up across Google and AI answers. We audit your technical SEO, check what's indexed, what's broken, and what content is missing. (Output: Search and AI visibility baseline, an overall audit report)." },
      { step: "02", title: "Assessment", desc: "We score your pages against what buyers actually search for, compare your coverage to competitors, and flag weak pages that need rewriting rather than more content. (Output: Performance gap report, prioritised topic and page list)." },
      { step: "03", title: "Planning", desc: "We turn the findings into a practical plan: site structure improvements, a topic plan grouped by buyer questions, content templates, and a measurement framework tied to leads, not just rankings. (Output: Operational search playbook, content templates, KPI framework)." },
      { step: "04", title: "Implementation", desc: "We ship the first set of improvements, fix the biggest technical blockers, publish high-priority pages, and set up tracking so you can see what search is producing. (Output: Tracking dashboard, weekly iteration routine)." }
    ],
    faqs: [],
    cta: {
      title: "Win AI search before your competitors do",
      btnText: "Talk to an expert"
    }
  },
  "brand-positioning-narrative": {
    hero: {
      title: "Build a narrative to survive scrutiny.",
      subtitle: "Brand positioning is usually built for a general audience and falls flat the moment it's in front of an investor, regulator, or enterprise buyer. Brand Positioning & Narrative Strategy builds the positioning and story that resonates with the stakeholders who actually make high-stakes decisions, not just the ones scrolling a feed."
    },
    overTitle: "BRAND POSITIONING & NARRATIVE STRATEGY",
    intro: {
      title: "Positioning built for investors",
      desc: "Brand Positioning & Narrative Strategy builds the positioning, messaging, and story built specifically for the audiences that matter most to serious business outcomes ; investors, regulators, enterprise buyers, and other high-stakes stakeholders. Rather than a general consumer-facing brand story, this is positioning built to hold up under scrutiny: to make the case clearly, credibly, and consistently in a funding pitch, a regulatory conversation, or an enterprise sales cycle.\n\nThis applies wherever your organisation needs to be understood and trusted by a specific, sophisticated audience The output is a coherent narrative framework your leadership and teams can use consistently, wherever the stakes are highest."
    },
    whatWeDo: [
      { title: "Stakeholder-specific positioning", desc: "Define how your organisation should be positioned differently for investors, regulators, and enterprise stakeholders, based on what each actually cares about." },
      { title: "Narrative development", desc: "Build what you do, why it matters, and why it's credible grounded in substance." },
      { title: "Messaging frameworks", desc: "Translate the narrative into consistent messaging your leadership, sales, and communications teams can actually use." },
      { title: "Competitive and market context", desc: "Position your story relative to how the market and competitors are currently being understood." },
      { title: "Materials alignment", desc: "Ensure pitch decks, investor materials, and key stakeholder communications reflect the same coherent narrative." }
    ],
    valueFromCks: [
      { title: "Be understood by the people who make the decision", desc: "Positioning built for investors, regulators, or enterprise buyers, not a generic audience." },
      { title: "A story that holds up under scrutiny", desc: "Narrative built on substance, so it doesn't fall apart under a hard question." },
      { title: "Consistency across every high-stakes conversation", desc: "Leadership, sales, and investor materials all tell the same coherent story." },
      { title: "Stronger positioning in competitive situations", desc: "A clear, credible narrative differentiates you when stakes and scrutiny are highest." },
      { title: "Confidence walking into the room", desc: "Leadership has a story they trust and can defend, not something assembled the night before a pitch." },
      { title: "A framework that scales", desc: "One narrative foundation that can flex across investor decks, regulatory conversations, and enterprise pitches." }
    ],
    howItWorks: [
      { step: "01", title: "Understand the audiences", desc: "Identify the specific investors, regulators, or enterprise stakeholders the narrative needs to resonate with." },
      { step: "02", title: "Develop the narrative", desc: "Build the core story and positioning grounded in your actual substance and differentiation." },
      { step: "03", title: "Build the messaging framework", desc: "Translate the narrative into consistent messaging for different materials and conversations." },
      { step: "04", title: "Align the materials", desc: "Apply the narrative across pitch decks, key documents, and stakeholder communications." }
    ],
    faqs: [
      { question: "How is this different from standard brand or marketing positioning?", answer: "It's built specifically for high-stakes, sophisticated audiences (investors, regulators, enterprise buyers) rather than a general consumer-facing brand story." },
      { question: "Do you write our pitch deck or investor materials directly?", answer: "We can, or we can build the narrative and messaging framework for your team to apply. Scope depends on what you need." },
      { question: "Can this work for multiple audiences at once, like investors and regulators?", answer: "Yes. Positioning can be tailored per audience while staying grounded in one coherent underlying narrative." },
      { question: "Do we need to already have a clear story, or can you help find it?", answer: "No existing story is required. Part of the process is identifying the substance and differentiation worth building the narrative around." },
      { question: "How long does this typically take?", answer: "It depends on scope, but most narrative and positioning projects are delivered within a few weeks." }
    ],
    cta: {
      title: "Your next pitch deserves more than a tagline",
      btnText: "Let’s talk"
    }
  },
  "executive-thought-leadership": {
    hero: {
      title: "Your Expertise Deserves a Platform",
      subtitle: "Executive & Thought Leadership builds the founder or executive presence that consistently opens doors with investors, policymakers, and enterprise clients, not just generates likes."
    },
    overTitle: "EXECUTIVE & THOUGHT LEADERSHIP",
    intro: {
      title: "Be the Name People Already Trust in the Room",
      desc: "Executive & Thought Leadership builds a founder or executive's public presence and reputation with the specific stakeholders who matter most to the business; this includes investors, policymakers, regulators, and enterprise clients. Rather than generic personal branding, this is a deliberate, substance-first presence: a point of view, a body of visible work, and consistent positioning that means people in the room already know who you are and what you stand for before the meeting starts.\n\nThis applies wherever an executive's personal credibility directly affects business outcomes. The output isn't a content calendar; it's a coherent, sustained presence built around real expertise, positioned in front of the audiences that actually make decisions."
    },
    whatWeDo: [
      { title: "Positioning and point-of-view development", desc: "Define the executive's core expertise, angle, and the specific stakeholders it needs to resonate with." },
      { title: "Thought leadership content", desc: "Develop articles, commentary, and long-form pieces that establish genuine authority." },
      { title: "Speaking and platform strategy", desc: "Identify and prepare for the panels, conferences, and forums that put the executive in front of the right audience." },
      { title: "Media and press positioning", desc: "Build relationships and messaging that support credible media coverage and commentary opportunities." },
      { title: "Consistency across channels", desc: "Align LinkedIn, press, speaking, and written content so the executive's presence tells one coherent story." }
    ],
    valueFromCks: [
      { title: "Open high-stakes doors", desc: "Build an executive presence that commands immediate respect from investors, regulators, and enterprise buyers." },
      { title: "Substance over vanity metrics", desc: "Position around genuine industry expertise rather than generic viral engagement." },
      { title: "Turnkey executive ghostwriting", desc: "High-level commentary produced without pulling leadership away from operational duties." }
    ],
    howItWorks: [
      { step: "01", title: "Define the positioning", desc: "Identify the executive's core expertise and the specific audiences it needs to reach." },
      { step: "02", title: "Build the presence", desc: "Develop the content, commentary, and platform strategy to establish that positioning publicly." },
      { step: "03", title: "Place and publish", desc: "Pursue the speaking opportunities, media placements, and publications that reach the right stakeholders." },
      { step: "04", title: "Sustain and refine", desc: "Maintain a consistent presence over time, adjusting as goals and audiences evolve." }
    ],
    faqs: [
      { question: "Does the executive need to already have a public profile to start?", answer: "No. Part of the process is building the positioning and presence from wherever you're currently starting." },
      { question: "How much of the executive's own time does this require?", answer: "We lead the strategy, writing, and outreach; the executive's time is mainly needed for input on expertise and occasional review, not day-to-day execution." },
      { question: "Can this focus on a specific audience, like investors or regulators, rather than general visibility?", answer: "Yes. Positioning and platform strategy are built around whichever stakeholders matter most to your goals." },
      { question: "Do you handle media relationships and speaking opportunities directly?", answer: "Yes, where useful from identifying opportunities to supporting outreach and preparation." },
      { question: "How long does it take to build real visibility?", answer: "Meaningful presence typically builds over months, not weeks; we can prioritize near-term opportunities alongside the longer-term strategy." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Let’s talk"
    }
  },
  "seo-website-optimisation": {
    hero: {
      title: "SEO That The Leadership Can Actually Act On",
      subtitle: "SEO & Website Optimization builds the channel strategy and performance measurement that connects visibility to pipeline, so leadership can act on it, not just admire it."
    },
    overTitle: "SEO & WEBSITE OPTIMISATION",
    intro: {
      title: "Start optimizing for revenue",
      desc: "SEO & Website Optimization builds and measures the organic channel strategy that turns search visibility into actual business pipeline, not just traffic and keyword rankings. This covers technical SEO, content and site structure, and conversion-focused optimization, all tied back to reporting that shows leadership what the channel is actually delivering, not just how it's trending.\n\nThis applies wherever organic search is, or should be, a meaningful source of pipeline, not a side project. The output isn't a rankings report; it's a working channel strategy with clear measurement, so leadership can see what's working, what isn't, and where to invest next."
    },
    whatWeDo: [
      { title: "Technical SEO audit", desc: "Identify the site issues holding back visibility and organic performance, from crawlability to site speed." },
      { title: "Content and keyword strategy", desc: "Build a content approach targeted at the searches your actual buyers are making, not just high-volume terms." },
      { title: "Site and conversion optimization", desc: "Improve how the site turns organic visitors into leads or pipeline, not just traffic." },
      { title: "Performance measurement framework", desc: "Connect SEO activity to pipeline and revenue metrics leadership actually cares about." },
      { title: "Ongoing reporting and iteration", desc: "Track what's working and adjust the strategy based on real performance, not a set-and-forget plan." }
    ],
    valueFromCks: [
      { title: "Pipeline over vanity metrics", desc: "Align organic search directly to pipeline generation and qualified revenue rather than empty clicks." },
      { title: "Fix hidden technical friction", desc: "Eliminate indexing barriers, performance lags, and architectural flaws stopping your pages from ranking." },
      { title: "High-intent buyer capture", desc: "Target commercial search queries that attract real decision-makers instead of casual browsers." },
      { title: "Actionable executive reporting", desc: "Provide clear, revenue-tied visibility reports built for boardroom decision-making." }
    ],
    howItWorks: [
      { step: "01", title: "Audit the current state", desc: "Assess technical health, content performance, and conversion paths across the site." },
      { step: "02", title: "Build the strategy", desc: "Develop a content and technical roadmap targeted at the searches and outcomes that matter most." },
      { step: "03", title: "Implement and optimize", desc: "Execute the technical fixes, content plan, and conversion improvements." },
      { step: "04", title: "Measure and report", desc: "Track performance against pipeline and revenue metrics, and refine the strategy accordingly." }
    ],
    faqs: [
      { question: "How is this different from a typical SEO agency retainer?", answer: "Reporting is tied to pipeline and revenue outcomes, not just rankings and traffic, so leadership can see what the channel is actually delivering." },
      { question: "How long does it take to see results?", answer: "SEO is a medium-to-long-term channel; meaningful movement typically takes a few months, though technical fixes can show impact sooner." },
      { question: "Do you handle both technical SEO and content?", answer: "Yes. The strategy covers technical site health, content and keyword strategy, and conversion optimization together." },
      { question: "Can you measure SEO's actual contribution to pipeline, not just traffic?", answer: "Yes. The performance framework is built specifically to connect organic activity to pipeline and revenue, not just visibility metrics." },
      { question: "Do we need an existing SEO program, or can you start from scratch?", answer: "Either. We can build a program from the ground up or audit and improve an existing one." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Let’s talk"
    }
  },
  "website-development": {
    hero: {
      title: "A Website That Will Carry Your Brand",
      subtitle: "Website Development designs and builds a site that carries your brand properly, fast, secure, and easy to update, so it holds up as you grow instead of needing a rebuild in a year."
    },
    overTitle: "WEBSITE DEVELOPMENT",
    intro: {
      title: "A Site You Won't Need to Rebuild in a Year",
      desc: "Website Development designs and builds a website that reflects your brand properly and is built to last, not just to launch. This covers design, development, and the technical foundation your team can actually update without needing a developer every time. Rather than a templated build that looks fine on day one and becomes a liability by year two, the site is built to grow with the business.\n\nThis applies to new website builds, redesigns of an outdated or underperforming site, and platform migrations where the current setup has become a constraint. The output is a fast, secure, maintainable foundation your team can keep improving on."
    },
    whatWeDo: [
      { title: "Brand-aligned design", desc: "Design a site that actually reflects your brand and positioning, not a generic template with your logo dropped in." },
      { title: "Development and technical build", desc: "Build the site on a solid technical foundation, covering performance, security, and scalability." },
      { title: "Content management setup", desc: "Structure the site so your team can update content, pages, and assets without needing a developer for every change." },
      { title: "Performance and security optimization", desc: "Ensure the site loads fast and is properly secured, not an afterthought bolted on later." },
      { title: "Migration support", desc: "Move an existing site to a new platform or structure without losing SEO equity or breaking what already works." }
    ],
    valueFromCks: [
      { title: "Built to scale, not rewrite", desc: "Architected on modern frameworks that expand smoothly as your offerings and traffic volume increase." },
      { title: "Zero developer dependency for updates", desc: "Empower non-technical teams to edit content, publish articles, and launch landing pages directly." },
      { title: "Optimised for conversion speed", desc: "High performance scores ensure zero user drop-off from sluggish loading times." }
    ],
    howItWorks: [
      { step: "01", title: "Define the brief", desc: "Understand your brand, goals, and the site's technical and content requirements." },
      { step: "02", title: "Design the site", desc: "Build a design that reflects your brand and is structured around how visitors actually use the site." },
      { step: "03", title: "Develop and build", desc: "Construct the site on a fast, secure, and maintainable technical foundation." },
      { step: "04", title: "Launch and hand off", desc: "Go live, with your team equipped to manage and update the site going forward." }
    ],
    faqs: [
      { question: "Can you redesign an existing site, or only build new ones?", answer: "Both. We can build a new site from scratch or redesign and rebuild an existing one, including migrating from a legacy platform." },
      { question: "Will our team be able to update the site ourselves after launch?", answer: "Yes. The content management setup is built so your team can update pages, content, and assets without needing a developer for routine changes." },
      { question: "What platform do you build on?", answer: "It depends on your needs and technical requirements; we recommend the platform that best fits your goals rather than defaulting to one option." },
      { question: "Will a redesign affect our existing SEO rankings?", answer: "Migrations are handled carefully to preserve SEO equity, including redirects and technical continuity, so rankings aren't lost in the process." },
      { question: "How long does a website build typically take?", answer: "It depends on scope and complexity, but most builds are completed within a few weeks to a couple of months." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Let’s talk"
    }
  },
  "penetration-testing": {
    hero: {
      title: "Uncover vulnerabilities across people, processes, and technology.",
      subtitle: "CKS’s Penetration Testing Services identify security weaknesses across networks, applications, wireless, IoT, and user environments to help prevent breaches."
    },
    overTitle: "PENETRATION TESTING",
    intro: {
      title: "How CKS’s Penetration Testing Strengthens Your Business",
      desc: "The best way to understand how attackers target your systems is to simulate real-world attacks under controlled conditions. CKS’s Penetration Testing Services reveal actual risks across networks, applications, wireless, IoT, and people, showing where you are most vulnerable and how to fix it before a breach occurs."
    },
    whatWeDo: [
      { title: "Executive Penetration Test Report", desc: "A high-level summary highlighting critical risks, business impacts and strategic recommendations for leadership review." },
      { title: "Technical Vulnerability Details", desc: "In-depth documentation of exploits, proof-of-concept code and step-by-step reproduction instructions for IT teams." },
      { title: "Remediation Verification Certificate", desc: "Certification after re-testing fixed issues, confirming successful closure of all identified vulnerabilities." }
    ],
    valueFromCks: [
      { title: "Identify Exploitable Flaws", desc: "Pinpoint real-world vulnerabilities that evade scanners, enabling targeted hardening before attackers strike." },
      { title: "Validate Security Controls", desc: "Test firewalls, IDS, and encryption effectiveness under simulated pressure to ensure robust protection." },
      { title: "Meet Compliance Mandates", desc: "Generate evidence for certifications like PCI-DSS, HIPAA, and ISO 27001 through documented testing rigor." },
      { title: "Reduce Breach Probability", desc: "Eliminate high-risk gaps systematically, slashing the likelihood and cost of successful intrusions." }
    ],
    howItWorks: [
      { step: "01", title: "Discovery", desc: "We build a comprehensive asset inventory through initial reconnaissance, mapping attack surfaces, authentication mechanisms, and external perimeters. (Output: Attack surface report, asset inventory, reconnaissance findings)." },
      { step: "02", title: "Assessment", desc: "We run vulnerability scanning and manual reconnaissance across your environment, testing web app flaws, APIs, misconfigurations, and authentication bypasses. (Output: Vulnerability assessment report, scored findings, proof-of-concepts)." },
      { step: "03", title: "Exploitation", desc: "Controlled exploitation is executed using ethical hacking techniques and custom tooling, validating privilege escalations and lateral movement against OWASP Top 10. (Output: Exploitation reports, attack chains, impact demonstrations)." },
      { step: "04", title: "Reporting & Verification", desc: "We deliver an actionable penetration test report with remediation roadmaps, hardening guidance, and retesting verification to confirm closure. (Output: Full pentest report, remediation roadmap, verification certificate)." }
    ],
    faqs: [
      { question: "What is penetration testing?", answer: "Penetration testing is a controlled simulation of real-world cyber attacks against an organisation's systems to identify exploitable vulnerabilities before malicious actors can take advantage of them. CKS’s penetration testing covers networks, applications, wireless environments, IoT devices, and user-facing entry points - revealing where you are most vulnerable and providing actionable remediation guidance to close those gaps." },
      { question: "What does the penetration testing service include?", answer: "CKS delivers three core outputs: an executive penetration test report highlighting critical risks, business impacts, and strategic recommendations for leadership; technical vulnerability details with in-depth documentation of exploits, proof-of-concept code, and step-by-step reproduction instructions for IT teams; and a remediation verification certificate issued after retesting confirmed fixes, certifying successful closure of all identified vulnerabilities." },
      { question: "What is the difference between a vulnerability scan and a penetration test?", answer: "A vulnerability scan is an automated tool that identifies known weaknesses in systems and software. A penetration test goes further - it uses manual techniques, custom tooling, and real-world attack simulation to determine whether vulnerabilities are actually exploitable and what an attacker could achieve by chaining them together. CKS combines both automated scanning and expert-driven manual exploitation to provide a realistic assessment of your actual risk exposure." },
      { question: "Who is the penetration testing service best suited for?", answer: "This service is best suited for CISOs, IT leaders, and engineering teams at growth-stage businesses that need to validate the security of their applications, networks, and infrastructure - whether for compliance requirements, pre-launch security assurance, investor due diligence, or ongoing risk management. It's also used by organisations preparing for certifications like PCI-DSS, HIPAA, or ISO 27001." },
      { question: "What compliance frameworks does penetration testing support?", answer: "Penetration testing generates documented evidence that supports certifications and compliance requirements including PCI-DSS, HIPAA, ISO 27001, SOC 2, and GDPR. CKS’s reporting is structured to satisfy the evidence requirements of these frameworks, with executive summaries for auditors and technical detail for remediation teams." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "ai-security-review": {
    hero: {
      title: "Uncover vulnerabilities across people, processes, and technology.",
      subtitle: "CKS’s Penetration Testing Services identify security weaknesses across networks, applications, wireless, IoT, and user environments to help prevent breaches."
    },
    overTitle: "AI SECURITY REVIEW",
    intro: {
      title: "How CKS’s Penetration Testing Strengthens Your Business",
      desc: "The best way to understand how attackers target your systems is to simulate real-world attacks under controlled conditions. CKS’s Penetration Testing Services reveal actual risks across networks, applications, wireless, IoT, and people, showing where you are most vulnerable and how to fix it before a breach occurs."
    },
    whatWeDo: [
      { title: "Executive Penetration Test Report", desc: "A high-level summary highlighting critical risks, business impacts and strategic recommendations for leadership review." },
      { title: "Technical Vulnerability Details", desc: "In-depth documentation of exploits, proof-of-concept code and step-by-step reproduction instructions for IT teams." },
      { title: "Remediation Verification Certificate", desc: "Certification after re-testing fixed issues, confirming successful closure of all identified vulnerabilities." }
    ],
    valueFromCks: [
      { title: "Identify Exploitable Flaws", desc: "Pinpoint real-world vulnerabilities that evade scanners, enabling targeted hardening before attackers strike." },
      { title: "Validate Security Controls", desc: "Test firewalls, IDS, and encryption effectiveness under simulated pressure to ensure robust protection." },
      { title: "Meet Compliance Mandates", desc: "Generate evidence for certifications like PCI-DSS, HIPAA, and ISO 27001 through documented testing rigor." },
      { title: "Reduce Breach Probability", desc: "Eliminate high-risk gaps systematically, slashing the likelihood and cost of successful intrusions." }
    ],
    howItWorks: [
      { step: "01", title: "Discovery", desc: "We build a comprehensive asset inventory through initial reconnaissance, mapping attack surfaces, authentication mechanisms, and external perimeters. (Output: Attack surface report, asset inventory, reconnaissance findings)." },
      { step: "02", title: "Assessment", desc: "We run vulnerability scanning and manual reconnaissance across your environment, testing web app flaws, APIs, misconfigurations, and authentication bypasses. (Output: Vulnerability assessment report, scored findings, proof-of-concepts)." },
      { step: "03", title: "Exploitation", desc: "Controlled exploitation is executed using ethical hacking techniques and custom tooling, validating privilege escalations and lateral movement against OWASP Top 10. (Output: Exploitation reports, attack chains, impact demonstrations)." },
      { step: "04", title: "Reporting & Verification", desc: "We deliver an actionable penetration test report with remediation roadmaps, hardening guidance, and retesting verification to confirm closure. (Output: Full pentest report, remediation roadmap, verification certificate)." }
    ],
    faqs: [
      { question: "What is penetration testing?", answer: "Penetration testing is a controlled simulation of real-world cyber attacks against an organisation's systems to identify exploitable vulnerabilities before malicious actors can take advantage of them. CKS’s penetration testing covers networks, applications, wireless environments, IoT devices, and user-facing entry points - revealing where you are most vulnerable and providing actionable remediation guidance to close those gaps." },
      { question: "What does the penetration testing service include?", answer: "CKS delivers three core outputs: an executive penetration test report highlighting critical risks, business impacts, and strategic recommendations for leadership; technical vulnerability details with in-depth documentation of exploits, proof-of-concept code, and step-by-step reproduction instructions for IT teams; and a remediation verification certificate issued after retesting confirmed fixes, certifying successful closure of all identified vulnerabilities." },
      { question: "What is the difference between a vulnerability scan and a penetration test?", answer: "A vulnerability scan is an automated tool that identifies known weaknesses in systems and software. A penetration test goes further - it uses manual techniques, custom tooling, and real-world attack simulation to determine whether vulnerabilities are actually exploitable and what an attacker could achieve by chaining them together. CKS combines both automated scanning and expert-driven manual exploitation to provide a realistic assessment of your actual risk exposure." },
      { question: "Who is the penetration testing service best suited for?", answer: "This service is best suited for CISOs, IT leaders, and engineering teams at growth-stage businesses that need to validate the security of their applications, networks, and infrastructure - whether for compliance requirements, pre-launch security assurance, investor due diligence, or ongoing risk management. It's also used by organisations preparing for certifications like PCI-DSS, HIPAA, or ISO 27001." },
      { question: "What compliance frameworks does penetration testing support?", answer: "Penetration testing generates documented evidence that supports certifications and compliance requirements including PCI-DSS, HIPAA, ISO 27001, SOC 2, and GDPR. CKS’s reporting is structured to satisfy the evidence requirements of these frameworks, with executive summaries for auditors and technical detail for remediation teams." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "cybersecurity-blueprint": {
    hero: {
      title: "Assess your cybersecurity posture and define a clear security roadmap.",
      subtitle: "Identify gaps, prioritize controls, and plan implementation across networks, applications, data flows, and operations."
    },
    overTitle: "CYBERSECURITY BLUEPRINT",
    intro: {
      title: "How CKS’s Cybersecurity Blueprint Strengthens Your Business",
      desc: "CKS’s Cybersecurity Blueprint crafts a tailored strategic roadmap for comprehensive protection. Our experts conduct thorough risk assessments, benchmark against industry standards and design layered defenses aligned with your business objectives. Develop policies, procedures and technology architectures that integrate seamlessly, with phased implementation guidance and ongoing maturity tracking. This holistic framework positions your organization for resilient, scalable security."
    },
    whatWeDo: [
      { title: "Secure Customized Roadmap", desc: "A detailed blueprint outlining policies, tools and processes specific to your threat landscape and operations." },
      { title: "Establish Risk Prioritization Framework", desc: "Assessed risks ranked by impact, with mitigation strategies and investment justifications." },
      { title: "Enable Continuous Improvement", desc: "Maturity models and KPIs to measure progress, ensuring adaptive security evolution." }
    ],
    valueFromCks: [
      { title: "Align Security with Business Goals", desc: "Integrate protections that support growth without stifling innovation or efficiency." },
      { title: "Streamline Implementation Efforts", desc: "Follow clear, phased plans that reduce deployment complexity and accelerate ROI." },
      { title: "Minimize Compliance Risks", desc: "Embed regulatory requirements into your strategy, simplifying audits and avoiding penalties." },
      { title: "Build Executive Confidence", desc: "Present board-ready visuals and metrics that quantify security posture and progress." }
    ],
    howItWorks: [
      { step: "01", title: "Assess Current Security Status", desc: "Inventory assets, controls, and processes against maturity models like NIST CSF. Identify strengths, gaps, and architectural misalignments." },
      { step: "02", title: "Model Threat Landscape", desc: "Profile industry-specific adversaries, tactics, and vectors using intelligence fusion. Simulate attack paths to reveal exposure points." },
      { step: "03", title: "Define Target Architecture", desc: "Design defense-in-depth layers, including identity, detection, and response capabilities. Incorporate zero-trust principles and automation." },
      { step: "04", title: "Prioritize Initiatives", desc: "Score projects by risk reduction, cost, and business value using quantitative models. Balance quick wins with transformative changes." },
      { step: "05", title: "Detail Technical Specifications", desc: "Specify tools, configurations, and integrations with reference architectures. Ensure interoperability and scalability from day one." },
      { step: "06", title: "Establish Operating Model", desc: "Build governance structures, training regimens, and metrics dashboards. Create self-sustaining mechanisms for adaptation." }
    ],
    faqs: [
      { question: "What is a cybersecurity blueprint?", answer: "A cybersecurity blueprint is a strategic roadmap that assesses an organisation's current security posture, identifies gaps, and defines a prioritised plan for implementing controls across networks, applications, data flows, and operations. CKS’s cybersecurity blueprint goes beyond a generic checklist - it models your specific threat landscape, designs layered defences aligned with your business objectives, and provides phased implementation guidance with maturity tracking." },
      { question: "What does the cybersecurity blueprint service include?", answer: "CKS delivers three core outputs: a customised security roadmap outlining policies, tools, and processes specific to your threat landscape and operations; a risk prioritisation framework with assessed risks ranked by impact, including mitigation strategies and investment justifications; and a continuous improvement model with maturity KPIs to measure progress and ensure your security posture adapts as threats evolve." },
      { question: "What frameworks does CKS use to assess security maturity?", answer: "CKS assesses current security status against maturity models such as the NIST Cybersecurity Framework (NIST CSF). The assessment inventories assets, controls, and processes to identify strengths, gaps, and architectural misalignments. This maturity baseline is then used to set targets, measure progress, and prioritise investments where they deliver the greatest risk reduction." },
      { question: "How is the threat landscape modelled?", answer: "CKS profiles industry-specific adversaries, tactics, and attack vectors using threat intelligence fusion. Attack paths are simulated to reveal exposure points that may not be apparent from control assessments alone. This threat modelling ensures the blueprint is designed to defend against the threats most likely to target your specific business and sector, rather than generic risks." },
      { question: "How is a cybersecurity blueprint different from a penetration test?", answer: "A penetration test simulates real-world attacks against your systems at a specific point in time to identify exploitable vulnerabilities. A cybersecurity blueprint is a strategic planning engagement that assesses your overall security posture, designs a target architecture, and produces a phased roadmap of controls, policies, and investments. CKS offers both as standalone services - many clients use a penetration test to validate specific controls and a blueprint to define the broader security strategy." },
      { question: "Who is CKS’s cybersecurity blueprint best suited for?", answer: "This service is best suited for CISOs, IT leaders, and leadership teams at growth-stage businesses that need to define or overhaul their security strategy but lack the internal expertise to design a comprehensive, business-aligned security roadmap. It's also valuable for organisations preparing for compliance certifications, entering regulated markets, or presenting security posture to boards and investors." },
      { question: "How does CKS prioritise which security initiatives to implement first?", answer: "CKS scores initiatives using quantitative models that factor in risk reduction, cost, and business value. The framework balances quick wins, improvements that deliver immediate risk reduction at low cost - with transformative changes that require more investment but fundamentally strengthen the security architecture. This ensures the budget is allocated where it delivers the greatest return in reduced exposure." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "cyber-vendor-audit": {
    hero: {
      title: "Audit vendor security controls and governance.",
      subtitle: "CKS reviews third-party networks, applications, cloud setups, and compliance practices to identify gaps, verify controls, and support remediation."
    },
    overTitle: "CYBER VENDOR AUDIT",
    intro: {
      title: "How CKS’s Cyber Vendor Audit Strengthens Your Business",
      desc: "CKS’s Cyber Vendor Audit rigorously evaluates third-party security practices to protect your supply chain. Our specialists review contracts, conduct technical assessments and interview key personnel, benchmarking against standards like SOC 2 and ISO 27001. Uncover gaps in vendor controls, data handling and incident response, delivering executive summaries with risk ratings and remediation demands. This systematic process safeguards your operations from inherited vulnerabilities."
    },
    whatWeDo: [
      { title: "Identify Vendor Risk Exposures", desc: "A comprehensive report detailing security weaknesses, compliance shortfalls and potential impact on your business." },
      { title: "Quantify Third-Party Risks", desc: "Risk-scored profiles for each vendor, prioritising high-exposure relationships for immediate action." },
      { title: "Secure Remediation Commitments", desc: "Negotiated action plans with timelines, SLAs and verification steps to enforce vendor accountability." }
    ],
    valueFromCks: [
      { title: "Prevent Supply Chain Breaches", desc: "Obtain qualitative data and speed up the extraction of actionable vendor security insights." },
      { title: "Strengthen Contract Negotiations", desc: "Arm procurement teams with audit insights to demand robust security clauses and penalties." },
      { title: "Accelerate Vendor Onboarding", desc: "Streamline due diligence with repeatable audit frameworks, reducing approval cycles." },
      { title: "Enhance Overall Risk Posture", desc: "Integrate vendor findings into enterprise risk management for holistic protection." }
    ],
    howItWorks: [
      { step: "01", title: "Map Vendor Ecosystem", desc: "Inventory all third-party providers, categorizing them by criticality, data access, and integration depth to establish a baseline risk landscape." },
      { step: "02", title: "Review Security Controls", desc: "Examine technical safeguards, including encryption, access management, incident response, and pentest records against NIST 800-53 and SOC 2." },
      { step: "03", title: "Assess Operational Maturity", desc: "Evaluate governance, policies, training programs, and change management processes while testing resilience through scenario simulations." },
      { step: "04", title: "Quantify Business Risks", desc: "Model impact scenarios from vendor failures, scoring risks by likelihood, financial exposure, and regulatory fallout." },
      { step: "05", title: "Benchmark and Gap Analysis", desc: "Compare vendors against industry peers and standards, flagging deviations in controls, reporting, and SLAs." },
      { step: "06", title: "Develop Mitigation Framework", desc: "Craft tailored strategies including contract clauses, audit schedules, exit plans, and escalation protocols." }
    ],
    faqs: [
      { question: "What is a cyber vendor audit?", answer: "A cyber vendor audit is a structured assessment of a third-party vendor's security controls, governance practices, and compliance posture. It evaluates how a vendor handles data, manages access, responds to incidents, and meets regulatory obligations. CKS’s cyber vendor audit goes beyond questionnaire-based reviews, it includes technical assessments, personnel interviews, and benchmarking against standards like SOC 2, ISO 27001, and NIST 800-53 to uncover gaps that could expose your business to inherited vulnerabilities." },
      { question: "What does the cyber vendor audit service include?", answer: "CKS delivers three core outputs: a comprehensive report identifying security weaknesses, compliance shortfalls, and their potential impact on your business; risk-scored vendor profiles that prioritise high-exposure relationships for immediate action; and secured remediation commitments with negotiated action plans including timelines, SLAs, and verification steps to enforce vendor accountability." },
      { question: "How long does a cyber vendor audit take?", answer: "The timeline depends on the number of vendors being audited, the complexity of their technology environments, and the depth of assessment required. Our standard engagement covers ecosystem mapping, security control review, operational maturity assessment, risk quantification, benchmarking, and mitigation framework development but timelines are adjusted based on vendor count and criticality tiers." },
      { question: "What security controls does CKS review during a vendor audit?", answer: "CKS examines technical safeguards including encryption practices, access management controls, incident response procedures, and penetration testing records. Evidence is validated against established frameworks like NIST 800-53 and SOC 2 criteria. Governance, policies, training programmes, and change management processes are also evaluated to assess operational maturity beyond just the technical layer." },
      { question: "How does CKS quantify the risk from third-party vendors?", answer: "CKS models impact scenarios from vendor failures - such as data leaks, service outages, or compliance breaches and scores each risk by likelihood, financial exposure, and regulatory fallout. This produces risk-scored profiles for every vendor, giving you a clear, quantified view of which relationships carry the most business risk and where remediation investment is most urgent." },
      { question: "Who is CKS’s cyber vendor audit best suited for?", answer: "This service is best suited for CISOs, IT leaders, and procurement teams at growth-stage businesses that rely on third-party vendors for critical operations and need to assess vendor security before onboarding, during renewals, or as part of enterprise risk management. It's particularly valuable for organisations subject to compliance frameworks that require documented third-party risk assessments." },
      { question: "Can CKS’s vendor audit help with contract negotiations?", answer: "Yes. The audit outputs are designed to strengthen procurement leverage. Risk-scored vendor profiles and identified security gaps give procurement teams concrete evidence to demand robust security clauses, penalties for non-compliance, and remediation commitments with defined timelines and verification checkpoints. CKS also crafts tailored mitigation frameworks that include recommended contract clauses, audit schedules, and exit plans." },
      { question: "What is a vendor criticality tier and why does it matter?", answer: "A vendor criticality tier classifies each third-party provider based on how much access they have to your data, how deeply integrated they are with your systems, and how significant their failure would be to your operations. CKS maps all vendors by criticality during the ecosystem mapping phase, ensuring that audit depth and remediation urgency are proportionate to the actual business risk each vendor poses - rather than treating every vendor the same." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "cyber-vendor-support": {
    hero: {
      title: "Reduce vendor risk through continuous security oversight.",
      subtitle: "CKS provides ongoing vendor oversight, compliance tracking, and remediation support to identify risks and improve third-party security posture."
    },
    overTitle: "CYBER VENDOR SUPPORT",
    intro: {
      title: "How CKS’s Cyber Vendor Support & Monitoring Strengthens Your Business",
      desc: "CKS’s Cyber Vendor Support & Monitoring continuously evaluates and manages risks from your third-party vendors. Our specialists conduct automated scans, vulnerability assessments, and compliance checks on vendor ecosystems, flagging issues like supply chain threats or misconfigurations. Proactively mitigate disruptions to maintain secure operations."
    },
    whatWeDo: [
      { title: "Vendor Risk Scorecard", desc: "A dynamic scorecard ranking vendors by risk level, with scores based on security posture, compliance, and incident history." },
      { title: "Actionable Remediation Playbook", desc: "Tailored guides with specific steps to address vendor gaps, including contract clauses and verification checklists." },
      { title: "Quarterly Vendor Health Report", desc: "In-depth analysis of trends, emerging risks, and performance benchmarks across your entire vendor portfolio." }
    ],
    valueFromCks: [
      { title: "Minimize Supply Chain Risks", desc: "Proactively identify and neutralize threats from vendors, preventing breaches that could cascade to your operations." },
      { title: "Streamline Vendor Management", desc: "Centralize oversight with automated insights, reducing manual effort and ensuring consistent evaluation standards." },
      { title: "Enhance Due Diligence Efficiency", desc: "Accelerate onboarding and renewals with pre-built risk profiles, saving time and resources on vetting processes." },
      { title: "Achieve Compliance Assurance", desc: "Document third-party risks thoroughly to satisfy frameworks like SOC 2, NIST 800-53, and regional regulations." }
    ],
    howItWorks: [
      { step: "01", title: "Onboarding & Baselines", desc: "We onboard your cybersecurity vendors into a unified monitoring framework, documenting feeds, APIs, SLAs, and escalation paths. (Output: Live monitoring dashboard, real-time status report)." },
      { step: "02", title: "Monitoring Setup", desc: "Deploy advanced monitoring across endpoints and exchanges, configuring SIEM integrations and behavioral anomaly detection. (Output: Fully operational monitoring engine, tuned rulesets)." },
      { step: "03", title: "Optimisation & Remediation", desc: "Analyze vendor telemetry for response times and coverage gaps, collaborating with vendors to prioritize fixes. (Output: Optimisation reports, enhanced workflows, vendor scorecards)." },
      { step: "04", title: "Sustainment & Governance", desc: "Deploy continuous improvement protocols, automated audits, quarterly reviews, and custom incident response playbooks. (Output: Resilient monitoring system, SLA enforcement mechanisms)." }
    ],
    faqs: [
      { question: "What is cyber vendor support and monitoring?", answer: "Cyber vendor support and monitoring is an ongoing service that continuously evaluates and manages the security risks introduced by your third-party vendors. It covers automated scanning, vulnerability assessment, compliance tracking, SLA enforcement, and remediation coordination to ensure your vendor ecosystem doesn't become a source of compromise. CKS provides this as a managed service with real-time dashboards, automated alerting, and quarterly health reporting." },
      { question: "What does the cyber vendor support service include?", answer: "CKS delivers three core outputs: a vendor risk scorecard that dynamically ranks vendors by risk level based on security posture, compliance status, and incident history; an actionable remediation playbook with specific steps to address vendor gaps, including contract clauses and verification checklists; and a quarterly vendor health report with in-depth trend analysis, emerging risk identification, and performance benchmarks across your entire vendor portfolio." },
      { question: "How is cyber vendor support different from a cyber vendor audit?", answer: "A cyber vendor audit is a point-in-time assessment that evaluates a vendor's security controls, compliance status, and risk profile at a specific moment - typically during onboarding or renewal. Cyber vendor support is an ongoing monitoring and management service that continuously tracks vendor risk, detects emerging threats, and coordinates remediation over time. CKS offers both as standalone services, and many clients use an initial audit to baseline vendor risk before transitioning to continuous monitoring." },
      { question: "Who is CKS’s cyber vendor support service best suited for?", answer: "This service is best suited for IT leaders, CISOs, and procurement teams at growth-stage businesses that rely on multiple third-party vendors for critical operations and need continuous visibility into vendor risk without building a dedicated in-house third-party risk management function. It's also valuable for organisations with compliance obligations under frameworks like SOC 2, NIST 800-53, or regional data protection regulations." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "network-setup-migration": {
    hero: {
      title: "Migrate network environments without compromising security.",
      subtitle: "CKS manages network setup and migration across hybrid and cloud environments with secure configuration, segmentation, testing, and validated controls."
    },
    overTitle: "NETWORK SETUP AND MIGRATION",
    intro: {
      title: "How CKS’s Network Setup & Migration Strengthens Your Business",
      desc: "CKS’s Network Setup & Migration delivers seamless deployment and transition of secure network infrastructures. Our experts assess your current environment, design optimized architectures and execute migrations with zero downtime. Implement robust configurations including firewalls, segmentation and redundancy, while integrating cybersecurity best practices. This end-to-end service ensures scalability, performance and ironclad protection tailored to your business needs."
    },
    whatWeDo: [
      { title: "Achieve Zero-Downtime Migration", desc: "Transition to advanced networks without interrupting operations, maintaining business continuity throughout the process." },
      { title: "Build Scalable Infrastructure", desc: "Flexible architectures that grow with your demands, supporting increased traffic and new technologies." },
      { title: "Fortify Network Security", desc: "Layered defenses that eliminate common vulnerabilities, reducing exposure to cyber threats." }
    ],
    valueFromCks: [
      { title: "Minimize Operational Disruptions", desc: "Execute migrations during live operations, ensuring uninterrupted service and productivity for your teams." },
      { title: "Optimize Network Performance", desc: "Enhance speed and reliability through expert configurations, accelerating data flows and application responsiveness." },
      { title: "Ensure Long-Term Scalability", desc: "Design future-proof networks that adapt to expansion, avoiding costly redesigns down the line." },
      { title: "Reduce Maintenance Overhead", desc: "Streamline management with automated tools and best practices, cutting ongoing IT workload and expenses." }
    ],
    howItWorks: [
      { step: "01", title: "Foundations & Inventory", desc: "We conduct a comprehensive network inventory cataloguing all existing infrastructure, data flows, access policies, and compliance requirements. (Output: Network landscape report, topology diagrams, bottleneck analysis)." },
      { step: "02", title: "Projections & Diagnostics", desc: "Targeted diagnostics and simulations evaluate segmentation weaknesses, unencrypted channels, and single points of failure. (Output: Gap analysis report, scored findings, high-priority flags)." },
      { step: "03", title: "Statements & Architecture", desc: "Target zero-trust architecture is designed with detailed configurations for firewalls, switches, and VPNs alongside rollback procedures. (Output: Interim design documents, configuration templates, rollout schedules)." },
      { step: "04", title: "Testing & Phased Migration", desc: "Live network migration executed in controlled waves with cutover safeguards, followed by pentesting and hardening verification. (Output: Fully operational network, hardening documentation, handover training)." }
    ],
    faqs: [
      { question: "What is a network setup and migration service?", answer: "A network setup and migration service covers the end-to-end design, deployment, and transition of network infrastructure - including architecture planning, device configuration, traffic migration, and security hardening. CKS manages network setup and migration across hybrid and cloud environments with secure configuration, segmentation, testing, and validated controls, ensuring zero downtime throughout the process." },
      { question: "What does CKS’s network setup and migration service include?", answer: "CKS delivers three core outcomes: zero-downtime migration that transitions your infrastructure without interrupting operations; scalable architecture designed to support increased traffic and new technologies as your business grows; and fortified network security with layered defences including firewalls, micro-segmentation, and encrypted overlays that eliminate common vulnerabilities." },
      { question: "What is zero-trust network architecture?", answer: "Zero-trust architecture is a security model where no user, device, or network segment is trusted by default - every access request is verified regardless of where it originates. CKS engineers zero-trust environments using micro-segmentation, identity-based access controls, and encrypted overlays, incorporating SASE (Secure Access Service Edge) principles for hybrid environments." },
      { question: "How does CKS ensure zero downtime during migration?", answer: "CKS executes phased migrations with parallel run testing and rollback safeguards at every stage. Traffic is migrated in controlled waves with real-time monitoring to verify connectivity, performance, and security throughout. Digital twin simulations are used before deployment to model traffic flows and attack scenarios, identifying issues before they reach production." },
      { question: "What compliance standards does CKS validate against?", answer: "CKS hardens and certifies network deployments against recognised industry standards including NIST 800-53 and relevant sector-specific benchmarks. Final deployment includes penetration testing and compliance scans to verify that all controls meet the required security posture before handover." },
      { question: "Who is the network setup and migration service best suited for?", answer: "This service is best suited for IT leaders, CTOs, and operations teams at growth-stage businesses that are migrating to cloud or hybrid environments, consolidating infrastructure after an acquisition, replacing legacy network architecture, or scaling their infrastructure to support business growth and need the migration executed securely without disrupting operations." },
      { question: "What does CKS hand over at the end of the engagement?", answer: "At the end of the engagement, you receive a fully operational network with hardened security controls, complete documentation including topology diagrams, configuration templates, and playbooks, a monitoring framework for ongoing performance and threat detection, orchestration scripts for autonomous scaling and maintenance, and team training to ensure your staff can manage the environment independently." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "security-operations-centre": {
    hero: {
      title: "Continuously monitor and respond to cyber threats.",
      subtitle: "CKS’s SOC Services provide 24/7 monitoring across networks, endpoints, applications, and cloud environments to detect threats, investigate incidents, and support rapid response."
    },
    overTitle: "SECURITY OPERATIONS CENTRE",
    intro: {
      title: "How CKS’s Security Operations Centre (SOC) Strengthens Your Business",
      desc: "CKS’s Security Operations Centre (SOC) delivers 24/7 monitoring, threat detection, and rapid response to safeguard your digital assets. Our certified analysts leverage advanced SIEM tools, AI-driven analytics, and threat intelligence feeds to identify anomalies, investigate incidents, and neutralize risks in real time. Scale your defenses without building an in-house team."
    },
    whatWeDo: [
      { title: "Real Time Threat Intelligence Dashboard", desc: "A centralised, customisable dashboard providing live visibility into threats, alerts and system health metrics for proactive oversight." },
      { title: "Detailed Incident Response Reports", desc: "Comprehensive logs of all detected incidents, including root causes, timelines and resolution steps for forensic analysis." },
      { title: "Monthly Security Performance Review", desc: "Executive summaries with key metrics, trend analysis and optimisation recommendations to refine your security strategy." }
    ],
    valueFromCks: [
      { title: "Achieve 24/7 Coverage", desc: "Eliminate blind spots with non-stop monitoring, ensuring threats never go unnoticed regardless of time or location." },
      { title: "Accelerate Threat Detection", desc: "Leverage AI and expert analysis to spot sophisticated attacks early, reducing dwell time and potential damage." },
      { title: "Reduce Operational Overhead", desc: "Offload alert fatigue and expertise gaps to our SOC, freeing your IT team for strategic initiatives." },
      { title: "Ensure Regulatory Compliance", desc: "Maintain audit trails and rapid reporting to meet standards like PCI-DSS, HIPAA, and local data protection laws effortlessly." }
    ],
    howItWorks: [
      { step: "01", title: "Discovery", desc: "We build a comprehensive threat landscape inventory cataloguing all assets, network topologies, data flows, and security controls. (Output: SOC foundation report, gap indicators, operational readiness assessment)." },
      { step: "02", title: "Assessment", desc: "Run targeted simulations and pen tests evaluating detection gaps, response latencies, access controls, and alert fatigue. (Output: Threat heatmap, scored findings, high-priority SOC flags)." },
      { step: "03", title: "Planning", desc: "Execute standardized playbooks, SIEM parsing, UEBA baselines, and IR procedures validated against MITRE ATT&CK and NIST. (Output: Interim SOC design reports, playbook summaries, escalation paths)." },
      { step: "04", title: "Live Operations", desc: "Transition to continuous live monitoring and rapid response with 24/7 staffing rotations and adaptive threat hunting protocols. (Output: Live SOC ecosystem, daily handoff protocols, metrics dashboards)." }
    ],
    faqs: [
      { question: "What is a managed security operations centre (SOC)?", answer: "A managed security operations centre (SOC) is a dedicated function that provides continuous monitoring, threat detection, incident investigation, and response across an organisation's digital environment. CKS’s managed SOC covers networks, endpoints, applications, and cloud environments 24/7, using certified analysts, SIEM tools, AI-driven analytics, and threat intelligence feeds to identify and neutralise risks in real time." },
      { question: "What does CKS’s SOC service include?", answer: "CKS delivers three core outputs on an ongoing basis: a real-time threat intelligence dashboard providing live visibility into threats, alerts, and system health metrics; detailed incident response reports with root causes, timelines, and resolution steps for forensic analysis; and a monthly security performance review with executive summaries, trend analysis, and optimisation recommendations to refine your security strategy." },
      { question: "What is SIEM and how does CKS use it?", answer: "SIEM (Security Information and Event Management) is a platform that centralises log data from across your environment - endpoints, networks, cloud services - and correlates events to detect threats. CKS ingests and normalises logs into the SIEM with standardised parsing, profiles normal behaviour to reduce alert noise, and crafts custom detection rules tuned to your specific environment." },
      { question: "What is UEBA and why does it matter for threat detection?", answer: "UEBA (User and Entity Behaviour Analytics) builds baseline profiles of how users and systems normally behave, then flags deviations that may indicate compromise - such as unusual login patterns, data exfiltration attempts, or privilege escalation. CKS uses UEBA during alert triage to enrich signals with behavioural context, enabling faster and more accurate identification of genuine threats versus false positives." },
      { question: "What frameworks does CKS’s SOC align to?", answer: "CKS validates SOC playbooks and incident response plans against the MITRE ATT&CK framework for threat mapping and the NIST Incident Response lifecycle for structured response procedures. Compliance requirements such as PCI-DSS, HIPAA, and local data protection laws are also incorporated to ensure regulatory alignment." },
      { question: "Who is CKS’s SOC service best suited for?", answer: "This service is best suited for IT leaders, CISOs, and leadership teams at growth-stage businesses that need enterprise-grade threat detection and response but lack the headcount, tooling, or 24/7 coverage to build and staff an in-house SOC. It's also valuable for organisations with compliance obligations that require continuous monitoring and audit-ready incident documentation." },
      { question: "Does CKS provide forensic analysis after a security incident?", answer: "Yes. Forensic analysis is a core capability. After containment and eradication, CKS conducts deep-dive analysis into indicators of compromise (IOCs), malware behaviour, and attacker tactics. Findings are documented in detailed incident response reports and fed back into detection logic and threat hunting processes to strengthen defences against future attacks." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  },
  "red-team-exercise": {
    hero: {
      title: "Test your defenses with real-world attack simulation.",
      subtitle: "CKS’s Red Team Services test networks, applications, physical access, and human targets to uncover gaps, measure detection capabilities, and strengthen defenses."
    },
    overTitle: "RED TEAM EXERCISE",
    intro: {
      title: "How CKS’s Red Team Exercise Strengthens Your Business",
      desc: "CKS’s Red Team Exercise simulates real-world adversarial attacks to expose weaknesses in your defenses. Our certified ethical hackers deploy advanced tactics, techniques and procedures mimicking sophisticated threats. Conduct comprehensive penetration testing across networks, applications and physical perimeters, followed by detailed debriefs and remediation roadmaps. This battle-tested approach uncovers hidden vulnerabilities and validates your security posture."
    },
    whatWeDo: [
      { title: "Expose Hidden Vulnerabilities", desc: "A prioritised list of exploitable weaknesses with proof-of-concept demonstrations and exploitation paths." },
      { title: "Validate Defensive Controls", desc: "Empirical evidence on control effectiveness, highlighting gaps in detection and response capabilities." },
      { title: "Deliver Actionable Remediation", desc: "A customised roadmap with step-by-step fixes, timelines and metrics to strengthen your security framework." }
    ],
    valueFromCks: [
      { title: "Accelerated Insight Generation", desc: "Prepare for actual attacks by experiencing tactics used by elite threat actors, building proactive resilience." },
      { title: "Prioritize Security Investments", desc: "Focus resources on high-impact fixes informed by realistic breach simulations, maximizing ROI." },
      { title: "Boost Incident Response Readiness", desc: "Train teams through live scenarios, sharpening detection skills and reducing breach impact." },
      { title: "Enhance Compliance Posture", desc: "Demonstrate rigorous testing to auditors and regulators, accelerating certifications and trust." }
    ],
    howItWorks: [
      { step: "01", title: "Reconnaissance", desc: "We map the full attack surface by analysing your infrastructure, applications, network architecture, and user entry points. (Output: Attack surface baseline, asset inventory, reconnaissance findings)." },
      { step: "02", title: "Exploitation", desc: "Run targeted exploitation attempts including authentication bypasses, privilege escalations, lateral movements, and persistence mechanisms. (Output: Penetration test report, exploited paths, proof-of-concept demos)." },
      { step: "03", title: "Reporting and Remediation", desc: "Findings are synthesised using structured debrief frameworks, attack narratives, and remediation roadmaps validated against MITRE ATT&CK. (Output: Comprehensive exercise report, executive summary, remediation playbooks)." }
    ],
    faqs: [
      { question: "What is a red team exercise?", answer: "A red team exercise is a realistic adversary simulation that tests an organisation's defences across digital, physical, and human attack vectors. Unlike a standard penetration test, a red team operation mimics the tactics, techniques, and procedures (TTPs) of sophisticated threat actors - including social engineering, phishing, and physical access attempts - to evaluate not just whether vulnerabilities exist, but whether your team can detect, respond to, and contain an active attack." },
      { question: "What does CKS’s red team exercise include?", answer: "CKS delivers three core outputs: a prioritised list of exploitable weaknesses with proof-of-concept demonstrations and exploitation paths; empirical evidence on defensive control effectiveness, highlighting gaps in detection and response capabilities; and a customised remediation roadmap with step-by-step fixes, timelines, and metrics to strengthen your security framework." },
      { question: "What attack vectors does CKS simulate during a red team exercise?", answer: "CKS simulates multi-vector attacks across digital, physical, and social channels. This includes phishing campaigns, custom exploit development, authentication bypasses, privilege escalation, lateral movement, persistence mechanisms, physical access attempts, and insider simulations. Tactics are adapted in real time to bypass detections and escalate privileges, mirroring how sophisticated adversaries operate." },
      { question: "How does CKS measure detection and response effectiveness?", answer: "CKS measures detection and response by operating covertly within your environment - evading sensors and blue team defenders while simulating data exfiltration, lateral movement, and persistence. Alert fidelity (whether real attacks trigger real alerts), containment velocity (how quickly the team responds), and cleanup effectiveness (whether all backdoors and command-and-control channels are removed) are all measured and documented." },
      { question: "Who is the red team exercise best suited for?", answer: "This service is best suited for CISOs, security directors, and leadership teams at organisations that already have foundational security controls in place and want to test whether those controls hold up against a realistic, coordinated adversary operation. It's particularly valuable for organisations with a SOC or incident response team that needs to validate their detection and response capabilities under real-world conditions." },
      { question: "Can a red team exercise improve incident response readiness?", answer: "Yes. One of the primary benefits is training your detection and response teams through a live, realistic scenario. By experiencing actual adversary tactics under controlled conditions, SOC analysts and incident responders build pattern recognition, improve coordination, and reduce response times. CKS’s post-exercise debrief includes detailed timelines and TTP mappings that become training material for ongoing capability development." }
    ],
    cta: {
      title: "CKS takes care of the operational work so growing companies can scale faster.",
      btnText: "Talk to an expert"
    }
  }


};
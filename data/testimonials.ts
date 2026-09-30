export interface TestimonialItem {
  quote: string;
  author: string;
  department: string;
  company: string;
  engagementType: string;
  serviceLine: string;
  country: string;
  outcomes: string[];
}

export const testimonialsList: TestimonialItem[] = [
  {
    quote:
      "That is the single most important piece of information we haven't been able to find anywhere else.",
    author: "Senior Strategy Executive",
    department: "Strategic Planning",
    company: "TAM Analysis Engagement",
    engagementType: "Strategic Insight",
    serviceLine: "Strategy and research",
    country: "Global",
    outcomes: [
      "Identified precise household-level TAM data",
      "Filled critical market intelligence gap",
      "Enabled confident market entry decisions",
    ],
  },
  {
    quote:
      "CKS has streamlined all of our retail operations down to the t. We know where exactly our inventory is and how exactly they are performing.",
    author: "CFO",
    department: "Finance & Operations Leadership",
    company: "Multi-Store Menswear Brand",
    engagementType: "Strategic Insight",
    serviceLine: "Retail operations",
    country: "Singapore",
    outcomes: [
      "Complete inventory visibility across stores",
      "Real-time performance tracking",
      "Optimised operational efficiency",
    ],
  },
  {
    quote:
      "The valuation engagement with CKS was very helpful in evaluating our strategic options which eventually led to buying out the stake of our external investor.",
    author: "CEO",
    department: "Executive Leadership",
    company: "Family-Owned Construction Business",
    engagementType: "Strategic Decision",
    serviceLine: "Financial modelling",
    country: "Australia",
    outcomes: [
      "Accurate company valuation framework",
      "Clear financial options analysis",
      "Successful investor buyout execution",
    ],
  },
  {
    quote:
      "The briefings contain a wealth of information in one place.",
    author: "Strategy Executive",
    department: "Strategic Planning",
    company: "Growth Stage Startup",
    engagementType: "Research",
    serviceLine: "Strategy and research",
    country: "United Kingdom",
    outcomes: [
      "Consolidated industry intelligence",
      "Time saved on research compilation",
      "Better informed strategic decisions",
    ],
  },
  {
    quote:
      "The budgeting and valuation exercise was extremely valuable in planning our product roadmap and fundraising requirements.",
    author: "CEO",
    department: "Executive Leadership",
    company: "Active Wear Startup",
    engagementType: "Fundraising",
    serviceLine: "Financial modelling",
    country: "New Zealand",
    outcomes: [
      "Clear financial roadmap developed",
      "Product investment prioritisation",
      "Informed fundraising strategy",
    ],
  },
];
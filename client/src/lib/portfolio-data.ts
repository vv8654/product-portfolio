import type { PortfolioData } from "@shared/schema";

export const portfolioData: PortfolioData = {
  name: "Varun Vedala",
  title: "Product Manager",
  email: "varunvedala@utexas.edu",
  linkedin: "linkedin.com/in/VarunVedala",
  bio: "Product-focused innovator passionate about building user-centric solutions that drive meaningful impact. Currently pursuing my BBA in Management Information Systems at UT Austin, I blend technical expertise with strategic thinking to ship products that users love.",

  education: {
    school: "The University of Texas at Austin",
    degree: "Bachelor of Business Administration, Management Information Systems",
    minor: "Media and Entertainment Industries",
    certificate: "Programming and Computation",
    coursework: [
      "Database Management",
      "Web Application Development",
      "Computer Systems Security",
      "Principles of Product Marketing",
      "Business System Development",
      "Generative AI in Business",
      "Predictive Analytics",
      "Strategic Information Technology"
    ]
  },

  experiences: [
    {
      company: "Electronic Arts (EA)",
      title: "Product Management Intern",
      location: "Austin, Texas",
      period: "May 2025 - August 2025",
      highlights: [
        "Identified inefficiencies in Salesforce queue routing and proposed a skills-based design to improve VIP handling accuracy by 10%+",
        "Authored BRD and admin-led plan enabling 60% faster routing updates while reducing developer reliance by 75%",
        "Conducted 15+ stakeholder interviews and built advisor capacity models with 20+ skill profiles to inform roadmap prioritization"
      ]
    },
    {
      company: "Alcan Dental Cooperative",
      title: "Lead Product Manager",
      location: "Austin, Texas",
      period: "Jan 2025 - May 2025",
      highlights: [
        "Defined feature scope and user journeys for an AI training platform with 4+ gamified modules aimed at improving staff onboarding",
        "Collaborated with 3 designers and 5 engineers to build a RAG-based chatbot and deliver 34 Figma flows aligned to UX goals",
        "Conducted 10+ stakeholder interviews and 15+ feedback cycles to inform roadmap and accelerate MVP development timelines"
      ]
    },
    {
      company: "Peace Foundation",
      title: "Product Manager - Disaster Defender Game",
      location: "Remote",
      period: "Aug 2024 - Dec 2024",
      highlights: [
        "Defined product strategy and user flow for a game enabling 1K+ real-time charity donations, partnering with 3 PMs and 6 devs",
        "Led market research and AI analysis to convert 20+ founder insights into scoped features and interactive UI mockups",
        "Scoped MVP and coordinated 3 teams to align 10+ gameplay mechanics with user empathy and nonprofit impact goals"
      ]
    },
    {
      company: "Querio",
      title: "Product Management Intern",
      location: "Austin, Texas",
      period: "May 2024 - July 2024",
      highlights: [
        "Created and iterated on PRDs and roadmap priorities using Agile, driving feature alignment with user feedback and market gaps",
        "Led 15+ user interviews and 5 design sprints to boost satisfaction by 20% and update UI in Figma based on usability insights",
        "Collaborated with design and engineering to map 30+ screens and improve UX efficiency by 25% through cross-functional delivery"
      ]
    },
    {
      company: "McCombs School of Business",
      title: "Research Assistant",
      location: "Austin, Texas",
      period: "April 2024 - Dec 2024",
      highlights: [
        "Structured AMD & NVIDIA business data using Python and R-Studio, reducing processing time by 30% and boosting accuracy",
        "Collected 1,500+ data points from corporate sites and verified 700+ judge matches on LinkedIn with 95% match accuracy",
        "Supervised 10+ experiments and improved data collection speed by 20% across both in-person and digital research sessions"
      ]
    }
  ],

  caseStudies: [
    {
      id: "ecocart",
      title: "EcoCart",
      subtitle: "Sustainable Shopping Companion",
      role: "Product Manager",
      timeline: "Jan 2023 - May 2023",
      heroColor: "#10B981",
      heroGradient: "from-emerald-500 to-teal-600",
      overview: "EcoCart is a mobile application designed to help consumers make more sustainable shopping choices by providing product sustainability scores, discount incentives, and seamless store integration.",
      problem: "Grocery shoppers lack incentive to consume sustainable alternatives. Users cited three main pain points: no personal benefit visibility, higher costs for eco-friendly products, and time-consuming research to find sustainable options.",
      solution: "We built a barcode scanning app that provides instant sustainability scores, personalized discounts from partner stores, and a shopping trip history to track environmental impact over time.",
      impact: [
        "78% positive user feedback on the business model",
        "150+ user interviews conducted for validation",
        "Managed backlog of 15+ deliverables using Agile",
        "All milestones completed within 10-week sprint"
      ],
      techStack: ["React Native", "Node.js", "MongoDB", "Figma", "Agile/Scrum"],
      keyFeatures: [
        "Barcode Scanner for instant product lookup",
        "Sustainability Score calculation",
        "Company Sustainability Reports",
        "Customer Discount Integration",
        "Shopping Trip History"
      ],
      userQuotes: [
        "I don't really see the personal benefit for being sustainable.",
        "Most sustainable things are costly so it doesn't really make sense to make the switch.",
        "I find it too time consuming to find sustainable alternatives."
      ],
      metrics: [
        { label: "Users Willing to Pay Premium", value: "70%" },
        { label: "Would Spend $10+ More with Discount", value: "93%" },
        { label: "Willing to Pay $2.50+/month", value: "45%" },
        { label: "Positive User Feedback", value: "78%" }
      ],
      presentationUrl: "https://www.canva.com/design/DAFcwLYM5cA/kK0Ojm582T30bTGVpmoXmQ/edit"
    },
    {
      id: "disaster-defender",
      title: "Disaster Defender",
      subtitle: "Peace Foundation Charity Game",
      role: "Product Manager",
      timeline: "Aug 2024 - Dec 2024",
      heroColor: "#6366F1",
      heroGradient: "from-indigo-500 to-purple-600",
      overview: "Disaster Defender is a video game developed for The Peace Foundation that gamifies disaster relief experiences while enabling real-time charitable donations to humanitarian causes.",
      problem: "Charitable organizations struggle to engage younger audiences and create meaningful connections between donors and the impact of their contributions in disaster relief efforts.",
      solution: "We developed an immersive game that simulates disaster relief scenarios, allowing players to experience the challenges of humanitarian work while contributing real donations to charities of their choice.",
      impact: [
        "Designed for 1K+ real-time charity donations",
        "Coordinated 3 cross-functional teams",
        "Aligned 10+ gameplay mechanics with impact goals",
        "Converted 20+ founder insights into scoped features"
      ],
      techStack: ["Unity", "Blender", "Figma", "C#", "STEAM SDK"],
      keyFeatures: [
        "NPC/AI Gameplay with inter-defender interactions",
        "Strategic deployment wave mechanics",
        "3D Environment with realistic disaster scenarios",
        "Real-time donation integration",
        "Progress tracking and impact visualization"
      ],
      metrics: [
        { label: "Partner Organizations", value: "3+" },
        { label: "Gameplay Mechanics", value: "10+" },
        { label: "Team Members", value: "12" },
        { label: "Design Iterations", value: "20+" }
      ],
      presentationUrl: "https://www.canva.com/design/DAGYdzBdxo8/6GUYUbOQnU0g3NxazyNH_Q/edit"
    },
    {
      id: "alcan-dental",
      title: "Alcan Dental",
      subtitle: "AI-Powered Staff Training Platform",
      role: "Product Lead",
      timeline: "Jan 2025 - May 2025",
      heroColor: "#0EA5E9",
      heroGradient: "from-sky-500 to-cyan-600",
      overview: "An AI-powered gamified training application for dental front desk staff, featuring interactive learning experiences and an intelligent chatbot to improve customer service practices.",
      problem: "Dental clinics struggle to effectively train front desk staff on optimal customer service practices, particularly when appealing to younger demographics who expect modern, engaging training methods.",
      solution: "We built a gamified training platform with AI-generated interactive calls, short-form educational media, observational learning modules, and a RAG-powered chatbot for real-time assistance.",
      impact: [
        "Delivered AI chatbot with FastAPI and Pinecone RAG architecture",
        "Created 19 Figma files with 15 low-fidelity user flows",
        "Built extensive branded component library",
        "Led cross-functional team of 12+ members"
      ],
      techStack: ["FastAPI", "Pinecone", "RAG", "Figma", "Python"],
      keyFeatures: [
        "AI-Generated Interactive User Calls",
        "Short-form Educational Media",
        "Observational Learning Modules",
        "User-led Reflective Learning",
        "AI Chatbot for Live Assistance"
      ],
      metrics: [
        { label: "Figma Files Created", value: "19" },
        { label: "User Flows Designed", value: "15" },
        { label: "Team Members", value: "12+" },
        { label: "Coach Personas", value: "4" }
      ],
      presentationUrl: "https://www.canva.com/design/DAGlGPyJGq0/cFQAEBHZ1rKVjRB93FQF2w/edit"
    }
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python (Pandas)", "SQL", "C#", "R/R-Studio", "HTML/CSS"]
    },
    {
      category: "Data & Cloud",
      items: ["Tableau", "Snowflake", "AWS", "Azure", "Google Analytics"]
    },
    {
      category: "Product Tools",
      items: ["Jira", "Trello", "Figma", "Balsamiq", "Lucidchart", "Confluence", "Miro"]
    },
    {
      category: "Methodologies",
      items: ["Agile/Scrum", "User Research", "A/B Testing", "Design Sprints", "PRD Writing"]
    }
  ],

  honors: [
    "2025 MIS 333K System Competition 2nd Place",
    "2023 Texas Convergent Demo Day Best Design",
    "University Honors (4x)",
    "Microsoft Office Specialist Word Expert",
    "Microsoft Office Specialist Excel",
    "Microsoft Office Specialist PowerPoint"
  ],

  interests: [
    "Tabla",
    "Marvel",
    "Hip-Hop",
    "Anime",
    "Pickleball",
    "Video Games",
    "Agentic AI",
    "Mixed Reality",
    "Trying New Foods"
  ]
};

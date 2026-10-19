// All copy lives here so marketing can edit text without touching layout code.

export const nav = [
  { label: "Who we are", href: "#about" },
  { label: "What we do", href: "#services" },
  { label: "Our Knowledge", href: "#projects" },
];

export const hero = {
  intro:
    "Looking for a reliable tech partner to build digital products and scale your business? You’re in the right place.",
  body: "From custom software development and IT infrastructure management to practical AI transformation, Slitigenz turns complex technical challenges into simple, high-performing business solutions.",
  // NOTE: the Canva design left these button labels empty — placeholders.
  primary: { label: "Get started", href: "#roi" },
  secondary: { label: "Our services", href: "#services" },
};

export const about = {
  title: "Built in Vietnam. Scaled Worldwide.",
  paragraphs: [
    "Slitigenz is a Vietnam-based technology company delivering software development, IT infrastructure management, dedicated engineering teams, and AI solutions for businesses across international markets.",
    "Our engineering teams combine software expertise, infrastructure capabilities, and practical AI integration to help startups and established businesses build, modernize, and scale their technology.",
  ],
  countries: ["Vietnam", "Australia", "United States", "South Korea"],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "60+", label: "Projects Delivered" },
    { value: "30+", label: "Engineers & Technology Specialists" },
  ],
};

export const services = {
  title: { light: "Technology Built ", bold1: "for", bold2: "Real Business Value" },
  subtitle:
    "You bring the challenge. We bring the engineers, technical depth, and AI transformation tools to solve it.",
  items: [
    {
      title: "Technology & AI Consulting",
      image: "/img/s1.jpg",
      body: "We help you choose the right tech stack, design your architecture, and plan a practical AI transformation roadmap to speed up daily operations.",
    },
    {
      title: "IT Infrastructure Management",
      image: "/img/s2.jpg",
      body: "We design, implement, monitor, secure, and optimize server, network, and cloud infrastructure so your systems stay reliable, scalable, and ready to support demanding workloads.",
    },
    {
      title: "Dedicated Teams (ODC)",
      image: "/img/s3.jpg",
      body: "Build a dedicated offshore team of senior software engineers, infrastructure specialists, and **AI developers** in Vietnam working directly for you.",
    },
    {
      title: "Custom Software Development",
      image: "/img/s4.jpg",
      body: "We engineer fast web applications, mobile platforms, and enterprise software, integrating smart **AI transformation** features where they add real value.",
    },
  ],
};

export const stacks = [
  { name: "Java", src: "/img/java.png" },
  { name: "OpenAI", src: "/img/openai.png" },
  { name: "Python", src: "/img/python.png" },
  { name: "Node.js", src: "/img/node.png" },
  { name: "AWS", src: "/img/aws.png" },
];

export const projects = [
  { tag: "E-COMMERCE", image: "/img/p1.jpg" },
  { tag: "AI TRANSFORMATION", image: "/img/p2.jpg", featured: true },
  { tag: "GAMIFICATION", image: "/img/p3.jpg" },
];

export const comparison = {
  intro:
    "Choosing a technology partner is about more than finding developers. You need technical expertise, reliable communication, clear ownership, and a team that understands your business goals.",
  rows: [
    {
      feature: "Ownership",
      us: "Full accountability, SLA guarantees, and on-time delivery.",
      them: "High supervision required; risk of project delays.",
    },
    {
      feature: "AI Strategy",
      us: "Practical AI transformation focused on real ROI.",
      them: "Basic task execution without long-term strategy.",
      highlight: true,
    },
    {
      feature: "Communication",
      us: "Fluent English, daily transparent updates, zero hassle.",
      them: "Language barriers and communication gaps.",
    },
    {
      feature: "Cost Efficiency",
      us: "World-class engineering & IT management at fair rates.",
      them: "Unexpected hidden costs and high overhead.",
    },
  ],
};

export const testimonials = [
  {
    image: "/img/t1.jpg",
    quote:
      "SLI provides exceptional software engineering expertise. Their team gives our students hands-on exposure to modern tech and real-world AI transformation practices.",
  },
  {
    image: "/img/t2.jpg",
    // NOTE: empty in the Canva design — fill in the client's quote.
    quote: "",
  },
];

// ROI calculator inputs. Placeholder options — the design left them blank.
export const roi = {
  industries: [
    { id: "ecommerce", label: "E-commerce", automatable: 0.35 },
    { id: "finance", label: "Finance", automatable: 0.4 },
    { id: "healthcare", label: "Healthcare", automatable: 0.25 },
    { id: "logistics", label: "Logistics", automatable: 0.3 },
    { id: "other", label: "Other", automatable: 0.25 },
  ],
  teamSizes: [
    { id: "1-5", label: "1–5", people: 3 },
    { id: "6-20", label: "6–20", people: 13 },
    { id: "21-50", label: "21–50", people: 35 },
    { id: "50+", label: "50+", people: 70 },
  ],
  hoursPerWeek: 40,
  hourlyCostUsd: 12,
};

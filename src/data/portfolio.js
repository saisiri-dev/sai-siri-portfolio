// ─────────────────────────────────────────────────────────────────────────
// Centralized content for the portfolio.
// Every field here is sourced from Sai Siri Kudaravalli's resume.
// Edit this file to update the site — components read from here only.
// Fields marked with "REPLACE_" are intentional placeholders. Nothing else
// in this file should be treated as a placeholder.
// ─────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Sai Siri Kudaravalli",
  role: "Computer Science Student",
  tagline: "Aspiring Software Engineer",
  location: "Guntur, Andhra Pradesh, India",
  email: "sirikudaravalli24@gmail.com",
  phone: "+91 8328507912",
  linkedin: "https://linkedin.com/in/saisirik",
  linkedinDisplay: "linkedin.com/in/saisirik",
  github: "https://github.com/saisiri-dev",
  githubDisplay: "github.com/saisiri-dev",
  resumeUrl: "/portfolio/resume.pdf",
};

export const objective =
  "B.Tech Computer Science student with foundational knowledge of Java, Python, JavaScript, SQL, and web development. I have gained practical exposure through a Full Stack Developer internship and hands-on projects involving application development, REST APIs, Git, and databases. I enjoy learning through problem-solving and building projects, and I'm seeking an entry-level Software Engineer opportunity to continue developing my skills and contribute to real-world software projects.";
  
export const about = [
  "I'm a B.Tech Computer Science student at KKR & KSR Institute of Technology and Sciences, currently building a strong foundation in programming, web development, databases, and software engineering fundamentals.",
  "During my Full Stack Developer internship at Blackbucks Group, I gained practical exposure to application development, working with Git and GitHub, REST API integration, debugging, and Agile development practices.",
  "I enjoy learning by building and exploring projects across different areas of technology, from enterprise workflow automation to product design and research. I'm looking for an entry-level Software Engineer role where I can continue learning and contribute to real-world software projects.",
  ];

export const education = [
  {
    school: "KKR & KSR Institute of Technology and Sciences",
    program: "B.Tech — Computer Science & Engineering",
    period: "Aug 2023 – Jun 2027",
    detail: "CGPA: 8.43 / 10",
  },
  {
    school: "Bhashyam Junior College",
    program: "Intermediate (MPC)",
    period: "Aug 2021 – May 2023",
    detail: "Percentage: 92%",
  },
  {
    school: "Dr. K.L.P Public School, CBSE",
    program: "Class X",
    period: "Jun 2012 – May 2021",
    detail: "Percentage: 92%",
  },
];

export const skills = [
  {
    group: "Programming Fundamentals",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    group: "Web Development Fundamentals",
    items: ["HTML", "CSS", "React.js", "Node.js", "REST APIs"],
  },
  {
    group: "Database Fundamentals",
    items: ["SQL", "MongoDB"],
  },
  {
    group: "Software Development Fundamentals",
    items: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Problem Solving",
      "Debugging",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    group: "Cloud",
    items: ["AWS (Fundamentals)"],
  },
  {
    group: "ServiceNow",
    items: [
      "Service Catalog",
      "Flow Designer",
      "Business Rules",
      "Client Scripts",
      "UI Policies",
      "Workflow Automation",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Blackbucks Group",
    location: "Guntur, Andhra Pradesh — Remote",
    period: "May 2025 – July 2025",
    points: [
      "Gained practical exposure to modern web application development and collaborative software development practices.",
      "Worked with Git and GitHub for version control; learned REST API integration, debugging, and Agile development methodologies.",
      "Strengthened software development, problem-solving, and teamwork skills in a professional environment.",
    ],
  },
];

export const projects = [
  {
    name: "Automated Network Request Management",
    category: "Application Development · Workflow Automation · ServiceNow",
    type: "software",
    description:
      "An enterprise application that automates the end-to-end lifecycle of network service requests — from submission through approval, fulfillment, and completion.",
    points: [
      "Built a structured request catalog with role-based access for requesters, approvers, and support teams; implemented form validation and dynamic UI controls.",
      "Designed and configured automated approval workflows, email notifications, and business logic for request processing and lifecycle management.",
      "Enabled automated task creation and assignment, supporting seamless request progression from approval to completion.",
      "Built reporting and dashboard views to monitor request status, approvals, and operational performance.",
    ],
    tech: ["ServiceNow", "Workflow Automation", "Business Rules", "Flow Designer"],
    githubUrl: "https://github.com/saisiri-dev/Automated-Network-Request-Management-ServiceNow",
    demoUrl: "https://drive.google.com/file/d/1VVsJyoLoKSiEaekiOLONLUVFowFNwYTp/view",
  },
  {
    name: "CoolQuench — Self-Cooling Smart Water Bottle",
    category: "Academic Project · Product Design",
    type: "academic",
    description:
      "A product-design concept for a self-cooling water bottle, combining evaporative cooling, phase-change materials, and UV sterilization.",
    points: [
      "Proposed the product design using evaporative cooling, phase-change materials, and UV sterilization.",
      "Authored a detailed feasibility and sustainability report.",
      "Presented the concept at the DTI showcase, highlighting eco-friendly design principles.",
    ],
    tech: ["Product Design", "Sustainability", "Feasibility Research"],
    githubUrl: null,
    demoUrl: "https://docs.google.com/presentation/d/1sCEUAdRyCStt2mOD5UUfhJmXrA8npfSR/edit?usp=drive_link&ouid=101268218236962558694&rtpof=true&sd=true",
  },
];

export const research = {
  title:
    "Advancements in Quantum Computing and Security: Hybrid Architectures, Optimization, and Intelligent Systems",
  authorship: "First Author",
  publication:
    "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
  summary:
    "Researched hybrid quantum computing architectures, quantum security, cloud computing, and intelligent systems, with explored applications in healthcare, finance, cybersecurity, and cloud computing.",
  doi: "https://doi.org/10.58257/IJPREMS54213",
  areas: [
    "Hybrid quantum computing architectures",
    "Quantum security",
    "Cloud computing",
    "Intelligent systems",
    "Applications in healthcare & finance",
    "Cybersecurity",
  ],
};

export const certifications = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "ServiceNow Certified Application Developer (CAD)" },
  { name: "ServiceNow Certified System Administrator (CSA)" },
];

export const achievements = [
  {
    title: "3rd Place — Guntur Centralized Hackathon, Hackmelaa 2026",
    detail: "Among the Top 8 finalist teams.",
  },
  {
    title: "College coding clubs & technical events",
    detail: "Active participant, engaging in technical learning and project activities.",
  },
  {
    title: "Cultural event volunteering",
    detail: "Supported event management and student engagement.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

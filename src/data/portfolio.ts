/**
 * REAL PORTFOLIO CONFIGURATION - SHREYASH BHAT
 * 
 * 100% grounded in authentic data, real certificates, real college credentials,
 * verified Coursera/Google credentials, Forage simulations, and hackathon participations.
 */

export interface Project {
  id: string;
  title: string;
  category: 'Healthcare & AI' | 'Web & Systems';
  tagline: string;
  description: string;
  featured?: boolean;
  image: string;
  technologies: string[];
  features?: string[];
  githubUrl: string;
  liveUrl: string;
  status?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  badgeType: 'google' | 'internship' | 'hackathon' | 'industry' | 'simulation';
  signatory?: string;
  issuerBadge?: string;
}

export interface InternshipOpportunity {
  id: string;
  organization: string;
  role: string;
  period: string;
  dateIssued: string;
  status: 'Completed & Certified' | 'Virtual Internship Offer';
  isCompleted: boolean;
  description: string;
  letterId?: string;
  signatory: string;
  signatoryTitle: string;
  accreditation?: string;
  tasks?: string[];
  certificateUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  team?: string;
  description: string;
  institution: string;
  badge: string;
}

export const portfolioData = {
  // Personal & Hero details
  personal: {
    name: "Shreyash Bhat",
    fullName: "Shreyash Shrikant Bhat",
    initials: "SB",
    headline: "CSE Student | AI & ML Enthusiast | Full-Stack Developer",
    tagline: "Building intelligent, useful and human-centered digital experiences with AI and software.",
    location: "Shirpur, Maharashtra, India",
    college: "SVKM College of Engineering, Shirpur",
    degree: "B.Tech Computer Science & Engineering",
    email: "shreyashbhat1111@gmail.com",
    avatar: "/profile.jpg",
    resumePath: "/resume.pdf",
    statusText: "Available for internships & collaborations",
    
    // Verified Social & Profile links
    social: {
      github: "https://github.com/shreyashbhat1111",
      linkedin: "https://www.linkedin.com/in/shreyash-bhat-26584237b",
      email: "mailto:shreyashbhat1111@gmail.com",
    },

    // Rotating headlines for Hero animation
    dynamicRoles: [
      "AI & ML Enthusiast",
      "Full-Stack Developer",
      "CSE Student @ SVKM",
      "Healthcare Tech Innovator"
    ]
  },

  // About Section Details (Directly from Shreyash's authentic bio)
  about: {
    bio: [
      "I’m a Computer Science and Engineering student passionate about building technology that solves real-world problems. My journey combines software development, artificial intelligence, healthcare technology, design, and digital creativity.",
      "I’m continuously developing my technical skills through hands-on projects, certifications, internships, hackathons, technical events, and practical learning. I enjoy turning ideas into meaningful digital solutions — from AI-powered applications and web experiences to problem-solving projects.",
      "Alongside technology, I explore freelancing, content creation, technical writing, UI/UX, and communication, which helps me approach projects from both a technical and creative perspective. I believe in learning by building, experimenting with new technologies, and continuously improving my skills to create impactful technology-driven products."
    ],
    
    focusAreas: [
      {
        title: "Artificial Intelligence & ML",
        desc: "Developing intelligent algorithms, prompt frameworks, machine learning models, and applied AI systems.",
        iconName: "Brain"
      },
      {
        title: "Full-Stack Web Development",
        desc: "Crafting responsive, high-performance web applications with clean architecture and modern JavaScript.",
        iconName: "Layers"
      },
      {
        title: "Healthcare Technology",
        desc: "Building accessible patient companions, medical record concepts, and clinical digital solutions.",
        iconName: "HeartPulse"
      },
      {
        title: "UI/UX & Creative Engineering",
        desc: "Designing user-centered experiences in Figma, rapid prototyping, technical writing, and product ideation.",
        iconName: "Palette"
      }
    ],

    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SVKM College of Engineering, Shirpur",
      location: "Shirpur, Maharashtra, India",
      status: "Undergraduate Program",
      highlights: [
        "Core Focus: Artificial Intelligence, Machine Learning & Web Architectures",
        "Active Participant in National & University Hackathons (Adobe, CodeCraze, Navonmesh)",
        "Certified in Google AI, Forage Surgical Tech & MeitY/nasscom programs"
      ]
    },

    stats: [
      { label: "College", value: "SVKM", detail: "COE Shirpur" },
      { label: "Certifications", value: "6+", detail: "Google, SkillNexis, nasscom" },
      { label: "Hackathons", value: "3+", detail: "Adobe, CodeCraze, Srijan" },
      { label: "Internships", value: "2", detail: "Skill Nexis & CodSoft" }
    ]
  },

  // Skills Section (Direct authentic categorized list from user)
  skillCategories: [
    {
      category: "Programming",
      description: "Systems and application development languages",
      skills: ["Python", "C", "C++", "Java"]
    },
    {
      category: "Web Development",
      description: "Modern web architecture and interfaces",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
    },
    {
      category: "AI & Machine Learning",
      description: "Intelligent systems, data modeling & generative tech",
      skills: ["Machine Learning", "Generative AI", "AI Application Development", "Prompt Engineering"]
    },
    {
      category: "Database",
      description: "Relational and cloud data architectures",
      skills: ["SQL", "DBMS", "Firebase"]
    },
    {
      category: "Development Tools",
      description: "Productivity, version control & notebooks",
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
    },
    {
      category: "Data & Problem Solving",
      description: "Analytical computation and algorithmic rigor",
      skills: ["Data Structures & Algorithms", "Data Analysis", "Research & Analytical Thinking"]
    },
    {
      category: "UI/UX & Design",
      description: "Visual communication and digital prototyping",
      skills: ["Figma", "UI/UX Design", "Prototyping", "Canva", "AI-assisted Design"]
    },
    {
      category: "Content & Communication",
      description: "Technical clarity and documentation",
      skills: ["Content Writing", "Technical Writing", "Copywriting", "Documentation", "Presentation"]
    },
    {
      category: "Freelancing & Delivery",
      description: "Client execution and project management",
      skills: ["Freelance Projects", "Client Communication", "Requirement Understanding", "Project Delivery"]
    },
    {
      category: "Leadership & Collaboration",
      description: "Teamwork, events and public speaking",
      skills: ["Team Leadership", "Event Management", "Team Collaboration", "Public Speaking"]
    },
    {
      category: "Innovation & Strengths",
      description: "Core professional mindset and agility",
      skills: ["Product Ideation", "Rapid Prototyping", "Adaptability", "Critical Thinking", "Continuous Learning"]
    }
  ],

  // Projects Section
  projects: [
    {
      id: "pulse-feel",
      title: "Pulse Feel",
      category: "Healthcare & AI",
      tagline: "AI-Powered Healthcare Companion & Discovery Platform",
      description: "A comprehensive healthcare companion concept focused on making health information, doctor discovery, and personal health management accessible to every individual and family.",
      featured: true,
      image: "/projects/pulse-feel.jpg",
      technologies: ["Flutter", "Firebase", "AI", "Google Maps"],
      features: [
        "AI healthcare assistant for triage guidance",
        "Hospital & verified doctor discovery with location mapping",
        "Seamless appointment support & scheduling",
        "One-touch emergency assistance & rapid alert triggers",
        "Secure digital health records & diagnostic timelines",
        "Automated medicine reminders with dosage alerts",
        "Multi-member family health profile management",
        "Accessibility-first multilingual interface"
      ],
      githubUrl: "https://github.com/shreyashbhat1111",
      liveUrl: "#pulse-feel",
      status: "Featured Healthcare Concept"
    },
    {
      id: "medicine-reminder",
      title: "Medicine Reminder",
      category: "Healthcare & AI",
      tagline: "Smart Medication Scheduling & Patient Adherence System",
      description: "A digital health tracking tool engineered to support patients and elderly care by managing medication schedules, reminder notifications, and daily adherence tracking.",
      featured: false,
      image: "/projects/medicine-reminder.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
      features: [
        "Configurable multi-time daily dose schedules",
        "Visual reminders and alerts",
        "Adherence analytics and missed-dose log",
        "Local offline data persistence"
      ],
      githubUrl: "https://github.com/shreyashbhat1111",
      liveUrl: "#medicine-reminder",
      status: "Completed Project"
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      category: "Healthcare & AI",
      tagline: "Cardiovascular Risk Stratification via Machine Learning",
      description: "An applied machine learning classification system analyzing clinical cardiovascular indicators to evaluate patient indicators and support risk assessment.",
      featured: false,
      image: "/projects/heart-disease.jpg",
      technologies: ["Python", "Machine Learning", "Data Analysis", "SQL"],
      features: [
        "Supervised ML classification pipeline",
        "Biomarker correlation & clinical feature weighting",
        "Interactive risk prediction score generator",
        "Precision model evaluation"
      ],
      githubUrl: "https://github.com/shreyashbhat1111",
      liveUrl: "#heart-disease-prediction",
      status: "Completed Project"
    }
  ] as Project[],

  // Internships & Opportunities (Offer letters & completed internships)
  internships: [
    {
      id: "intern-skillnexis",
      organization: "Skill Nexis",
      role: "Machine Learning & AI Intern",
      period: "04/09/2026 to 16/10/2026",
      dateIssued: "04/09/2026",
      status: "Completed & Certified",
      isCompleted: true,
      description: "Selected and successfully completed a 6-week online internship program in Machine Learning & AI. Worked on assigned projects and applied machine learning algorithms.",
      signatory: "Rakesh Soni",
      signatoryTitle: "Founder & Program Head",
      accreditation: "AICTE & MSME Registered",
      tasks: [
        "Machine Learning model development & testing",
        "AI application concepts and data preprocessing",
        "Completed 6-week program, certified on 30-09-2026"
      ],
      certificateUrl: "#cert-skillnexis"
    },
    {
      id: "intern-codsoft",
      organization: "CodSoft",
      role: "Web Development Virtual Intern",
      period: "01 October 2026 to 31 October 2026 (1 Month)",
      dateIssued: "28/09/2026",
      letterId: "BY26RY238844",
      status: "Virtual Internship Offer",
      isCompleted: false, // Clearly labeled as an Offer Letter
      description: "Received official selection and internship offer letter for the Web Development virtual internship position with CodSoft.",
      signatory: "Ruman Arshad",
      signatoryTitle: "Program Manager",
      accreditation: "ISO 9001:2015 Certified | MSME Registered (TSNUK79053)",
      tasks: [
        "Frontend web design and responsive UI development",
        "JavaScript application architecture",
        "Hands-on project deliverables"
      ]
    }
  ] as InternshipOpportunity[],

  // Verified Certifications (From uploaded certificate files & Coursera/Forage records)
  certifications: [
    {
      id: "cert-skillnexis",
      title: "Certificate of Completion — Machine Learning & AI",
      issuer: "Skill Nexis",
      date: "30-09-2026",
      description: "Successfully completed the 6 Weeks online internship program in Machine Learning & AI at Skill Nexis.",
      skills: ["Machine Learning", "Artificial Intelligence", "Python", "Data Processing"],
      badgeType: "internship",
      signatory: "Rakesh Soni (Founder & Program Head)",
      issuerBadge: "Skill Nexis Education & Skill Development"
    },
    {
      id: "cert-google-productivity",
      title: "Maximize Productivity With AI Tools",
      issuer: "Google (Offered through Coursera)",
      date: "Aug 6, 2026",
      credentialId: "RK0X764WCACR",
      credentialUrl: "https://coursera.org/verify/RK0X764WCACR",
      description: "Authorized by Google and delivered via Coursera. Validates practical proficiency in leveraging modern AI tools to accelerate workflows and productivity.",
      skills: ["Generative AI Tools", "Productivity Acceleration", "AI Applications"],
      badgeType: "google",
      signatory: "Amanda Brophy (Global Director of Google Career Certificates)"
    },
    {
      id: "cert-google-prompting",
      title: "Discover the Art of Prompting",
      issuer: "Google (Offered through Coursera)",
      date: "Aug 6, 2026",
      credentialId: "IX04ZF6ICMDE",
      credentialUrl: "https://coursera.org/verify/IX04ZF6ICMDE",
      description: "Authorized by Google and delivered via Coursera. Comprehensive mastery of prompt engineering, contextual structuring, and directing generative AI models.",
      skills: ["Prompt Engineering", "LLM Interaction", "AI Context Design"],
      badgeType: "google",
      signatory: "Amanda Brophy (Global Director of Google Career Certificates)"
    },
    {
      id: "cert-google-intro-ai",
      title: "Introduction to AI",
      issuer: "Google (Offered through Coursera)",
      date: "Aug 6, 2026",
      credentialId: "Z8B3G17Y7148",
      credentialUrl: "https://coursera.org/verify/Z8B3G17Y7148",
      description: "Authorized by Google and delivered via Coursera. Foundational principles of modern Artificial Intelligence, neural computing, and applied smart systems.",
      skills: ["Artificial Intelligence", "Machine Learning Concepts", "Ethical AI"],
      badgeType: "google",
      signatory: "Amanda Brophy (Global Director of Google Career Certificates)"
    },
    {
      id: "cert-forage-surgical",
      title: "Surgical Tech Job Simulation Certificate of Completion",
      issuer: "Forage",
      date: "June 19th, 2026",
      credentialId: "P8dJBnzDTkhPFD5Pz",
      credentialUrl: "https://www.theforage.com",
      description: "Completed practical simulation tasks including Introduction to Perioperative Phases and Making the Right Call in the O.R. (Operating Room).",
      skills: ["Healthcare Technology", "Perioperative Systems", "Clinical Protocols"],
      badgeType: "simulation",
      signatory: "Tom Brunskill (Co-Founder of Forage)"
    },
    {
      id: "cert-india-ai",
      title: "Yuva AI for All",
      issuer: "INDIAai & nasscom futureskills prime",
      date: "19 Apr 2026",
      description: "Course participation and completion under the national digital skilling initiative by MeitY and nasscom IT-ITeS Sector Skills Council.",
      skills: ["AI Literacy", "Digital Skilling", "FutureSkills"],
      badgeType: "industry",
      signatory: "Dr. Abhilasha Gaur (CEO, IT-ITeS SSC Nasscom)"
    }
  ] as Certification[],

  // Achievements & Competitive Hackathons (Directly from verified certificates)
  achievements: [
    {
      id: "achieve-adobe",
      title: "Adobe University Hackathon Participant",
      event: "Adobe University Hackathon",
      organizer: "Adobe & unstop",
      date: "9th August 2026",
      institution: "SVKM College Of Engineering Shirpur",
      badge: "National Hackathon",
      description: "Represented SVKM College of Engineering Shirpur and participated in the national-level Adobe University Hackathon organised by Adobe."
    },
    {
      id: "achieve-codecraze",
      title: "CodeCraze 3.0 — The 24-Hour Hackathon",
      event: "CodeCraze 3.0",
      organizer: "R. C. Patel Institute of Technology, Shirpur (with unstop & Fetch.ai)",
      date: "2026",
      team: "Team LifeLedger",
      institution: "SVKM College Of Engineering Shirpur",
      badge: "Round 1 Selection",
      description: "Selected and participated as Team LifeLedger in Round 1: Prime Timeline Selection of the 24-hour hackathon organized by RCPIT Shirpur."
    },
    {
      id: "achieve-navonmesh",
      title: "Srijan / Ankur / Udbhav Hackathon",
      event: "Navonmesh'26 Hackathon",
      organizer: "Shri Sant Gajanan Maharaj College of Engineering",
      date: "2026",
      institution: "SVKM College Of Engineering Shirpur",
      badge: "State Hackathon",
      description: "Awarded Certificate of Participation for enthusiastic innovation and practical problem solving in the Hackathon organized by Navonmesh'26."
    }
  ] as Achievement[],

  // Local Assistant Knowledge Base (100% grounded in Shreyash's real records)
  knowledgeBase: {
    about: "Shreyash Bhat (Shreyash Shrikant Bhat) is a Computer Science and Engineering student at SVKM College of Engineering, Shirpur (Maharashtra, India). He is passionate about building real-world solutions across software development, AI/ML, healthcare technology, design, and digital creativity.",
    education: "Shreyash is pursuing a B.Tech in Computer Science & Engineering at SVKM College of Engineering, Shirpur, Maharashtra, India.",
    skillsSummary: "Shreyash's skills cover Programming (Python, C, C++, Java), Web Development (HTML, CSS, JavaScript, Responsive Web Design), Databases (SQL, DBMS, Firebase), AI/ML (Machine Learning, Generative AI, AI Application Development, Prompt Engineering), Tools (Git, GitHub, VS Code, Google Colab, Jupyter Notebook), Data Structures & Algorithms, UI/UX (Figma, Canva), Technical Writing, and Freelance Delivery.",
    pulseFeel: "Pulse Feel is an AI-powered healthcare companion concept designed by Shreyash. It integrates triage guidance, hospital/doctor discovery via Google Maps, appointment support, emergency assistance, health records, medicine reminders, family profiles, and multilingual accessibility using Flutter, Firebase, AI, and Google Maps.",
    projectsSummary: "Shreyash has built Pulse Feel (AI healthcare companion concept), Medicine Reminder (medication scheduling and patient adherence system), and Heart Disease Prediction (machine learning cardiovascular risk stratification model in Python).",
    internshipsSummary: "Shreyash completed a 6-week Machine Learning & AI internship at Skill Nexis (certified on 30-09-2026). He also received an official internship selection and offer letter from CodSoft for Web Development (ID: BY26RY238844).",
    certificationsSummary: "Shreyash holds 3 verified Google/Coursera certifications (Maximize Productivity With AI Tools, Discover the Art of Prompting, Introduction to AI), a Forage Surgical Tech Simulation certificate, an INDIAai/nasscom Yuva AI certificate, and a Skill Nexis ML & AI certificate.",
    hackathonsSummary: "Shreyash participated in the Adobe University Hackathon (August 2026), CodeCraze 3.0 24-hour Hackathon as Team LifeLedger (Round 1 selection), and the Srijan / Navonmesh'26 Hackathon representing SVKM College of Engineering Shirpur.",
    contactInfo: "You can reach Shreyash at shreyashbhat1111@gmail.com, inspect his code at github.com/shreyashbhat1111, or connect on LinkedIn at linkedin.com/in/shreyash-bhat-26584237b. He is based in Shirpur, Maharashtra, India."
  }
};

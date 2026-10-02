/**
 * Local Portfolio Assistant Service - Grounded in Real Records
 * 
 * 100% authentic, zero API keys, instant local browser execution.
 * Answers queries about Shreyash Bhat, SVKM COE Shirpur, Skill Nexis & CodSoft
 * internships, Google/Coursera certifications, hackathons, and projects.
 */

import { portfolioData } from '../data/portfolio';

export interface AssistantResponse {
  text: string;
  suggestedAction?: {
    label: string;
    sectionId: string;
  };
  relatedTopics?: string[];
}

export function processAssistantQuery(rawQuery: string): AssistantResponse {
  const query = rawQuery.toLowerCase().trim();

  // 1. Identity & Intro queries
  if (
    query.includes('who is') ||
    query.includes('who are you') ||
    query.includes('about shreyash') ||
    query.includes('introduction') ||
    query.includes('bio') ||
    query.includes('tell me about yourself') ||
    query.includes('overview') ||
    query.includes('what does shreyash do')
  ) {
    return {
      text: `${portfolioData.personal.name} is a Computer Science and Engineering student at ${portfolioData.personal.college} in ${portfolioData.personal.location}. He is an AI & ML enthusiast and Full-Stack Developer passionate about creating technology-driven products that combine innovation, accessibility, and real-world value.`,
      suggestedAction: {
        label: "Read Full About Story",
        sectionId: "about"
      },
      relatedTopics: [
        "What are his skills?",
        "What internships has he done?",
        "Tell me about Pulse Feel",
        "How can I contact him?"
      ]
    };
  }

  // 2. Education & College
  if (
    query.includes('college') ||
    query.includes('university') ||
    query.includes('degree') ||
    query.includes('svkm') ||
    query.includes('shirpur') ||
    query.includes('education') ||
    query.includes('study')
  ) {
    return {
      text: `Shreyash is pursuing his ${portfolioData.personal.degree} at ${portfolioData.personal.college} in ${portfolioData.personal.location}. He actively participates in technical events, competitive hackathons (such as Adobe University Hackathon and CodeCraze 3.0), and continuous project-based learning.`,
      suggestedAction: {
        label: "View Education Details",
        sectionId: "about"
      },
      relatedTopics: ["What certifications does he have?", "What are his skills?", "Show projects"]
    };
  }

  // 3. Internships & Experience & Offer letters
  if (
    query.includes('intern') ||
    query.includes('offer') ||
    query.includes('experience') ||
    query.includes('skill nexis') ||
    query.includes('codsoft') ||
    query.includes('work') ||
    query.includes('job')
  ) {
    return {
      text: `Shreyash has two notable professional milestones:\n1. Skill Nexis: Completed a 6-week online internship program in Machine Learning & AI (certified on 30-09-2026).\n2. CodSoft: Received an official internship selection and offer letter for a Web Development Virtual Internship (Letter ID: BY26RY238844).`,
      suggestedAction: {
        label: "View Internships & Letters",
        sectionId: "experience"
      },
      relatedTopics: ["View Certifications", "What are his skills?", "Show projects"]
    };
  }

  // 4. Pulse Feel project
  if (
    query.includes('pulse feel') ||
    query.includes('healthcare') ||
    query.includes('pulse') ||
    query.includes('health app')
  ) {
    const pf = portfolioData.projects.find(p => p.id === 'pulse-feel');
    return {
      text: `Pulse Feel is Shreyash's featured healthcare companion concept. ${pf?.description} It incorporates an AI healthcare assistant, hospital/doctor discovery via Google Maps, appointment support, emergency alerts, digital records, and medicine reminders built with Flutter, Firebase, AI, and Google Maps.`,
      suggestedAction: {
        label: "Explore Pulse Feel",
        sectionId: "pulse-feel-showcase"
      },
      relatedTopics: ["Show all projects", "Medicine Reminder app", "Heart Disease ML"]
    };
  }

  // 5. Projects in general
  if (
    query.includes('project') ||
    query.includes('what has he built') ||
    query.includes('apps')
  ) {
    return {
      text: `Shreyash has developed several impactful projects:\n• Pulse Feel: AI-driven healthcare companion & doctor discovery concept\n• Medicine Reminder: Smart patient medication scheduling & adherence tool\n• Heart Disease Prediction: Supervised ML classification model in Python`,
      suggestedAction: {
        label: "Browse Projects",
        sectionId: "projects"
      },
      relatedTopics: ["Tell me about Pulse Feel", "What are his skills?", "GitHub repositories"]
    };
  }

  // 6. Skills & Tech Stack
  if (
    query.includes('skill') ||
    query.includes('tech stack') ||
    query.includes('technologies') ||
    query.includes('python') ||
    query.includes('react') ||
    query.includes('java') ||
    query.includes('c++') ||
    query.includes('figma') ||
    query.includes('programming')
  ) {
    return {
      text: `Shreyash's verified skill toolkit spans:\n• Programming: Python, C, C++, Java\n• Web: HTML, CSS, JavaScript, Responsive Web Design\n• Databases: SQL, DBMS, Firebase\n• AI/ML: Machine Learning, Generative AI, AI App Dev, Prompt Engineering\n• Tools: Git, GitHub, VS Code, Google Colab, Jupyter Notebook\n• Design & Content: Figma, UI/UX, Prototyping, Technical Writing`,
      suggestedAction: {
        label: "View All Skills",
        sectionId: "skills"
      },
      relatedTopics: ["What certifications does he have?", "Show projects", "How to contact him?"]
    };
  }

  // 7. Certifications & Hackathons
  if (
    query.includes('certif') ||
    query.includes('coursera') ||
    query.includes('google') ||
    query.includes('forage') ||
    query.includes('nasscom') ||
    query.includes('hackathon') ||
    query.includes('adobe') ||
    query.includes('codecraze') ||
    query.includes('srijan')
  ) {
    return {
      text: `Shreyash's verified credentials include:\n• 3 Google & Coursera Certifications: Maximize Productivity with AI Tools (RK0X764WCACR), Discover the Art of Prompting (IX04ZF6ICMDE), and Introduction to AI (Z8B3G17Y7148)\n• Skill Nexis: 6-Week ML & AI Internship Completion Certificate\n• Forage: Surgical Tech Job Simulation Certificate\n• INDIAai & nasscom: Yuva AI for All\n• Hackathons: Adobe University Hackathon, CodeCraze 3.0 (Team LifeLedger), and Navonmesh'26 Srijan Hackathon.`,
      suggestedAction: {
        label: "Inspect Certifications & Hackathons",
        sectionId: "certifications"
      },
      relatedTopics: ["View Internships & Letters", "What are his skills?", "View Resume"]
    };
  }

  // 8. Contact, Email, Location, Social
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('hire') ||
    query.includes('reach') ||
    query.includes('linkedin') ||
    query.includes('github') ||
    query.includes('location') ||
    query.includes('where')
  ) {
    return {
      text: `You can contact Shreyash directly at ${portfolioData.personal.email}. He is based in ${portfolioData.personal.location} at ${portfolioData.personal.college}. You can connect on LinkedIn (linkedin.com/in/shreyash-bhat-26584237b) or explore his code on GitHub (github.com/shreyashbhat1111).`,
      suggestedAction: {
        label: "Open Contact Form",
        sectionId: "contact"
      },
      relatedTopics: ["View Resume", "Who is Shreyash?", "Show projects"]
    };
  }

  // 9. Resume & CV
  if (
    query.includes('resume') ||
    query.includes('cv') ||
    query.includes('download')
  ) {
    return {
      text: `Shreyash's resume outlines his B.Tech in CSE at SVKM College of Engineering Shirpur, his Skill Nexis & CodSoft internship credentials, Google/Coursera certifications, hackathon achievements, and full-stack projects. You can preview or download it directly.`,
      suggestedAction: {
        label: "View & Download Resume",
        sectionId: "resume"
      },
      relatedTopics: ["Who is Shreyash?", "What are his skills?", "Show projects"]
    };
  }

  // Fallback response with grounded options
  return {
    text: `I can answer anything about Shreyash Bhat's portfolio! Ask about his B.Tech at SVKM College of Engineering Shirpur, his Machine Learning internship at Skill Nexis, his CodSoft offer letter, Google Coursera certifications, Pulse Feel project, or how to contact him.`,
    relatedTopics: [
      "Who is Shreyash?",
      "What internships has he done?",
      "What are his skills?",
      "Tell me about Pulse Feel",
      "How can I contact him?"
    ]
  };
}

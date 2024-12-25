import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Building a Full-stack E-Commerce Website",
    category: "Full-stack Development",
    matchPercentage: 90,
    company: "Microsoft Corporation",
    mentor: "John Smith",
    technologies: ["React", "Node.js", "MongoDB"],
    problemStatement: "The company needs an efficient and scalable e-commerce platform to handle product listings, payments, and user authentication while maintaining good performance.",
    objectives: [
      "Develop a full-stack e-commerce application",
      "Implement product listing and cart functionality",
      "Integrate a secure payment gateway",
      "Build user authentication and order tracking system",
      "Optimize for performance and scalability"
    ],
    requiredSkills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 70 },
      { name: "JWT Authentication", level: 70 }
    ],
    timeline: {
      totalWeeks: 16,
      hoursPerWeek: 30,
      teamSize: 5,
      level: "Advanced Level"
    },
    evaluationCriteria: [
      "Functional Completeness: All features are implemented and work as expected",
      "Code Quality: Clean, modular, and well-documented code",
      "User Experience: Intuitive design and seamless user journey",
      "Performance: Load time and scalability of the platform"
    ],
    phases: [
      { name: "Project Setup and Initial Design", duration: "2 weeks" },
      { name: "Frontend Development (UI/UX)", duration: "4 weeks" },
      { name: "Backend Development and API Integration", duration: "5 weeks" },
      { name: "Payment Integration and Testing", duration: "3 weeks" },
      { name: "Deployment and Documentation", duration: "2 weeks" }
    ]
  },
  {
    title: "Mobile Health App",
    subtitle: "Building a Health Monitoring Mobile Application",
    category: "Mobile Development",
    matchPercentage: 88,
    company: "Apple Inc.",
    mentor: "Sarah Johnson",
    technologies: ["Swift", "Firebase", "UI/UX"],
    problemStatement: "Apple needs a health app that helps users track their fitness, sleep, and diet, providing valuable insights to improve their health.",
    objectives: [
      "Design and develop the user interface for the app",
      "Implement user authentication and data storage with Firebase",
      "Integrate health and fitness tracking functionality",
      "Develop personalized notifications and insights",
      "Ensure app security and privacy of user data"
    ],
    requiredSkills: [
      { name: "Swift", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "UI/UX Design", level: 85 },
      { name: "Mobile Development", level: 80 }
    ],
    timeline: {
      totalWeeks: 14,
      hoursPerWeek: 25,
      teamSize: 4,
      level: "Intermediate Level"
    },
    evaluationCriteria: [
      "User Engagement: Frequency and quality of app usage",
      "App Performance: Stability and responsiveness",
      "UI/UX: Design quality and user-friendliness",
      "Security: Protection of personal health data"
    ],
    phases: [
      { name: "App Design and Mockups", duration: "3 weeks" },
      { name: "Frontend Development (UI/UX)", duration: "4 weeks" },
      { name: "Backend Development and Firebase Integration", duration: "4 weeks" },
      { name: "Testing and Final Deployment", duration: "3 weeks" }
    ]
  },
  {
    title: "AI Chat Assistant",
    subtitle: "Developing an AI-powered Chat Assistant",
    category: "Machine Learning",
    matchPercentage: 92,
    company: "Google LLC",
    mentor: "David Chen",
    technologies: ["Python", "TensorFlow", "NLP"],
    problemStatement: "Google needs to develop an AI chat assistant capable of natural language processing (NLP) to help users with inquiries, product recommendations, and customer service.",
    objectives: [
      "Design and implement a natural language processing model",
      "Train the model using conversational data",
      "Develop a system for context-aware responses",
      "Integrate the chat assistant into existing platforms",
      "Optimize the model for performance and scalability"
    ],
    requiredSkills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Machine Learning", level: 85 },
      { name: "Chatbot Development", level: 75 }
    ],
    timeline: {
      totalWeeks: 12,
      hoursPerWeek: 30,
      teamSize: 6,
      level: "Advanced Level"
    },
    evaluationCriteria: [
      "Model Accuracy: Precision and recall of NLP model",
      "Response Quality: Relevance and usefulness of responses",
      "Integration: Seamless integration into platforms",
      "Scalability: The ability to handle large user requests simultaneously"
    ],
    phases: [
      { name: "Data Collection and Preprocessing", duration: "3 weeks" },
      { name: "NLP Model Development", duration: "4 weeks" },
      { name: "Integration and Testing", duration: "3 weeks" },
      { name: "Deployment and Final Evaluation", duration: "2 weeks" }
    ]
  }
];


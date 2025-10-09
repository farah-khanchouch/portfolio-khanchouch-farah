export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Airline Flight Inventory Management System",
    description: "Enterprise-grade inventory management platform covering flights, aircraft, passengers, reservations, crew, and airports. Features secure RESTful API, JWT authentication, CI/CD pipeline, and Docker containerization with comprehensive Swagger documentation.",
    image: "/imgs/p6.png", // Vous devrez ajouter une image
    tags: ["Spring Boot 3.x", "PostgreSQL", "React.js", "Docker", "GitLab CI", "JWT", "Swagger"],
    links: {
      github: "https://github.com/farahkhanchouch/airline-inventory", // Remplacez par votre vrai lien
      live: "",
    },
  },
  {
    id: 2,
    title: "Interactive Learning Platform",
    description: "A comprehensive full-stack web application for managing quiz systems with gamification features including real-time leaderboards, achievement badges, and results tracking. Built with MERN stack and deployed with automated CI/CD pipeline.",
    image: "/imgs/p8.png", // Vous devrez ajouter une image
    tags: ["Node.js", "Express.js", "MongoDB", "Angular", "JWT Auth", "Render", "Vercel"],
    links: {
      github: "", // Ajoutez si disponible
      live: "", // Ajoutez si déployé
    },
  },
  {
    id: 3,
    title: "Forest Fire Prediction Model",
    description: "Machine learning system to predict forest fire outbreaks using historical weather data. Implemented and compared multiple supervised learning algorithms (SVM, KNN, Decision Tree) with comprehensive data preprocessing and visualization.",
    image: "/imgs/p9.png", // Vous devrez ajouter une image
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Machine Learning", "SVM", "KNN"],
    links: {
      github: "https://github.com/farahkhanchouch/forest-fire-prediction", // Remplacez par votre vrai lien
      live: "",
    },
  },
  {
    id: 4,
    title: "Medical Management Mobile Application",
    description: "Cross-platform mobile application to centralize patient records, staff management, and medical information for healthcare facilities. Built with Flutter for iOS/Android and secure Spring Boot backend with role-based access control.",
    image: "/imgs/p7.png", // Vous devrez ajouter une image
    tags: ["Spring Boot", "Flutter", "PostgreSQL", "REST API", "Mobile Dev", "RBAC"],
    links: {
      github: "https://github.com/farahkhanchouch/medical-management", // Remplacez par votre vrai lien
      live: "",
    },
  },
  {
    id: 5,
    title: "Zoho Platform Integration & Automation",
    description: "Custom solutions built on Zoho Developer platform integrating CRM, Invoice, and Bookings modules. Designed dynamic forms and automated reservation and invoicing workflows to improve operational efficiency.",
    image: "/imgs/p5.png", // Vous devrez ajouter une image
    tags: ["Zoho Developer", "Zoho CRM", "JavaScript", "API Integration", "Workflow Automation"],
    links: {
      github: "", // Peut rester vide si projet d'entreprise
      live: "",
    },
  },
];
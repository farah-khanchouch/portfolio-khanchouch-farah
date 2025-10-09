import { 
  Code, 
  Database, 
  Layout, 
  Brain, 
  Palette, 
  Globe 
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// ============================================
// TYPES
// ============================================
export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export type TopSkill = {
  name: string;
  category: string;
  level: number;
};

export type SkillIcon = {
  emoji: string;
  color: string;
  bgColor: string;
};

// ============================================
// SKILL CATEGORIES
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming & Backend Development",
    icon: Code,
    skills: [
      "Java",
      "Spring Boot 3.x",
      "TypeScript",
      "Python",
      "JavaScript", 
      "Node.js",
      "REST APIs",
      "Express.js",
      "JWT (JSON Web Tokens)",
      "Postman",
      "Maven",
      "Gradle",
      "Dart"
    ],
  },
  {
    name: "Frontend & Mobile Development",
    icon: Layout,
    skills: [
      "React.js",
      "TypeScript",
      "Angular",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive Design",
      "Flutter",
      "UI Components",
      "Bootstrap",
      "Android Studio"
    ],
  },
  {
    name: "Databases & DevOps",
    icon: Database,
    skills: [
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Git & GitHub",
      "GitLab CI/CD",
      "MySQL",
      "Continuous Deployment",
      "MongoDB Atlas",
      "Vercel",
      "Render",
      "Netlify"
    ],
  },
  {
    name: "Machine Learning & Data Science",
    icon: Brain,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Supervised Learning",
      "Feature Engineering",
      "Data Preprocessing",
      "Unsupervised Learning",
      "Matplotlib",
      "SVM", 
      "KNN", 
      "Decision Tree"
    ],
  },
  {
    name: "Design, Automation & Business Tools",
    icon: Palette,
    skills: [
      "Figma",
      "UI/UX Design",
      "API Integration",
      "Workflow Automation",
      "Business Process Automation",
      "Zoho Developer",
      "Odoo ERP",
      "Zoho CRM", 
      "Zoho Invoice", 
      "Zoho Bookings"
    ],
  },
  {
    name: "Tools & Project Management",
    icon: Globe,
    skills: [
      "Taiga.io",
      "Notion",
      "Agile/Scrum",
      "Postman",
      "IntelliJ IDEA",
      "VS Code"
    ],
  },
];

// ============================================
// TOP SKILLS (Market Demand)
// ============================================
export const topSkills: TopSkill[] = [
  { name: "React.js", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend/Backend", level: 90 },
  { name: "Docker", category: "DevOps", level: 88 },
  { name: "Spring Boot", category: "Backend", level: 87 },
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Python", category: "Programming/ML", level: 85 },
  { name: "MongoDB", category: "Database", level: 82 },
  { name: "Angular", category: "Frontend", level: 80 },
  { name: "GitLab CI/CD", category: "DevOps", level: 78 },
];

// ============================================
// SKILL ICONS & COLORS
// ============================================
export const skillIcons: Record<string, SkillIcon> = {
  // Programming Languages
  "Java": { emoji: "☕", color: "text-orange-500", bgColor: "bg-orange-500/10" },
  "Python": { emoji: "🐍", color: "text-blue-400", bgColor: "bg-blue-400/10" },
  "JavaScript": { emoji: "📜", color: "text-yellow-400", bgColor: "bg-yellow-400/10" },
  "TypeScript": { emoji: "📘", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "Dart": { emoji: "🎯", color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  
  // Backend Frameworks
  "Spring Boot 3.x": { emoji: "🍃", color: "text-green-500", bgColor: "bg-green-500/10" },
  "Node.js": { emoji: "🟢", color: "text-green-600", bgColor: "bg-green-600/10" },
  "Express.js": { emoji: "⚡", color: "text-gray-400", bgColor: "bg-gray-400/10" },
  "REST APIs": { emoji: "🔌", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  "JWT (JSON Web Tokens)": { emoji: "🔐", color: "text-red-500", bgColor: "bg-red-500/10" },
  
  // Frontend Frameworks
  "React.js": { emoji: "⚛️", color: "text-cyan-400", bgColor: "bg-cyan-400/10" },
  "Angular": { emoji: "🅰️", color: "text-red-600", bgColor: "bg-red-600/10" },
  "HTML5 & CSS3": { emoji: "🎨", color: "text-orange-400", bgColor: "bg-orange-400/10" },
  "Tailwind CSS": { emoji: "💨", color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  "Bootstrap": { emoji: "🅱️", color: "text-purple-600", bgColor: "bg-purple-600/10" },
  "Flutter": { emoji: "📱", color: "text-blue-400", bgColor: "bg-blue-400/10" },
  "Responsive Design": { emoji: "📐", color: "text-pink-500", bgColor: "bg-pink-500/10" },
  
  // Databases
  "PostgreSQL": { emoji: "🐘", color: "text-blue-600", bgColor: "bg-blue-600/10" },
  "MongoDB": { emoji: "🍃", color: "text-green-600", bgColor: "bg-green-600/10" },
  "MySQL": { emoji: "🐬", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "MongoDB Atlas": { emoji: "☁️", color: "text-green-500", bgColor: "bg-green-500/10" },
  
  // DevOps
  "Docker": { emoji: "🐳", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "GitLab CI/CD": { emoji: "🦊", color: "text-orange-600", bgColor: "bg-orange-600/10" },
  "Git & GitHub": { emoji: "🐙", color: "text-gray-700", bgColor: "bg-gray-700/10" },
  "Continuous Deployment": { emoji: "🔄", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  "Render": { emoji: "🚀", color: "text-indigo-500", bgColor: "bg-indigo-500/10" },
  "Vercel": { emoji: "▲", color: "text-gray-800", bgColor: "bg-gray-800/10" },
  "Netlify": { emoji: "💎", color: "text-teal-500", bgColor: "bg-teal-500/10" },
  
  // Machine Learning
  "Scikit-learn": { emoji: "🧠", color: "text-orange-500", bgColor: "bg-orange-500/10" },
  "Pandas": { emoji: "🐼", color: "text-blue-600", bgColor: "bg-blue-600/10" },
  "NumPy": { emoji: "🔢", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "Matplotlib": { emoji: "📊", color: "text-green-500", bgColor: "bg-green-500/10" },
  "Supervised Learning": { emoji: "📚", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  "Unsupervised Learning": { emoji: "🔍", color: "text-pink-500", bgColor: "bg-pink-500/10" },
  "Feature Engineering": { emoji: "⚙️", color: "text-gray-600", bgColor: "bg-gray-600/10" },
  "Data Preprocessing": { emoji: "🔧", color: "text-yellow-600", bgColor: "bg-yellow-600/10" },
  "SVM": { emoji: "📈", color: "text-indigo-500", bgColor: "bg-indigo-500/10" },
  "KNN": { emoji: "🎯", color: "text-teal-500", bgColor: "bg-teal-500/10" },
  "Decision Tree": { emoji: "🌳", color: "text-green-600", bgColor: "bg-green-600/10" },
  
  // Design & Tools
  "Figma": { emoji: "🎨", color: "text-purple-500", bgColor: "bg-purple-500/10" },
  "UI/UX Design": { emoji: "✨", color: "text-pink-500", bgColor: "bg-pink-500/10" },
  "Postman": { emoji: "📮", color: "text-orange-500", bgColor: "bg-orange-500/10" },
  "Maven": { emoji: "🔨", color: "text-red-600", bgColor: "bg-red-600/10" },
  "Gradle": { emoji: "🐘", color: "text-green-600", bgColor: "bg-green-600/10" },
  "UI Components": { emoji: "🧩", color: "text-purple-400", bgColor: "bg-purple-400/10" },
  
  // Business Tools
  "Zoho Developer": { emoji: "🏢", color: "text-red-500", bgColor: "bg-red-500/10" },
  "Zoho CRM": { emoji: "📊", color: "text-red-600", bgColor: "bg-red-600/10" },
  "Zoho Invoice": { emoji: "💰", color: "text-green-600", bgColor: "bg-green-600/10" },
  "Zoho Bookings": { emoji: "📅", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "Odoo ERP": { emoji: "💼", color: "text-purple-600", bgColor: "bg-purple-600/10" },
  "API Integration": { emoji: "🔗", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "Workflow Automation": { emoji: "🤖", color: "text-indigo-500", bgColor: "bg-indigo-500/10" },
  "Business Process Automation": { emoji: "⚡", color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
  
  // Project Management & IDEs
  "Taiga.io": { emoji: "📋", color: "text-green-500", bgColor: "bg-green-500/10" },
  "Notion": { emoji: "📝", color: "text-gray-700", bgColor: "bg-gray-700/10" },
  "Agile/Scrum": { emoji: "🔄", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "IntelliJ IDEA": { emoji: "💡", color: "text-purple-600", bgColor: "bg-purple-600/10" },
  "VS Code": { emoji: "💻", color: "text-blue-600", bgColor: "bg-blue-600/10" },
  "Android Studio": { emoji: "🤖", color: "text-green-500", bgColor: "bg-green-500/10" },
};

// ============================================
// HELPER FUNCTION
// ============================================
export const getSkillIcon = (skillName: string): SkillIcon => {
  return skillIcons[skillName] || {
    emoji: "💡",
    color: "text-gray-500",
    bgColor: "bg-gray-500/10"
  };
};
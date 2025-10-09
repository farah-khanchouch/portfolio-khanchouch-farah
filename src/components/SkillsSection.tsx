import React from 'react';
import { 
  Code, 
  Database, 
  Layout, 
  Brain, 
  Palette, 
  Globe 
} from "lucide-react";

const skillCategories = [
  {
    name: "Programming & Backend Development",
    icon: Code,
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "bg-orange-500/10" },
      { name: "Spring Boot 3.x", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", color: "bg-green-500/10" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-500/10" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-blue-400/10" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-400/10" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-600/10" },
      { name: "REST APIs", logo: "https://img.icons8.com/color/512/api-settings.png", color: "bg-purple-500/10" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "bg-gray-400/10", invert: true },
      { name: "JWT (JSON Web Tokens)", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg", color: "bg-pink-500/10" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "bg-orange-500/10" },
      { name: "Maven", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", color: "bg-red-600/10" },
      { name: "Gradle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg", color: "bg-green-600/10" },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "bg-cyan-500/10" },
    ],
  },
  {
    name: "Frontend & Mobile Development",
    icon: Layout,
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-cyan-400/10" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-500/10" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "bg-red-600/10" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "bg-cyan-500/10" },
      { name: "HTML5 & CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-400/10" },
      { name: "Responsive Design", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721666.png", color: "bg-pink-500/10" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "bg-blue-400/10" },
      { name: "UI Components", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", color: "bg-purple-400/10" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "bg-purple-600/10" },
      { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", color: "bg-green-500/10" },
    ],
  },
  {
    name: "Databases & DevOps",
    icon: Database,
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-500/10" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-blue-600/10" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-600/10" },
      { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "bg-gray-700/10", invert: true },
      { name: "GitLab CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", color: "bg-orange-600/10" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-blue-500/10" },
      { name: "Continuous Deployment", logo: "https://cdn-icons-png.flaticon.com/512/4727/4727266.png", color: "bg-purple-500/10" },
      { name: "MongoDB Atlas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-500/10" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "bg-gray-800/10", invert: true },
      { name: "Render", logo: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4", color: "bg-indigo-500/10" },
      { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "bg-teal-500/10" },
    ],
  },
  {
    name: "Machine Learning & Data Science",
    icon: Brain,
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-blue-600/10" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "bg-blue-500/10" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "bg-blue-400/10" },
      { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", color: "bg-orange-500/10" },
      { name: "Supervised Learning", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", color: "bg-purple-500/10" },
      { name: "Feature Engineering", logo: "https://cdn-icons-png.flaticon.com/512/3588/3588592.png", color: "bg-gray-600/10" },
      { name: "Data Preprocessing", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png", color: "bg-yellow-600/10" },
      { name: "Unsupervised Learning", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png", color: "bg-pink-500/10" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", color: "bg-blue-500/10" },
      { name: "SVM", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png", color: "bg-indigo-500/10" },
      { name: "KNN", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", color: "bg-teal-500/10" },
      { name: "Decision Tree", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920235.png", color: "bg-green-600/10" },
    ],
  },
  {
    name: "Design, Automation & Business Tools",
    icon: Palette,
    skills: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "bg-purple-500/10" },
      { name: "UI/UX Design", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", color: "bg-pink-500/10" },
      { name: "API Integration", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", color: "bg-blue-500/10" },
      { name: "Workflow Automation", logo: "https://cdn-icons-png.flaticon.com/512/4727/4727266.png", color: "bg-indigo-500/10" },
      { name: "Business Process Automation", logo: "https://cdn-icons-png.flaticon.com/512/3588/3588592.png", color: "bg-yellow-500/10" },
      { name: "Zoho Developer", logo: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png", color: "bg-red-500/10" },
      { name: "Odoo ERP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Odoo_logo.svg/512px-Odoo_logo.svg.png", color: "bg-purple-600/10" },
      { name: "Zoho CRM", logo: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png", color: "bg-red-600/10" },
      { name: "Zoho Invoice", logo: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png", color: "bg-green-600/10" },
      { name: "Zoho Bookings", logo: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png", color: "bg-blue-500/10" },
    ],
  },
  {
    name: "Soft Skills & Languages",
    icon: Globe,
    skills: [
      { name: "Taiga.io", logo: "https://img.icons8.com/color/512/trello.png", color: "bg-green-500/10" },
      { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg", color: "bg-gray-700/10", invert: true },
      { name: "Agile/Scrum", logo: "https://cdn-icons-png.flaticon.com/512/4727/4727266.png", color: "bg-blue-500/10" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "bg-orange-500/10" },
      { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", color: "bg-purple-600/10" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "bg-blue-600/10" },
    ],
  },
];

export default function SkillsDisplay() {
  return (
    <section id="skills" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="section-heading mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg">Real-world technologies I work with</p>
        </div>
        
        <div className="space-y-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div key={idx} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {category.name}
                  </h3>
                  <span className="ml-auto text-muted-foreground text-sm">
                    {category.skills.length} skills
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className={`${skill.color} px-4 py-2.5 rounded-xl border border-border/50 flex items-center gap-2.5 hover:scale-105 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group`}
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className={`w-7 h-7 ${skill.invert ? 'dark:brightness-0 dark:invert' : ''} group-hover:scale-110 transition-transform`}
                      />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

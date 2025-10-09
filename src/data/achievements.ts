import { Trophy, Users, Briefcase } from "lucide-react";

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "competition" | "academic" | "certification" | "leadership";
  icon: any;
}

export const achievements: Achievement[] = [
  {
    id: "tsp-communes-2025",
    year: "2025",
    title: "2nd Place - TSP Communes",
    description: "Secured second place in the Moroccan TSP Competition by finding the shortest path visiting all 1,503 Moroccan communes with a distance of 19,174,787.34 m.",
    type: "competition",
    icon: Trophy,
  },
  {
    id: "tsp-localities-2025",
    year: "2025",
    title: "3rd Place - TSP Localities",
    description: "Won third place in the Moroccan TSP Competition by optimizing a route through 12,289 Moroccan localities with a distance of 35,903,401.14 m.",
    type: "competition",
    icon: Trophy,
  },
  {
    id: "enactus-2023",
    year: "2023-2025",
    title: "Treasurer - Enactus ENSA Béni Mellal",
    description: "Managed finances and financial reports, coordinated with administration, secured sponsors, and organized the Moroccan TSP Competition for 2 years.",
    type: "leadership",
    icon: Users,
  },
  {
    id: "industry-club-2024",
    year: "2024-2025",
    title: "General Secretary - Industry 4.0 Club",
    description: "Led administrative operations, coordinated between the club and administration, and managed partnerships for the Industry 4.0 Club.",
    type: "leadership",
    icon: Briefcase,
  },
];
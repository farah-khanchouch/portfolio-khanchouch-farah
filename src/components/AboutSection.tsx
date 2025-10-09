import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground mb-4" style={{ textAlign: "justify" }}>
  Final-year Industrial Digital Transformation Engineer Student at ENSA Béni Mellal with a passion for building scalable, user-centric applications.
</p>
<p className="text-muted-foreground mb-4" style={{ textAlign: "justify" }}>
  Experienced in full-stack development with modern technologies including Spring Boot, Node.js, React, and Angular. Proficient in database design (PostgreSQL, MongoDB), containerization (Docker), et CI/CD workflows.
</p>
<p className="text-muted-foreground mb-4" style={{ textAlign: "justify" }}>
  From machine learning models to enterprise applications, I love transforming complex requirements into elegant technical solutions.
</p>
<p className="text-muted-foreground" style={{ textAlign: "justify" }}>
  Seeking a PFE internship (Feb 2026) to contribute to innovative projects in a dynamic tech environment.
</p>

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
  <CardContent className="pt-6">
    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
      <GraduationCap className="w-5 h-5 text-primary" /> Education
    </h3>
    <div className="space-y-2">
      <p className="font-medium">Engineering Degree in Industrial Digital Transformation</p>
      <p className="text-sm text-muted-foreground">
        ENSA Béni Mellal
      </p>
      <p className="text-sm text-muted-foreground">
        2021 - Present
      </p>

      <p className="font-medium mt-3">Preparatory Year – MIPC</p>
      <p className="text-sm text-muted-foreground">
        Faculty of Sciences and Techniques, Marrakech
      </p>
      <p className="text-sm text-muted-foreground">
        2020 - 2021
      </p>

      <p className="font-medium mt-3">Baccalaureate in Mathematical Sciences A</p>
      <p className="text-sm text-muted-foreground">
        Lycée Mohammed VI, Ouarzazate
      </p>
      <p className="text-sm text-muted-foreground">
        July 2020
      </p>
    </div>
  </CardContent>
</Card>

              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
  <CardContent className="pt-6">
    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
      <Briefcase className="w-5 h-5 text-primary" /> Experience
    </h3>
    <div className="space-y-4">
      <div>
        <p className="font-medium">Interactive Learning Systems Intern</p>
        <p className="text-sm text-muted-foreground">Expleo – Internship</p>
        <p className="text-sm text-muted-foreground">June – September 2025</p>
      </div>
      <div>
        <p className="font-medium">Zoho Extension Development & Integration Intern</p>
        <p className="text-sm text-muted-foreground">Monark IT – Internship</p>
        <p className="text-sm text-muted-foreground">July – August 2024</p>
      </div>
    </div>
  </CardContent>
</Card>

              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-60 h-60 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png"
                  alt="Farah Khanchouch"
                  loading="lazy"
                />
                <AvatarFallback>AZ</AvatarFallback>
              </Avatar>
              
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Khanchouch Farah</h3>
              <p className="text-muted-foreground">
              Industrial Digital Transformation Engineer Student     
              </p>
            </motion.div>

           
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Farah_Khanchouch_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

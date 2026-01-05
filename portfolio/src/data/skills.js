import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { BiChip } from 'react-icons/bi';

export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
    ]
  },
  {
    category: "Backend & Programming",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
      { name: "ESP32", icon: BiChip, color: "#E7352C" }
    ]
  }
];

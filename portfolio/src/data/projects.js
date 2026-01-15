// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Hotel Management System",
    description: "Hotel Management System is a full-stack web app where customers can book rooms and order food, staff manage bookings and orders, and admins oversee users and analytics. Built with React and Spring Boot.",
    tech: ["Java Springboot", "React", "MySQL", "Docker", "Vercel", "Azure"],
    github: "https://github.com/Jenitha23/Hotel-Management-System-Frontend",
    demo: "https://frontend-palmbeachresort.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. Showcases my projects, skills, certifications, and contact information with smooth animations, interactive elements, and an elegant emerald-teal gradient theme.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/Jenitha23/Portfolio",
    demo: "https://jenitha-portfolio.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "TestLang - Java Backend API Testing DSL",
    description: "A custom Domain-Specific Language (DSL) designed to simplify writing and running HTTP API tests. Translates .test files into runnable JUnit 5 test code that sends real HTTP requests and verifies responses including status codes and body contents.",
    tech: ["Java", "ANTLR", "Parser", "Lexer", "JUnit 5"],
    github: "https://github.com/Jenitha23/TestLang-Java-Backend-API-Testing-DSL",
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: "Machine Learning Model Deployment Platform",
    description: "Platform for deploying and monitoring ML models with automated scaling and performance analytics. Features real-time monitoring, automatic scaling, and comprehensive analytics dashboard.",
    tech: ["Python", "FastAPI", "Docker", "AWS", "React", "MongoDB"],
    github: "https://github.com",
    demo: null,
    featured: false
  }
];
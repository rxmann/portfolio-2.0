import EcommerceAdmindash from "../images/ecommerce/admindash.svg"
import EcommerceHomePage from "../images/ecommerce/homepage.svg"
import EcommerceFilters from "../images/ecommerce/filters.svg"
import EcommerceManagement from "../images/ecommerce/management.svg"
import EcommerceProductPage from "../images/ecommerce/singleproduct.svg"

import PortfolioHome from "../images/portfolio/home.svg"
import PortfolioSkills from "../images/portfolio/skills.svg"

import GameHome from "../images/gamedesign/home.svg"
import GameRecommendation from "../images/gamedesign/recommendation.svg"

import ChatLogin from "../images/chat-app/login.svg"
import ChatChat from "../images/chat-app/chat.svg"


export const projectsData = [
  {
    id: 1,
    title: "Bech-Cha: E-commerce Platform",
    description: `
      An online platform for buying and selling products with a variety of options like: sorting, filtering, tracking, Dashboard, Stock Management, and many more.
    `,
    images: [
      EcommerceHomePage, EcommerceAdmindash, EcommerceFilters, EcommerceManagement, EcommerceProductPage
    ],
    alt: "Screenshot of the E-commerce Platform",
    github: "https://github.com/rxmxndai/Ecommerce-BechCha-Client",
    live: "https://ecommerce-bech-cha-client.vercel.app/",
    techStacks: ["ReactJS", "ReduxToolkit", "ExpressJS", "MongoDB", "MaterialUI", "StyledComponents"],
    featured: true,
    xs: 12
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    images: [
      PortfolioHome, PortfolioSkills
    ],
    alt: "Screenshot of the Portfolio Website",
    github: "https://github.com/rxmxndai/portfolio-2.0",
    live: "https://romankarki.vercel.app/",
    techStacks: ["ReactJS", "MaterialUI"],
    featured: false,
    xs: 4
  },
  {
    id: 3,
    title: "Chat Application",
    description: "A very basic real-time chat application built with Node.js and Socket.io.",
    images: [ChatLogin, ChatChat],
    alt: "Screenshot of the Chat Application",
    github: "https://github.com/rxmxndai/chat-app-nodev3",
    live: "https://chat-app-nodev3.vercel.app/",
    techStacks: ["Node.js", "Express", "Socket.io", "React"],
    featured: false,
    xs: 4
  },
  {
    id: 4,
    title: "Game Recommendation Web-Design",
    description: "A simple UI design for game recommendation website. ",
    images: [
      GameRecommendation, GameHome,
    ],
    alt: "Screenshot of the Figma Design",
    github: "https://github.com/rxmxndai/Game-Sallah-Recommendation-website-UI-",
    live: "",
    techStacks: ["Figma", "BalsamiQ"],
    featured: false,
    xs: 4
  },
  {
    id: 5,
    title: "Course Management System",
    description: "A Java Swing-based application for managing course data with file handling. Features include user authentication, student and tutor dashboards, and admin controls.",
    images: [
      PortfolioSkills,
    ],
    alt: "Screenshot of the Course Management System",
    github: "https://github.com/rxmxndai/Course-Management-System-File-base-Java-Swing-",
    live: "",
    techStacks: ["Java", "Javax", "JavaFx"],
    featured: true,
    xs: 5
  },
  {
    id: 6,
    title: "Water Billing System",
    description: `A Java Spring Boot and MySQL application for generating water bills. Features include CRUD operations for admin, invoice generation, and personal info updates for users.`,
    images: [
      PortfolioSkills,
    ],
    alt: "Screenshot of the Water Billing System",
    github: "https://github.com/rxmxndai/Water-Billing-System-JAVA-SPRING_BOOT-MySQL",
    live: "",
    techStacks: ["Java", "Javax", "JavaFx"],
    featured: true,
    xs: 7
  }
];


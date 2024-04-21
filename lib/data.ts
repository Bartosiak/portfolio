import onlineshopImg from "@/public/onlineshop.png";
import adminpanelImg from "@/public/adminpanel.png";
import crmImg from "@/public/crm.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
    {
    title: "Online tennis shop",
    description:
      "Throughout the development of my project, I acquired valuable skills and knowledge. I mastered the implementation of Multer for efficient file uploads, gained expertise in managing user roles and tokens, and honed my ability to utilize context for streamlined cart state management. These experiences reflect my dedication to continuous learning and skill enhancement.",
    tags: ["React", "Node", "Express", "MongoDB" , "Multer"],
    imageUrl: onlineshopImg,
    website: "https://toptenis.damianbartosiak.dev/",
    repository: "https://github.com/bartosiak/online-tennis-shop"
  },
  
  {
    title: "CRM",
    description:
      "The project is a CRM system that enables user registration and login functionalities. Upon logging in, users can seamlessly add new contacts and efficiently manage them by scheduling meetings, sending emails, and making phone calls. Additionally, I gained valuable insights into creating APIs and establishing references within MongoDB database, facilitating seamless data management and enhancing my proficiency in backend development.",
    tags: ["React", "Bootstrap", "Node", "Express", "MongoDB" ],
    imageUrl: crmImg,
    website: "https://crm.damianbartosiak.dev/",
    repository: "https://github.com/bartosiak/crm-backend",
  },
  {
    title: "School admin panel",
    description:
      "Panel responsible for managing the system in schools. It offers many possibilities, including displaying the timetable, substitutions, and important announcements. Additionally, this project is continuously developed in collaboration with other programmers, allowing me to enhance my programming skills through teamwork and collaboration",
    tags: ["React", "Node", "Express", "Next.js", "Sass", "MySQl", "Sequelize"],
    imageUrl: adminpanelImg,
    repository: "https://github.com/PanDamax01/admin-panel-express-baza-sql"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
] as const;

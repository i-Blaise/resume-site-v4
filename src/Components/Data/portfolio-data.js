// portfolioData.js
import TTH1 from "../../assets/images/portfolio/tth1.png";
import TTH2 from "../../assets/images/portfolio/tth2.png";
import TTH3 from "../../assets/images/portfolio/tth3.png";
import AcaciaQuizz1 from "../../assets/images/portfolio/AcaciaQuizz1.png";
import AcaciaQuizz2 from "../../assets/images/portfolio/AcaciaQuizz2.png";
import AcaciaQuizz3 from "../../assets/images/portfolio/AcaciaQuiz3.png";
import AcaciaCMS1 from '../../assets/images/portfolio/AcaciaCMS1.png';
import AcaciaCMS2 from '../../assets/images/portfolio/AcaciaCMS2.png';
import AcaciaCMS3 from '../../assets/images/portfolio/AcaciaCMS3.png';
import MCGN1 from "../../assets/images/portfolio/mcgn1.png";
import MCGN2 from "../../assets/images/portfolio/mcgn2.png";
import ABiForum1 from "../../assets/images/portfolio/abiforum1.png";
import ABiForum2 from "../../assets/images/portfolio/abiforum2.png";
import Gino1 from "../../assets/images/portfolio/gino1.png";
import Gino2 from "../../assets/images/portfolio/gino2.png";
import Efas1 from "../../assets/images/portfolio/efas1.png";
import Efas2 from "../../assets/images/portfolio/efas2.png";
import ID1 from "../../assets/images/portfolio/ID1.png"
import ID2 from "../../assets/images/portfolio/ID2.png"
import ID3 from "../../assets/images/portfolio/ID3.png"
import Coronation1 from "../../assets/images/portfolio/Coronation1.png"
import Coronation2 from "../../assets/images/portfolio/Coronation2.png"
import Coronation3 from "../../assets/images/portfolio/Coronation3.png"
import Dosh1 from "../../assets/images/portfolio/Dosh1.png"
import Dosh2 from "../../assets/images/portfolio/Dosh2.png"
import Dosh3 from "../../assets/images/portfolio/Dosh3.png"
import Bot from "../../assets/images/portfolio/bot.png"
import Bot1 from "../../assets/images/portfolio/bot1.png"

const portfolioData = [
  {
    id: 1,
    name: "Jobotron - Automated Job Scraping and Social Posting with AI",
    type: "AI automation platform",
    client: "Internal Project",
    button2Url: "https://github.com/i-Blaise/Jobotron",
    button2: true,
    buttonName: "View GitHub Repo",
    date: "2024-09-15",
    url: "https://x.com/Jobotron2024_gh",
    title: "Jobotron: AI-Powered Job Distribution",
    intro: "Jobotron is an AI-driven automation system, built in Python, that intelligently scrapes, curates, and publishes job listings while maintaining active social media engagement.",
    info: "The platform periodically scrapes job openings from selected websites based on parameters such as the number of active listings in its MongoDB database. Using the Gemini AI API, it identifies and removes expired postings, prioritizes jobs nearing expiration, and automatically publishes them to X (Twitter) with concise, character-limit–compliant captions. Between job posts, the AI also shares inspirational messages to maintain engagement. Jobotron runs on an Ubuntu Linux server and is orchestrated via a cron job, ensuring continuous background operation without manual intervention.",
    images: [Bot, Bot1],
    techStack: ["Python", "MongoDB", "Google Gemini AI API", "BeautifulSoup", "Ubuntu Linux", "Twitter API (X API v2)"]
  },
  {
    id: 2,
    name: "Dosh Website & CMS + Analytics Dashboard",
    type: "corporate website",
    client: "Dosh FX",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2024-06-02",
    url: "https://www.0800dosh.me/",
    title: "Dosh Website and Content Management System",
    intro: "Dosh is an insurance company for which we developed 800dosh.me, a modern, user-friendly platform enabling customers to explore and sign up for a wide range of insurance packages while staying informed with the latest company updates.",
    info: "The frontend, built with React.js, delivers a clean and engaging user experience, while a custom Laravel-based CMS empowers the Dosh team to manage website content, media, and updates without developer intervention. The CMS also features intuitive analytics dashboards with visually accessible graphs, providing at-a-glance insights into key metrics and KPIs. Data flows seamlessly between the CMS and the website via secure APIs, ensuring real-time content synchronization.",
    images: [Dosh1, Dosh2, Dosh3],
    techStack: ["React.js", "TailwindCSS", "Laravel (PHP)", "MySQL", "RESTful APIs", "Linux Server (Ubuntu)"]
  },
  {
    id: 3,
    name: "Coronation Website & CMS",
    type: "corporate website",
    client: "Coronation Insurance Ghana",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2024-01-18",
    url: "https://coronation.com.gh/",
    title: "Coronation Insurance Corporate Site",
    intro: "Developed a fully responsive, enterprise-grade web platform for Coronation Insurance Ghana, tailored for the local market and aligned with the Nigerian parent company’s corporate standards.",
    info: "The frontend was built with React.js, delivering a performant, mobile-friendly interface with optimized routing and component-based architecture. A custom Laravel CMS powers full-site content control, allowing administrators to update text, media, and downloadable assets across all pages. The CMS integrates with the frontend via secure RESTful APIs, enabling real-time updates without deployment cycles. Additional features include a dynamic quote request engine, document download management, and contact form integration with server-side validation. The system is hosted on an Ubuntu Linux server with Nginx, uses MySQL for relational data storage, and leverages Git-based version control for streamlined deployment.",
    images: [Coronation1, Coronation2, Coronation3],
    techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Laravel (PHP)", "MySQL","RESTful APIs", "Linux Server (Ubuntu)"]
  },
  {
    id: 4,
    name: "Interactive Digital",
    type: "agency website",
    client: "Interactive Digital",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2025-02-07",
    url: "https://interactivedigital.com.gh/",
    title: "Interactive Digital Agency Website",
    intro: "As part of my current role at Interactive Digital (Ghana), I worked with my tech team to spearhead the revamp of the company’s website to deliver a modern, visually engaging experience that reflects the agency’s creative and technical capabilities. The redesign features a responsive animated landing page, integrated client testimonials, and a dynamic blogs page and cards, all optimized for speed, accessibility, and maintainability.",
    info: "The frontend was rebuilt using React.js with a modular component-based architecture, enabling reusable elements for sections such as testimonials, portfolio showcases, and the blogs page. Styling and responsive layouts were achieved with Tailwind CSS, while animations were implemented using Framer Motion for smooth, high-performance transitions. The blogs page is powered by secure RESTful API integrations, allowing real-time posting and management of vacancies. The site is hosted on an Ubuntu Linux server with Nginx, deployed via Git-based version control, and optimized using modern build tools to ensure fast load times and an engaging user experience",
    images: [ID1, ID2, ID3],
    techStack: ["Framer Motion", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "Laravel (PHP)", "MySQL","RESTful APIs", "Linux Server (Ubuntu)"]
  },
  {
    id: 5,
    name: "Acacia Blog & Qizz CMS",
    type: "custom CMS",
    client: "Acacia Health Insurance",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2020-06-22",
    url: "",
    title: "Acacia Blog and CMS Platform",
    intro: "Developed a custom content management system (CMS) for Acacia Medical Insurance, enabling the company to seamlessly publish and manage health-related content, blog posts, and quiz data for integration into their mobile application.",
    info: "Built with Laravel, the CMS provides secure, role-based access for the editorial team, along with an intuitive interface for updating copy, media, and blog content. The system exposes a RESTful API that integrates directly with Acacia’s mobile app, allowing real-time synchronization of content without requiring app updates. In addition, a dedicated quiz management module enables administrators to view participant submissions, analyze results through visually accessible graphs, and update questions and answers on demand. The backend is powered by MySQL for data persistence, hosted on an Ubuntu Linux server, and secured with SSL/TLS and Laravel’s built-in CSRF protection.",
    images: [AcaciaCMS1, AcaciaCMS2, AcaciaCMS3],
    techStack: ["WordPress", "PHP", "MySQL", "Elementor"]
  },
  {
    id: 6,
    name: "Electronic Finding Aid System",
    type: "search and archive portal",
    client: "Public Records and Archives Department",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2023-03-10",
    url: "",
    title: "Electronic Finding Aid Portal",
    intro: "Developed an internal Finding Aid System for Social Security and National Insurance Trust (SSNIT) Records Department to streamline the tracking and management of physical record files requested across branches and head office.",
    info: "The system was built with Laravel, featuring a secure, role-based authentication system to control access by department and user level. It provides an intuitive interface for logging file requests, tracking their movement between branches, and ensuring all records are accounted for. Advanced search functionality, document-type filtering, and metadata tagging allow staff to quickly locate files, while a robust backend manages file status, history, and request fulfillment. The platform uses MySQL for relational data storage, runs on an Ubuntu Linux server, and is secured with SSL/TLS encryption and Laravel’s built-in CSRF protection. This solution significantly improved accountability, reduced lost-file incidents, and enhanced operational efficiency in SSNIT’s records management process.",
    images: [Efas1, Efas2],
    techStack: ["Laravel", "MySQL", "Bootstrap"]
  },
  {
    id: 7,
    name: "Gino Pomo Promotion - Campaign",
    type: "promotion microsite",
    client: "Gino",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2022-12-05",
    url: "",
    title: "Gino Pomo Consumer Promo Website",
    intro: "A secure microsite built for a national consumer promotion, enabling participants to enter unique product codes for a chance to win prizes.",
    info: "Developed for Gino’s campaign, this platform featured robust code verification, a real-time winner leaderboard, SMS integration for instant notifications, and an admin dashboard for tracking entries. The backend was powered by Laravel for security and scalability, while the frontend for participants was crafted with HTML, CSS, and JavaScript for a seamless user experience. This solution not only streamlined prize management but also ensured high engagement and transparency throughout the campaign.",
    images: [Gino1, Gino2],
    techStack: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    id: 8,
    name: "Acacia Health Quiz",
    type: "engagement tool",
    client: "Acacia Health Insurance",
    button2Url: "",
    button2: false,
    buttonName: "",
    date: "2022-07-19",
    url: "",
    title: "Acacia Interactive Health Quiz",
    intro: "An engaging, interactive web quiz built to educate users about their health risk profiles while seamlessly introducing Acacia’s insurance offerings.",
    info: "Developed as a responsive web app with dynamic question flows, weighted score calculations, and CRM-integrated lead capture. The platform delivers personalized result pages that not only highlight users’ health insights but also recommend suitable Acacia insurance products, creating a direct pathway from awareness to policy purchase.",
    images: [AcaciaQuizz1, AcaciaQuizz2, AcaciaQuizz3],
    techStack: ["JavaScript", "HTML", "CSS", "PHP"]
  },
  {
    id: 9,
    name: "The Trust Hospital Covid-Testing Portal",
    type: "dynamic portal",
    client: "The Trust Hospital",
    button2Url: "https://www.thetrusthospital.com/",
    button2: false,
    buttonName: "",
    date: "2021-04-26",
    url: "https://www.thetrusthospital.com/covidtest/",
    title: "The Trust Hospital Covid-Testing Website",
    intro: "The Trust Hospital Covid Portal is a secure, user-friendly web platform—built with HTML, CSS, JavaScript, and PHP—designed at the height of the pandemic to help Ghanaians book and pay for Covid-19 tests from the safety of their homes.",
    info: "Initially developed to minimise physical contact, the portal allowed users to schedule home visits by medical specialists, make payments online, receive real-time updates, and access results via the web or SMS. As the pandemic eased, the platform evolved to support bookings for other essential tests—such as malaria and hepatitis—ensuring continued convenience and efficiency for patients nationwide. It also includes an administrative CMS dashboard that allows hospital staff to securely upload, manage, and publish patient test results for easy access and review.",
    images: [TTH1, TTH2, TTH3],
    techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"]
  }
];


export default portfolioData;

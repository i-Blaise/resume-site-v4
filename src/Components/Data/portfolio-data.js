// portfolioData.js
import TTH1 from "../../assets/images/portfolio/tth1.png";
import TTH2 from "../../assets/images/portfolio/tth2.png";
import TTH3 from "../../assets/images/portfolio/tth3.png";
import Acacia1 from "../../assets/images/portfolio/acacia1.png";
import Acacia2 from "../../assets/images/portfolio/acacia2.png";
import Acacia3 from "../../assets/images/portfolio/acacia3.png";
import MCGN1 from "../../assets/images/portfolio/mcgn1.png";
import MCGN2 from "../../assets/images/portfolio/mcgn2.png";
import ABiForum1 from "../../assets/images/portfolio/abiforum1.png";
import ABiForum2 from "../../assets/images/portfolio/abiforum2.png";
import Gino1 from "../../assets/images/portfolio/gino1.png";
import Gino2 from "../../assets/images/portfolio/gino2.png";
import Efas1 from "../../assets/images/portfolio/efas1.png";
import Efas2 from "../../assets/images/portfolio/efas2.png";

const portfolioData = [
  {
    id: 1,
    name: "The Trust Hospital Covid-Testing Portal",
    type: "dynamic portal",
    client: "The Trust Hospital",
    clientUrl: "https://www.thetrusthospital.com/",
    date: "2021-04-26",
    url: "https://www.thetrusthospital.com/covidtest/",
    title: "The Trust Hospital Covid-Testing Website",
    intro: "The Trust Hospital Covid Portal is a streamlined, user-friendly web application for booking and paying for Covid-19 tests at any Trust Hospital branch nationwide.",
    info: "It also includes an administrative CMS dashboard that allows hospital staff to securely upload, manage, and publish patient test results for easy access and review.",
    images: [TTH1, TTH2, TTH3 ],
    techStack: ["PHP", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    name: "Acacia Health Quiz App",
    type: "dynamic",
    client: "Acacia Health Insurance",
    clientUrl: "https://myenterprisegroup.io/acacia/",
    date: "2021-10-03",
    url: "http://acacia.sonzie.tech/",
    title: "Acacia Health Quiz Application",
    intro: "Acacia Health Insurance sought to engage users with interactive health quizzes to promote healthy habits and lifestyle choices.",
    info: "I developed a dynamic quiz application complete with personalized feedback and recommendations. An admin dashboard visualizes quiz results with charts and lets administrators add, edit, or remove questions and answers while preserving scoring integrity.",
    images: [Acacia1, Acacia2, Acacia3],
    techStack: ["PHP", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 3,
    name: "Massive Cheerful Giving Network - Previous Website",
    type: "dynamic",
    client: "Massive Cheerful Giving Network",
    clientUrl: "https://www.massivecheerfulgiving.com/",
    date: "2018-12-19",
    url: "#",
    title: "Legacy Website Overview",
    intro: "The original Massive Cheerful Giving Network site provided essential NGO features like automated donation tracking and an admin portal for content updates.",
    info: "To improve performance and maintainability, I proposed rebuilding the site using Laravel and modern frontend technologies, paving the way for a future relaunched platform.",
    images: [MCGN1, MCGN2],
    techStack: ["PHP", "JavaScript", "HTML", "Bootstrap"]
  },
  {
    id: 4,
    name: "Africa Business Innovation Forum Website 2023",
    type: "cms",
    client: "Africa Business Innovation Forum",
    clientUrl: "https://theabiforum.com/",
    date: "2023-07-26",
    url: "#",
    title: "ABI Forum 2023 Website",
    intro: "The 2023 ABI Forum site offers visitors clear information on the event’s mission, sponsors, speakers, and ticket pricing.",
    info: "Built on Webflow for rapid updates, the static but flexible CMS ensures organizers can refresh content quickly without developer assistance.",
    images: [ABiForum1, ABiForum2],
    techStack: ["HTML", "CSS", "Webflow"]
  },
  {
    id: 5,
    name: "GinoPomoPromotion - Campaign Website",
    type: "portal",
    client: "GB Foods",
    clientUrl: "https://www.thegbfoods.com/",
    date: "2020-06-20",
    url: "#",
    title: "GinoPomoPromotion Campaign Portal",
    intro: "GB Foods needed a campaign portal to collect user entries and manage weekly contest winners efficiently.",
    info: "I built a secure portal that stores submissions, provides admin access for uploading winners, and captures valuable marketing insights for the campaign team.",
    images: [Gino1, Gino2],
    techStack: ["Laravel", "PHP", "JavaScript", "Blade"]
  },
  {
    id: 6,
    name: "Electronic Finding Aid System",
    type: "portal",
    client: "Social Security and National Insurance Trust (SSNIT)",
    clientUrl: "https://www.ssnit.org.gh/",
    date: "2019-09-01",
    url: "#",
    title: "SSNIT EFAS Portal",
    intro: "SSNIT required a system to track and manage physical client folders across departments to reduce errors and improve accountability.",
    info: "I developed the Electronic Finding Aid System (EFAS) allowing staff to request, locate, and return folders with full audit trails. The records department can also search the entire inventory efficiently.",
    images: [Efas1, Efas2],
    techStack: ["Laravel", "PHP", "JavaScript", "Java", "HTML", "CSS"]
  },
  {
    id: 7,
    name: "Acacia Blog Portal",
    type: "portal",
    client: "Acacia Health Insurance",
    clientUrl: "https://myenterprisegroup.io/acacia/",
    date: "2022-10-03",
    url: "#",
    title: "Acacia CMS Blog Portal",
    intro: "Acacia Health needed a user-friendly portal for creating and managing blog content on their website and mobile app.",
    info: "I built a markdown-based CMS with support for multimedia posts—videos, images, and carousels—and streamlined publishing workflows for the content team.",
    images: [
      "img/portfolio/acacia4.png",
      "img/portfolio/acacia5.png",
      "img/portfolio/acacia6.png"
    ],
    techStack: ["PHP", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 8,
    name: "Zivot Consult Website",
    type: "static",
    client: "Zivot Consult",
    clientUrl: "https://zivotconsult.org/",
    date: "2020-11-12",
    url: "https://zivotconsult.org/",
    title: "Zivot Consult Webflow Site",
    intro: "Zivot Consult’s site combines modern design with accessible content to showcase services, testimonials, and contact info.",
    info: "Built on Webflow for ease of updates, the site features responsive layouts, smooth interactions, and a clean, professional aesthetic.",
    images: [
      "img/portfolio/zc1.png",
      "img/portfolio/zc2.png",
      "img/portfolio/zc3.png"
    ],
    techStack: ["HTML", "CSS", "Webflow"]
  },
  {
    id: 9,
    name: "Folowap Website",
    type: "dynamic, portal",
    client: "Folowap",
    clientUrl: "https://folowap.com/",
    date: "2020-02-02",
    url: "https://folowap.com/",
    title: "Folowap SMS Platform",
    intro: "Folowap provides a scalable bulk-SMS service for businesses and developers through a secure API.",
    info: "I collaborated on building the platform’s core, optimizing for security, reliability, and scalability, enabling cost-effective mass messaging for users.",
    images: [
      "img/portfolio/folo1.png",
      "img/portfolio/folo2.png",
      "img/portfolio/folo3.png"
    ],
    techStack: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 10,
    name: "Massive Cheerful Giving Network - Under Construction",
    type: "dynamic, portal",
    client: "Massive Cheerful Giving Network",
    clientUrl: "http://www.massivecheerfulgiving.com/",
    date: "2023-08-01",
    url: "https://staging.massivecheerfulgiving.com/",
    title: "MCGN Relaunch Staging",
    intro: "The new MCGN site centralizes donation tracking, volunteer management, and news updates under one platform.",
    info: "Developed a modern portal with Laravel and React, featuring an admin dashboard for managing campaigns, users, and real-time impact metrics.",
    images: [
      "img/portfolio/mcgn1-new.png",
      "img/portfolio/mcgn2-new.png",
      "img/portfolio/mcgn3-new.png"
    ],
    techStack: ["PHP", "Laravel", "JavaScript", "Blade"]
  },
  {
    id: 11,
    name: "DOSH",
    type: "dynamic",
    client: "DOSH",
    clientUrl: "https://www.0800dosh.me/",
    date: "2024-02-15",
    url: "https://www.0800dosh.me/",
    title: "DOSH Cashback Platform",
    intro: "DOSH is a rewards platform that lets users earn cashback on everyday purchases and refer friends for bonuses.",
    info: "Built with React on the frontend and Laravel/PHP on the backend, the site includes user authentication, cashback tracking dashboards, and secure payment integrations.",
    images: [
      "img/portfolio/dosh1.png",
      "img/portfolio/dosh2.png",
      "img/portfolio/dosh3.png",
      "img/portfolio/dosh4.png"
    ],
    techStack: ["React", "Laravel", "PHP", "JavaScript"]
  },
  {
    id: 12,
    name: "Interactive Digital",
    type: "dynamic",
    client: "Interactive Digital",
    clientUrl: "https://interactivedigital.com.gh/",
    date: "2024-03-10",
    url: "https://staging.interactivedigital.com.gh/",
    title: "Interactive Digital Agency Site",
    intro: "Interactive Digital’s website showcases the agency’s services, portfolio, and team expertise through an engaging interface.",
    info: "Developed with React for a responsive UI and integrated Laravel for a content-rich admin portal, the site is optimized for performance, SEO, and easy content updates.",
    images: [
      "img/portfolio/id1.png",
      "img/portfolio/id2.png",
      "img/portfolio/id3.png",
      "img/portfolio/id4.png",
      "img/portfolio/id5.png"
    ],
    techStack: ["React", "Laravel", "PHP", "JavaScript"]
  }
];

export default portfolioData;

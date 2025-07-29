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

const portfolioData = [
  {
    id: 1,
    name: "Jobotron - Automated Job Scraping and Social Posting with AI",
    type: "AI automation platform",
    client: "Internal Project",
    clientUrl: "",
    date: "2024-09-15",
    url: "https://jobotron.app/",
    title: "Jobotron: AI-Powered Job Distribution",
    intro: "Jobotron automatically scrapes jobs from partner sites and intelligently posts them on various platforms with AI-generated captions and hashtags.",
    info: "It includes a CMS for managing content and integrations with multiple APIs and social networks, streamlining recruitment marketing for job boards and staffing agencies.",
    images: [],
    techStack: ["Node.js", "React", "Python", "MongoDB", "OpenAI API"]
  },
  {
    id: 2,
    name: "Dosh Website & CMS + Analytics Dashboard",
    type: "corporate website",
    client: "Dosh FX",
    clientUrl: "https://dosh.africa",
    date: "2024-06-02",
    url: "https://dosh.africa",
    title: "Dosh Website and Content Management System",
    intro: "The Dosh site presents the brand’s FX trading tools and community offerings with clarity and modern UX design.",
    info: "The backend CMS allows the Dosh team to manage updates, testimonials, blog posts, and event listings without developer support.",
    images: [Dosh1, Dosh2, Dosh3],
    techStack: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    name: "Coronation Website & CMS",
    type: "corporate website",
    client: "Coronation Insurance Ghana",
    clientUrl: "https://coronationinsurancegh.com",
    date: "2024-01-18",
    url: "https://coronationinsurancegh.com",
    title: "Coronation Insurance Corporate Site",
    intro: "An elegant site designed to convey trust, ease, and accessibility for a wide range of insurance services.",
    info: "Features include an intuitive CMS, contact form integration, downloadable forms, and a quote request engine.",
    images: [Coronation1, Coronation2, Coronation3],
    techStack: ["PHP", "Laravel", "Vue.js", "Bootstrap"]
  },
  {
    id: 4,
    name: "Interactive Digital",
    type: "agency website",
    client: "Interactive Digital",
    clientUrl: "https://interactivedigital.africa",
    date: "2023-10-07",
    url: "https://interactivedigital.africa",
    title: "Interactive Digital Agency Website",
    intro: "Built to showcase the digital marketing agency’s services, portfolio, and team in a visually engaging way.",
    info: "Includes an animated landing page, client testimonial section, and integrated job board.",
    images: [ID1, ID2, ID3],
    techStack: ["React", "Framer Motion", "TailwindCSS"]
  },
  {
    id: 5,
    name: "Acacia Blog & Qizz CMS",
    type: "custom CMS",
    client: "Acacia Health Insurance",
    clientUrl: "https://acaciahealthinsurance.com",
    date: "2023-06-22",
    url: "https://acaciahealthinsurance.com/blog",
    title: "Acacia Blog and CMS Platform",
    intro: "A medical blog portal that allows Acacia to publish health-related content with ease.",
    info: "Includes a secure backend CMS for editorial team access, SEO tools, and a responsive frontend for a smooth reading experience.",
    images: [AcaciaCMS1, AcaciaCMS2, AcaciaCMS3],
    techStack: ["WordPress", "PHP", "MySQL", "Elementor"]
  },
  {
    id: 6,
    name: "Electronic Finding Aid System",
    type: "search and archive portal",
    client: "Public Records and Archives Department",
    clientUrl: "",
    date: "2023-03-10",
    url: "https://efindingaid.gov.gh",
    title: "Electronic Finding Aid Portal",
    intro: "A searchable web portal that makes national archival records accessible to the public and researchers.",
    info: "Built with advanced search capabilities, filters by document type, metadata tagging, and a robust file management backend.",
    images: [Efas1, Efas2],
    techStack: ["Django", "PostgreSQL", "Bootstrap"]
  },
  {
    id: 7,
    name: "Gino Pomo Promotion - Campaign",
    type: "promotion microsite",
    client: "Gino",
    clientUrl: "https://gino.com.gh",
    date: "2022-12-05",
    url: "https://gino.com.gh/promotions/pomo",
    title: "Gino Pomo Consumer Promo Website",
    intro: "Microsite for a national consumer promo, where participants could enter codes from products for a chance to win prizes.",
    info: "Features code verification, winner leaderboard, SMS integration, and admin dashboard for monitoring entries.",
    images: [Gino1, Gino2],
    techStack: ["PHP", "Laravel", "Vue.js", "MySQL"]
  },
  {
    id: 8,
    name: "Acacia Health Quiz",
    type: "engagement tool",
    client: "Acacia Health Insurance",
    clientUrl: "https://acaciahealthinsurance.com",
    date: "2022-07-19",
    url: "https://acaciahealthinsurance.com/healthquiz",
    title: "Acacia Interactive Health Quiz",
    intro: "A fun and educational quiz to help users understand their health risk profiles while engaging with the Acacia brand.",
    info: "Includes dynamic questions, score calculation, lead capture integration, and custom result pages.",
    images: [AcaciaQuizz1, AcaciaQuizz2, AcaciaQuizz3],
    techStack: ["JavaScript", "HTML", "CSS", "Firebase"]
  },
  {
    id: 9,
    name: "The Trust Hospital Covid-Testing Portal",
    type: "dynamic portal",
    client: "The Trust Hospital",
    clientUrl: "https://www.thetrusthospital.com/",
    date: "2021-04-26",
    url: "https://www.thetrusthospital.com/covidtest/",
    title: "The Trust Hospital Covid-Testing Website",
    intro: "The Trust Hospital Covid Portal is a streamlined, user-friendly web application for booking and paying for Covid-19 tests at any Trust Hospital branch nationwide.",
    info: "It also includes an administrative CMS dashboard that allows hospital staff to securely upload, manage, and publish patient test results for easy access and review.",
    images: [TTH1, TTH2, TTH3],
    techStack: ["PHP", "JavaScript", "HTML", "CSS"]
  }
];


export default portfolioData;

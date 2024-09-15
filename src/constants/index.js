import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  edu_speak,
  edu_speak1,
  chat_bot,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  XDD,
  XD,
  C,
  Unity,
  linkedin,
  perfil
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Negociations & Sales",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Boostrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C#",
    icon: C,
  },
  {
    name: "Unity",
    icon: Unity,
  },
  {
    name: "Adobe XD",
    icon: XD,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelance Media and Web Developer",
    company_name: "Foto Go Colombia, MakeArt Events",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2022 - Jan 2024",
    points: [
      "Freelancing as a Media and Web Developer for Foto Go Colombia and MakeArt Events, etc.",
      "Building and maintaining web applications using Javascript and associated technologies.",
      "Collaborating closely with multifunctional teams, including designers and product managers, to deliver high-quality products.",
      "Implementing responsive design strategies ensuring compatibility across various browsers.",
    ],
  },
  {
    title: "Tech And Business Developer",
    company_name: "Jalm Investments S.A.S",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jul 2022",
    points: [
      "Led the integration of new games and experiences, designing innovative concepts for shopping centers and diverse sectors within Jalm Investments S.A.S.",
      "Collaborated cross-functionally with designers, product managers, and developers to deliver high-quality products and immersive experiences.",
      "Orchestrated successful negotiations resulting in a remarkable 30% annual increase in sales growth.",
      "Responsible for training commercial and operational staff.",
    ],
  },
  {
    title: "Bussines Developer",
    company_name: "Federal S.A.S.",
    icon: mobile,
    iconBg: "#383E56",
    date: "Jan 2016 - Jan 2017",
    points: [
      "In responsibility of growing a new beverage brand's market across the country",
      "Training for new and existing commercial agents Year after year.",
      "Orchestrated successful negotiations resulting in a remarkable 20% annual increase in sales growth.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having previously worked with Franklin at Jalm as a product designer, I was already familiar with her great focus on quality, attention to detail, and ability to bring a creative idea to life. Franklin helped me turn concepts in my head into reality by redesigning a business logo, branding, and website.",
    name: "Angela Torres",
    designation: "CEO",
    company: "Jalm S.A.S",
    image: "https://ii.ct-stc.com/1/logos/empresas/2018/09/06/064694783ab441448d3e145855687thumbnail.jpeg",
  },
  {
    testimonial:
      "It was my extreme pleasure to work with Franklin at Federal S.A.S. He has a rare combination of being creative, technically detailed, and Marketing. Franklin would be a true benefit to any company.",
    name: "Oscar Zuluaga",
    designation: "COO",
    company: "Federal S.A.S",
    image: "https://www.beetrack.com/hubfs/Logos%20Clientes/logoarrozfederal.png",
  },
  {
    testimonial:
      "He is responsible, creative, and works well in groups. Highly efficient and discipline.",
    name: "Victor",
    designation: "BackEnd Developer",
    company: "Solera",
    image: "https://mma.prnewswire.com/media/215922/solera_holdings_inc_logo.jpg?p=facebook",
  },
];

const projects = [
  {
    name: "Virtual Reality Simulator",
    description:
      "EduSpeak is a VR platform that helps users improve public speaking by providing a realistic practice environment. It offers feedback on both verbal and non-verbal communication, helping users build confidence and refine their skills efficiently.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Maya 3D",
        color: "green-text-gradient",
      },
      {
        name: "XR Interaction Tool Kit",
        color: "pink-text-gradient",
      },
    ],
    image: edu_speak,
    source_code_link: "https://www.youtube.com/watch?v=S-LEdD_D1Uc ",
  },
  {
    name: "E-commerce",
    description:
    "Utilizing APIs for seamless product showcasing, currency conversion (CAD to USD), and precise address validation in the US and Canada. Features captivating user interface. Built with vanilla JS, CSS and Bootstrap.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/franklin-coder/ecommerce",
  },
  {
    name: "WordPress & Elementor",
    description:
      "This is a dynamic website built with WordPress using Elementor, along with custom CSS and JavaScript for enhanced functionality. The design of the site, including images, videos, and banners, was created using Adobe Suite.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Suit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://recreacionjalm.com/",
  },
  {
    name: "Dynamic Quiz",
    description:
      "This is an interactive quiz developed using Bootstrap and jQuery to create smooth animations. It includes a timer and displays the results at the end, showing the number of correct answers. Additionally, it features a small validation form that uses regular expressions to ensure proper input.",
    tags: [
      {
        name: "HTML5 & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/franklin-coder/Interactive_quiz_JQuery",
  },
  {
    name: "Hotel reservation & login",
    description:
      "This is an ideal application for a hotel, offering real-time room quotes and live updates on local weather by consuming a weather prediction API. It also features a login system with regular expressions for input validation, allowing users to personalize their experience on the platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: chat_bot,
    source_code_link: "https://github.com/franklin-coder/Hotel_Web_site-",
  },
  {
    name: "2D Game Level-1",
    description:
      "This game was developed by applying different physics to the enemies and implementing core mechanics such as movement, jumping, collisions, and multiple canvases for menus and score tracking. It was so much fun to create that I’m already thinking of adding a couple more levels!",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Suit",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: edu_speak1,
    source_code_link: "https://github.com/franklin-coder",
  },
];

export { services, technologies, experiences, testimonials, projects };

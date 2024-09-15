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
    image: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t39.30808-6/271895063_4805765662848578_3368241543930359984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=rfGX50fgwa4AX-0VdoN&_nc_ht=scontent.fyvr3-1.fna&oh=00_AfCyw_Da7Bymd83eDZVRHftDhrUVGakpROqA8hKrRV1o6w&oe=6596B174",
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
    image: "https://media.licdn.com/dms/image/D4E0BAQFHhMFpgYTRSQ/company-logo_200_200/0/1688395501927/solera_mexico_logo?e=1712188800&v=beta&t=C-lVG8N2UHxITsw8uHS0PRbz08Euk72w7429jz061hU",
  },
];

const projects = [
  {
    name: "Chat GPT Clone",
    description:
      "Web platform mirroring AI chatbot capabilities via OpenAI API. Allows interact asking any topic, displays chat history, emphasizes user-friendly design, and supports project customization while maintaining original functionality.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/franklin-coder",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/franklin-coder",
  },
  {
    name: "CRUD",
    description:
      "This is a CRUD application developed with Next.js, Express, and MongoDB. It boasts an intuitive user interface designed with CSS. Upon successful operations,include a confetti animation, enhancing user experience and engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/franklin-coder",
  },
];

export { services, technologies, experiences, testimonials, projects };

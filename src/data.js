//  icons
import {
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhoneCall
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";
// import Project5 from "./assets/img/projects/p5.webp";
// import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";


// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Project",
    href: "portfolio",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/monumarquis",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/monu-yadav-2003m/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: 'https://camo.githubusercontent.com/edbcf3d1d9d7a47fdc4a22ce45509dcb0fd79e51e670866b2ddc07a361fdf97b/68747470733a2f2f737566692e76657263656c2e6170702f7374617469632f6d656469612f67796d70726f6a6563742e66336239306135363935663836633033333732642e676966',
    name: "gym.com",
    category: "TECH STACKS : React, Chakra-UI, Redux, NodeJS, Express, MongoDB",
    live:"https://gymbro.vercel.app/",
    source:"https://github.com/suFi7867/gym.com",
    desc:"This was a collaborative project built by team of 5 members in 5 days.My work was to create LandingPage and the Login,Signup, OTP, & also contributed in cart feature  Functionality"
  },
  {
    id: "5",
    image: 'https://camo.githubusercontent.com/f96ed9b3e6d37298e618516deb72ae459af9c624b7c74a4d607b38ca98d2aeed/68747470733a2f2f692e6962622e636f2f6437716877594d2f737461636b626f782d70726f6a6563742d312e6a7067',
    name: "Stack Box",
    category: "TECH STACKS : React, Styled-Components, NodeJS, Express, web-socket, MongoDB",
    live:"https://stackbox.vercel.app/",
    source:"https://github.com/suFi7867/chat-box",
    desc:"This was a collaborative project built by team of 4 members in 2 days.This is a Chatting Application.In this project we build and deploy a real-time chat application"
  },
  {
    id: "2",
    image: Project4,
    name: "Mailchimp | Clone",
    category: "TECH STACKS : React, Chakra-UI, Redux, NodeJS , Express",
    live:"https://mailchimpproject.netlify.app/",
    source:"https://github.com/monumarquis/emailChimp-Clone",
    desc:"This was a collaborative project built by team of 5 members in 5 days.My work was to create Homepage and the Admin Page & Functionality"
  },
  {
    id: "3",
    image: Project1,
    name: "Booking | Clone ",
    category: "TECH STACKS: HTML, CSS, JavaScript, SwiperJS,",
    live:"https://magical-toffee-cdb307.netlify.app/",
    source:"https://github.com/shivshankar0965/dusty-jewel-3645",
    desc:"This was a collaborative project built by team of 5 members in 5 days.My work was to create Homepage and the carrental Page,Navbar & Footer"
  },
  {
  id: "4",
  image: Project3,
  name: " Mine - Youtube",
  category: "TECH STACKS : React, Chakra-UI",
  live:"https://mine-youtube.vercel.app/",
  source:"https://github.com/monumarquis/mine-youtube",
  desc:"This was an Individual Project. In these website I created  Mini - Youtube with Search Functionality"
},
{
    id: "6",
    image: Project2,
    name: "Fabbag  | Clone",
    category: "TECH STACKS : React, Chakra-UI, Firebase",
    live:"https://crazy-name-9363.vercel.app/",
    source:"https://github.com/monumarquis/Fabbag-Clone",
    desc:"This was an Individual Project. In these website I created  Homepage, Navbar, Footer, About and  Login/Signup page with authentication. "
  },
 
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];
//Skills
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image:
      "https://media0.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952f2tzzhgaacs16r6qc70g8s7labhgrwhuicih0wc3&rid=giphy.gif&ct=s",
  },
  {
  image:
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TypeScript_ESLint_logo.svg/240px-TypeScript_ESLint_logo.svg.png"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/240px-Redux.png"
  },
  {
  image  :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/240px-Bootstrap_logo.svg.png"
  },
  {
    image:"https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png"
  },
  {
    image:"https://cdn4.iconfinder.com/data/icons/bettericons/354/github-128.png"
  },
  {
   image:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
  },
  {
    image:"https://cdn.iconscout.com/icon/free/png-128/figma-3521426-2944870.png"
  },
  {
    image:"https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&usqp=CAU"
  },
  {
    image:"https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png"
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  },
];




// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email",
  },
  {
    icon: <FiPhoneCall />,
    title: "Have a nice Talk?",
    subtitle: "I am here to talk  you.",
    description: "Contact me at +91- 9319914715",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "New Delhi,India",
    description: "Serving Clients Worldwide",
  },
];

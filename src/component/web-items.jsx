import ekrafImg from "../assets/web-ekraf.png";
import greenhavenImg from "../assets/greenhaven.png";
import beasiswaImg from "../assets/web-beasiswa.png";
import ecoprintImg from "../assets/web-ecoprint.png";

const portfolioWebItems = [
  {
    type: "Web",
    title: "Ekonomi Kreatif",
    description: "A web platform for promoting the creative economy.",
    image: ekrafImg,
    about:
      "This website is a final project developed in collaboration with the Tourism and Culture Office of Bogor City. It serves as an information and promotion platform for creative economy actors, providing data, collaboration opportunities, and a space to showcase their work. The goal is to support the growth of the creative economy sector and expand market reach for creators.",
    githubLink: "https://github.com/refiijs/ekraf-dash.git",
    projectLink: "https://ekraf-ta2.web.app/",
    techStack: ["Java Script", "React", "Bootstrap", "Firebase", "HTML", "CSS"],
    problem:
      "Many creative economy actors struggle to access information on business opportunities, funding, and government programs. Limited exposure also makes it challenging to promote their work to a wider audience. Additionally, the lack of collaboration networks makes it difficult for creators to find business partners or supportive communities for their growth.",
    solution: [
      "Integrated Information Hub – Provides the latest news, regulations, and business opportunities in the creative economy sector.",
      "Skill Development Features – Offers classes and training to help creative economy players enhance their skills.",
      "Promotional Media – Builds a digital ecosystem that enables creators to expand their reach, connect, and collaborate.",
    ],
  },
  {
    type: "Web",
    title: "Beasiswa Platform",
    description: "A student registration platform for scholarship programs.",
    image: beasiswaImg,
    about:
      "This web application is designed to manage and facilitate scholarship registration, display statistical graphs, and provide information regarding scholarship requirements and conditions.",
    githubLink: "https://github.com/refiijs/serkomweb-reactjs.git",
    projectLink: "https://serkomweb-reactjs.vercel.app/",
    techStack: ["Java Script", "React", "Bootstrap", "Firebase", "HTML", "CSS"],
    problem:
      "Students often struggle to access accurate scholarship information, face complex and time-consuming application processes, and encounter a lack of transparency in the selection process. Additionally, scholarship providers face challenges in managing and analyzing applicant data for program evaluation.",
    solution: [
      "Easy Online Registration – A web-based system allows students to upload documents and complete forms digitally.",
      "Application Status Tracking – Real-time tracking features enable students to monitor the progress of their scholarship applications.",
      "Statistical Dashboard – Admins can access graphs and reports on applicant data to streamline scholarship management and evaluation.",
    ],
  },
  {
    type: "Web",
    title: "GreenHaven",
    description: "A sustainability-focused website.",
    image: greenhavenImg,
    about:
      "This website is a Capstone Project in MSIB Dicoding Cycle 5. This innovative solution aims to create green open spaces, optimize the use of limited land in residential areas, and enhance public awareness of environmental conservation through the implementation of urban farming, which will be integrated into Green Haven.",
    githubLink: "https://github.com/AndikaPurnamaPutra/green-haven.git",
    projectLink: "https://green-haven.vercel.app/",
    techStack: ["Java Script", "HTML", "CSS", "Node.Js"],
    problem:
      "Population growth in Indonesia has led to the reduction of green spaces due to land conversion for residential areas, negatively impacting air quality. Jakarta, for instance, recorded an AQI of 154, which is considered unhealthy. The lack of public awareness about environmental preservation worsens this issue, highlighting the need for a solution to enhance understanding and encourage community participation in maintaining green spaces.",
    solution: [
      "Edukasi – Menyediakan informasi tentang pentingnya ruang hijau dan konsep Pengelolaan Lahan Minim (PLM)",
      "Panduan PLM – Menawarkan teknik seperti vertical gardening, hidroponik, dan rooftop garden dengan contoh penerapan",
      "Tips & Trik – Strategi pemilihan tanaman, rekomendasi material, serta peralatan penghijauan.",
    ],
  },

  {
    type: "Web",
    title: "Ecoprint",
    description: "A web project showcasing eco-friendly printing methods.",
    image: ecoprintImg,
    about:
      "AThis website was developed as a course project and serves as an informational and promotional platform for the ecoprint industry. Showcasing sustainable fabric dyeing techniques using natural materials, the site aims to educate the public, support artisans, and expand the market reach of eco-friendly textile products.",
    githubLink: "https://example.com",
    projectLink: "",
    techStack: ["Laravel", "Bootstrap", "HTML", "CSS"],
    problem:
      "Many people are unfamiliar with the ecoprint technique and its environmental benefits, making it difficult for the industry to grow. Additionally, artisans struggle to promote and sell their products beyond local markets due to limited exposure. Furthermore, there is a lack of accessible learning resources for individuals interested in mastering ecoprint techniques, which hinders the development of new artisans in this field.",
    solution: [
      "Educational Content – Provides articles, tutorials, and workshops to spread awareness about ecoprint techniques.",
      "Online Marketplace – Offers a digital space for artisans to showcase and sell their eco-friendly products.",
    ],
  },
];

export default portfolioWebItems;

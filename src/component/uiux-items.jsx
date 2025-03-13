// Import gambar lainnya dari assets
import greenhavenImg from "../assets/greenhaven.png";
import ticketogiveImg from "../assets/ticketogive.png";
import refisessionImg from "../assets/refisession.png";
import leafloomImg from "../assets/leafloom.png";
import binusquareImg from "../assets/binusquare.png";
import litechImg from "../assets/litech.png";
import binusquareDashImg from "../assets/binusquare-dash.png";
import beetanImg from "../assets/beetanverse.png";
import ruangjejakImg from "../assets/ruangjejak.png";

// Import dari folder detail-portfolio
import detailGhImg from "../assets/detail-portfolio/detail-gh.png";
import detailT2gImg from "../assets/detail-portfolio/detail-t2g.png";
import detailRsImg from "../assets/detail-portfolio/detail-rs.png";
import detailLfImg from "../assets/detail-portfolio/detail-leafloom.png";
import detailBsImg from "../assets/detail-portfolio/detail-bs.png";
import detailLitechImg from "../assets/detail-portfolio/detail-litech.png";
import detailBsDashImg from "../assets/detail-portfolio/detail-bs-dash.png";
import detailBeetanImg from "../assets/detail-portfolio/detail-beetan.png";
import detailRjImg from "../assets/detail-portfolio/detail-rj.png";

// Import dari folder preview
import preBs1Img from "../assets/preview/pre-bs1.png";
import preBs2Img from "../assets/preview/pre-bs2.png";
import preTg1Img from "../assets/preview/pre-t2g1.png";
import preTg2Img from "../assets/preview/pre-t2g2.png";
import preRs1Img from "../assets/preview/pre-rs1.png";
import preRs2Img from "../assets/preview/pre-rs2.png";
import preRs3Img from "../assets/preview/pre-rs3.png";
import preBsDash1Img from "../assets/preview/pre-bsdash1.png";
import preBsDash2Img from "../assets/preview/pre-bsdash2.png";
import preBsDash3Img from "../assets/preview/pre-bsdash3.png";
import preGh1Img from "../assets/preview/pre-gh1.png";
import preGh2Img from "../assets/preview/pre-gh2.png";
import preLitech1Img from "../assets/preview/pre-litech1.png";
import preLitech2Img from "../assets/preview/pre-litech2.png";
import preLloom1Img from "../assets/preview/pre-leafloom1.png";
import preLloom2Img from "../assets/preview/pre-leafloom2.png";
import preBt1Img from "../assets/preview/pre-beetan1.png";
import preBt2Img from "../assets/preview/pre-beetan2.png";
import preRj1Img from "../assets/preview/pre-rj1.png";
import preRj2Img from "../assets/preview/pre-rj2.png";
import preRj3Img from "../assets/preview/pre-rj2.png";
const portfolioUIUXItems = [
  {
    type: "UIUX",
    title: "Green Haven",
    description:
      "Innovative solutions for green spaces in compact residential areas.",
    image: greenhavenImg,
    detailImage: detailGhImg,
    about:
      "An innovative solution to create green space, maximize the use of narrow land in residential areas, and to increase public understanding of green preservation independently with the help of urban farming implementation which will be available in green haven.",
    goals: [
      "Provide plant recommendations that are suitable for the user's home environment.",
      "Provides an educational tool for users about plants, the care needed, and the management of each recommended plant.",
    ],
    previewImages: [preGh1Img, preGh2Img],
  },
  {
    type: "UIUX",
    title: "Ticket to Give",
    description:
      "A platform revolutionizing concert tickets with built-in charity.",
    image: ticketogiveImg,
    detailImage: detailT2gImg,
    about:
      "A platform that integrates ticket sales with charitable donations, allowing users to contribute to social causes while enjoying entertainment.",
    goals: [
      "Enable users to purchase tickets with a portion of proceeds going to charity.",
      "Increase awareness and engagement in social causes through concerts.",
      "Make a positive impact on communities in need by channeling a portion of each ticket sale to charity.",
    ],
    previewImages: [preTg1Img, preTg2Img],
  },
  {
    type: "UIUX",
    title: "RefiSession",
    description: "A professional portfolio platform for showcasing projects.",
    image: refisessionImg,
    detailImage: detailRsImg,
    about:
      "A platform that allows professionals to display their projects in an interactive and engaging manner.",
    goals: [
      "Provide a structured way to showcase portfolios online.",
      "Enhance personal branding through a customizable digital space.",
      "Build personal branding by promoting self-identity through a portfolio that reflects style and expertise",
      "Showcase work in a professional manner to increase the chances of landing a project or job.",
      "Provides a place to systematically organize and structure projects, giving visitors a strong and positive impression.",
      "Offers easy-to-use and intuitive navigation, so visitors can quickly and comfortably explore each piece of work displayed.",
    ],
    previewImages: [preRs1Img, preRs2Img, preRs3Img],
  },
  {
    type: "UIUX",
    title: "Leafloom",
    description: "A fashion app connecting users and ecoprint entrepreneurs.",
    image: leafloomImg,
    detailImage: detailLfImg,
    about:
      "An application that bridges users with eco-friendly fashion creators, promoting sustainable fashion.",
    goals: [
      "Providing an easily accessible platform for consumers to find and purchase ecoprinted products online, thereby increasing market reach.",
      "Facilitate ecoprint artisans to sell their products more effectively and efficiently, while promoting their work to a wider audience.",
      "Build a business ecosystem that connects producers, consumers who love ecoprint products, thus creating greater opportunities for collaboration and growth.",
    ],
    previewImages: [preLloom1Img, preLloom2Img],
  },
  {
    type: "UIUX",
    title: "Literasi Technology",
    description:
      "A mobile app for discovering stories, honing creativity, and crafting works.",
    image: litechImg,
    detailImage: detailLitechImg,
    about:
      "A digital space that encourages reading, writing, and creative exploration among users.",
    goals: [
      "Facilitate access to diverse reading materials.",
      "Provide tools to enhance writing and storytelling skills.",
      "The inclusion of technological sophistication aims to attract public interest in the field of literacy, so as to increase Indonesia's PISA score.",
    ],
    previewImages: [preLitech1Img, preLitech2Img],
  },
  {
    type: "UIUX",
    title: "Binus Square",
    description: "An app that helps visitors book rooms at Binus Square.",
    image: binusquareImg,
    detailImage: detailBsImg,
    about:
      "A room booking application designed to simplify the reservation process for visitors at Binus Square.",
    goals: [
      "Understand user preferences and needs in the hotel room booking process to understand the overall experience.",
      "Maintain the security and privacy of users regarding the personal information they provide when booking a hotel room.",
      "Improve operational efficiency related to effective reservation management systems, integration with internal hotel systems, and process automation to enhance productivity.",
    ],
    previewImages: [preBs1Img, preBs2Img],
  },
  {
    type: "UIUX",
    title: "Binus Square Dash",
    description:
      "An app that helps admins manage room bookings at Binus Square.",
    image: binusquareDashImg,
    detailImage: detailBsDashImg,
    about:
      "A dashboard application for administrators to efficiently handle and manage room bookings at Binus Square.",
    goals: [
      "Make it easy for admins to manage and monitor resident data in real-time",
      "Automate administrative processes to reduce manual workload and improve efficiency.",
      "Provides reports and analytics that can be used for decision making",
    ],
    previewImages: [preBsDash1Img, preBsDash2Img, preBsDash3Img],
  },
  {
    type: "UIUX",
    title: "BeeTanVerse",
    description:
      "A farming game for kids to grow simple fruits and vegetables.",
    image: beetanImg,
    detailImage: detailBeetanImg,
    about:
      "An educational game designed to teach children about farming and plant growth through interactive gameplay.",
    goals: [
      "Helping children aged 5-12 years in learning Augmented Reality-based agriculture that makes it easy for children to practice at home or school.",
      "Improve the ability to empathize and adapt to the surrounding environment, especially in agriculture.",
      "Creating a generation of superior human resources in agriculture to support the realization of the Golden Indonesia 2045.",
    ],
    previewImages: [preBt1Img, preBt2Img],
  },
  {
    type: "UIUX",
    title: "Ruang Jejak",
    description:
      "An app that explores and preserves valuable assets through digital technology.",
    image: ruangjejakImg,
    detailImage: detailRjImg,
    about:
      "A platform dedicated to digitizing and preserving cultural and historical assets through modern technology.",
    goals: [
      "Ensure the digital preservation of cultural heritage.",
      "Encourage user participation in historical documentation.",
      "The Ruang Jejak application is intended for all Indonesian people. However, it is more focused on junior high school, high school and university students because they have higher potential as the nation's successors who prioritize digital technology.",
    ],
    previewImages: [preRj1Img, preRj2Img, preRj3Img],
  },
];

export default portfolioUIUXItems;

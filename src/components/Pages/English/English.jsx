import proyect1 from '../../../assets/rome.jpg'
import proyect2 from '../../../assets/venice.jpeg'
import proyect3 from '../../../assets/naples.png'
import proyect4 from '../../../assets/florence.jpg'
import { Link } from 'react-router-dom';


import logoJava from '../../../assets/roma.jpeg'
import logoJS from '../../../assets/pizza.jpg'
import logoReact from '../../../assets/venecia.jpeg'
import logoSQL from '../../../assets/florencia.jpg'
import logoMongo from '../../../assets/pompeii.jpg'
import logoNode from '../../../assets/coast.jpeg'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../NavBar/NavBar'
import { Items } from '../../items/items'
import { LogoAndMedias } from '../../LogoAndMedias/LogoAndMedias'
import { Main } from '../../Layouts/Main/Main'
import { Section } from '../../Section/Section'
import ProyectCards from '../../ProyectCards/ProyectCards'
import ReferenceBox from '../../ReferenceBox/ReferenceBox'
import ExperienceBox from '../../ExperienceBox/ExperienceBox'

const projects = [
  {
    title: "Rome ",
    description: "The capital city is famous for its ancient ruins such as the Colosseum, Roman Forum, and Pantheon, as well as the Vatican City, home to St. Peter's Basilica and the Vatican Museums.",
    imageUrl: proyect1,
    buttonUrl: " https://es.wikipedia.org/wiki/Roma"
  },
  {
    title: "Venice",
    description: "Known for its picturesque canals, Venice is a unique city built on a series of islands. Visitors come to see landmarks like St. Mark's Basilica, the Doge's Palace, and to take a gondola ride along the canals.",
    imageUrl: proyect2,
    buttonUrl: " https://es.wikipedia.org/wiki/Venecia"
  },
  {
    title: "Naples",
    description: "Known for its rich history, art, and vibrant street life, Naples is also a gateway to the nearby ruins of Pompeii and Herculaneum, as well as the stunning Amalfi Coast.",
    imageUrl: proyect3,
    buttonUrl: "https://es.wikipedia.org/wiki/N%C3%A1poles"
  },
  {
    title: "Florence",
    description: "This city is renowned for its Renaissance art and architecture, including masterpieces like Michelangelo's David and Brunelleschi's Dome. The Uffizi Gallery and the Pitti Palace are also popular attractions.",
    imageUrl: proyect4,
    buttonUrl: "https://es.wikipedia.org/wiki/Florencia"
  }
];


export const English = () => {
  return (
    <>
    <Header>
        <PictureProfile />
        <h1>
          ITALY
        </h1>
        <hr />
        <Navbar>
          <Items content="WELCOME" />
          <Items content="TO" />
          <Items content="MY" />
          <Items content="PAGE" />
        </Navbar>
        <LogoAndMedias />
        <ul>
          <li>
            <Link to="/english">English</Link>
          </li>
          <li>
            <Link to="/spanish">Spanish</Link>
          </li>
        </ul>
      </Header>
      <Main>
        <Section id='Profile' contentTitle='Introduction' >
          <p id='SectionTxt'>

            Italy is a country filled with history, art, gastronomy, and stunning landscapes that attract millions of tourists every year. From ancient Roman ruins to delicious food and high fashion, Italy offers a unique experience that you can't miss. Come and discover the beauty and charm of Italy for yourself!

          </p>
        </Section>

        <Section id='Proyects' contentTitle='Famous Cities'>
          <div className="card-container">
            {projects.map((project, index) => (
              <ProyectCards key={index} project={project} />
            ))}
          </div>
        </Section>
        <Section id='References' contentTitle='Activities and Experiences'>
          <div className="reference-container">
            <ReferenceBox
              name="Gastronomic Tours and Cooking Classes"
              position=" food is a fundamental part of the country's culture. Participating in gastronomic tours or cooking classes will allow you to experience and better understand Italy's rich culinary tradition."
              
            />
            <ReferenceBox
              name="Visits to Historical Sites"
              position="Italy is full of incredible historical sites that are essential for understanding its rich history, such as the Colosseum in Rome, the Roman Forum, St. Peter's Basilica in the Vatican, and the archaeological sites of Pompeii and Herculaneum."
             
            />
            <ReferenceBox
              name="Gondola Ride in Venice"
              position="This iconic ride through the canals of Venice is a unique experience that allows you to immerse yourself in the beauty and romantic atmosphere of this city on the water."
            
            />
          </div>
        </Section>

        <Section id='Experience' contentTitle='Touristic Places'>
          <div className="language-container">
            <ExperienceBox
              logo={logoJava}
              name="Colosseum (Colosseo) - Rome"
              
            />
            <ExperienceBox
              logo={logoReact}
              name="Venice Canals (Venice)"
            
            />
            <ExperienceBox
              logo={logoSQL}
              name="Florence Cathedral (Duomo) - Florence"
             
            />
            <ExperienceBox
              logo={logoJS}
              name="Leaning Tower of Pisa"
             
            />
            <ExperienceBox
              logo={logoMongo}
              name="Pompeii"
              
            />
            <ExperienceBox
              logo={logoNode}
              name="Amalfi Coast"
             
            />


          </div>

        </Section>
      </Main>
    
    </>
  )
}

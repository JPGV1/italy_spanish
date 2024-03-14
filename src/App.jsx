import { useState } from 'react'

import { PictureProfile } from './components/PictureProfile/PictureProfile'
import { Header } from './components/Layouts/Header/Header'
import { Navbar } from './components/NavBar/NavBar'
import { Items } from './components/items/items'
import { LogoAndMedias } from './components/LogoAndMedias/LogoAndMedias'
import { Main } from './components/Layouts/Main/Main'
import { Section } from './components/Section/Section'
import ProyectCards from './components/ProyectCards/ProyectCards'
import proyect1 from './assets/rome.jpg'
import proyect2 from './assets/venice.jpeg'
import proyect3 from './assets/naples.png'
import proyect4 from './assets/florence.jpg'
import ReferenceBox from './components/ReferenceBox/ReferenceBox'
import ExperienceBox from './components/ExperienceBox/ExperienceBox'
import logoJava from './assets/roma.jpeg'
import logoJS from './assets/pizza.jpg'
import logoReact from './assets/venecia.jpeg'
import logoSQL from './assets/florencia.jpg'
import logoMongo from './assets/pompeii.jpg'
import logoNode from './assets/coast.jpeg'

const projects = [
  {
    title: "Roma ",
    description: "La ciudad capital es famosa por sus ruinas antiguas como el Coliseo, el Foro Romano y el Panteón, así como por la Ciudad del Vaticano, hogar de la Basílica de San Pedro y los Museos Vaticanos.",
    imageUrl: proyect1,
    buttonUrl: " https://es.wikipedia.org/wiki/Roma"
  },
  {
    title: "Venecia",
    description: "Conocida por sus pintorescos canales, Venecia es una ciudad única construida sobre una serie de islas. Los visitantes vienen a ver lugares emblemáticos como la Basílica de San Marcos, el Palacio Ducal y para dar un paseo en góndola por los canales.",
    imageUrl: proyect2,
    buttonUrl: " https://es.wikipedia.org/wiki/Venecia"
  },
  {
    title: "Nápoles",
    description: "Conocida por su rica historia, arte y vibrante vida callejera, Nápoles también es una puerta de entrada a las cercanas ruinas de Pompeya y Herculano, así como a la impresionante Costa Amalfitana.",
    imageUrl: proyect3,
    buttonUrl: "https://es.wikipedia.org/wiki/N%C3%A1poles"
  },
  {
    title: "Florencia",
    description: "Esta ciudad es famosa por su arte y arquitectura renacentistas, incluyendo obras maestras como el David de Miguel Ángel y la cúpula de Brunelleschi. La Galería Uffizi y el Palacio Pitti también son atracciones populares.",
    imageUrl: proyect4,
    buttonUrl: "https://es.wikipedia.org/wiki/Florencia"
  }
];


function App() {


  return (
    <>
    <Header>
      <PictureProfile />
      <h1>
        ITALIA
      </h1>
      <hr />
      <Navbar>
        <Items content="BIENVENIDO" />
        <Items content="A" />
        <Items content="MI" />
        <Items content="PÁGINA" />
      </Navbar>
      <LogoAndMedias />
      < a id='Translate'href='https://italy-english.vercel.app/'>English</a>
    </Header> 
    <Main>
      <Section id='Profile' contentTitle='Introducción' >
        <p id='SectionTxt'>
          Italia es un país lleno de historia, arte, gastronomía y paisajes impresionantes que atraen a millones de turistas cada año. Desde las antiguas ruinas romanas hasta la deliciosa comida y la moda de alta costura, Italia ofrece una experiencia única que no te puedes perder. ¡Ven y descubre la belleza y el encanto de Italia por ti mismo!
        </p>
      </Section>

      <Section id='Proyects' contentTitle='Ciudades Famosas'>
        <div className="card-container">
          {projects.map((project, index) => (
            <ProyectCards key={index} project={project} />
          ))}
        </div>
      </Section>
      <Section id='References' contentTitle='Actividades y Experiencias'>
        <div className="reference-container">
          <ReferenceBox
            name="Tours Gastronómicos y Clases de Cocina"
            position="La comida es una parte fundamental de la cultura del país. Participar en tours gastronómicos o clases de cocina te permitirá experimentar y comprender mejor la rica tradición culinaria de Italia."
          />
          <ReferenceBox
            name="Visitas a Sitios Históricos"
            position="Italia está llena de increíbles sitios históricos que son esenciales para comprender su rica historia, como el Coliseo en Roma, el Foro Romano, la Basílica de San Pedro en el Vaticano y los sitios arqueológicos de Pompeya y Herculano."
          />
          <ReferenceBox
            name="Paseo en Góndola en Venecia"
            position="Este icónico paseo por los canales de Venecia es una experiencia única que te permite sumergirte en la belleza y la atmósfera romántica de esta ciudad sobre el agua."
          />
        </div>
      </Section>

      <Section id='Experience' contentTitle='Lugares Turísticos'>
        <div className="language-container">
          <ExperienceBox
            logo={logoJava}
            name="Coliseo (Colosseo) - Roma"
          />
          <ExperienceBox
            logo={logoReact}
            name="Canales de Venecia (Venecia)"
          />
          <ExperienceBox
            logo={logoSQL}
            name="Catedral de Florencia (Duomo) - Florencia"
          />
          <ExperienceBox
            logo={logoJS}
            name="Torre Inclinada de Pisa"
          />
          <ExperienceBox
            logo={logoMongo}
            name="Pompeya"
          />
          <ExperienceBox
            logo={logoNode}
            name="Costa Amalfitana"
          />
        </div>
      </Section>
    </Main>
    </>
  )
}

export default App

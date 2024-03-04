import { useState } from 'react'

import { PictureProfile } from './components/PictureProfile/PictureProfile'
import { Header } from './components/Layouts/Header/Header'
import { Navbar } from './components/NavBar/NavBar'
import { Items } from './components/items/items'
import { LogoAndMedias } from './components/LogoAndMedias/LogoAndMedias'
import { Main } from './components/Layouts/Main/Main'
import { Section } from './components/Section/Section'
import ProyectCards from './components/ProyectCards/ProyectCards'
import proyect1and3 from './assets/proyect1-img.png'
import proyect2 from './assets/proyect2-img.png'
import proyect4 from './assets/proyect4-img.png'
import ReferenceBox from './components/ReferenceBox/ReferenceBox'
import ExperienceBox from './components/ExperienceBox/ExperienceBox'
import logoJava from './assets/logoJava.png'
import logoJS from './assets/logoJavaScript.png'
import logoReact from './assets/logoReact.png'
import logoSQL from './assets/logoSQL.png'
import logoMongo from './assets/logoMongo.png'
import logoNode from './assets/logoNode.png'

const projects = [
  {
    title: "Proyecto 1",
    description: "Primer maquetado realizado de baja fidelidad",
    imageUrl: proyect1and3,
    buttonUrl: " https://jpgv1.github.io/ProyectoMusic/"
  },
  {
    title: "Proyecto 2",
    description: " Maquetado de baja fidelidad ",
    imageUrl: proyect1and3,
    buttonUrl: " https://jpgv1.github.io/ProyectBleux/"
  },
  {
    title: "Proyecto 3",
    description: "E-COMERCE con funcionalidades js.",
    imageUrl: proyect2,
    buttonUrl: "https://jpgv1.github.io/ProyectEternalShop/"
  },
  {
    title: "Proyecto 4",
    description: "En proceso",
    imageUrl: proyect4,
    buttonUrl: "https://portafolio-react-flame-alpha.vercel.app/"
  }
];


function App() {


  return (
    <>
      <Header>
        <PictureProfile />
        <h1>
          JUAN PABLO GARCÍA
        </h1>
        <hr />
        <Navbar>
          <Items content="Perfil" />
          <Items content="Proyectos" />
          <Items content="Referencias" />
          <Items content="Experiencia" />
        </Navbar>
        <LogoAndMedias />
      </Header>
      <Main>
        <Section id='Profile' contentTitle='Perfil' >
          <p id='SectionTxt'>
            Aprendiz SENA en la titulación Análisis y Desarrollo de Software con
            conocimientos en HTML, CSS, JavaScript, SQL Server, SQL Workbench, Java; mi punto fuerte es el Front, sin embargo me puedo desenvolver en
            otras áreas, aprendo rápido, me desenvuelvo muy bien en equipos y siempre estoy dispuesto a el
            aprendizaje, me gusta aportar ideas y debatir ideas proporcionadas con la finalidad de tomar la
            mejor decisión.En cuanto a mis preferencias profesionales he de decir que me desenvuelvo mejor con un equipo
            dispuesto a escuchar y debatir ideas, que uno en el cual cada quien haga lo suyo sin ponerse de
            acuerdo.

          </p>
        </Section>

        <Section id='Proyects' contentTitle='Proyectos'>
          <div className="card-container">
            {projects.map((project, index) => (
              <ProyectCards key={index} project={project} />
            ))}
          </div>
        </Section>
        <Section id='References' contentTitle='Referencias'>
          <div className="reference-container">
            <ReferenceBox
              name="Lucelly Villa"
              position="Ama de Casa"
              phone="3207014095"
              email="marialucellyvilla4@hotmail.com"
            />
            <ReferenceBox
              name="Juan Pablo Álvarez "
              position="Estudiante"
              phone="3197018906"
              email="juanpablogomezs@gmail.com"
            />
            <ReferenceBox
              name="Jorge Eliécer Álvarez"
              position="Electromecánico"
              phone="3243950662"
              email="jorgealvarez@gmail.com"
            />
          </div>
        </Section>

        <Section id='Experience' contentTitle='Experiencia'>
          <div className="language-container">
            <ExperienceBox
              logo={logoJava}
              name="Intermedio"
              level="65%"
            />
            <ExperienceBox
              logo={logoReact}
              name="Bases"
              level="35%"
            />
            <ExperienceBox
              logo={logoSQL}
              name="Intermedio"
              level="50%"
            />
            <ExperienceBox
              logo={logoJS}
              name="Intermedio"
              level="65%"
            />
            <ExperienceBox
              logo={logoMongo}
              name="Bases"
              level="35%"
            />
            <ExperienceBox
              logo={logoNode}
              name="Bases"
              level="20%"
            />


          </div>

        </Section>
      </Main>
    </>
  )
}

export default App

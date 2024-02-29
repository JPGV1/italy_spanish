import { useState } from 'react'

import { PictureProfile } from './components/PictureProfile/PictureProfile'
import { Header } from './components/Layouts/Header/Header'
import { Navbar } from './components/NavBar/NavBar'
import { Items } from './components/items/items'
import { LogoAndMedias } from './components/LogoAndMedias/LogoAndMedias'
import { Main } from './components/Layouts/Main/Main'
import { Perfil } from './components/Perfil/Perfil'


function App() {
 

  return (
    <>
    <Header>
    <PictureProfile/>
    <h1>
        JUAN PABLO GARCÍA 
    </h1>
    <hr />
    <Navbar>
    <Items content="Inicio"  />
        <Items content="About me" />
        <Items content="Proyects" />
        <Items content="Contacts"/>
        <Items content="References"/>
    </Navbar>
    <LogoAndMedias/>
    </Header>
    <Main>
    <Perfil/>
    </Main>
    </>
  )
}

export default App

import React from 'react'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../NavBar/NavBar'
import { Items } from '../../items/items'

export const Home = () => {
  return (
    <>
    <Header>
    <PictureProfile/>
    <h1>
        JUAN PABLO GARCÍA VILLA
    </h1>
    <Navbar>
    <Items content="Inicio"  />
        <Items content="About me" />
        <Items content="Proyects" />
        <Items content="Contacts"/>
        <Items content="References"/>
    </Navbar>
    </Header>
    
    </>
  )
}

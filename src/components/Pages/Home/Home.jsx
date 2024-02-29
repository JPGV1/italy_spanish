import React from 'react'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../NavBar/NavBar'
import { Items } from '../../items/items'
import { LogoSenaNav } from '../../itemsImg/itemsImg'
import './Home.css'
export const Home = () => {
  return (
    <>
    <Header>
    <PictureProfile/>
    <h1>
        JUAN PABLO GARCÍA 
    </h1>
    <Navbar>
    <Items content="Inicio"  />
        <Items content="About me" />
        <Items content="Proyects" />
        <Items content="Contacts"/>
        <Items content="References"/>
    </Navbar>
    
    <LogoSenaNav/>
    
    
    </Header>
    
    </>
  )
}

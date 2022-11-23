import React from 'react'
import { Footer, Header } from "../components";
import logo from '../data/homepage/img/logo-about.png'
export default function About() {
  return (
    <>
        <Header />
        <div id='content-about' className='grid grid-cols-2 justify-between mt-20 pt-40 mb-20'>
            <img src={logo} alt='logo' id='logo-about' className='ml-20'/>
            <p id='goals' className='mr-20 mt-20'>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled 
            it to make a type specimen book. It has 
            survived not only five centuries, but also 
            the leap into electronic typesetting, 
            remaining essentially unchanged. It was 
            popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum 
            passages, and more recently with desktop 
            publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
            </p>
        </div>
        <Footer />
    </>
  )
}

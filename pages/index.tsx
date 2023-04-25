import Head from 'next/head'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import { Experience } from '../components/experience/experiance'
import { Blog } from '../components/blog/blog'
import { Testimonials } from '../components/testomonial/testomonial'
import { Project } from '../components/project/project'
import { Footer } from '../components/footer/Footer'

export default function Index() {
  return (

    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>



      <Header />
      <Hero />
      <Experience/>
      <Blog/>
      <Testimonials/>
      <Project/>
      <Footer/>

  
     
           

          
       

    

     






    </>

  )
}

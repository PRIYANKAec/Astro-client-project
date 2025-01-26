"use client"
import { useEffect, useState } from 'react';
import About from '@/components/about';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Raasi from '@/components/raasi';
import Star from '@/components/star';
import Landing from '@/components/landing';

export default function Home() {

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className="flex-grow">
        <section id="home" className='scroll-mt-8 md:scroll-mt-16' >
          <Landing />
        </section>

        <section id="contact" className='scroll-mt-8 md:scroll-mt-16'>
          <Contact />
        </section>

        <section id="about" className='scroll-mt-8 md:scroll-mt-16'>
          <About />
        </section>

        <section id="star" className='scroll-mt-8 md:scroll-mt-16'>
          <Star />
        </section>

        <section id="rasi" className='scroll-mt-8 md:scroll-mt-16'>
          <Raasi />
        </section>
        
      </div>
    </div>
  );
}

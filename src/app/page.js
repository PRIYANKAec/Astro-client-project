"use client"
import { useEffect, useState } from 'react';
import About from '@/components/about';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Raasi from '@/components/raasi';
import Star from '@/components/star';

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className="flex-grow"> 
        <section id="home" style={{ paddingTop: `${navbarHeight}px` }} className="min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold">Home</h1>
          <p>Welcome to the home section.</p>
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

        <section id="contact" className='scroll-mt-8 md:scroll-mt-16'>
          <Contact />
        </section>
      </div>
    </div>
  );
}

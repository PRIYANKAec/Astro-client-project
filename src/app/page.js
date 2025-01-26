import About from '@/components/about';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Raasi from '@/components/raasi';
import Star from '@/components/star';

export default function Home() {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="pt-20"> 
        <section id="home" className="min-h-screen bg-gray-100 pt-20">
          <h1 className="text-4xl font-bold">Home</h1>
          <p>Welcome to the home section.</p>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="star">
          <Star />
        </section>

        <section id="rasi">
          <Raasi />
        </section>

        <section id="contact" className="min-h-screen p-8 bg-gray-500 pt-20">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p>Get in touch with us.</p>
        </section>
      </div>
    </div>
  );
}

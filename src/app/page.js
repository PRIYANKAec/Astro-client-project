import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className='w-full'>
    <Navbar />
    <section id="home" className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Home</h1>
      <p>Welcome to the home section.</p>
    </section>
    <section id="about" className="min-h-screen p-8 bg-gray-200">
      <h1 className="text-4xl font-bold">About</h1>
      <p>Learn more about us in this section.</p>
    </section>
    <section id="star" className="min-h-screen p-8 bg-gray-300">
      <h1 className="text-4xl font-bold">Star</h1>
      <p>Information about stars.</p>
    </section>
    <section id="rasi" className="min-h-screen p-8 bg-gray-400">
      <h1 className="text-4xl font-bold">Rasi</h1>
      <p>Information about rasis.</p>
    </section>
    <section id="contact" className="min-h-screen p-8 bg-gray-500">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p>Get in touch with us.</p>
    </section>
  </div>
  );
}

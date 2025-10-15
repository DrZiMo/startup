import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='relative w-full h-[500px] md:h-screen'>
      <div className='bg-primary absolute top-0 w-full h-full -z-2'></div>
      <img
        src='/images/hero_image.png'
        className='w-full h-full object-cover absolute top-0 -z-1'
      />
      <div className='flex flex-col h-full'>
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App

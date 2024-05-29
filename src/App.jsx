import Nav from './component/Nav'
import Hero from './section/Hero'
import Footer from './section/Footer'
import Services from './section/Services'
import Subuscribe from './section/Subuscribe'
import SuperQuality from './section/SuperQuality'
import SpecialOffer from './section/SpecialOffers'
import PopularProduct from './section/PopularProduct'
import CustomerReviews from './section/CustomerReviews'


const App = () => (
  <main className='relative'>

    <Nav />

    <section className='xl:padding-l wide:padding-l padding-b'>
      <Hero />
    </section>

    <section className='padding'>
      <PopularProduct />
    </section>

    <section className='padding'>
      <SuperQuality />
    </section>

    <section className='padding-x py-10'>
      <Services />
    </section>

    <section className='padding'>
      <SpecialOffer />
    </section>

    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>

    <section className='padding-x sm:py-32 w-full'>
      <Subuscribe /> 
    </section>

    <section className='padding-x bg-black padding-t pb-8 '>
      <Footer />
    </section>

  </main>
)

export default App
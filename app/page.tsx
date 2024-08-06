import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Testimonials from './components/Testimonials/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Ourteam />
      {/* <Featured /> */}
      <Testimonials />
      <Insta />
    </main>
  )
}

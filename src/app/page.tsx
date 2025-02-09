import Title from './title';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Title />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

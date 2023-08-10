import './App.css';
import { Banner } from './Components/Banner/Banner';
import { CardWrapper } from './Components/CardWrapper/CardWrapper';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { SectionCards } from './Components/SectionCards/SectionCards';
import { Servis } from './Components/Servis/Servis';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardWrapper />
      <SectionCards />
      <Servis />
      <Footer />
    </>
  );
}

export default App;

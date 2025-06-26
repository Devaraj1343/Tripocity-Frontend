import home from '../assets/home.jpg'; 
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <img src={home} alt="Fruit" width={"100%"} height={"100%"}  />
      <Footer/>
    </>
  );
}

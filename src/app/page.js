import AboutMe from "@/components/AboutMeFolder/AboutMe/AboutMe";
import Footer from "@/components/FooterFiles/Footer/Footer";
import Hero from "@/components/HeroFiles/Hero/Hero";
import Navbar from "@/components/NavbarFiles/Navbar/Navbar";
import CardGrid from "@/components/UI/CardGrid/CardGrid";



export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <CardGrid kind="Internship"></CardGrid>
        <Footer></Footer>
    </>

  );
}

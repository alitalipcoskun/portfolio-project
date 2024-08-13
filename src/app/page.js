"use client"
import AboutMe from "@/components/AboutMeFolder/AboutMe/AboutMe";
import Footer from "@/components/FooterFiles/Footer/Footer";
import Hero from "@/components/HeroFiles/Hero/Hero";
import Navbar from "@/components/NavbarFiles/Navbar/Navbar";
import ExpCarousel from "@/components/UI/ExpCarousel/ExpCarousel";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";









export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('portfolio-db-internships')
                .select('*')
            if (error) {
                console.log(error)
            } else {
                const renderedData = data.map((element) => {
                    if (element['description'].length > 100) {
                        let displayedContent = "";
                        for (let i = 0; i <= 100; i++) {
                            displayedContent += element['description'][i];
                        }
                        return {
                            ...element,
                            displayed_description: displayedContent,
                            content_len: element['description'].length
                        }
                    } else {
                        return {
                            ...element,
                            content_len: element['description'].length,
                            displayed_description: element['description']
                        }
                    }
                })

                setData(renderedData);
            }

        }
        fetchData();
    }, []);


    console.log(data);
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            {/*<CardGrid kind="Internship"></CardGrid>*/}
            <ExpCarousel kind={"Internship"} data={data} />
            <Footer></Footer>
        </>

    );
}

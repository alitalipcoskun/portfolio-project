"use client"
import AboutMe from "@/components/AboutMeFiles/AboutMe";
import Footer from "@/components/FooterFiles/Footer";
import Hero from "@/components/HeroFiles/Hero";
import Navbar from "@/components/NavbarFiles/Navbar";
import ExpCarousel from "@/components/UI/ExpCarousel";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Experience from "@/components/ExperiencesFiles/Experience";









export default function Home() {
    const [data, setData] = useState({internships: [], about: []});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInternshipData = async () => {
            let { data, error } = await supabase
                .from('portfolio-db-internships')
                .select('*')
                .order('created_at', { ascending: true });
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

                setData((prev) => {return {...prev, internships: renderedData}});
            }
        }
        const fetchAboutData = async () => {

            let { data, error } = await supabase
            .from('portfolio-db-about')
            .select('*')
            if (error){
                console.log(error)
            }else{
                setData((prev) => {return {...prev, about: data}})
            }

    }


        fetchInternshipData();
        fetchAboutData();
    const timer = setTimeout(() => {
        setLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
}, []);


return (
    <>
        <Navbar></Navbar>
        <Hero isLoading={isLoading}></Hero>
        <AboutMe isLoading={isLoading} data={data['about']}></AboutMe>
        <Experience data={data['internships']}></Experience>
        <Experience data={data['internships']}></Experience>
        {/*<CardGrid kind="Internship"></CardGrid>*/}
        <Footer></Footer>
    </>

);
}

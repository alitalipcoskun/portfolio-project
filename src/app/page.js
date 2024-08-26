"use client"
import AboutMe from "@/components/AboutMeFiles/AboutMe";
import Footer from "@/components/FooterFiles/Footer";
import Hero from "@/components/HeroFiles/Hero";
import Navbar from "@/components/NavbarFiles/Navbar";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Experience from "@/components/ExperiencesFiles/Experience";
import Projects from "@/components/ProjectsFiles/Projects";
import Link from "next/link";
import ContactPage from "@/components/ContactFiles/ContactPage";







const projectItems = [{ src: "/me.jpg", title: "title", description: "description for the temporary purposes", badges: ["React", "Git", "Next.js"] },
{ src: "/me.jpg", title: "title", description: "description for the temporary purposes", badges: ["React", "Git", "Next.js"] },
{ src: "/me.jpg", title: "title", description: "description for the temporary purposes", badges: ["React", "Git", "Next.js"] },
{ src: "/me.jpg", title: "title", description: "description for the temporary purposes", badges: ["React", "Git", "Next.js"] },
{ src: "/me.jpg", title: "title", description: "description for the temporary purposes", badges: ["React", "Git", "Next.js"] },
]


export default function Home() {
    const [data, setData] = useState({ internships: [], about: [], projects: [], error: false });
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInternshipData = async () => {
            let { data, error } = await supabase
                .from('portfolio-db-internships')
                .select('*')
                .order('id', { ascending: true });
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

                setData((prev) => { return { ...prev, internships: renderedData } });
            }
        }
        const fetchAboutData = async () => {
            let { data, error } = await supabase
                .from('portfolio-db-about')
                .select('*')
            if (error) {
                setData((prev) => { return { ...prev, error: true } })
            } else {
                setData((prev) => { return { ...prev, about: data } })
            }

        }
        const fetchProjectData = async () => {
            let { data, error } = await supabase
                .from('portfolio-db-projects')
                .select('*')
            if (error) {
                setData((prev) => { return { ...prev, error: true } })
            } else {
                setData((prev) => { return { ...prev, projects: data } })
            }

        }


        fetchInternshipData();
        fetchAboutData();
        fetchProjectData();
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Navbar></Navbar>
            {data.error ? (<div className="flex items-center justify-center h-[100vh]"><h1>There is an error occured...<br />{<Link href="/" className="text-blue-600" onClick={() => {
                location.reload()
            }}>{" Click here to refresh the page or try again later..."} </Link>}</h1></div>) : (
                <>
                    <Hero isLoading={isLoading}></Hero>
                    <AboutMe isLoading={isLoading} data={data['about']}></AboutMe>
                    <Experience internshipData={data['internships']} isLoading={isLoading}></Experience>
                    <Projects isLoading={isLoading} items={data["projects"]}></Projects>
                </>
            )}
            <ContactPage isLoading={isLoading}></ContactPage>
            <Footer></Footer>
        </>

    );
}

"use client"
// import Image from "next/image";
// import {Demo} from "../components/customComponents/Hero/IndiaMap"
import Hero from "@/components/customComponents/Hero/Hero";
import TechStack from "@/components/customComponents/Technology/Technology";
import {TopLeaders} from "@/components/customComponents/TopLeaders/TopLeaders";
import {LeftRightAlumniCarousel} from "@/components/customComponents/CompaniesCarousel/CompaniesCarousel";
import Projets from "@/components/customComponents/Projects/Project";
import {OutCome}  from "@/components/customComponents/OutCome/OutCome";
import VideoTestimonials from "@/components/customComponents/Testimonials/VideoTestimonials";
import FactAndFiqure from "@/components/customComponents/FactAndFigures/FactAndFiqure";
import Awards from "@/components/customComponents/Awards/Awards";
export default function Home() {
  return (
    <div >
<Hero></Hero>
<TechStack/>
<TopLeaders/>
<LeftRightAlumniCarousel/>
<Projets/>
<VideoTestimonials/>
{/* <div>
<OutCome/>
</div> */}
<FactAndFiqure/>
<Awards/>

    </div>
  );
}

"use client"
// import Image from "next/image";
// import {Demo} from "../components/customComponents/Hero/IndiaMap"
import Hero from "@/components/customComponents/Hero/Hero";
import TechStack from "@/components/customComponents/Technology/Technology";
import {TopLeaders} from "@/components/customComponents/TopLeaders/TopLeaders";
import {LeftRightAlumniCarousel} from "@/components/customComponents/CompaniesCarousel/CompaniesCarousel";
// import Projets from "@/components/customComponents/Projects/Project";
import {OutCome}  from "@/components/customComponents/OutCome/OutCome";
import VideoTestimonials from "@/components/customComponents/Testimonials/VideoTestimonials";
import FactAndFiqure from "@/components/customComponents/FactAndFigures/FactAndFiqure";
import Awards from "@/components/customComponents/Awards/Awards";
import Benifits from "@/components/customComponents/Benefits/Benefits";
// import Tedx from "@/components/customComponents/Tedx/Tedx";
import Tedx2 from "@/components/customComponents/Tedx/Tedx2";
import FeatureGrid from "@/components/customComponents/Tedx/Feature"
import MediaSection from "@/components/customComponents/Media/Media";
import Mentor from "@/components/customComponents/Mentor/Mentor";
import Mentor2 from "@/components/customComponents/Mentor/Mentor2";
import Gallery from "@/components/customComponents/Gallery/Gallery"
import Blogs from "@/components/customComponents/Blogs/Blogs"
import ImageTestimonials from "@/components/customComponents/Testimonials/TestimonialsImage";
import Query from "@/components/customComponents/Query/Query";
import OutComeGallary from "@/components/customComponents/OutCome/OutComeGallary";
export default function Home() {
  return (
    <div >
<Hero></Hero>
<TechStack/>
<TopLeaders/>
<LeftRightAlumniCarousel/>
{/* <Projets/> */}
<VideoTestimonials/>
<ImageTestimonials/>
<Benifits></Benifits>
<MediaSection/>
<div>
<OutCome/>
<OutComeGallary/>
</div>
<FactAndFiqure/>
<Blogs/>
<Awards/>
{/* <Tedx/> */}
{/* <Tedx2></Tedx2> */}
{/* FeatureGrid is TedX */}
<Mentor/>
<Gallery/>

<Query/>
{/* <Mentor2/> */}
<FeatureGrid/>

    </div>
  );
}

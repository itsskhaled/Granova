"use client";

import Image from "next/image";
import PhotoFasce from "@/app/Images/sabelBlanco.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function YourFacseJSX() {
    const contanierRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    useGSAP(() => {
        const features = gsap.utils.toArray(".feature");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contanierRef.current,
                start: "top center",
                end: "+=80%",
                toggleActions: "play none none none",
            }
        });

        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        });
        tl.from(titleSplit.words, {
            y: 80,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.05 },
            ease: "power2.out"
        })
        tl.from(imageRef.current, {
            width: "0%",
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        }, "<")
        tl.from(features, {
            opacity: 0,
            filter: "blur(20px)",
            duration: 1,
            stagger: { each: 0.5 },
            ease: "power1.out"
        }, "<50%")

    })
    return (
        <section id="taste" ref={contanierRef} className="relative flex flex-col items-center w-full  py-40 bg-[#fff0e1] gap-10">
            {/* <div className="absolute top-0 left-0 w-full -translate-y-1">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-17.5 md:h-22.5 lg:h-30"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,70 C120,110 240,30 360,70 C480,110 600,30 720,70 C840,110 960,30 1080,70 C1200,110 1320,30 1440,70 L1440,0 L0,0 Z"
                        fill="#792e1e"
                    />
                </svg>
            </div> */}
            <div ref={titleRef} className="text-center px-10">
                <h1 className="text-3xl md:text-5xl lg:text-7xl mb-5 font-bold ">مذاقك المفضل … بحلّة صحية جديدة</h1>
                <p className="text-2xl md:text-4xl lg:text-5xl leading-20">طعم غني ، مكونات طبيعية ، بدون إحساس بالذنب</p>
            </div>

            <div className="feature flex w-[60%] justify-start select-none">
                <h1 className="text-xs md:text-base lg:text-base bg-[#027e32] text-[#cadc29] px-4 py-2 rounded-4xl">فـطــور صــحــــي</h1>
            </div>
            <div ref={imageRef} className="w-[80%] lg:w-[80%] lg:h-125">
                <Image src={PhotoFasce} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="feature flex w-[50%] justify-end select-none">
                <h1 className="text-xs md:text-base lg:text-base bg-[#cadc29] text-[#027e32] px-4 py-2 rounded-4xl">100% مكونات طبيعية</h1>
            </div>
        </section>
    );
}
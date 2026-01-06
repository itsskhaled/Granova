"use client";

import Image from "next/image";
import martpProduction from "@/app/Images/martpProduction.jpg";
import { CheckCircle } from "@deemlol/next-icons";
import { Sparkles2 } from "@deemlol/next-icons";
import { ThumbsUp } from "@deemlol/next-icons";
import { AlertCircle } from "@deemlol/next-icons";
import { WandSparkles } from "@deemlol/next-icons";
import { marhey } from "../layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function WhyGranJSX() {
    const orderTarget = "#flavors";

    const contanierRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef([]);
    const iconsRef = useRef([]);
    const imageRef = useRef(null);
    const btnRef = useRef(null);
    useGSAP(() => {
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
        textRef.current.forEach((_, i) => {
            const textSpilt = new SplitText(textRef.current[i], {
                type: "lines",
                mask: "lines"
            })
            tl.from(iconsRef.current[i], {
                y: 80,
                opacity: 0,
                duration: 0.2,
                stagger: { each: 0.02 },
                ease: "power2.out"
            })
            tl.from(textSpilt.lines, {
                y: 80,
                opacity: 0,
                duration: 0.2,
                stagger: { each: 0.02 },
                ease: "power2.out"
            }, "<")
        });
        tl.from(btnRef.current, {
            y: 80,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
    })
    const handleScroll = (target) => {
    gsap.to(window, {
      scrollTo: target,
      duration: 1,
      ease: "power2.out"
    })
  }
    return (
        // bg-[#f0bcd4]
        <section id="why" ref={contanierRef} className="w-full py-30 px-10 md:px-20 lg:px-30 relative bg-[#ffffff] z-10">
            <div className="absolute top-0 left-0 w-full -translate-y-1">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-17.5 md:h-22.5 lg:h-30"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,70 C120,110 240,30 360,70 C480,110 600,30 720,70 C840,110 960,30 1080,70 C1200,110 1320,30 1440,70 L1440,0 L0,0 Z"
                        fill="#fec338"
                    />
                </svg>
            </div>
            <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl text-[#792e1e] font-bold lg:pt-40 leading-27">لماذا تختار جرانوفا؟</h1>
            <div className="flex w-full flex-col lg:flex-row lg:justify-between items-end lg:items-start gap-10">
                <div className="my-30 w-full lg:w-auto text-right">
                    {WhyGran.map((item, i) => (
                        <div key={item.id} className="flex items-center justify-start my-5 gap-2">
                            <p ref={(el) => iconsRef.current[i] = el}>{item.icon}</p>
                            <p ref={(el) => textRef.current[i] = el} className="text-2xl md:text-3xl lg:text-4xl text-[#792e1e]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                    <button ref={btnRef} className={`${marhey.className} bg-[#792e1e] text-[#ffbe39] px-6 py-3 rounded-2xl cursor-pointer mt-15 text-2xs md:text-base`} onClick={() => handleScroll(orderTarget)}>
                        إطلب الآن
                    </button>
                </div>

                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <div ref={imageRef} className="w-80 sm:w-96 md:w-md lg:w-152 h-80 sm:h-96 md:h-112 lg:h-152">
                        <Image src={martpProduction} alt="martp Production" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const WhyGran = [
    { id: 1, text: "مكونات طبيعية 100%", icon: <CheckCircle size={24} color="#792e1e" /> },
    { id: 2, text: "طعم غني ومشبّع", icon: <Sparkles2 size={24} color="#792e1e" /> },
    { id: 3, text: "صحي للفطور أو سناك", icon: <ThumbsUp size={24} color="#792e1e" /> },
    { id: 4, text: "بدون مواد حافظة وسكر", icon: <AlertCircle size={24} color="#792e1e" /> },
    { id: 5, text: "تحضير منزلي بجودة عالية", icon: <WandSparkles size={24} color="#792e1e" /> },
];
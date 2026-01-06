"use client";

import { marhey } from "../layout";
import towfiquBarbhuiya from "@/app/Images/towfiquBarbhuiya.jpg";
import caproche from "@/app/Images/caproche.jpg";
import realName from "@/app/Images/realName.jpg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import WhatsAppButton from "./buildWhatsAppLink";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function TypesJSX() {
    const PHONE = "971507559159";
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=80%",
                toggleActions: "play none none none",
            }
        })
        const titles = gsap.utils.toArray(".title");
        const titlesSplit = new SplitText(titles, {
            type: "words",
            mask: "words"
        });
        tl.from(titlesSplit.words, {
            y: 80,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.05 },
            ease: "power2.out"
        })
        cardsRef.current.forEach((_, i) => {
            tl.from(cardsRef.current[i], {
                y: 50,
                opacity: 0,
                duration: 0.5,
                stagger: { each: 0.05, from: "center" },
                ease: "power3.out"
            })
        })
    })
    return (
        <section id="flavors" ref={containerRef} className="relative flex flex-col items-center w-full px-10 py-30 bg-[#fec338]">
            <div className="absolute top-0 left-0 w-full -translate-y-1">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-17.5 md:h-22.5 lg:h-30"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,70 C120,110 240,30 360,70 C480,110 600,30 720,70 C840,110 960,30 1080,70 C1200,110 1320,30 1440,70 L1440,0 L0,0 Z"
                        fill="#fff0e1"
                    />
                </svg>
            </div>
            <h1 className="title text-4xl md:text-4xl lg:text-7xl mb-10 text-[#792e1e] font-bold text-center lg:pt-50">أنـــواع الجـــــرانـــولا لـديـنــــا</h1>
            <h1 className="title text-4xl md:text-4xl lg:text-7xl mb-10 text-[#792e1e] font-bold text-center">جــودة عالـية وطبيعيــة</h1>
            <div className="flex-row md:flex lg:flex gap-5 flex-wrap">
                {Types.map((type, i) => {
                    return (
                        <div ref={(card) => cardsRef.current[i] = card} key={i} className="w-80 md:w-100 lg:w-100 h-165 bg-[#792e1e] rounded-xl px-5 pt-5 text-center my-10">
                            <div className="w-full h-70">
                                <Image src={type.image} alt={type.name} className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <h1 className="text-white text-4xl my-5 text-center">{type.name}</h1>
                            <h2 className="text-center my-5 text-white">المكونــــات</h2>
                            <p className="text-center text-white">{type.theComponents}</p>
                            <WhatsAppButton
                                phone={PHONE}
                                label="إطلـــــــب الآن"
                                message={`مرحباً 👋🏻
                                بدي أطلب: ${type.name}
                                رقم الجوال ___ الايميل ___
                                الكمية: ___ العنوان: ___`}
                                className={`cursor-pointer inline-flex items-center gap-3
                                        text-[#792e1e] bg-[#ffbe39]
                                        font-bold px-4 py-4 rounded-xl my-10
                                ${marhey.className}`}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

const Types = [
    { id: 1, name: "جرانولا ســـــــادة", theComponents: "شوفــــان حبة كاملة - عســـل طبيعي - قرفة - بذور اليقطيــــن - لــــوز - كــــاجو - جـــوز - زيت جوز الهنــــد", image: towfiquBarbhuiya },
    { id: 2, name: "جرانولا مع التوت البري", theComponents: "شوفان حبة كاملة - عسل طبيعي - قرفـــــة - بذور اليقطين - لوز - كاجو - جوز - زيت جوز الهند - التوت البري الطبيعي", image: caproche },
    { id: 3, name: "جرانولا الشوكولا", theComponents: "شوفان حبة كاملة - عسل طبيعي - قرفة - بذور اليقطين - لوز - كاجو - جوز - زيت جوز الهند - قطع شوكولا بالحليب", image: realName },
];
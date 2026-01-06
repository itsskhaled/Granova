"use client";

import Image from "next/image";
import sabel from "@/app/Images/sabel.png";
import { marhey } from "../layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);
export default function HeroJSX() {

    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        })
        const subTitleSplit = new SplitText(subTitleRef.current, {
            type: "lines",
            mask: "lines"
        });
        tl.from(titleSplit.words, {
            y: 100,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            ease: "power2.out"
        })
        tl.from(imageRef.current, {
            rotate: 360,
            x: 500,
            opacity: 0,
            duration:5,
            ease:"elastic.out"
        })
        const features = gsap.utils.toArray(".featur");
        tl.from(features, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            stagger: { each: 0.04 }
        },"<")
        tl.from(subTitleSplit.lines, {
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.1 },
            ease: "power2.out",
            rotateY: 180
        }, "<")

    })
    return (
        // bg-[#792e1e]
        <section id="home" className="sticky top-0 overflow-hidden w-full flex flex-col justify-center items-center h-screen ">
            <h1 ref={titleRef} className={`${marhey.className} text-6xl sm:text-6xl md:text-9xl lg:text-[20rem] text-[#ffbe39] font-bold select-none`}>لــــــــذيــــذ</h1>
            <div ref={imageRef} className="absolute w-50 md:w-70 lg:w-90 h-50 md:h-70 lg:h-90 right-10 md:right-50 lg:right-100 top-50 md:top-30 lg:top-30">
                <Image src={sabel} alt="sabel" className="w-full h-full object-cover" />
            </div>
            <div ref={subTitleRef} className="text-black text-center absolute bottom-40 lg:bottom-20">
                <h1 className="subTitle text-2xl md:text-4xl lg:text-5xl">جرانوفا - طبيعية بطعم لا يقاوم</h1>
                <h2 className="subTitle text-1xl md:text-3xl lg:text-3xl">ابدأ يومك بطاقة صحية وطعم غني</h2>
                <h3 className="subTitle text-xl md:text-2xl lg:text-2xl">جرانولا جرانوفا مصنوعة بعناية من مكونات طبيعية 100%</h3>
            </div>
            <div className="featur absolute inset-0 pointer-events-none">

                <div className="absolute top-100 md:top-90 lg:top-55 right-10 md:right-25 lg:right-5 rotate-5">
                    <h1 className="font-bold text-xs md:text-base lg:text-3xl bg-[#cadc29]
                    px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-[#027e32]">
                        طـــاقــة
                    </h1>
                </div>


                <div className="featur absolute top-115 md:top-100 lg:top-120 right-20 md:right-50 lg:right-100">
                    <h1 className="font-bold text-xs md:text-base lg:text-3xl bg-[#eb1952]
                    px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-white">
                        بــدون ســكـر مُكــرر
                    </h1>
                </div>

                {/* بدون مواد حافظة */}
                <div className="featur absolute top-120 md:top-120 lg:top-100 left-10 md:left-25 lg:left-50">
                    <h1 className="font-bold text-xs md:text-base lg:text-3xl
                        px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-[#cadc29] bg-[#027e32]">
                        بــدون مــواد حــافـظة
                    </h1>
                </div>
            </div>
        </section>
    );
}
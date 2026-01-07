"use client";

import Image from "next/image";
import sabel from "@/app/Images/sabel.png";
import { marhey } from "../layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, MotionPathPlugin, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, MotionPathPlugin);
export default function HeroJSX() {

    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const imageRef = useRef(null);
    const featureEnergyRef = useRef(null);
    const featureSugarRef = useRef(null);
    const featurePreservativesRef = useRef(null);

    const pathRef = useRef(null);

    const PATHS = {
        mobile: "M614.579,49.714 C614.579,49.714 719.369,87.074 532.373,112.86 345.301,138.61 343.923,130.003 343.923,130.003",
        tablet: "M614.579,49.714 C614.579,49.714 719.369,87.074 532.373,112.86 345.301,138.61 343.923,130.003 343.923,130.003",
        desktop: "M1242.98001,-83.321 C1242.98001,-83.321 1007.27001,145.195 820.25001,170.963 633.20701,196.722 -48.90599,101.228 -48.90599,101.228",
    };


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
            duration: 5,
            ease: "elastic.out"
        })
        const features = gsap.utils.toArray(".featur");
        tl.from(features, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            stagger: { each: 0.04 }
        }, "<")
        tl.from(subTitleSplit.lines, {
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.1 },
            ease: "power2.out",
            rotateY: 180
        }, "<")

        const placeOnPath = (el, progress) => {
            if (!el || !pathRef.current) return;
            const tween = gsap.set(el, {
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    alignOrigin: [0.5, 0.5],
                    start: progress,
                    end: progress,
                },
            });

        }

        const setPathAndReposition = (d) => {
            pathRef.current?.setAttribute("d", d);
            MotionPathPlugin.cacheRawPathMeasurements(pathRef.current, true);
            placeOnPath(featureEnergyRef.current, 0);
            placeOnPath(featureSugarRef.current, 0.5);
            placeOnPath(featurePreservativesRef.current, 1);
        }
        const mm = gsap.matchMedia();
        mm.add({
            isMobile: "(max-width: 639px)",
            isTablet: "(min-width: 640px) and (max-width: 1023px)",
            isDesktop: "(min-width: 1024px)",
        }, (context) => {
            const { isMobile, isTablet, isDesktop } = context.conditions;
            if (isMobile) setPathAndReposition(PATHS.mobile);
            if (isTablet) setPathAndReposition(PATHS.tablet);
            if (isDesktop) setPathAndReposition(PATHS.desktop);

            return () => { };
        }
        );
        return () => mm.revert();
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
            <svg xmlns="http://www.w3.org/2000/svg" width="926" height="148" fill="none" overflow="visible" className="absolute">
                <path ref={pathRef} id="energyPath" d={PATHS.desktop} fill="transparent" stroke="none">
                </path>
            </svg>
            {/* top-100 md:top-90 lg:top-55 right-10 md:right-25 lg:right-5  */}
            <div ref={featureEnergyRef} className="featur absolute rotate-5">
                <h1 className="font-bold text-xs md:text-base lg:text-3xl bg-[#cadc29]
                    px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-[#027e32]">
                    طـــاقــة
                </h1>
            </div>


            <div ref={featureSugarRef} className="featur absolute">
                <h1 className="font-bold text-xs md:text-base lg:text-3xl bg-[#eb1952]
                    px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-white">
                    بــدون ســكـر مُكــرر
                </h1>
            </div>

            <div ref={featurePreservativesRef} className="featur absolute">
                <h1 className="font-bold text-xs md:text-base lg:text-3xl
                        px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-br-xl rounded-tl-xl text-[#cadc29] bg-[#027e32]">
                    بــدون مــواد حــافـظة
                </h1>
            </div>
        </section>
    );
}
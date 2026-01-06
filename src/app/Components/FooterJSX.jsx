"use client";

import Image from "next/image";
import logo from "@/app/Images/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import WhatsAppButton from "./buildWhatsAppLink";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollToPlugin, SplitText, ScrollTrigger);
export default function FooterJSX() {
    const PHONE = "971507559159";
    const containerRef = useRef(null);

    const logoRef = useRef(null);
    const LinksRef = useRef([]);

    useGSAP(() => {
        const infomations = gsap.utils.toArray(".info");
        const calls = gsap.utils.toArray(".call");
        const infomationsSplit = new SplitText(infomations, {
            type: "lines",
            mask: "lines"
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=80%",
                toggleActions: "play none none none"
            }
        });

        tl.from(logoRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out"
        })
        tl.from(infomationsSplit.lines, {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.05 },
            ease: "power1.out"
        }, "<")
        LinksRef.current.forEach((_, i) => {
            const LinksSplit = new SplitText(LinksRef.current[i], {
                type: "lines",
                mask: "lines"
            })
            tl.from(LinksSplit.lines, {
                y: 80,
                opacity: 0,
                duration: 0.5,
                stagger: { each: 0.05 },
                ease: "power1.out"
            }, "<")
        })
        const callsSplit = new SplitText(calls, {
            type: "lines",
            mask: "lines"
        })
        tl.from(callsSplit.lines, {
            y: 80,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.05 },
            ease: "power1.out"
        }, "<50%")
    })

    const handleScroll = (target) => {
        gsap.to(window, {
            scrollTo: target,
            duration: 1,
            ease: "power2.out"
        })
    }
    return (
        <section ref={containerRef} className="w-full py-40 relative bg-[#792e1e]">
            {/* <div className="absolute top-0 left-0 w-full -translate-y-1">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-17.5 md:h-22.5 lg:h-30"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,70 C120,110 240,30 360,70 C480,110 600,30 720,70 C840,110 960,30 1080,70 C1200,110 1320,30 1440,70 L1440,0 L0,0 Z"
                        fill="#f0bcd4"
                    />
                </svg>
            </div> */}
            <div className="flex w-full justify-center items-center gap-30 md:gap-50 lg:gap-80 flex-wrap px-10">
                <div>
                    <div ref={logoRef} className="w-30 h-30 bg-white rounded-full">
                        <Image src={logo} alt="شعار" className="w-full h-full object-cover" />
                    </div>
                    <br />
                    <div>
                        <p className="info text-white">العنوان : الشارقة - الامارات العربية المتحدة </p>
                        <br />
                        <p className="info text-white">مرخص من مجمع الشارقة للبحوث والتكنولوجيا والابتكار </p>
                        <p className="info text-white">رقم الرخصة : SC242020501</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 text-white">
                    {navItems.map((item, i) => {
                        return (
                            <nav key={i}>
                                <a ref={(el) => LinksRef.current[i] = el} onClick={() => handleScroll(item.href)} className="cursor-pointer">{item.label}</a>
                            </nav>
                        );
                    })}

                </div>
                <div>
                    <div>
                        <p className="call text-white">
                            <WhatsAppButton
                                phone={PHONE}
                                label="رقم الواتساب : 00971507559159"
                                message="مرحبـــــاً متجر جرانوفــــا ...
                                أود الإستفسار عن"
                            />
                        </p>
                        <p className="call text-white"><a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=storegranova@gmail.com&su=استفسار%20عن%20جرانوفا&body=مرحباً%20جرانوفا%0A%0Aأود%20الاستفسار%20عن..."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            storegranova@gmail.com
                        </a></p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 bg-[#ffbe39] w-full">
                <p className="text-center flex justify-center py-2 text-xs md:text-base lg:text-base">© {new Date().getFullYear()} جميع الحقوق محفوظة | جرانوفا</p>
            </div>
        </section>

    );
}

const navItems = [
    { label: "الرئيسيـــــــة", href: 0 },
    { label: "مذاق جرانوفا", href: "#taste" },
    { label: "أنواع الجرانولا", href: "#flavors" },
    { label: "لماذا جرانوفا", href: "#why" },
];
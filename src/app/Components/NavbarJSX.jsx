"use client";

import Image from "next/image";
import logo from "@/app/Images/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollToPlugin);
export default function NavbarJSX() {
  const orderTarget = "#flavors";
  const [open, setOpen] = useState(false);

  const menuWrapRef = useRef(null);
  const panelRef = useRef(null);
  const linksRef = useRef([]);
  const tlRef = useRef(null);




  useEffect(() => {
    if (!open) return;

    const menuWrap = menuWrapRef.current;
    const panel = panelRef.current;
    linksRef.current = linksRef.current.filter(Boolean);

    gsap.set(menuWrap, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(panel, { xPercent: 110 });
    gsap.set(linksRef.current, { y: 16, autoAlpha: 0 });

    const tl = gsap.timeline();

    tl.to(menuWrap, {
      autoAlpha: 1,
      duration: 0.2,
      onStart: () => gsap.set(menuWrap, { pointerEvents: "auto" }),
    })
      .to(panel, { xPercent: 0, duration: 0.45, ease: "power3.out" }, 0)
      .to(
        linksRef.current,
        { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.08, ease: "power3.out" },
        0.15
      );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [open]);

  const openMenu = () => setOpen(true);
  const closeMenu = () => {
    const tl = tlRef.current;

    if (!tl) {
      setOpen(false);
      return;
    }


    tl.reverse().eventCallback("onReverseComplete", () => {
      setOpen(false);
    });
  };

  const handleScroll = (target) => {
    setOpen(false);

    gsap.to(window, {
      scrollTo: target,
      duration: 1,
      ease: "power2.out"
    })
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex w-full justify-center">
        <div className="hidden lg:flex fixed z-9999 w-[85%] items-center justify-between px-10 h-20 bg-white mt-3 rounded-2xl shadow-xl">
          <div className="w-35 h-35">
            <Image src={logo} alt="الشعار" className="w-full h-full object-cover" />
          </div>

          <nav className="flex gap-20">
            {navItems.map((item, i) => (
              <a key={i}
                onClick={() => handleScroll(item.href)} className="cursor-pointer">{item.label}</a>
            ))}
          </nav>

          <button className="cursor-pointer bg-[#ffbe39] px-4 py-2 rounded-xl" onClick={() => handleScroll(orderTarget)}>
            إطلب الآن
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-9999">
        <div className="mx-auto mt-3 w-[92%] h-16 bg-white rounded-2xl shadow-xl px-4 flex items-center justify-between">
          <div className="w-25 h-25">
            <Image src={logo} alt="الشعار" className="w-full h-full object-contain" />
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#ffbe39] px-3 py-2 rounded-xl text-sm" onClick={() => handleScroll(orderTarget)}>
              اطلب الآن
            </button>

            <button
              aria-label="Open menu"
              onClick={openMenu}
              className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center"
            >
              <span className="block w-5">
                <span className="block h-0.5 bg-black mb-1"></span>
                <span className="block h-0.5 bg-black mb-1"></span>
                <span className="block h-0.5 bg-black"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          ref={menuWrapRef}
          className="fixed inset-0 z-99999 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <div
            ref={panelRef}
            className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-25 h-25">
                <Image src={logo} alt="الشعار" className="w-full h-full object-contain" />
              </div>

              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg text-right">
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  ref={(el) => (linksRef.current[idx] = el)}
                  onClick={() => handleScroll(item.href)}
                  className="py-3 px-3 rounded-xl hover:bg-black/5 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="mt-8 w-full bg-[#792e1e] text-[#ffbe39] py-3 rounded-2xl"
              onClick={() => handleScroll(orderTarget)}
            >
              اطلب الآن
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const navItems = [
  { label: "الرئيسية", href: 0 },
  { label: "مذاق جرانوفا", href: "#taste" },
  { label: "أنواع الجرانولا", href: "#flavors" },
  { label: "لماذا جرانوفا", href: "#why" },
];
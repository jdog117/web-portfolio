"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import rmHero from "@/public/regenmed/rm1.png";
import rmHero3 from "@/public/regenmed/rm4.png";
import rmHero4 from "@/public/regenmed/rm5.png";
import rmHero5 from "@/public/regenmed/figma/Regen Med.png";
import fund1 from "@/public/fund/fund1.png";
import fund2 from "@/public/fund/fund2.png";
import fund3 from "@/public/fund/fund3.png";
import fund4 from "@/public/fund/fund4.png";
import fund5 from "@/public/fund/fund5.png";

gsap.registerPlugin(useGSAP);

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Regenmed />
            <Fund />
            {/* <Emailfinder /> */}
            <Footer />
        </div>
    );
}

function Hero() {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            gsap.from(".j-title", {
                duration: 1,
                opacity: 0,
                autoAlpha: 0,
                x: "100",
                ease: "power2.inOut",
            });

            gsap.fromTo(
                ".p-title",
                { letterSpacing: "1em" },
                { letterSpacing: "0.39em", duration: 1.5, ease: "power2.inOut" }
            );
            gsap.from(".p-title", {
                duration: 2,
                opacity: 0,
                autoAlpha: 0,
                ease: "power2.inOut",
            });

            const childSplit = new SplitType(".bruh", {
                types: "lines",
                lineClass: "split-child",
            });

            gsap.from(childSplit.lines, {
                duration: 1,
                y: 100,
                ease: "power4",
                visibility: "visible",
                stagger: 0.2,
                onComplete: function () {
                    // NEED BETTER SOLUTION, causes a flicker on dev
                    if (childSplit.lines) {
                        childSplit.lines.forEach((line) => {
                            line.style.opacity = "1";
                            line.style.visibility = "visible";
                        });
                    }
                },
            });
        },
        { scope: container }
    );

    return (
        <div className="w-full h-screen items-center justify-center flex">
            <div ref={container} className="container flex flex-col relative">
                <h1 className="text-4xl text-right mr-32 mb-2 justify-end flex j-title invisible">
                    JOEY CASEY
                </h1>
                <h1 className="p-title text-9xl font-extrabold tracking-[1em] justify-center flex invisible">
                    PORTFOLIO
                </h1>
                <div className="absolute flex flex-col mt-28 font-bold text-stroke text-transparent mr-8 right-0 visible">
                    <h1 className="text-8xl bruh">DEV &</h1>
                    <h1 className="text-8xl bruh">DESIGN</h1>
                </div>
            </div>
        </div>
    );
}

function Regenmed() {
    return (
        <div className="w-full flex bg-secondary justify-between overflow-hidden">
            <div className="z-20 w-1/2">
                <h1 className="text-7xl font-bold ml-32 mt-20 tracking-widest">
                    Regen Med
                </h1>
                <h1 className="text-4xl font-bold ml-32 mt-12 text-primary">
                    01
                </h1>
                <h1 className="text-5xl font-bold ml-32 mt-20">FEATURES</h1>
                <p className="text-1xl ml-32 mt-6 text-tertiary w-1/2 text-justify">
                    Designed and developed this site for a medical startup. It
                    features a JavaScript based virtual treatement consultaion
                    along with scheduling and service information. Will be live
                    soon.
                </p>
                <div className="font-bold">
                    <p className="text-2xl ml-32 mt-12 text-tertiary">
                        Smooth scroll
                    </p>
                    <p className="text-2xl ml-32 mt-4 text-tertiary">
                        SEO optimized
                    </p>
                    <p className="text-2xl ml-32 mt-4 text-tertiary">
                        Responsive design
                    </p>
                    <p className="text-2xl ml-32 mt-4 text-tertiary">
                        Beautiful GSAP animations
                    </p>
                </div>
            </div>

            <div className="flex justify-end mt-52 mr-20">
                <div className="flex-row items-end z-20">
                    <Image
                        src={rmHero}
                        alt=""
                        width={800}
                        className="shadow-lg m-8 "
                    />
                    <Image
                        src={rmHero5}
                        alt=""
                        width={800}
                        className="shadow-lg m-8"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={rmHero3}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                        <Image
                            src={rmHero4}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                    </div>
                </div>
                <div className="absolute w-full h-[55%] m-12 mt-16 bg-[#BBA67F]"></div>
            </div>
        </div>
    );
}

function Fund() {
    return (
        <div className="w-full flex bg-background justify-between overflow-hidden mt-20">
            <div className="flex justify-end mt-52 mr-20">
                <div className="flex-row items-end z-20">
                    <Image
                        src={fund1}
                        alt=""
                        width={800}
                        className="shadow-lg m-8 "
                    />
                    <Image
                        src={fund2}
                        alt=""
                        width={800}
                        className="shadow-lg m-8"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={fund3}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                        <Image
                            src={fund4}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                    </div>
                </div>
            </div>

            <div className="z-20 w-1/2">
                <h1 className="text-7xl font-bold ml-32 mt-20 tracking-widest">
                    1571 Fund
                </h1>
                <h1 className="text-4xl font-bold ml-32 mt-12 text-primary">
                    02
                </h1>
                <h1 className="text-5xl font-bold ml-32 mt-20">FEATURES</h1>
                <p className="text-1xl ml-32 mt-6 text-tertiary w-1/2 text-justify">
                    Started in figma colaborating with the team to concept the
                    design of the site. Then developed it as a single page Vite
                    app whith a contact form.
                </p>
                <div className="font-bold">
                    <p className="text-2xl ml-32 mt-12 text-tertiary">
                        SEO optimized
                    </p>
                    <p className="text-2xl ml-32 mt-4 text-tertiary">
                        Contact form
                    </p>
                    <p className="text-2xl ml-32 mt-4 text-tertiary">
                        Responsive design
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-[55%] m-12 mt-64 bg-[#cc9a83]"></div>
        </div>
    );
}

function Emailfinder() {
    return (
        <div className="w-full h-screen items-center justify-center flex bg-secondary"></div>
    );
}

function Footer() {
    return (
        <div className="w-full flex bg-secondary justify-between mt-20 p-20 items-center">
            <div className="flex-row">
                <h1 className="text-lg font-bold"> Contact</h1>
                <p className="mt-4 text-base">jspcasey@gmail.com</p>
                <p className="mt-2 text-base">5092184707</p>
            </div>
            <p className="text-sm text-neutral-700">
                © Joey Casey {new Date().getFullYear()}
            </p>
        </div>
    );
}

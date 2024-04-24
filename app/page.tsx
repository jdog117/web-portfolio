"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import rmHero from "@/public/regenmed/rm1.png";
import rmHero2 from "@/public/regenmed/rm3.png";
import rmHero3 from "@/public/regenmed/rm4.png";
import rmHero4 from "@/public/regenmed/rm5.png";

gsap.registerPlugin(useGSAP);

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Regenmed />
            <Fund />
            <Emailfinder />
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
        <div className="w-full flex bg-secondary justify-between">
            <div>
                <h1 className="text-7xl font-bold ml-32 mt-20 tracking-widest">
                    Regen Med
                </h1>
                <h1 className="text-4xl font-bold ml-32 mt-12 text-primary z-20">
                    01
                </h1>
            </div>

            <div className="flex justify-end">
                <div className="flex-row items-end z-20">
                    <Image
                        src={rmHero}
                        alt=""
                        width={800}
                        className="shadow-lg m-8 "
                    />
                    <Image
                        src={rmHero2}
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
                <div className="absolute w-full h-full m-12 mt-72 bg-blue-400"></div>
            </div>

            {/* Features: smooth scroll, juicy animationsm, responsive design */}
        </div>
    );
}

function Fund() {
    return (
        <div className="w-full h-screen items-center justify-center flex bg-background"></div>
    );
}

function Emailfinder() {
    return (
        <div className="w-full h-screen items-center justify-center flex bg-secondary"></div>
    );
}

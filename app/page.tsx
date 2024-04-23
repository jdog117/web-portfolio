"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
    return (
        <>
            <Hero />
            <Regenmed />
            <Fund />
            <Emailfinder />
        </>
    );
}

function Hero() {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            gsap.fromTo(
                ".p-title",
                { letterSpacing: "1em" },
                { letterSpacing: "0.39em", duration: 1.5, ease: "power2.inOut" }
            );
        },
        { scope: container }
    );

    return (
        <div className="w-full h-screen items-center justify-center flex">
            <div ref={container} className="container flex flex-col relative">
                <h1 className="text-4xl text-right mr-32 mb-2 justify-end flex">
                    JOEY CASEY
                </h1>
                <h1 className="p-title text-9xl font-extrabold tracking-[1em] justify-center flex">
                    PORTFOLIO
                </h1>
                <div className="absolute flex flex-col mt-28 font-bold text-stroke text-transparent mr-8 right-0">
                    <h1 className="text-8xl">DEV</h1>
                    <h1 className="text-8xl">DESIGN</h1>
                </div>
            </div>
        </div>
    );
}

function Regenmed() {
    return (
        <div className="w-full h-screen items-center justify-center flex bg-secondary"></div>
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

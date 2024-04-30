"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import rmHero from "@/public/regenmed/rmheronew.png";
import rmTeam from "@/public/regenmed/rmTeam.png";
import rmFAQ from "@/public/regenmed/rmfaq.png";
import rmServices from "@/public/regenmed/figma/rmservices.png";
import fund1 from "@/public/fund/fund1.png";
import fund2 from "@/public/fund/fund2.png";
import fund3 from "@/public/fund/fund3.png";
import fund4 from "@/public/fund/fund4.png";
import fund5 from "@/public/fund/fund5.png";
import bef1 from "@/public/emailfinder/ef1.png";
import bef2 from "@/public/emailfinder/ef2.png";
import bef3 from "@/public/emailfinder/email-finder-base.png";
import bef4 from "@/public/emailfinder/email-finder-example2.png";
import bef5 from "@/public/emailfinder/site-bigger2.png";
import rmPC from "@/public/regenmed/rm_pc1.png";

gsap.registerPlugin(useGSAP);

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Regenmed />
            {/* <Fund />
            <Emailfinder />
            <Footer /> */}
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
            <div
                ref={container}
                className="container flex flex-col relative w-min"
            >
                <h1 className="text-3xl xl:text-4xl ml-10 md:ml-0 text-left md:text-right mr-8 xl:mr-12 mb-2 justify-end flex j-title invisible">
                    JOEY CASEY
                </h1>
                <h1 className="p-title text-7xl xl:text-9xl font-extrabold tracking-[1em] flex flex-col space-y-2 md:flex-row md:space-y-0 justify-center text-center invisible">
                    {Array.from("PORTFOLIO").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </h1>
                <div className="absolute flex flex-col mt-20 xl:mt-28 font-bold text-stroke text-transparent md:translate-x-0 translate-x-16 md:translate-y-0 translate-y-[670px] md:mr-0 xl:-mr-16 right-0 visible ">
                    <h1 className="text-5xl xl:text-8xl bruh">DEV &</h1>
                    <h1 className="text-5xl xl:text-8xl bruh">DESIGN</h1>
                </div>
            </div>
        </div>
    );
}

function Regenmed() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-secondary justify-between max-lg:items-center pb-28 m-4 md:m-20 mt-20 p-4 md:pl-20">
                <div className="basis-3/4">
                    <h1 className="max-sm:text-4xl max-[1600px]:text-7xl text-8xl font-bold mt-10 md:mt-20 tracking-widest">
                        Regen Med
                    </h1>
                    <h1 className="max-sm:text-3xl max-[1600px]:text-5xl text-6xl font-bold mt-6 md:mt-12 text-primary">
                        01
                    </h1>
                    <div className="max-w-[30rem]">
                        <h1 className="max-sm:text-3xl max-[1600px]:text-4xl text-5xl font-bol mt-10 md:mt-20">
                            FEATURES
                        </h1>
                        <p className="text-1xl mt-6 text-tertiary text-justify">
                            Designed and developed this site for a medical
                            startup. It features a JavaScript based virtual
                            treatement consultaion along with scheduling and
                            service information. Will be live soon.
                        </p>
                    </div>
                    <div className="font-bold">
                        <h1 className="text-2xl mt-12 text-tertiary">
                            Smooth scroll
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            SEO optimized
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            Responsive design
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            Beautiful GSAP animations
                        </h1>
                    </div>
                </div>
                <div className="w-2/3">
                    <Image
                        src={rmPC}
                        alt=""
                        className="lg:-translate-y-52 lg:-translate-x-10 translate-y-28 max-lg:scale-150"
                    ></Image>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 m-28 translate-y-[-32rem]">
                {/* <Image src={rmHero} alt="" className="shadow-lg w-full" /> */}
                <div></div>
                <Image src={rmTeam} alt="" className="shadow-lg w-full" />

                <Image src={rmFAQ} alt="" className="shadow-lg w-full" />
                <Image src={rmServices} alt="" className="shadow-lg w-full" />
            </div>
        </>
    );
}

function Fund() {
    return (
        <div className="w-full flex bg-background justify-between overflow-hidden mt-20 pb-20">
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
                <a href="https://1571fund.com">
                    <h1 className="text-7xl font-bold ml-32 mt-20 tracking-widest scale-100 hover:scale-105 transition-all">
                        1571 Fund
                    </h1>
                </a>
                <h1 className="text-4xl font-bold ml-32 mt-12 text-primary">
                    02
                </h1>
                <h1 className="text-5xl font-bold ml-32 mt-20">FEATURES</h1>
                <p className="text-1xl ml-32 mt-6 text-tertiary w-1/2 text-justify">
                    Started in figma colaborating with the team to concept the
                    design of the site. Then developed it as a single page SEO
                    optimized Vite app with a contact form.
                </p>
                <div className="font-bold">
                    <h1 className="text-2xl ml-32 mt-12 text-tertiary">
                        SEO optimized
                    </h1>
                    <h1 className="text-2xl ml-32 mt-4 text-tertiary">
                        Contact form
                    </h1>
                    <h1 className="text-2xl ml-32 mt-4 text-tertiary">
                        Responsive design
                    </h1>
                </div>
            </div>
        </div>
    );
}

function Emailfinder() {
    return (
        <div className="w-full flex bg-secondary justify-between overflow-hidden pb-20">
            <div className="z-20 w-1/2">
                <a href="https://emailfinder-jc.vercel.app">
                    <h1 className="text-7xl font-bold ml-32 mt-20 tracking-widest scale-100 hover:scale-105 transition-all">
                        Email Finder
                    </h1>
                </a>
                <h1 className="text-4xl font-bold ml-32 mt-12 text-primary">
                    03
                </h1>
                <h1 className="text-5xl font-bold ml-32 mt-20">FEATURES</h1>
                <p className="text-1xl ml-32 mt-6 text-tertiary w-1/2 text-justify">
                    I created this site to aid me on my job search. Often, when
                    I need to contact a recruiter or an employee at a company
                    I&apos;m looking to apply to, it&apos;s difficult to get
                    their contact info or even reach them on LinkedIn.
                </p>
                <div className="font-bold">
                    <h1 className="text-2xl ml-32 mt-12 text-tertiary">
                        Custom secure server
                    </h1>
                    <h1 className="text-2xl ml-32 mt-4 text-tertiary">
                        Color themes
                    </h1>
                    <h1 className="text-2xl ml-32 mt-4 text-tertiary">
                        Responsive design
                    </h1>
                    <h1 className="text-2xl ml-32 mt-4 text-tertiary">
                        Input response & validation
                    </h1>
                </div>
            </div>

            <div className="flex justify-end mt-52 mr-20">
                <div className="flex-row items-end z-20">
                    <Image
                        src={bef2}
                        alt=""
                        width={800}
                        className="shadow-lg m-8 "
                    />
                    <Image
                        src={bef1}
                        alt=""
                        width={800}
                        className="shadow-lg m-8"
                    />
                    <Image
                        src={bef4}
                        alt=""
                        width={800}
                        className="shadow-lg m-8"
                    />
                    <Image
                        src={bef3}
                        alt=""
                        width={800}
                        className="shadow-lg m-8"
                    />
                    {/* <div className="flex flex-row">
                        <Image
                            src={bef3}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                        <Image
                            src={bef1}
                            alt=""
                            width={400}
                            className="shadow-lg m-4"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="w-full flex bg-background justify-between mt-20 p-20 items-center">
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

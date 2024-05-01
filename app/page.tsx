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
import fundContact from "@/public/fund/fundContact.png";
import fundEnd from "@/public/fund/fundEnd.png";
import fundLong from "@/public/fund/fundLong.png";
import fundMission from "@/public/fund/fundMission.png";
import fundPC from "@/public/fund/fundPc.png";
import fundTeam from "@/public/fund/fundTeam.png";
import fundVision from "@/public/fund/fundVision.png";
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
        <div className="w-full h-screen items-center justify-center flex mb-40">
            <div
                ref={container}
                className="container flex flex-col relative w-min"
            >
                <h1 className="text-3xl xl:text-4xl ml-10 md:ml-0 text-left md:text-right mr-8 xl:mr-12 mb-2 justify-end flex j-title invisible">
                    JOEY CASEY
                </h1>
                <h1 className="p-title max-sm:text-4xl text-6xl xl:text-9xl font-extrabold tracking-[1em] flex flex-col space-y-2 md:flex-row md:space-y-0 justify-center text-center invisible">
                    {Array.from("PORTFOLIO").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </h1>
                <div className="absolute flex flex-col mt-20 xl:mt-28 font-bold text-stroke text-transparent md:translate-x-0 -translate-x-16 md:translate-y-0 translate-y-[570px] max-sm:translate-y-[400px] md:mr-0 xl:-mr-16 right-0 visible">
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
            <div className="flex flex-col lg:flex-row bg-[rgb(209,191,170)] justify-between max-lg:items-center pb-28 m-4 md:m-20 p-4 md:pl-20">
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
                        className="lg:-translate-y-52 lg:-translate-x-10 translate-y-36 max-lg:scale-150"
                    ></Image>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 m-4 md:m-28 max-sm:translate-y-[-1rem] max-lg:translate-y-[1rem] translate-y-[-26rem] xl:translate-y-[-32rem] max-md:mt-20">
                <div className="hidden lg:block"></div>
                <Image src={rmTeam} alt="" className="shadow-lg w-full" />

                <Image src={rmFAQ} alt="" className="shadow-lg w-full" />
                <Image src={rmServices} alt="" className="shadow-lg w-full" />
            </div>
        </>
    );
}

function Fund() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[rgb(197,170,163)] justify-between max-lg:items-center pb-28 m-4 md:m-20 p-4 md:pl-20 mt-56">
                <div className="w-2/3">
                    <a
                        href="https://1571fund.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={fundPC}
                            alt=""
                            className="lg:-translate-y-72 lg:-translate-x-10 -translate-y-10 max-lg:scale-150"
                        ></Image>
                    </a>
                </div>

                <div className="basis-2/4">
                    <a
                        href="https://1571fund.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="max-sm:text-4xl max-[1600px]:text-7xl text-8xl font-bold mt-10 md:mt-20 tracking-widest hover:text-accent transition-all hover:scale-[102%]">
                            1571 Fund
                        </h1>
                    </a>
                    <h1 className="max-sm:text-3xl max-[1600px]:text-5xl text-6xl font-bold mt-6 md:mt-12 text-primary">
                        02
                    </h1>
                    <div className="max-w-[30rem]">
                        <h1 className="max-sm:text-3xl max-[1600px]:text-4xl text-5xl font-bol mt-10 md:mt-20">
                            FEATURES
                        </h1>
                        <p className="text-1xl mt-6 text-tertiary text-justify">
                            Started in figma colaborating with the team to
                            concept the design of the site. Then developed it as
                            a single page SEO optimized Vite app. Added css and
                            GSAP animation across site and responsive design.
                        </p>
                    </div>
                    <div className="font-bold">
                        <h1 className="text-2xl mt-12 text-tertiary">
                            Contact form
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            SEO optimized
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            Responsive design
                        </h1>
                        <h1 className="text-2xl mt-4 text-tertiary">
                            GSAP animation
                        </h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-4 m-4 md:m-28 max-sm:translate-y-[-3rem] max-lg:translate-y-[1rem] translate-y-[-26rem] xl:translate-y-[-32rem] max-md:mt-20">
                <Image src={fundVision} alt="" className="shadow-lg w-full" />
                <div className="hidden lg:block"></div>

                <Image src={fundMission} alt="" className="shadow-lg w-full" />
                <Image src={fundTeam} alt="" className="shadow-lg w-full" />
                <Image src={fundContact} alt="" className="shadow-lg w-full" />
                <Image src={fundEnd} alt="" className="shadow-lg w-full" />
                {/* <Image
                    src={fundLong}
                    alt=""
                    className="shadow-lg w-full col-span-2"
                /> */}
            </div>
        </>
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
        <div className="w-full flex-col md:flex-row flex bg-background justify-between mt-20 p-20 items-center">
            <div className="flex-row">
                <h1 className="text-lg font-bold"> Contact</h1>
                <p className="mt-4 text-base">jspcasey@gmail.com</p>
                <p className="mt-2 text-base">5092184707</p>
                <a
                    href="https://linkedin.com/in/jspcasey/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="mt-2 text-base hover:text-accent transition-all">
                        LinkedIn
                    </p>
                </a>
            </div>
            <p className="text-sm text-neutral-700 max-md:mt-10">
                © Joey Casey {new Date().getFullYear()}
            </p>
        </div>
    );
}

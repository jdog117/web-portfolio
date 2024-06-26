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
import emailAbout from "@/public/emailfinder/emailAbout.png";
import emailDark from "@/public/emailfinder/emailDarkAccepts.png";
import emailHero from "@/public/emailfinder/emailJSP.png";
import emailMobile from "@/public/emailfinder/emailMobile2.png";
import emailPC from "@/public/emailfinder/emailPC2.png";
import rmPC from "@/public/regenmed/rm_pc1.png";
import {
    Mouse,
    ArrowRightLeft,
    SearchCheck,
    Route,
    AppWindow,
    Server,
    Palette,
    ListChecks,
} from "lucide-react";
import Book from "@/components/bookMeeting";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";

gsap.registerPlugin(useGSAP);

export default function Home() {
    return (
        <div className="">
            <Book />
            <Hero />
            <Regenmed />
            <Fund />
            <Emailfinder />
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
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <div className="w-full h-screen items-start mt-10 md:mt-0 md:items-center justify-center flex mb-40">
                <div
                    ref={container}
                    className="container flex flex-col relative w-min"
                >
                    <MouseParallaxChild factorX={0.2} factorY={0.3}>
                        <h1 className="text-3xl xl:text-4xl ml-10 md:ml-0 text-left md:text-right mr-8 xl:mr-12 mb-2 justify-end flex j-title invisible">
                            JOEY CASEY
                        </h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.2}>
                        <h1 className="p-title max-sm:text-4xl text-6xl xl:text-9xl font-extrabold tracking-[1em] flex flex-col space-y-2 md:flex-row md:space-y-0 justify-center text-center invisible">
                            {Array.from("PORTFOLIO").map((letter, index) => (
                                <span key={index}>{letter}</span>
                            ))}
                        </h1>
                    </MouseParallaxChild>
                    <div className="absolute flex flex-col mt-20 xl:mt-28 font-bold text-stroke text-transparent md:translate-x-0 -translate-x-16 md:translate-y-0 translate-y-[570px] max-sm:translate-y-[400px] md:mr-0 xl:-mr-16 right-0 visible">
                        <MouseParallaxChild factorX={0.4} factorY={0.3}>
                            <h1 className="text-5xl xl:text-8xl bruh">DEV &</h1>
                            <h1 className="text-5xl xl:text-8xl bruh">
                                DESIGN
                            </h1>
                        </MouseParallaxChild>
                    </div>
                </div>
            </div>
        </MouseParallaxContainer>
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
                        <div className="font-bold flex items-center mt-12">
                            <Mouse />
                            <h1 className="text-2xl text-tertiary ml-4">
                                Smooth scroll
                            </h1>
                        </div>

                        <div className="font-bold flex items-center mt-4">
                            <SearchCheck />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                SEO optimized
                            </h1>
                        </div>

                        <div className="font-bold flex items-center mt-4">
                            <ArrowRightLeft />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Responsive design
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <Route />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                GSAP animations
                            </h1>
                        </div>
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
                        <div className="font-bold flex items-center mt-12">
                            <AppWindow />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Contact form
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <SearchCheck />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                SEO optimized
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <ArrowRightLeft />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Responsive design
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <Route />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                GSAP animations
                            </h1>
                        </div>
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
            </div>
        </>
    );
}

function Emailfinder() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[rgb(216,216,216)] justify-between max-lg:items-center pb-28 m-4 md:m-20 p-4 md:pl-20 ">
                <div className="basis-3/4">
                    <a
                        href="https://emailfinder-jc.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="max-sm:text-4xl max-[1600px]:text-7xl text-8xl font-bold mt-10 md:mt-20 tracking-widest hover:text-accent transition-all hover:scale-[102%]">
                            Email Finder
                        </h1>
                    </a>
                    <h1 className="max-sm:text-3xl max-[1600px]:text-5xl text-6xl font-bold mt-6 md:mt-12 text-primary">
                        03
                    </h1>
                    <div className="max-w-[30rem]">
                        <h1 className="max-sm:text-3xl max-[1600px]:text-4xl text-5xl font-bol mt-10 md:mt-20">
                            FEATURES
                        </h1>
                        <p className="text-1xl mt-6 text-tertiary text-justify">
                            I created this web app to aid me on my job search.
                            Often, when I need to contact a recruiter or an
                            employee at a company I&apos;m looking to apply to,
                            it&apos;s difficult to get their contact info or
                            even reach them on LinkedIn so I made this app to
                            find and verify emails.
                        </p>

                        <p className="text-tertiary mt-4 text-justify">
                            Checkout my{" "}
                            <a
                                href="https://github.com/jdog117/email-finder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                github repo
                            </a>{" "}
                            to read more about this project and the troublesome
                            adventure it was.
                        </p>
                    </div>
                    <div className="font-bold">
                        <div className="font-bold flex items-center mt-12">
                            <Server />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Custom secure server
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <Palette />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Color themes
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <ArrowRightLeft />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Responsive design
                            </h1>
                        </div>
                        <div className="font-bold flex items-center mt-4">
                            <ListChecks />
                            <h1 className="text-2xl ml-4 text-tertiary">
                                Input validation and error handling
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <a
                        href="https://emailfinder-jc.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={emailPC}
                            alt=""
                            className="lg:-translate-y-52 lg:-translate-x-10 translate-y-36 max-lg:scale-150 scale-125"
                        ></Image>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-auto-rows gap-4 m-4 md:m-28 max-sm:translate-y-[-1rem] max-lg:translate-y-[1rem] translate-y-[-26rem] xl:translate-y-[-26rem] max-md:mt-20">
                <div className="hidden lg:block pointer-events-none"></div>
                <Image
                    src={emailMobile}
                    alt=""
                    className="shadow-lg w-[35rem] justify-self-center lg:justify-self-end max-md:mt-10"
                />
                <Image src={emailDark} alt="" className="shadow-lg w-full" />
                <Image src={emailHero} alt="" className="shadow-lg w-full" />
            </div>
            <div className="lg:translate-y-[-20rem] flex-col flex items-center justify-center max-md:mt-20 text-center">
                <p className="text-5xl md:text-8xl">You reached the end :)</p>
                <p className="text-3xl md:text-5xl mt-10 md:mt-32">
                    Thanks for checking out my work
                </p>
            </div>
        </>
    );
}

function Footer() {
    return (
        <div className="w-full flex-col md:flex-row flex bg-background justify-between mt-20 p-20 md:items-center">
            <div className="flex-row">
                <h1 className="text-lg font-bold"> Contact</h1>
                <p className="mt-4 text-base">jspcasey@gmail.com</p>
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

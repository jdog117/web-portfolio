"use client";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { InlineWidget } from "react-calendly";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Send } from "lucide-react";
import React, { useRef, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP);
export default function Book() {
    const boxRef = useRef<HTMLButtonElement>(null);
    const [showSendIcon, setShowSendIcon] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });

    // useGSAP(() => {
    //     gsap.to(boxRef.current, {
    //         // scale: 0.5,
    //         // duration: 1,
    //         onComplete: () => {
    //             setShowSendIcon(true);
    //         },
    //     });
    // }, []);
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    className="fixed bottom-0 right-0 p-6 md:p-8 z-10 m-4 md:m-12 rounded-full boxRef"
                    ref={boxRef}
                >
                    {showSendIcon ? <Send /> : <Send />}
                    {/* "let's talk!" */}
                </Button>
            </DrawerTrigger>

            <DrawerContent>
                <div className="flex flex-col lg:flex-row max-h-[90vh] md:max-h-[75vh]">
                    <div className="w-full lg:w-1/3 p-8 lg:pt-32 md:pl-32 pb-4">
                        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-10">
                            Contact Me
                        </h1>
                        <p className="max-w-md my-2 md:my-4 text-tertiary text-justify text-sm md:text-base max-md:hidden">
                            Let{`'`}s talk! Business or not I{`'`}d love to hear
                            from you. You can reach me with the methods below or
                            book a meeting.
                        </p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <h1
                                        className="font-bold md:text-lg hover:text-accent transition-all"
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                "jspcasey@gmail.com"
                                            )
                                        }
                                    >
                                        jspcasey@gmail.com
                                    </h1>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Click to copy</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <p className="my-2">
                            <a
                                href="https://www.linkedin.com/in/jspcasey/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold md:text-lg hover:text-accent transition-all"
                            >
                                LinkedIn
                            </a>
                        </p>
                        <p className="mt-2">
                            <a
                                href="https://github.com/jdog117"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold md:text-lg hover:text-accent transition-all"
                            >
                                Github
                            </a>
                        </p>
                    </div>
                    <div className="w-full lg:w-2/3 py-4">
                        <InlineWidget
                            styles={{ height: isLargeScreen ? "70vh" : "50vh" }}
                            url="https://calendly.com/jspcasey"
                        />
                    </div>
                </div>

                <DrawerFooter className="items-center max-md:p-0">
                    <DrawerClose asChild>
                        <Button
                            variant="outline"
                            className="w-min hover:text-white visible max-sm:hidden"
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

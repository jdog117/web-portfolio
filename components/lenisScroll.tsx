"use client";
import { ReactLenis, useLenis } from "lenis/react";

interface LenisSmoothScrollProps {
    children: React.ReactNode;
}
const options = {
    lerp: 0.19,
};

export default function LenisSmoothScroll({
    children,
}: LenisSmoothScrollProps) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    return (
        <ReactLenis options={options} root>
            {children}
        </ReactLenis>
    );
}

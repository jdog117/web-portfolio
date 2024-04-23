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
    return (
        <div className="w-full h-screen items-center justify-center flex">
            <div className="flex flex-col">
                <h1 className="text-4xl text-right mr-16 mb-2">JOEY CASEY</h1>
                <h1 className="text-9xl font-extrabold tracking-[0.5em] ">
                    PORTFOLIO
                </h1>
            </div>
        </div>
    );
}

function Regenmed() {
    return (
        <>
            <div className="w-full h-screen items-center justify-center flex bg-secondary"></div>
        </>
    );
}

function Fund() {
    return <></>;
}

function Emailfinder() {
    return <></>;
}

import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-black grid place-items-center">
            <Image
                width="500"
                height="500"
                src="/NerdLabs.png"
                alt="Nerd Labs"
            />
            <h1 className="text-5xl font-semibold text-white">
                to be continue...
            </h1>
        </div>
    );
}

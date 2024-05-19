import { Star } from "lucide-react";
import Button from "./Button";

export default function Header() {
    return (
        <header className="px-6 py-5 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">pi<span className="text-stone-600 text-3xl">X</span>el</h1>
            </div>
            <Button>Own A Pixel <Star className="w-4 h-4" /></Button>
        </header>
    )
}
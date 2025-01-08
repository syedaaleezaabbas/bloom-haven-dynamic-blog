import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-screen-2xl mx-auto p-4 md:px-12 bg-purple-300 shadow-lg">
            <div className="md:text-4xl text-3xl font-bold font-dancing">
                Bloom Haven
            </div>

            {/* desktop navbar */}
            <nav className="hidden md:block">
                <ul className="flex items-center text-xl gap-x-10">
                    <li><Link href="/" className="text-black hover:text-gray-500">Home</Link></li>
                    <li><Link href="/about" className="text-black hover:text-gray-500">About</Link></li>
                    <li><Link href="/contact-us" className="text-black hover:text-gray-500">Contact Us</Link></li>
                </ul>
            </nav>

            {/* mobile navbar */}
            <Sheet>
                <SheetTrigger className="md:hidden flex justify-between items-center gap-x-4">
                    <Menu className="text-xl" />
                </SheetTrigger>
                <SheetContent className="bg-gray-400 border-l-4 border-l-purple-500">
                    <nav>
                        <ul className="text-lg flex flex-col text-center pt-20 gap-y-6">
                            <li><Link href="/" className="text-black hover:text-purple-500">Home</Link></li>
                            <li><Link href="/about" className="text-black hover:text-purple-500">About</Link></li>
                            <li><Link href="/contact-us" className="text-black hover:text-purple-500">Contact Us</Link></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>

        </header>
    )
}

export default Header

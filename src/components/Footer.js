import Link from "next/link";

const navigation = {
    main: [
        { name: 'Events', href: '/events' },
        { name: 'Businesses', href: '/businesses' }
    ]
}

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <Link href={item.href} >
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        </Link>
                        </div>
                    ))}
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">&copy; Copyright 2022 FremontMI. All rights reserved.</p>
            </div>
        </footer>
    )
}

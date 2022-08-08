import Link from 'next/link';

const navigation = [
    { name: 'Events', href: '/events' },
    { name: 'Businesses', href: '/businesses' }
]

export default function Navbar() {
    return (
        <header className="bg-slate-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-slate-300 md:border-none">
                    <div className="flex items-center">
                        <Link href='/'>
                        <a className='text-3xl font-black' href="#">
                            <span>Fremont</span>
                            <span className='text-indigo-700'>MI</span>
                        </a>
                        </Link>
                        <div className="hidden ml-10 space-x-8 md:block">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-slate-700 hover:text-slate-600">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                    <Link href='/login'>
                        <a
                            className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                        >
                           Login
                        </a>
                    </Link>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 md:hidden">
                    {navigation.map((link) => (
                        <Link href={link.href}>
                            <a key={link.name} className="text-base font-medium text-slate-700 hover:text-indigo-50">
                                {link.name}
                            </a>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

import Link from "next/link";

export default function Subscribe() {
    return (
        <div className="mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign up for updates</h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-500">
                        The platform is growing and new features are being added. Be the first to know what's happening with FremontMI.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form className="sm:flex">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Notify me
                            </button>
                        </div>
                    </form>
                    <p className="mt-3 text-sm text-gray-500">
                        We care about the protection of your data. Read our{' '}
                        <Link href='/privacy-policy'>
                        <a href="#" className="font-medium underline">
                            Privacy Policy.
                        </a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

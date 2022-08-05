import Link from "next/link";

export default function RegisterCTA() {
    return (
        <div className="mt-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-center">Want to create your own listings?</span>
                    <span className="block text-indigo-600 text-center">Create an account today.</span>
                </h2>
                <div className="mt-8 flex">
                    <div className="inline-flex rounded-md shadow mx-auto">
                        <Link href='/create-account'>
                        <a
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Create Account
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import RegisterCTA from "@/components/RegisterCTA";
import Subscribe from "@/components/Subscribe";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>FremontMI - a local directory just for Fremont, MI</title>
            </Head>

            <Navbar/>

            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">A local directory, just for</span>{' '}
                        <span className="block text-indigo-600 xl:inline">Fremont, MI</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Helping people meet one another, find events, and support local
                        businesses.
                    </p>
                </div>
            <RegisterCTA />
            </main>



            <Features />

            <ContactForm />

            <Subscribe />

            <Footer />
        </>
    )
}

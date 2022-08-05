import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import RegisterCTA from "@/components/RegisterCTA";
import Subscribe from "@/components/Subscribe";
import ContactForm from "@/components/ContactForm";

export default function Businesses() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Businesses - FremontMI - a local directory just for Fremont, MI</title>
            </Head>

            <Navbar/>

            <h1>Businesses</h1>
            <p>This page is under construction.</p>

            <Footer />
        </>
    )
}

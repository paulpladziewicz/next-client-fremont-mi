import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Events() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Events - FremontMI - a local directory just for Fremont, MI</title>
            </Head>

            <Navbar/>

            <h1>Events</h1>
    <p>This page is under construction.</p>

            <Footer />
        </>
    )
}

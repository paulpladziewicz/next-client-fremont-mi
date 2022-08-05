import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Privacy Policy - FremontMI - a local directory just for Fremont, MI</title>
            </Head>

            <Navbar/>

            <h1>Privacy Policy</h1>
            <p>An explanation of what information we collect (data) and how we use it in simple terms.</p>
            <p>This page is under construction.</p>

            <Footer />
        </>
    )
}

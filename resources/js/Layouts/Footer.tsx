import { Link } from "@inertiajs/react";
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Map from "@/Pages/Guest/Home/Components/Map";

export default function Footer() {
    return (
        <footer>
            <div className="left">
                <Link href="/" className="home-link">
                    ŠIMUN
                </Link>
                <Link href="/">Početna</Link>
                <Link href="/">Jelovnik</Link>
                <Link href="/">Galerija</Link>
                <Link href="/">Kontakt</Link>
            </div>
            <div className="center">
                <div className="links">
                    <a
                        href="mailto:contact@restoran-simun.hr"
                        aria-label="Email Us"
                    >
                        <MdEmail size={50} color={"#fff"} />
                        contact@restoran-simun.hr
                    </a>
                    <a
                        href="https://maps.app.goo.gl/roTa7teG9hdo2bUw7"
                        aria-label="Visit Us"
                    >
                        <MdLocationPin size={50} color={"#fff"} />
                        Obala Ive Juričev Cota 26 <br />
                        Vodice, Croatia
                    </a>
                    <a href="tel:+385(022)443106" aria-label="Call Us">
                        <MdPhone size={50} color={"#fff"} />
                        +385 (022) 443 106
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <div className="links">
                        <a
                            href="https://www.instagram.com/restoranpizzeria_simun/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={40} color={"#fff"} />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Restoran-Pizzeria-%C5%A0IMUN/100057658441282/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={40} color={"#fff"} />
                        </a>
                    </div>
                    <Map />
                </div>
            </div>
        </footer>
    );
}

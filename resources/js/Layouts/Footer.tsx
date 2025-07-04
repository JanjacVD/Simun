import { Link } from "@inertiajs/react";
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Map from "@/Pages/Guest/Home/Components/Map";
import { memo } from "react";

const Footer = memo(function Footer() {
    return (
        <footer>
            <div className="left">
                <Link href="/" className="home-link">
                    ŠIMUN
                </Link>
                <Link href="/">Početna</Link>
                <Link href={route("menu")}>Jelovnik</Link>
                <Link href={route("gallery")}>Galerija</Link>
                <Link href={route("contact")}>Kontakt</Link>
            </div>
            <div className="center">
                <div className="links">
                    <a
                        href="https://maps.app.goo.gl/roTa7teG9hdo2bUw7"
                        aria-label="Obala Ive Juričev Cota 26 
                        Vodice, Croatia"
                    >
                        <MdLocationPin size={50} color={"#fff"} />
                        Obala Ive Juričev Cota 26 <br />
                        Vodice, Croatia
                    </a>
                    <a
                        href="tel:+385(022)443106"
                        aria-label="+385 (022) 443 106"
                    >
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
            <div className="authored">
                Made by V. Janjac & Designed by E. Pračić
            </div>
        </footer>
    );
});
export default Footer;

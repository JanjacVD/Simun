import Footer from "./Footer";
import GuestNavbar from "./GuestNavbar";

export default function GuestLayoutContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative-stuff">
            <div className="anti-scroll-fuckup-wrapper">
                <GuestNavbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}

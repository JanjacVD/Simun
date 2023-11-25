import { memo } from "react";
import Footer from "./Footer";
import GuestNavbar from "./GuestNavbar";


const GuestLayoutContainer = memo(function GuestLayoutContainer({
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
})
export default GuestLayoutContainer

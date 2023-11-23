import Footer from "./Footer";
import GuestNavbar from "./GuestNavbar";

export default function GuestLayoutContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GuestNavbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

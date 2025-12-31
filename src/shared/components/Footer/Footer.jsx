import FooterContent from "./FooterContent";
import FooterImage from "./FooterImage";

const Footer = () => {
    return (
        <footer
            className="
            relative
            w-full
            dark:bg-neutral-950
            dark:text-neutral-200
            flex items-center justify-center
            z-10
        "
            style={{ height: "calc(100vh - var(--header-h))" }}
        >
            <div
                className="
                relative z-10
                h-full
                max-w-7xl mx-auto
                grid grid-cols-1 lg:grid-cols-3
                gap-12
                px-6
                "
            >
                <div className="lg:col-span-2 flex items-center h-full">
                    <FooterContent />
                </div>
            </div>
            <FooterImage />
        </footer>
    )
};

export default Footer;
import { useLaravelReactI18n } from "laravel-react-i18n";
import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = memo(function Hero() {
    const { t } = useLaravelReactI18n();
    return (
        <section id="homepage">
            <header>
                <div className="first-block info-block">
                    <div className="info">
                        <h1>
                            {t("restaurant")} <br /> {t("simun")}
                        </h1>
                    </div>
                    <LazyLoadImage
                        src={"/storage/page-images/index.webp"}
                        srcSet={"/storage/page-images/index.webp 800w, /storage/page-images/index3.webp 400w"}
                        alt="Host and guests at the enterance"
                        title="Host and guests at the enterance"
                    />
                </div>
                <div className="second-block info-block">
                    <LazyLoadImage
                        // src={"/storage/page-images/simun2.webp"}
                        alt="Photo of the host"
                        title="Photo of the host"
                        srcSet={"/storage/page-images/simun2.webp 800w, /storage/page-images/simun3.webp 400w"}
                        />
                    <div className="info">
                        <h2>{t("homepage.about.us")}</h2>
                        <h3>{t("homepage.about.title")}</h3>
                        <p>{t("homepage.about.text")}</p>
                        <button className="button-white">
                            {t("homepage.about.more")}
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
});

export default Hero
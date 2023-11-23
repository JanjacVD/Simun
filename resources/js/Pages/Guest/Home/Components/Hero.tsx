import { useLaravelReactI18n } from "laravel-react-i18n";

export default function Hero() {
    const {t} = useLaravelReactI18n()
    return (
        <section id="homepage">
            <header>
                <div className="first-block info-block">
                    <div className="info">
                        <h1>
                            {t("restaurant")} <br /> {t("simun")}
                        </h1>
                    </div>
                    <img
                        loading="lazy"
                        src={"/storage/page-images/index.jpg"}
                        alt="Owner and guests at the enterance"
                    />
                </div>
                <div className="second-block info-block">
                    <img
                        loading="lazy"
                        src={"/storage/page-images/simun2.jpg"}
                        alt="Photo of the owner"
                    />
                    <div className="info">
                        <h2>{t("homepage.about.us")}</h2>
                        <h3>{t("homepage.about.title")}</h3>
                        <p>{t("homepage.about.text")}</p>
                        <button>{t("homepage.about.more")}</button>
                    </div>
                </div>
            </header>
        </section>
    );
}

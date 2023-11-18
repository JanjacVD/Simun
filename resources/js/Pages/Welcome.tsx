import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <div
            className="w-full h-screen"
            style={{
                backgroundImage:
                    "url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')",
            }}
        >
            <Head title="Coming soon" />
            <div className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            ></path>
                        </svg>
                        <span className="text-xl lg:text-2xl xl:text-3xl font-bold">
                            Restoran & Pizzeria Šimun
                        </span>
                    </div>
                    <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
                        Coming Soon
                    </h1>
                    <div className="flex flex-col items-center space-y-4 mt-24">
                        <a
                            href="mailto:valentino.janjac@gmail.com"
                            className="text-center text-gray-300 uppercase text-sm"
                        >
                            By: Valentino Janjac
                            <br />
                            <br />
                            <br />
                            Get in touch
                        </a>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/valentino-janjac-bab165235/"
                                title="LinkedIn"
                            >
                                <svg
                                    className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 333333 333333"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                                        fill="#e2e8f0"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/JanjacVD/Simun"
                                title="Github"
                            >
                                <svg
                                    className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

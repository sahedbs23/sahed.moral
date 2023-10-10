import React from "react";
import Link from "next/link";

const Navbar = () => {
    const menus=['Projects', 'Experience'];
    return (
        <header id="simple-header" className="w-full shadow-md rounded">
            <section className="flex flex-col md:flex-row p-8 text-center md:text-left gap-8">
                <div className="w-full md:w-3/5">
                    <Link href="/">
                        <h1 className="text-4xl font-bold text-black">Sahed Moral</h1>
                        <h2 className="text-2xl font-bold text-black">Backend Software Engineer</h2>
                        <h2 className="text-2xl font-bold text-black">Front end Developer</h2>
                    </Link>
                </div>
                <div className="w-full md:w-2/5">
                    <div className="flex flex-col gap-8 md:gap-4">
                        <ul className="flex flex-row justify-between  md:gap-5 md:justify-end">
                        <li>
                            <a href="https://www.linkedin.com/in/sahed-moral/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="h-16 w-16 text-[#0a66c2]" width="24" height="24" focusable="false">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:moral.sahed@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sahedbs23">
                            <svg height="64" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="64" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sahedsawon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                            </a>
                        </li>
                    </ul>
                        <ul className="flex flex-col md:flex-row justify-between gap-5 md:justify-end">
                            {
                                menus.map(m => (
                                    <li key={m}>
                                        <Link className="text-2xl font-bold text-black border-dashed border-black border-b" href={`/${m.toLowerCase()}`}>{m}</Link>
                                    </li>
                                ))
                            }
                            <li>
                                <Link className="text-2xl font-bold text-black border-dashed border-black border-b"
                                      href="/">About Me</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </header>
    );
}

export default Navbar;

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const menus = [
        {
            text : 'Home',
            link : '/',
            target : '_self'
        },
        {
            text : 'Projects',
            link : '/projects',
            target : '_self'
        },
        // {
        //     text : 'cv',
        //     link : 'https://s3.tebi.io/sahed/Sahed_Moral_CV.pdf',
        //     target : '_blank'
        // }
    ];
    const onClickMenu = () => {
        setShow(!show);
    }


    return (
        <header id="simple-header" className="w-full bg-white rounded fixed px-4 md:px-8 top-0 left-0 z-[1000] text-[16px] uppercase text-[#333] font-bold shadow-white">
                <section className="flex flex-row items-center justify-items-center text-left gap-8 py-6">
                    <div className="w-3/5">
                        <Link href="/"  className="flex flex-row gap-2 items-center w-max hover:text-purple">
                        <Image
                            className="rounded-full object-cover "
                            src="https://s3.tebi.io/sahed/sahed-moral.svg"
                            height="50"
                            width="50"
                            alt="Sahed Moral"
                        />
                            <h1 className="uppercase">Sahed Moral</h1>
                        </Link>

                    </div>
                    <div className="w-2/5 hidden md:block">
                        <div className="flex flex-col gap-8 md:gap-4">
                            <ul className="flex flex-row gap-10 justify-end">
                                {
                                    menus.map(m => (
                                        <li className="hidden md:block" key={m.text}>
                                            <Link className="hover:text-purple" target={m.target}
                                                href={m.link}>{m.text}</Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                    </div>
                    <div className="w-2/5 block md:hidden">
                        <div className="flex flex-col gap-8 md:gap-4">
                            <ul className="flex flex-row gap-10 justify-end">
                                {
                                    show && (
                                        <li onClick={onClickMenu} className="md:hidden">
                                            <Image height="27" priority width="27" alt="menu" src='https://s3.tebi.io/sahed/ham-menu.svg' />
                                        </li>
                                    )
                                }
                                {
                                    !show && (
                                        <li onClick={onClickMenu} className="md:hidden">
                                            <Image height="27"  priority  width="27" alt="menu" src='https://s3.tebi.io/sahed/ham-menu-close.svg' />
                                        </li>
                                    )
                                }

                            </ul>
                        </div>

                    </div>
                </section>
            {
                !show && (
                    <section className="block md:hidden  transition-all duration-[.3s]">
                        <div className="sm-menu">
                            <ul className="flex flex-col items-end justify-items-end divide-y border-solid border-t border-[#eee]">
                                {
                                    menus.map(m => (
                                        <li className="w-full text-right px-3 py-6 md:hidden block" key={m.text}>
                                            <Link className="hover:text-purple" target={m.target}
                                                  href={m.link}>{m.text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                )
            }
        </header>
    );
}

export default Navbar;

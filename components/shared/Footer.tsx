import Link from "next/link";
import Image from "next/image";
import {SOCIAL_LINKS} from "@/configs/constants";
import Bio from "@/dataSource/data/bio"

const Footer = () => {
    return(
        <div className="w-full bg-black text-white px-8 py-0">
            <div className="flex flex-col-reverse md:flex-row justify-between py-16  items-center gap-20 md:gap-32">
                <div className="flex flex-col gap-5 md:max-w-xl w-full items-stretch ">
                    <h2 className="text-2xl uppercase">Sahed Moral</h2>
                    <h6 className="text-xl">
                        {Bio.description}
                    </h6>
                </div>
                <div className="flex flex-col items-stretch justify-items-center gap-5 w-full md:w-max">
                    <h2 className="uppercase text-2xl">Social</h2>

                    <ul className="flex flex-row gap-5 text-center">
                        {
                            SOCIAL_LINKS.map(i => (
                                <li key={i.link} >
                                    <Link href={i.link} target="_blank" className="">
                                        <Image src={i.icon} height="25" width="25" alt={i.prefix}></Image>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-row gap-5 text-center">
                        <li >
                            <Link href="mailto:moral.sahed@gmail.com" className="hover:text-white">
                            Email : moral.sahed@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center py-8 border-white border-t border-solid text-[12px]">
                <p>
                    © Copyright {new Date().getFullYear()}. Made by <Link
                    href="/"
                    className="border-b border-white border-solid"
                    target="_blank"
                    rel="noreferrer"
                >Sahed Moral</Link>
                </p>
            </div>
        </div>
    )
}
export default Footer;
import Link from "next/link";
import {SOCIAL_LINKS} from "@/configs/constants";

const Footer = () => {

    return(
        <div className="w-full bg-[#f8f8f8] rounded">
            <ul className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center py-12">
                {
                    SOCIAL_LINKS.map(i => (
                        <li key={i.link} >
                            <Link className="border-black border-b border-dashed text-[18px] text-[#0a66c2]" href={i.link}>{i.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Footer;
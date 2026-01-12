import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-white flex flex-col-reverse md:flex-row justify-between md:items-center p-4 gap-4">
            <p className="text-xs">©{new Date().getFullYear()}. The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
            <div className="flex gap-4 md:items-center md:justify-center border-b-[#13734D] border-b md:border-0 pb-4 md:p-0">
                <a target="_blank" href='https://x.com/Apples_to_Oaks'>
                    <FontAwesomeIcon 
                        icon={faXTwitter}
                        className="text-brand text-[32px] w-[50px] h-[50px]"
                    />
                </a>
                <a target="_blank" href="https://www.facebook.com/people/Apples-to-Oaks-Tree-Care/100063690846577/#">
                    <FontAwesomeIcon 
                        icon={faFacebook}
                        className="text-brand text-[32px] w-[50px] h-[50px]"
                    />
                </a>
                <a target="_blank" href="https://www.isa-arbor.com/">
                    <Image
                        src="/ISALogo.png"
                        alt="International Society of Arboriculture"
                        width={50}
                        height={50}
                        className="h-[32px] w-auto"
                    />
                </a>
            </div>
        </footer>
    );
}
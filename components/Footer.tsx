import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-white flex flex-col-reverse md:flex-row justify-between md:items-center p-4 gap-4">
            <p className="text-xs">©{new Date().getFullYear()}. The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
            <div className="flex gap-4 md:items-center md:justify-center border-b-[#13734D] border-b md:border-0 pb-4 md:p-0">
                <FontAwesomeIcon 
                    icon={faXTwitter}
                    className="text-[#13734D] text-[32px] w-[50px] h-[50px]"
                />
                <FontAwesomeIcon 
                    icon={faFacebook}
                    className="text-[#13734D] text-[32px] w-[50px] h-[50px]"
                />
                <Image
                    src="/ISALogo.png"
                    alt="International Society of Arboriculture"
                    width={50}
                    height={50}
                    className="h-[32px] w-auto"
                />
            </div>
        </footer>
    );
}
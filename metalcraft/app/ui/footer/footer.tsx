import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";

export default function Footer() {

  return (
    <footer className="bg-dark-900">
      <div className="flex gap-4 wrapper px-5">
        <div className="flex gap-4">
          <Link href={'/'}>
            <Image
              width={685}
              height={376}
              src="/logo.png"
              alt="MetalCraft"
              className="w-[100px] h-auto"
            />
          </Link>

          <div>
            <div>
              <p>+ 7 (918)-643-50-42</p>
            </div>
            <div>
              <p>metalcraft@gmail.com</p>
            </div>
          </div>
        </div>

        <Socials />

        

      </div>
    </footer>
  );
}
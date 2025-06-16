
import Link from 'next/link';
import Image from "next/image"
import { halvarBreit } from "@/app/ui/fonts";
 
const socials = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/copy.kom?igsh=dHI1b21uMm5udm5v',
    src: '/socials/instagram.svg' 
  },
  { 
    name: 'Vkontakte', 
    href: 'https://vk.com/copykom',
    src: '/socials/vk.svg' 
  },
  { 
    name: 'WhatsApp', 
    href: 'https://api.whatsapp.com/send/?phone=79186435042',
    src: '/socials/whatsapp.svg' 
  },
];
 
export default function Socials() {
  return (
    <div>
      <h6 className={`text-lg text-dark-600 mb-4 uppercase ${halvarBreit.className}`}>Мы в социальных сетях!</h6>
      <div className='flex gap-7'>
        {socials.map((item) => {
          
          return (
            <Link
              key={item.name}
              href={item.href}
            >
              <Image
                width={40}
                height={40}
                src={item.src}
                alt={item.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
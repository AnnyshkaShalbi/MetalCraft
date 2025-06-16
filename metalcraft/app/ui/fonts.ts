import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

export const raleway = Raleway({ 
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const halvarBreit = localFont({
  src: [
    {
      path: '../../public/fonts/HalvarBreit-Rg.woff2', 
      weight: '300',
      style: 'normal',
    }
  ],
});
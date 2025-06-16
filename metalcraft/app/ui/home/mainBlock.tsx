import Image from "next/image";
import { halvarBreit } from "@/app/ui/fonts";
import { Button } from "../common/button";

export default function MainBlock() {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[720px] flex align-center">
      {/* Изображение - теперь с правильными пропорциями */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.webp"
          alt="MetalCraft конструкции"
          fill
          className="object-contain md:object-cover h-full w-auto" // На мобильных - целиком, на десктопах - заполнение
          quality={90}
          priority
          style={{
            objectPosition: "center center" // Центрируем изображение
          }}
        />
      </div>

       {/* Контент с заголовком */}
      <div className="container relative z-10 h-full flex items-center px-4">
        <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg w-full max-w-[45rem]"> {/* Фиксированная максимальная ширина */}
          <h1 className={`${halvarBreit.className} uppercase text-2xl md:text-3xl lg:text-4xl text-white leading-tight`}> {/* Добавлен leading-tight */}
            Надёжные металлоконструкции и современные модульные дома
          </h1>
        </div>
      </div>
    </div>
  );
}
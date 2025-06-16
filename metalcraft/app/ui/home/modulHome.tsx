import Image from "next/image"
import { halvarBreit } from "@/app/ui/fonts";
import Link from "next/link";

export default function ModulHome() {
  return(
    <>
      <h2 className={`${halvarBreit.className} uppercase text-2xl my-5`}>Готовые проекты</h2>
      <div className="bg-light-900 rounded-2xl p-5 text-dark-700">

      <div className="grid grid-cols-[30%_70%] gap-4">
        <div className="relative h-[300px] w-full rounded-2xl"> 
          <Image
            src="/images/aderbievka/2.jpg"
            alt="Modul home"
            fill 
            className="object-cover" 
            quality={80} 
            priority 
          />
        </div>
        <div className="bg-white rounded-2xl px-4 py-5">
          <h3 className={`${halvarBreit.className} uppercase`}>Модульный дом с верандой</h3>
          <p>
            Завершено строительство модульного дома с просторной верандой и современным санузлом в живописном селе Адербиевка под Геленджиком. Конструкция собрана из качественных модулей, обеспечивающих надежность и комфорт в любое время года. Дом идеально вписался в природный ландшафт, создав уютное пространство для отдыха с видом на горы и лес.  
          </p>
        </div>
      </div>
    </div>
    </>
    
  )
}
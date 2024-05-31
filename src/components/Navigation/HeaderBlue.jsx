"use client";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";
export default function HeaderBlue() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="relative w-full flex items-center ">
      <div className="absolute left-0 p-6 flex items-center px-8 bg-bl-100 w-[100%] md:w-[55%] lg:w-[51%] h-12 top-0 border-b rounded-br-[5rem] p-6" />
      <Container>
        <div className="relative flex items-center gap-[44px] mt-[14px] z-[3] md:w-3/5">
          <a
            className="flex gap-2 no-underline m-s-b items-center"
            href="tel:8009530342"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://sandboxmexico.com/assets/icons/call/call-w.svg"
              alt={`call icon${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
              width={17}
              height={18}
            />
            <span className="text-fs-12 ms:text-fs-14 text-white">
              {languageData.navBar.contact}
            </span>
            <span className="m-b text-white">800 953 0342</span>
          </a>

          {/* fix tailwind */}
          <div className="flex gap-[1rem]">
            <a
              href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src="https://sandboxmexico.com/assets/icons/whats/whats-w.svg"
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon whatsapp`}
              />
            </a>

            <a
              href="https://www.facebook.com/RoyalVacationsMx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src="https://sandboxmexico.com/assets/icons/face/face-w.svg"
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon facebook`}
              />
            </a>

            <a
              href="https://www.instagram.com/royalvacationsmx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src="https://sandboxmexico.com/assets/icons/insta/insta-w.svg"
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY}icon instagram`}
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

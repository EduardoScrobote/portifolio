import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

function About() {
  return (
    <div>
      <div className="flex items-center flex-col text-white p-8">
        <div className="flex justify-center bg-perf-img bg-cover ml-14 w-44 h-44 rounded-full"></div>
        <h1 className="text-2xl mt-14 mb-8">
          <Typewriter
            words={[
              "Olá!!",
              "Eu me chamo:",
              "Eduardo Rafael Scrobote",
              "Desenvolvedor front-end!",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-center text-xl">
          Comecei a programar há menos de um ano. Estudei por conta própria,
          utilizando cursos técnicos e documentações. Atualmente, estou focado
          em ingressar no mercado, portanto, mantenho uma rotina constante de
          estudos e aprendizado contínuo!
        </p>
        <p className="mt-4 text-2xl">Minhas principais habilidades são:</p>
        <div className="flex flex-row mt-14">
          <BiLogoJavascript color="yellow" size="54" />
          <BiLogoTypescript size="54" color="#0d36db" />
          <BiLogoReact size="54" />
          <BiLogoNodejs size="54" color="green" />
          <BiLogoTailwindCss size="54" color="cyan" />
          <GrMysql size="54" color="#205cd4" />
        </div>
      </div>
    </div>
  );
}

export default About;

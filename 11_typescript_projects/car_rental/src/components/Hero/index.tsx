import Button from "../Button";
import { motion } from "framer-motion";

type HeroProps = {
  // useRef ile alınan bir div elementinin tipi
  element: React.RefObject<HTMLDivElement>;
};

const Hero = ({ element }: HeroProps) => {
  const scroll = () => {
    element.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>

        <Button title="Arabaları Keşfet" designs="mt-10" handleClick={scroll} />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src="/hero.png"
          alt="bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;

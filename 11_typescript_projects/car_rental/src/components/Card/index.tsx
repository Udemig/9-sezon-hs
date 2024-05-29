import { useState } from "react";
import { CarType } from "../../types";
import generateImage from "../../utils/generateImage";
import Button from "../Button";
import { motion } from "framer-motion";
import Modal from "../Modal";

interface CardProps {
  car: CarType;
}

const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const translate = {
    rwd: "Arkadan İtişli",
    fwd: "Önden Çekişli",
    awd: "4 Çeker",
    "4wd": "4 Çeker",
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      className="car-card group"
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <div className="flex mt-6 text-[32px]">
        <span className="font-semibold text-[19px]">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="self-end font-semibold text-[19px]">/gün</span>
      </div>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
        />
      </div>

      {/* alt kısım */}
      <div className="w-full mt-2 flex">
        {/* ikonlar */}
        <div className="group-hover:hidden flex w-full justify-between">
          <div className="flex-center flex-col">
            <img width={25} src="/steering-wheel.svg" />
            <p>{car.transmission === "a" ? "otomatik" : "manuel"}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg" />
            <p>{translate[car.drive]}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/gas.svg" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        {/* buton */}
        <div className="group-hover:flex hidden w-full">
          <Button
            title="Daha Fazla"
            designs="w-full py-[16px]"
            icon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
    </motion.div>
  );
};

export default Card;

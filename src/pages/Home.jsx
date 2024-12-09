import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HomePng from "../assets/foto.png";
import {motion} from "framer-motion";
import { FadeRight } from '../utility/animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
                <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible" 
                  className="text-secondary text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">Frutas</motion.h1>
                <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible" 
                  className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">Selecionadas!</motion.h1>
                <motion.p 
                  variants={FadeRight(0.9)}
                  initial="hidden"
                  animate="visible"  className="text-2xl tracking-wide">
                  Peça agora para uma vida fresca e saudável
                </motion.p>
                <motion.p
                  variants={FadeRight(1.2)}
                  initial="hidden"
                  animate="visible"  className="text-gray-400">
                  Comida saudável e saborosa para o café da manhã ou para o seu lanchinho. Coma diariamente para ter boa saúde e mente. Faça seu pedido agora e ganhe 20% de desconto na sua primeira compra.

                </motion.p>
                
                <motion.div
                  variants={FadeRight(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="">
                  <div className="flex">
                    <Link to="/produtos" className="primary-btn flex items-center gap-2">
                      <span><IoBagHandleOutline/></span>Peça agora
                    </Link>
                  </div>
                  
                </motion.div>
                
                
                
            </div>
        </div>
        <div className="flex flex justify-items-center items-center">
            <motion.img
              initial={{ opacity:0, x: 400, rotate:75}}
              animate={{ opacity:1, x: 0, rotate: 0}}
              transition={{ duration:1, delay:1}} 
              src={HomePng}
              alt="" 
              className="w-[350px] md:w-[550px] drop-shadow"
            />
        </div>
    </div>
  </section>
}

export default Hero
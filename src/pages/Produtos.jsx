import { img, link } from 'framer-motion/client'
import React from 'react'
import fruit1 from "../assets/frutas/maçã.png"
import fruit2 from "../assets/frutas/laranja.png"
import fruit3 from "../assets/frutas/abacate.png"
import fruit4 from "../assets/frutas/cereja.png"
import fruit5 from "../assets/frutas/morango.png"
import fruit6 from "../assets/frutas/melancia.png"
import { delay, motion} from "framer-motion"
import { FadeLeft} from "../utility/animation.jsx"

const MenusData = [
  {
    id: 1 ,
    title: "Maçãs Vermelhas Frescas", 
    link: "/",
    price: "R$4,99",
    img: fruit1,
    delay: 0.3
  },
  {
    id: 2 ,
    title: "Laranjas Frescas",
    link: "/",
    price: "R$3,99",
    img: fruit2,
    delay:0.6
  },
  {
    id: 3 ,
    title: "Abacates Frescos",
    link: "/",
    price: "R$5,99",
    img: fruit3,
    delay:0.9
  },
  {
    id: 4 ,
    title: "Cerejas Frescas",
    link: "/",
    price: "R$10,00",
    img: fruit4,
    delay:1.2
  },
  {
    id: 5 ,
    title: "Morangos Frescos",
    link: "/",
    price: "R$5,99",
    img: fruit5,
    delay: 0.3
  },
  {
    id: 6 ,
    title: "Melancias Frescas",
    link: "/",
    price: "R$3,99",
    img: fruit6,
    delay:0.6
  }
]
    


const Produtos = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <h1 className="text-2xl font-bold text-left pb-10 uppercase">Nosso Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden" 
              whileInView={"visible"}
              whileHover={{scale:1.1}}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
              <img 
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-110 transform -translate-y-6" />
                <div className="">
                  <motion.h1
                    initial={{opacity:0, x: -200}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration: 1, delay:0.3}} 
                    className="text-lg font-semibold">
                    {menu.title}
                    </motion.h1>
                  <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Produtos;
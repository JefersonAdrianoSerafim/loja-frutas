import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import {motion} from "framer-motion"




const NavbarMenu = [
    {
        id:1,
        title: "Home",
        link: "/",
    },
    {
        id:1,
        title: "Produtos",
        link: "#",
    },
    {
        id:1,
        title: "Sobre",
        link: "#",
    },
    {
        id:1,
        title: "loja",
        link: "#",
    },
    {
        id:1,
        title: "Contatos",
        link: "#",
    },

]
const Navbar = () =>{
    const [open, setOpen] = React.useState(false);
    return <nav>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration:1,delay: 1}}
                className="container flex justify-between items-center py-4 md:pt-4">
                {/*seção Logo*/}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase
                ">
                    <p className="text-secondary">loja de</p>
                    <p className="text-primary">frutas</p>                
                    <FaLeaf className="text-green-500"/>
                </div>
                {/*seção Menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-600">
                        {NavbarMenu.map((menu) =>(
                            <li key={menu.id} className="text-xl">
                                <a
                                href={menu.link}
                                className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                            <MdOutlineShoppingCart/>
                        </button>
                    </ul>
                </div>    
                {/*icone seção mobile*/}
                <div className="md:hidden" onClick={() =>
                    setOpen(!open)}>
                    <MdMenu className="text-4xl"/>
                </div>
                {/*icone seção mobile*/}
                
            </motion.div>
            <ResponsiveMenu open={open}/>
    </nav>
};

export default Navbar;
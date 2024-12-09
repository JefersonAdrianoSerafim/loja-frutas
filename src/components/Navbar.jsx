import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Produtos", link: "/produtos" },
  { id: 3, title: "Sobre", link: "/sobre" },
  { id: 4, title: "Contatos", link: "/contatos" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="container flex justify-between items-center py-4 md:pt-4"
      >
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-secondary">loja de</p>
          <p className="text-primary">frutas</p>
          <FaLeaf className="text-green-500" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">
                <Link
                  to={menu.link}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <MdOutlineShoppingCart />
            </button>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? 'X' : '☰'}
          </button>
        </div>
      </motion.div>
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-gray-100`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-600">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} className="text-xl">
              <Link
                to={menu.link}
                className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
              >
                {menu.title}
              </Link>
            </li>
          ))}
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <MdOutlineShoppingCart />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
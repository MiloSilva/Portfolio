import { motion } from 'framer-motion';
import { CiDark, CiSun } from 'react-icons/ci';
import { useContext } from 'react';

import { ThemeContext } from './../../../contexts';
import './Navbar.scss';

export const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  // Set App Theme
  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return(
    <header>
      <h1>Juan Camilo <br/> Silva Roldan</h1>
      <motion.button
        whileHover={{scale: 1.2}}
        whileTap={{ scale: 0.8 }}
        onClick={handleThemeChange}
      >
        {theme === 'light' ?
          <CiDark size='2.5rem'/>:
          <CiSun size='2.5rem'/>
        }
      </motion.button>
    </header>
  );
};
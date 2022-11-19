import { ReactNode } from "react";
import useLocalStorage from 'use-local-storage';

import { ThemeContext } from '../../contexts'
import { Desktop } from "../Desktop/Desktop";
import './Wrapper.scss';

type ApplicationWrapperProps = {
  children: ReactNode;
};

export const ApplicationWrapper = (props: ApplicationWrapperProps) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  return (
    <ThemeContext.Provider  value={{theme, setTheme}}>
      <div data-theme={theme}>
        <Desktop>
          {props.children}
        </Desktop>
      </div>
    </ThemeContext.Provider>
  )
};
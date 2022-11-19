import type { ReactNode } from "react";

import { Navbar } from "../../components";
import './Desktop.scss';


type DektopProps = {
  children: ReactNode
};

export const Desktop = (props: DektopProps) =>{

  return (
    <>
      <Navbar/>
      <div className='content'>
        {props.children}
      </div>
    </>
  )
}
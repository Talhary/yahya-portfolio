'use client'

type PageStates = {
    about?: boolean | null ;
    resume?: boolean | null;
    portfolio?: boolean | null;
    blog?: boolean | null;
    contact?: boolean | null;
  };
  const nameList: Array<keyof PageStates> = ['about','resume','portfolio'];
  const list = ['About', 'Resume', 'Portfolio'] 

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import {ModeToggle} from '@/components/theme-button'
export const Navbar = ({className}:{className?: string}) => {
  const pathname = usePathname();
  const page = pathname.split('/')[1] || 'about'
  const [nav,setNav] = useState(false)
  return (
      <>
       
          <div className={ ` dark:bg-card-bg-1  backdrop-blur-xl  text-white card bg-white bg-opacity-40    shadow-black absolute top-0 right-0 rounded-tr-2xl px-10 max-lg:px-2 rounded-bl-2xl h-20 max-lg:h-14 flex  flex-col ${nav?'max-md:w-40  ':'max-md:w-20 '} transition-all ${className}`}>
           <div className='relative rounded-tr-2xl   rounded-bl-2xl h-20 flex flex-col  '>
           <button className={`md:hidden p- my-3 text-center rounded-md  transition-all dark:bg-card-bg  ${nav?'text-primary ':''}`} onClick={()=>setNav(!nav)}> <BiMenu  size={40} className='max-xs:size-8'/> </button>
            <ul onClick={()=>setNav(false)} className={`  flex flex-row  items-center justify-center text-xl gap-x-10 w-full h-full max-lg:gap-x-10 max-lg:text-xl max-md:flex-col  dark:max-md:bg-black max-md:bg-white max-md:text-black   max-md:bg-opacity-85 dark:opacity-100   max-md:dark:text-white  max-md:opacity-100  max-md:items-start   max-md:h-fit max-md:mt-1   ${nav?' max-md:scale-1 ':'max-md:scale-0 '} transition-all max-md:p-5 max-md:space-y-1 max-md:rounded-xl max-lg:gap-x-4 max-md:text-lg`}>
            {nameList.map((el, i) => (
                    
                    <li key={el} className={` tracking-lighter font-semibold  ${page ===el && 'text-primary'}`}>
                        <Link href={`/${el}`}>{list[i]}</Link>
                    </li>
                
            ))}
               <li>
               <ModeToggle/>
               </li>

             </ul>
           </div>
          </div>
        
      </>
    );
  };
  

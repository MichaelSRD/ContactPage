'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Option {
   value: string
}

interface CustomSelectProps{
    options: Option[];
    placeholder?: string;
}
export function CustomSelect ({options, placeholder}:CustomSelectProps){
    const [isOpen,setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const toggleSelect = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    useEffect(()=>{
        const handleOutsideClick = ( event: MouseEvent  )=>{
           if (selectRef.current && !selectRef.current.contains(event.target as Node) ) {
            setIsOpen(false);
           }
        } ;
        document.addEventListener('mousedown', handleOutsideClick );

        return () => {
           document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

   const handledOptionClick = (option: Option)=>{
       setSelectedOption(option);
       setIsOpen(false);
   }
    return(
        <div ref={selectRef} className='grid relative '>
              <div onClick={toggleSelect} className='bg-white font-semibold text-[#111729] rounded-lg p-4'>
                <p>{selectedOption ? selectedOption.value : placeholder }</p>
              </div>
              <div className='flex items-center absolute inset-0 left-auto pointer-events-none pr-4 '>
                <Image src={'/Expand_down.svg'} alt={''} width={30} height={30}/>
              </div>
              {isOpen && (
                <div className='bg-white border-gray-400 border absolute w-full text-[#111729] font-semibold p-2 space-y-2 rounded-lg top-16 z-10'>
                {options.map((option)=>(
                 <p onClick={()=>handledOptionClick(option)} className="hover:bg-slate-400 cursor-pointer p-1 rounded-2xl " key={option.value}>{option.value}</p>
                ))}
              </div>
              )}
              
            </div>
    )
}
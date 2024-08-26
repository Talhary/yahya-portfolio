import { IoBookOutline } from "react-icons/io5";

import {EducationList} from '@/components/education'
import { Slider } from "@/components/ui/slider";
import { Heading } from "@/components/heading";
const Page = () => {

  return (
    <>
       <div>
       
        <Heading title="Resume"/>

      <div className="mx-7 mt-12 max-md:mx-6 max-xs:mx-3">
      <div className="flex gap-x-6 items-center justify-start my-8 max-md:my-6 max-xs:my-4 max-md:gap-x-4 max-xs:gap-x-3">
          <IoBookOutline size={30} className="text-primary max-xs:size-6  max-md:size-7"/>
          <h1 className='text-4xl font-semibold max-md:text-2xl  after:bg-primary dark:text-white'> Education</h1>
        </div>

        <div>
           <EducationList/>
        </div>

      </div>
      <div className='mt-4 mx-2 text-white'>
           <h1 className='text-2xl font-semibold  after:bg-primary '> My Skills</h1>
          
      </div>
      <div className='border-card-bg-1 card hover:scale-[1.007] flex  dark:bg-card-bg-2 bg-white bg-opacity-10  flex-col space-y-10 gap-x-4 rounded-2xl m-3  shadow-sm shadow-gray-800 p-4 py-10 px-7  dark:text-white'>
        {[{value:92,title:'Graphic Desgining'},{value:80,title:'Management '},{value:90,title:'Illustration'}].map((el,i)=>(
          <div key={i} className="space-y-3">
            <h2 className="text-xl max-md:text-lg max-sm:text-md"><span className=" font-semibold dark:text-white">{el.title}</span> <span>{el.value}{"%"}</span> </h2>
            <Slider
              defaultValue={[el.value]}
              className='w-full'
              disabled
           />
          </div>
        ))}
      </div>
     </div>
   
    </>
  );
};

export default Page;

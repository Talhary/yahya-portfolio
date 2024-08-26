
import { Heading } from '@/components/heading';
import {Navbar} from '@/components/navbar'
import { SiMaterialdesign } from 'react-icons/si';
import AsideImageSection from '@/components/aside-image-section'
const Page = () => {

  return (
    <>
        <div className='max-md:px-4 dark:text-white'>
         <Heading title="About"/>
          <AsideImageSection className='md:hidden m-2 flex  flex-col items-start justify-center'/>
         <div className='mt-4 mx-2 '>
         
            <div className='tracking-wide leading-relaxed text-white'>
              <p className='text-xl opacity-70'>
                My name is Yahya. I am a passionalete Graphic Designer, I have been working in the field for over 2 years. I have a
                experience in various industries such as print, graphic design, digital design, and web design. I am currently focusing on web design and I am looking forward to collaborating with brands to create innovative and engaging digital experiences.
              </p>
            </div>
         </div>
          <div>
             <h2 className='text-2xl font-semibold mx-3  mt-10'>What I&apos;m Doing</h2>
          </div>
          <div className='flex flex-wrap mt-4 '>
            {[1].map((el,i)=>{
              return <div key={i} className='card  max-md:gap-y-2 max-sm:flex-col flex flex-row gap-x-4 rounded-2xl m-3 max-sm:m-2 max-w-md  shadow-black dark:shadow-gray-800 p-4 max-sm:px-3 max-sm:py-4 px-7'>
                     <div className='flex items-start my-2 text-center max-sm:items-center '>
                       <SiMaterialdesign className='text-primary max-sm:size-9' size={30} />
                      </div>
                      <div className='space-y-'>
                        <h2 className='font-semibold `text-xl r'>Graphic Designer</h2>
                        <p>Thr Most modern and high-quality design made a professional level</p>
                      </div> 
              </div>
            })}
          </div>
          <div>
             <h2 className='text-2xl font-semibold mx-3  mt-10'>Experience</h2>
          </div>
          <div className='flex flex-wrap mt-4 '>
            {[1].map((el,i)=>{
              return <div key={i} className='card  max-md:gap-y-2 max-sm:flex-col flex flex-row gap-x-4 rounded-2xl m-3 max-sm:m-2 max-w-md  shadow-black dark:shadow-gray-800 p-4 max-sm:px-3 max-sm:py-4 px-7'>
                     <div className='flex items-start my-2 text-center max-sm:items-center '>
                       <SiMaterialdesign className='text-primary max-sm:size-9' size={30} />
                      </div>
                      <div className='space-y-'>
                        <h2 className='font-semibold `text-xl r'>Graphic Designer</h2>
                        <h3>At swisMax <span className='text-sm'>2 years</span></h3>
                      </div> 
              </div>
            })} 
          </div>
     </div>
    </>
  );
};
export default Page;

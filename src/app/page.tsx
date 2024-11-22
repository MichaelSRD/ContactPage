import Form from 'next/form'
import  {Be_Vietnam_Pro} from 'next/font/google'
import Image from 'next/image';
import { CustomSelect } from './component/Custom-select';

const be = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
})
const Options = [
  {value: '50-100 employees'},
  {value: '100-150 employees'},
  {value: '150-200 employees'}
]
const Options2 = [
  {value: 'Building Landing pages'},
  {value: 'e-comerce'},
  {value: 'interactive page'}
]
export default function Home() {
  
  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-11 ${be.className} text-[#FFFFFF] `}>
      <header className=' justify-self-start '>
        <Image src={'/logo.svg'} alt={''} width={100} height={100} />
      </header>
      <main className="grid gap-8 row-start-2 items-center sm:items-start max-w-full md:max-w-[80%]">
         <h1 className='text-4xl font-bold text-center md:text-[4rem] md:leading-[5rem]'>Interested in our business pricing?</h1>
         <p className='text-center font-medium md:text-[2rem] md:pr-4  md:pl-4 lg:pr-36 lg:pl-36 '>Fill out the form to view details and we’ll contact you as soon as possible.</p>
         <div className='bg-[#CDD5E0] p-5 rounded-lg  bg-opacity-25 '>
           <Form action="" className='grid gap-4 md:grid-cols-2'>
             <div className='grid'>
             <label htmlFor="" className='text-sm'>Name</label>
             <input type="text" className='rounded-lg p-4 -mt-0 placeholder-[#111729] font-semibold text-[#111729]' placeholder='Ethan Johnson' />
             </div>
           
              <div className='grid'>
              <label htmlFor="" className='text-sm'>Company Email</label>
              <input  type="text" className='rounded-lg p-4 mt-0 placeholder-[#111729] font-semibold text-[#111729]'  placeholder='ethan@johnson.com'/>
              </div>
            
             <div> 
             <label htmlFor="" className='text-sm'>Company Size</label>
             <CustomSelect options={Options} placeholder='50-100 employees'  />
             </div>
          
             <div>
             <label htmlFor="" className='text-sm'>Subject</label>
             <CustomSelect options={Options2} placeholder='Building Landing pages'/>
             </div>
            
              <div className='grid md:col-span-2'>
              <label htmlFor="" className='text-sm'>Message</label>
            <textarea name="" id="" className='rounded-lg p-4 mt-0 placeholder-[#111729] font-semibold h-44 text-[#111729]'  placeholder='50-100 employees' ></textarea> 
              </div>
              <div className='bg-[#ffff] p-4 flex justify-center font-semibold rounded-lg md:col-span-2'>
              <p className='text-[#4036A9]'>Contact Sales</p> 
            </div> 
           </Form>
         </div>
      </main>
    </div>
  );
}

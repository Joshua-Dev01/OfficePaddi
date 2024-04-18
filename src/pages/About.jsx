import React from 'react'
import dash from '../img/wokrr-dashboard.jpg'
import { ChooseUsIcon } from '../component/ChooseUsIcon';
import { GoHorizontalRule } from 'react-icons/go';
import { Footer } from '../component/Footer';


export const About = () => {


  // the hero section img background
  const HeroBackground = `<svg width="948" height="869" viewBox="0 0 948 869" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1402.31 590.463C1314.97 784.733 390.819 951.684 103.5 822.5C-183.819 693.316 220.083 327.113 206.5 99C293.848 -95.2702 1072.11 34.0537 1359.43 163.238C1646.75 292.422 1489.66 396.193 1402.31 590.463Z" fill="white"/>
  </svg>`;
  
  const bgStyle = {
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(HeroBackground)}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '60%',
    height: '100vh',

      // End of hero section img background
    
  };
  
  return (
    <>
        {/* ***************HERO SECTION****************** */}
        <div className=" bg-[#0D333E] w-[100%] h-[105vh]  xs:h-[120vh] ">

           <div className='flex items-center justify-between xs:text-center '>

          <div className='pl-20'>
          <h1 className='text-4xl text-white leading-[3.5rem]'>One App that <br /> Manage Everthing</h1>
          <p className='text-white space-x-8 mb-12'>The Bst Mannagment software </p>
         <button className='bg-white shadow-lg py-2 px-10 rounded-[20px] text-[#024D39]'>Start Free trial</button>
         </div> 

         <div style={bgStyle}> 
        
         <img src={dash} alt="" className='w-[42%] absolute top-[16rem] right-16 xs:top-[35rem] xs:left-9'/>
         </div>  
   
         </div>
         </div>
       {/*  *************** END OF HERO SECTION******************  */}

    
      {/*  ***************WHY CHOOSE US******************  */}
     <div>
      <div className='mt-32 flex items-center justify-between px-20 overflow-x-hidden lap:justify-center lap:gap-16 lap:mt-52 lap:flex-wrap'>

     <div className='-mt-40 lap:-m-0'>
     <h1 className='text-[#2D3250] text-3xl mb-10 lap:text-center'>Why <span className='border-b-4 border-[#024D39]'> choose us?</span></h1>
     <p className='w-80 lap:text-center'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
    </div>

          
          
            
            <div className='flex gap-10 sm:mb-20 sm:text-center sm:gap-0'>
              <ChooseUsIcon  />

              <section className=''> 

                <div className=''>
                  <h1 className='text-2xl font-semibold'>Accuracy </h1>
                  <p className='w-72 xs:px-2'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>

                <div className='my-12 sm:my-4'>
                  <h1 className='text-2xl font-semibold'>Good Report</h1>
                  <p className='w-72 xs:px-2'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>

                <div>
                  <h1 className='text-2xl font-semibold'>Productivity</h1>
                  <p className='w-72 xs:px-2'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                
              </section>
            </div>
           </div>
           <svg height="253" viewBox="0 0 448 253" fill="none" xmlns="http://www.w3.org/2000/svg" className='-mt-32 w-[30%] '>
            <rect x="-199" y="158.818" width="565" height="94.3602" transform="rotate(-7.26281 -199 158.818)" fill="#7A91EF"/>
            <rect x="-125.794" y="67.022" width="565" height="101" transform="rotate(-6.81265 -125.794 67.022)" fill="#0D333E"/>
          </svg>
          </div>
           {/*  ***************END OF WHY CHOOSE US******************  */}




           {/*  *************** SERVICES ******************  */}

           <div className='bg-[#E9ECED] py-20 my-20'>
            <h1 className='text-[#2D3250] text-3xl text-center mb-20 '><span className='border-b-2 border-[#024D39]'>Our </span> Services</h1>
            
           {/* ********HRM & CRM************ */}
           <section className='flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10'>
            <div>
            <svg width="50" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
             <ellipse cx="31" cy="30" rx="31" ry="30" fill="#0D333E"/>
             <path d="M27.292 19.24V16.418H33.684V41H30.556V19.24H27.292Z" fill="white"/>
            </svg>
            <h1 className='my-5 font-bold text-2xl'> HRM & CRM</h1>
            <p className='w-96'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
            <svg width="350" height="3" viewBox="0 0 414 3" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-20'>
           <line y1="1.5" x2="414" y2="1.5" stroke="#2D3250" stroke-width="3"/>
           </svg>
            </div>
            <img src={dash} alt="" className='w-[25rem] z-10' />
           </section>


                      {/* ********POS & PROJECT MGT************ */}
             <section className='flex items-center justify-center my-28 gap-44 px-20 sv:flex-wrap-reverse sv:gap-10'>
             <img src={dash} alt="" className='w-[25rem] z-10' />
            <div>
            <svg width="50" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
             <ellipse cx="31" cy="30" rx="31" ry="30" fill="#0D333E"/>
             <path d="M27.292 19.24V16.418H33.684V41H30.556V19.24H27.292Z" fill="white"/>
            </svg>
            <h1 className='my-5 font-bold text-2xl'> POS & PROJECT MGT</h1>
            <p className='w-96'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
            <svg width="350" height="3" viewBox="0 0 414 3" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-20'>
           <line y1="1.5" x2="414" y2="1.5" stroke="#2D3250" stroke-width="3"/>
           </svg>
            </div>
           </section>


             {/* ********STOCK MGT & ACCOUNTING************ */}
             <section className='flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10'>
            <div>
            <svg width="50" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
             <ellipse cx="31" cy="30" rx="31" ry="30" fill="#0D333E"/>
             <path d="M27.292 19.24V16.418H33.684V41H30.556V19.24H27.292Z" fill="white"/>
            </svg>
            <h1 className='my-5 font-bold text-2xl'> STOCK MGT & ACCOUNTING</h1>
            <p className='w-96'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
            <svg width="350" height="3" viewBox="0 0 414 3" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-20'>
           <line y1="1.5" x2="414" y2="1.5" stroke="#2D3250" stroke-width="3"/>
           </svg>
            </div>
            <img src={dash} alt="" className='w-[25rem]' />
           </section>


         {/* ************Background STAR******************** */}
         <svg width="50" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[123.5rem] right-[25rem] z-0'>
         <path d="M44.705 0.452222L53.9719 32.6494L87.2321 33.7045L59.6992 52.5483L68.9661 84.7455L42.683 64.1944L15.1501 83.0383L26.4391 51.4932L0.155919 30.9422L33.416 31.9973L44.705 0.452222Z" fill="#EA5317" fill-opacity="0.35"/>
        </svg>

       <svg width="60" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[153rem] left-28'>
       <path d="M44.705 0.452222L53.9719 32.6494L87.2321 33.7045L59.6992 52.5483L68.9661 84.7455L42.683 64.1944L15.1501 83.0383L26.4391 51.4932L0.155919 30.9422L33.416 31.9973L44.705 0.452222Z" fill="#EA5317" fill-opacity="0.35"/>
      </svg>
     </div>
       {/*  ***************END OF SERVICES ******************  */}


       {/*  ***************STEPS TO USE ******************  */}
       <div>
        <h1 className='text-3xl text-center text-[#024D39]'>Steps to <span className='border-b-4 border-[#EA5317]'>use</span> </h1>
        
       <section className='grid grid-cols-3 mx-16 gap-14 lap:grid-cols-2 my-20 lap:mx-5 xsm:grid-cols-1 '>

        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>
        
        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>

        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>

        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>

        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>

        <div>
          <h1 className='flex text-[20px] font-medium mb-5 text-[#00BF6F]'>01<GoHorizontalRule className='mt-1' /><span className='text-[#024D39]'> Subscribe to your desire plan</span> </h1>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
        </div>
       </section>

       {/* ********************BG STYLE************************** */}

       <svg width="70%" height="348" viewBox="0 0 844 348" fill="none" xmlns="http://www.w3.org/2000/svg" className=' -mt-[26rem] ml-[1rem] mb-20'>
       <path d="M842.697 185.347C825.774 265.037 578.399 257.051 421.018 223.629C263.636 190.207 6.15021 90.9819 23.0732 11.2921C39.9961 -68.3977 -70.9023 311.07 86.4789 344.491C243.86 377.913 859.62 105.658 842.697 185.347Z" fill="#008260" fill-opacity="0.07"/>
     </svg>

       </div>


       {/* ****************FOOTER**************** */}
       <Footer />
    </>
  )
}

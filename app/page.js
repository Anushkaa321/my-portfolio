import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
export default function Home() {
  return (
    <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section class="mx-auto w-full max-w-[720px] space-y-8 bg-white print:space-y-6">
    <div class=' flex flex-col gap-2 '>
      <h1 class= 'font-bold text-2xl'>Anushka</h1>
      <p class='text-gray-500 mt-3 text-medium  '>
      Web developer focused on building products with extra attention to detail.</p>
      <div class='text-gray-500 flex flex-row gap-2 mt-3 items-center'><IoLocationSharp /> <span>Bijnor, India </span> </div>
      <div class='text-gray-500 flex flex-row gap-5 mt-4'> 
        <a href='tel:+918077330400' class=' group block max-xs rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-gray-200 hover:ring-gray-200'><FaPhoneAlt /></a>
        <a href='mailto:anushkaasingh321@gmail.com' class=' group block max-xs rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-gray-200 hover:ring-gray-200'><IoMdMail /></a>
        <a href='https://www.linkedin.com/in/anushkaasingh321/' class=' group block max-xs rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-gray-200 hover:ring-gray-200'><FaLinkedin /></a>
        <a href='https://github.com/Anushkaa321' class=' group block max-xs rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-gray-200 hover:ring-gray-200'><FaGithub /></a>
        <a href='https://x.com/Anushka_321' class=' group block max-xs rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-gray-200 hover:ring-gray-200' ><FaSquareXTwitter /></a>
        
      </div>
      <div class='flex min-h-0 flex-col ' >
        <h1 class=' text-xl mt-6 font-medium'>About</h1>
        <p class='text-gray-500 mt-4'> I'm a passionate Web Developer specializing in front-end technologies, dedicated  <br/> to creating engaging, user-friendly interfaces that combine aesthetic appeal <br/> with optimal performance to enhance the overall user experience.<br/> My techstack mainly revolves around <span class='font-semibold text-black'> Reactjs, Nextjs.</span></p>
      </div>

      <div class='flex min-h-0 flex-col '>
        <h1  class=' text-xl mt-6 font-medium'>Work Experience</h1>
        
              <div class='text-medium text-gray-500'>
                <h2 class='mt-4 flex flex-row items-center gap-2 font-semibold text-black'> Zidio Development -   Web Developer Intern</h2>
                <p class='mt-2 '> Remote - Present 2024</p>
                <p class='mt-1'>Assisted in designing, developing, and deploying web applications using [programming languages/technologies, e.g., HTML, CSS, JavaScript, React, etc.].</p>
              </div>
      </div>
      <div class='flex min-h-0 flex-col'>
        <h1  class= ' text-xl mt-6 font-medium'>Skills</h1>
        <div class='mt-4'>
        <div class='flex items-center justify-start gap-3 flex-wrap py-2'>
          <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
         text-gray-500'>HTML</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
         text-gray-500'>CSS</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>JavaScript</div>
            <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Bootstrap</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Reactjs</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Redux</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Tailwind CSS</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          text-gray-500'>Nextjs</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Material UI</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Figma</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>REST APIs</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Jest</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
            text-gray-500'>Git</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Nodejs</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>Expressjs</div>
           <div class='inline-flex items-center rounded-full border px-2.5  py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           text-gray-500'>MongoDB</div>
        </div>
      </div>
      </div>

      <div class='flex min-h-0 flex-col'>
        <h1  class= ' text-xl mt-6 font-medium'>Projects</h1>
        <div class="grid grid-cols-1 gap-3.5 print:grid-cols-3 print:gap-3 md:grid-col-2 lg:grid-cols-3">
        <div class='rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3 gap-3 ]]] mt-5 specialHover  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-offwhite-200 duration-300'>
            <div class='font-medium flex items-center justify-between'>
              <div class='flex items-center gap-2'>
                <h2>Saas Landing Page</h2>
                <span class='size-1 rounded-full bg-green-500'></span>
                </div>
                <a href='https://saas-landing-page-gamma.vercel.app/'><IoIosLink /></a>
                </div>
                <p class='text-medium text-gray-500 flex-1'>This is a frontend project.<br/>It was made to practice Tailwind CSS, Reactjs and Nextjs together. It is just a basic template for Saas Landing Page.</p>
         </div>

         <div class='rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3 gap-3 ]]] mt-5 specialHover  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-offwhite-200 duration-300'>
            <div class='font-medium flex items-center justify-between'>
              <div class='flex items-center gap-2'>
                <h2>Real-Estate</h2>
                <span class='size-1 rounded-full bg-green-500'></span>
                </div>
                <a href='https://real-eastery.vercel.app/'><IoIosLink /></a>
                </div>
                <p class='text-medium text-gray-500 flex-1'>This is a project which lets you search for a particular property like house or flat and price range. Check out this awesome search and filter website.</p>
         </div>

         <div class='rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3 gap-3 ]]] mt-5 specialHover  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-offwhite-200 duration-300'>
            <div class='font-medium flex items-center justify-between'>
              <div class='flex items-center gap-2'>
                <h2>Zerodha</h2>
                <span class='size-1 rounded-full bg-green-500'></span>
                </div>
                <a href='https://zerodha-frontend-zeta.vercel.app/'><IoIosLink /></a>
                </div>
                <p class='text-medium text-gray-500 flex-1'>A clone of Zerodha-Online Stock Trading website.Frontend Project where I tried to replicate the look and feel of the original site.</p>
         </div>

          </div>


    

         
      </div>
   
    </div>
    </section>
    </main>
  );
}

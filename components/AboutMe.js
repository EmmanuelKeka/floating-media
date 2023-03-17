import Image from "next/image"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutMe(){

    return(
        <div className=" flex flex-col" id="aboutMe">



            
            <div className=" w-[100%] h-[16rem] mb-[-3px] button-div relative overflow-hidden">
                <div class="ocean">
                    <div class="wavevi"></div>
                </div>
            </div>


            
            <section className="blue-back text-center flex flex-col pb-[8rem] items-center">
                <h1 className="floating label-font tittle white--text text-5xl mt-4 drop-shadow-lg shadow-black">About me</h1>
                <div className=" flex flex-col max-w-4x w-full  items-center">


                        <div className="pt-1 button-div liquidBubble relative bg-white w-[15rem] h-[15rem] overflow-hidden shadow-2xl lg:w-[12rem] lg:h-[12rem]">
                        <Image className="floating5" src="/image/emmalove.png" alt="emma"  height="300" width="300" priority/>
                        </div>

            
                    <div className=" bg-white rounded-xl py-4 h-[14rem] w-[22rem] text-center shadow-2xl lg:p-[0.5rem] text-lg mt-16 lg:w-[19rem] lg:h-[13rem]">
                        <p className="para--font text-black lg:text-base pl-4 pr-4">
                        {" As a software developer, my passion lies in creating innovative and impactful applications. Allow me to assist you in bringing your unique vision to life, and let's work together to create something truly inspiring and game-changing. I am excited to be a part of this journey and to see your ideas come to fruition. Let's turn your dreams into a reality."}
                        </p>
                    </div>
    
                
                </div>
            </section>
        </div>
    )
}
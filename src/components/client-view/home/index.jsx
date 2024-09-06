'use client'

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from 'framer-motion';

function variants(){
    return {
        offscreen: {
            y: 150,
            opacity: 0
        },
        onscreen: ({ duration = 2 } = {}) => ({
            y:0,
            opacity:1,
            transition: {
                type: "spring",
                duration,
            }
        })
    } 
}

export default function ClientHomeView({data}){

    console.log(data,'ClientHomeView');

    const setVariants = useMemo(() => variants(), []);



    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
        <AnimationWrapper>
            <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-10 sm:py-20" variants={setVariants}>

       
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug ">
            {data && data.length 
            ? data[0]?.heading.split(" ").map(( item, index ) => (
                <span key={index} className={`${index === 2 || index===3 ? "text-green-main" : " text-gray-800"}`}>
                   {item}{" "} 
                </span>
            )) : null } 
            </h1>
        <p className="text-gray-700 mt-4 mb-8 text-lg leading-relaxed">
            {data && data.length ? data[0]?.summary : null}
        </p>

        </div>



            </motion.div> 
        </AnimationWrapper> 
        </div>
    ) 
}
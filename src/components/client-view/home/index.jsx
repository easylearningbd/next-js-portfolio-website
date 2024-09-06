'use client'

import AnimationWrapper from "../animation-wrapper";
import { motion } from 'framer-motion';

function variants(){
    
}

export default function ClientHomeView({data}){
    console.log(data,'ClientHomeView');
    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
        <AnimationWrapper>
            <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-10 sm:py-20" variants={setVariants}>

            </motion.div>

        </AnimationWrapper>

        </div>
    ) 
}
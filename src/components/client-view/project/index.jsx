'use client'
import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView({data}){
    // console.log(data,"project");
    const containerRef = useRef(null);
    const { scrollXProgress } = useScroll({ container:containerRef  })
    const router = useRouter();
    
    return(
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 mx-auto" id="project">
<AnimationWrapper className={"py-6 sm:py-16"}>
    <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {"My Projects".split(" ").map((item,index) => (
                <span className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}> {item}{" "} </span>
            ))}
        </h1>
        <svg id="progress" width={100} height={100} viewBox="0 0 100 100">
            <circle
            cx={"50"}
            cy={"50"}
            r="30"
            pathLength={"1"}
            className="stroke-[#000]"
            />
            <motion.circle
            cx={"50"}
            cy={"50"}
            r="30"
            pathLength={"1"}
            className="stroke-green-main"
            style={{ pathLength: scrollXProgress }}
            />

        </svg>

    </div>

</AnimationWrapper>


        </div>
    )
}
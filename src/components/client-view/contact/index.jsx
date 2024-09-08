'use client'
import { useState } from "react";
import AnimationWrapper from "../animation-wrapper";

const controls = [
    {
        name: "name",
        placeholder: "Enter your name",
        type: "text",
        lable: "Name"
    },
    {
        name: "email",
        placeholder: "Enter your Email",
        type: "text",
        lable: "Email"
    },
    {
        name: "message",
        placeholder: "Enter your message",
        type: "text",
        lable: "Message"
    }
]

const initialFormData ={
    name: "",
    email: "",
    message: ""
}


export default function ClientContactView(){

    const [formData, setFormData] = useState(initialFormData);
    console.log(formData);

    return (
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">

<AnimationWrapper className={"py-6"}>
    <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">

    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {"Contact Me".split(" ").map((item,index) => (
                <span className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}> {item}{" "} </span>
            ))}
        </h1> 
    </div> 
</AnimationWrapper>

<div className="text-gray-500 relative">
    <div className="container px-5">
        <div className="w-full">
            <div className="flex flex-wrap -m-2">
                {controls.map((controlItem) => 
                controlItem.name === "message" ? (
        <div className="p-2 w-full">
            <div className="relative">
                <label className="text-sm text-[#000]">
                    {controlItem.lable}</label>
            
            <textarea 
            id={controlItem.name}
            name={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e) => 
                setFormData({
                    ...formData,
                    [controlItem.name] : e.target.value
                })
            } className="w-full border-green-main border-[2px] bg-[#ffffff] rounded h-32 text-base outline-none text-[#000] py-1 px-3 resize-none leading-6">

            </textarea> 
            </div> 
        </div>
                ) : (
            <div className="p-2 w-full">
            <div className="relative">
                <label className="text-sm text-[#000]">
                    {controlItem.lable}</label>
            
            <input 
            id={controlItem.name}
            name={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e) => 
                setFormData({
                    ...formData,
                    [controlItem.name] : e.target.value
                })
            } className="w-full border-green-main border-[2px] bg-[#ffffff] rounded text-base outline-none text-[#000] py-1 px-3 resize-none leading-6">

            </input> 
            </div> 
        </div>

                )
                )}

            </div>
        </div>

    </div>

</div>



        </div>
    ) 
}
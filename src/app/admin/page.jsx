'use client'
import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/project"
import { addData } from "@/services"
import { useState } from "react"

const initialHomeFormData = {
    heading: "",
    summary: ""
}; 

const initialAboutFormData = {
    aboutme: "",
    noofprojects: "",
    yearofexerience: "",
    noofclients: "",
    skills: ""
};
const initialExperienceFormData = {
    position: "",
    company: "",
    duration: "",
    location: "",
    jobprofile: ""
};
const initialEducationFormData = {
    degree: "",
    year: "",
    college: "", 
};
const initialProjectFormData = {
    name: "",
    website: "",
    technologies: "",
    github: "", 
}
 
export default function AdminView(){
    const [currentSeletedTab, setCurrentSeletedTab] = useState('home');
    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
    const [experinceViewFormData, setExperinceViewFormData] = useState(initialExperienceFormData);
    const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
    const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);
 
    const menuItem = [
        { 
            id: 'home',
            lable: 'Home',
            component: <AdminHomeView
            formData = {homeViewFormData}
            setFormData = {setHomeViewFormData}
            handleSaveData={handleSaveData}
            />
        },
        {
            id: 'about',
            lable: 'About Page',
            component: <AdminAboutView 
            formData = {aboutViewFormData}
            setFormData = {setAboutViewFormData}
            handleSaveData={handleSaveData}
            />
        },
        {
            id: 'experience',
            lable: 'Experience',
            component: <AdminExperienceView 
            formData = {experinceViewFormData}
            setFormData = {setExperinceViewFormData}
            handleSaveData={handleSaveData}
            />
        },
        {
            id: 'education',
            lable: 'Education',
            component: <AdminEducationView 
            formData = {educationViewFormData}
            setFormData = {setEducationViewFormData}
            handleSaveData={handleSaveData}
            />
        },
        {
            id: 'project',
            lable: 'Project',
            component: <AdminProjectView 
            formData = {projectViewFormData}
            setFormData = {setProjectViewFormData}
            handleSaveData={handleSaveData}
            />
        },
        {
            id: 'contact',
            lable: 'Contact',
            component: <AdminContactView/>
        }
    ]

    async function handleSaveData(){
        const dataMap = {
            home: homeViewFormData,
            about: aboutViewFormData,
            experience: experinceViewFormData,
            education: educationViewFormData,
            project: projectViewFormData,
        };

        const response = await addData(currentSeletedTab,dataMap[currentSeletedTab]);
        console.log(response, "response");

        if (response.success) {
            resetFormDatas();
        }
        
    }

    function resetFormDatas(){
        setHomeViewFormData(initialHomeFormData);
        setAboutViewFormData(initialAboutFormData);
        setExperinceViewFormData(initialExperienceFormData);
        setEducationViewFormData(initialEducationFormData);
        setProjectViewFormData(initialProjectFormData);
    }

    return (
        <div className="border-b border-gray-400">
            <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
              {menuItem.map((item) => (
                <button
                key={item.id}
                type="button"
                className="p-4 font-bold text-xl text-black"
                onClick={() => {
                    setCurrentSeletedTab(item.id);
                    resetFormDatas();
                }}
                >
                    {item.lable}
                </button>
              ))} 
            </nav>
            <div className="mt-10 p-10">
    {
      menuItem.map(item => item.id === currentSeletedTab && item.component )  
    }
           </div>
        
        </div>
    )
}
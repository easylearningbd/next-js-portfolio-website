'use client'
import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/project"

export default function AdminView(){

    const menuItem = [
        {
            id: 'home',
            lable: 'Home',
            component: <AdminHomeView/>
        },
        {
            id: 'about',
            lable: 'About Page',
            component: <AdminAboutView/>
        },
        {
            id: 'experience',
            lable: 'Experience',
            component: <AdminExperienceView/>
        },
        {
            id: 'education',
            lable: 'Education',
            component: <AdminEducationView/>
        },
        {
            id: 'project',
            lable: 'Project',
            component: <AdminProjectView/>
        },
        {
            id: 'contact',
            lable: 'Contact',
            component: <AdminContactView/>
        }
    ]

    return (
        <div>
        
        </div>
    )
}
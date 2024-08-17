import React from 'react';
import GithubCion from '../../../src/images/icons/github.png';
import Ux from '../../../src/images/icons/ui-ux.png';
import Website from '../../../src/images/icons/website desing.png';
import js from '../../../src/images/icons/js.png';
import webDev from '../../../src/images/icons/development.png';
import appDev from '../../../src/images/icons/app development.png';


// main data 
const maindData = [
    {titel: 'GitHub', 
        textContent: '"Proficient in GitHub for version control, collaborative development, and managing projects, ensuring smooth workflows and efficient code management."', 
        img: GithubCion
    },

    {titel: 'UX / UI', 
        textContent: '"Experienced UX/UI designer focused on creating intuitive, user-centered interfaces that enhance usability and provide seamless digital experiences."', 
        img: Ux
    },

    {titel: 'Website Design', 
        textContent: '"Creative website designer specializing in crafting visually stunning, user-friendly designs with a focus on responsive layouts and seamless navigation."',
        img: Website
    },

    {titel: 'JavaScript', 
        textContent: '"Passionate JavaScript developer with expertise in creating dynamic, interactive web applications, focusing on responsive design and seamless user experiences."', 
        img: js
    },

    {titel: 'Web Development', 
        textContent: '"Passionate web developer with expertise in HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind CSS, creating responsive, user-friendly websites."', 
        img: webDev
    },

    {titel: 'App Development', 
        textContent: '"Passionate app developer skilled in HTML, CSS, JavaScript, and frameworks, crafting responsive, user-friendly mobile apps with seamless user experiences."', 
        img: appDev
    },

]

const Box = () => {
    return (
        <div className='mt-48 lg:px-28 lg:py-6 md:px-3 p-4'>
            <div className="border-l-4 border-[#E2414D] pl-4 mb-[50px]">
           <h4 className="text-[18px]">Services</h4>
           <h1 className="text-5xl py-3 font-semibold">Exceptional Service</h1>
        </div>
        {/* mian data */}
        <div className='grid lg:grid-cols-3'>
            {maindData.map((content , index) => (
             <BoxMain key={index} titel={content.titel} textContent={content.textContent} img={content.img}/>
            ))}
        </div>
        </div>
    );
};


// This function for all data load and showing the browser
const BoxMain = (props) => {
    return (
        <div>
            <div className="p-5 hover:border-white  gradient transition duration-300 ease-in-out bg-cyan-500 text-white mx-2 my-2 rounded-lg">
                <img className="w-1/4" src={props.img} alt=""/>
                <h2 className="text-3xl font-semibold py-3">{props.titel}</h2>
                <p>{props.textContent}</p>
                <button className='bg-blue-200 px-4 py-2 mt-3 rounded-lg text-black underline cursor-pointer'>Learn More</button>
            </div>
        </div>
    );
}

export default Box;
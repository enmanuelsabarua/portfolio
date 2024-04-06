'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
                <li>HTML5 & CSS3</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Nest.js</li>
                <li>TailwindCSS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git & GitHub</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Cibao Catholic University of Technology - Computer System Engineer</li>
                <li>University of Helsinki - Full Stack Developer</li>
                <li>The Odin Project - Full Stack JavaScript Path</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Responsive Web Design</li>
                <li>JavaScript Algorithms and Data Structures</li>
                <li>Front End Libraries</li>
                <li>APIs and Microservices</li>
                <li>Quality Assurance</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tab) => {
        startTransition(() => {
            setTab(tab);
        });
    }

    return (
        <section className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-img.png" width={500} height={500} alt='Wev Development' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base md:text-lg'>
                        I am a passionate software developer with experience in web development. I enjoy building user-friendly and responsive applications using modern technologies like React and Next.js. My goal is to create high-quality software solutions that solve real-world problems. In my free time, I like to explore new technologies and contribute to open-source projects.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === 'education'}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === 'certifications'}>{" "}Certifications{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
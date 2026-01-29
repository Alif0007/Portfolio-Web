import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
    FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiNetlify
} from 'react-icons/si';

const Skills = () => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('frontend');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const skillsData = {
        frontend: [
            { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
            { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
            { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
            { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
            { name: 'Vue.js', icon: FaVuejs, level: 60, color: '#4FC08D' },
        ],
        backend: [
            { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, level: 85, color: '#000000' },
            { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
        ],
        tools: [
            { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28' },
            { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, level: 90, color: '#181717' },
            { name: 'Netlify', icon: SiNetlify, level: 85, color: '#00C7B7' },
        ],
    };

    const tabs = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'Tools & Deployment' },
    ];

    return (
        <section
            id="skills"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    My <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Skills</span>
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-purple-primary to-blue-primary text-white shadow-glow'
                                : theme === 'dark'
                                    ? 'glass-effect text-gray-300 hover:text-white'
                                    : 'glass-effect-light text-gray-700 hover:text-gray-900'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData[activeTab].map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`p-6 rounded-2xl transition-all duration-300 glow-on-hover ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{
                                        backgroundColor: `${skill.color}20`,
                                        color: skill.color
                                    }}
                                >
                                    <skill.icon size={32} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {skill.name}
                                    </h3>
                                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {skill.level}% Proficiency
                                    </span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className={`w-full h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                                }`}>
                                <div
                                    className="h-full bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

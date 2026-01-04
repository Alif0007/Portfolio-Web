import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiAward, FiBook } from 'react-icons/fi';

const Education = () => {
    const { theme } = useTheme();
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

    const educationData = [
        {
            degree: "Bachelor's in Computer Science",
            institution: "Leading University, Dhaka",
            period: "2020 - 2024",
            description: "Focused on software engineering, web development, and database management. Completed capstone project on full-stack web application development.",
            icon: FiAward,
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Dhaka College",
            period: "2018 - 2020",
            description: "Science background with focus on Mathematics and Computer Science. Achieved excellent results and developed foundational programming skills.",
            icon: FiBook,
        },
    ];

    return (
        <section
            id="education"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    My <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Education</span>
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${theme === 'dark' ? 'bg-gradient-to-b from-purple-primary via-blue-primary to-green-primary' : 'bg-gradient-to-b from-purple-primary/50 via-blue-primary/50 to-green-primary/50'
                        }`}></div>

                    {/* Education Items */}
                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-col md:gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-primary to-blue-primary shadow-glow"></div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                    <div className={`p-6 rounded-2xl glow-on-hover ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                                        }`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-purple-primary/20' : 'bg-purple-primary/10'
                                                }`}>
                                                <edu.icon className="text-purple-primary" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                    }`}>
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-blue-primary font-semibold mb-2">
                                                    {edu.institution}
                                                </p>
                                                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                    {edu.period}
                                                </p>
                                                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                                    }`}>
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

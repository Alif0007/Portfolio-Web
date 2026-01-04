import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiBriefcase, FiCode } from 'react-icons/fi';

const Experience = () => {
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

    const experienceData = [
        {
            title: "Self-Learning & Personal Projects",
            company: "Independent Developer",
            period: "2021 - Present",
            description: "Actively developing full-stack MERN applications through self-directed learning. Built multiple production-ready projects including Book Shelf (digital library), TicketBari (booking system), and Daraz Clone (e-commerce platform). Gained expertise in React, Node.js, Express, MongoDB, Firebase authentication, and responsive UI design.",
            icon: FiCode,
            skills: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
        },
        {
            title: "Open to Opportunities",
            company: "Seeking Full-Stack Developer Position",
            period: "Available Now",
            description: "Actively seeking opportunities to contribute to innovative teams. Experienced in building scalable web applications, implementing secure authentication, CRUD operations, and creating intuitive user interfaces. Ready to collaborate on impactful projects and continue learning cutting-edge technologies.",
            icon: FiBriefcase,
            skills: ["Team Collaboration", "Problem Solving", "Agile", "Git/GitHub"],
        },
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    My <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Experience</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl glow-on-hover ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                                }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-blue-primary/20' : 'bg-blue-primary/10'
                                    }`}>
                                    <exp.icon className="text-blue-primary" size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {exp.title}
                                    </h3>
                                    <p className="text-purple-primary font-semibold mb-1">
                                        {exp.company}
                                    </p>
                                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {exp.period}
                                    </p>
                                </div>
                            </div>

                            <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark'
                                                ? 'bg-gradient-to-r from-purple-primary/20 to-blue-primary/20 text-purple-300'
                                                : 'bg-gradient-to-r from-purple-primary/10 to-blue-primary/10 text-purple-700'
                                            }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

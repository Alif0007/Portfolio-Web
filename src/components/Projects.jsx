import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const Projects = () => {
    const { theme } = useTheme();
    const [selectedProject, setSelectedProject] = useState(null);
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

    const projectsData = [
        {
            id: 1,
            title: "Book Shelf",
            shortDesc: "Digital book library with user authentication and CRUD operations",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
            tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Firebase", "MongoDB", "Axios"],
            liveLink: "https://golden-peony-a77558.netlify.app/",
            githubClient: "https://github.com/Alif0007/book-shelf-client",
            fullDescription: "A comprehensive digital book library application featuring user authentication via email and Google sign-in. Users can perform full CRUD operations on books, manage their reading lists, add comments, and utilize advanced search and filter capabilities. The dashboard provides an intuitive interface for managing collections with pagination support and dark mode toggle.",
            challenges: "Implementing role-based access control and ensuring real-time updates across the application using Firebase. Handling complex state management for user authentication flow and coordinating between Firebase and MongoDB for data persistence.",
            improvements: "Plan to integrate AI-powered book recommendations based on user reading history, add social features for book clubs and discussions, optimize mobile responsiveness, and implement progressive web app capabilities for offline access.",
        },
        {
            id: 2,
            title: "Daraz Clone",
            shortDesc: "E-commerce platform clone with product listings and cart functionality",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
            tech: ["Vue.js", "JavaScript", "CSS", "Vuex"],
            liveLink: "#",
            githubClient: "https://github.com/Alif0007",
            fullDescription: "A full-featured e-commerce platform inspired by Daraz, built with Vue.js. Features include dynamic product listings, category filtering, shopping cart management, and responsive design. The application demonstrates proficiency in Vue.js ecosystem and state management patterns.",
            challenges: "Managing complex state across multiple components using Vuex, implementing efficient product filtering and search functionality, and ensuring smooth user experience with cart operations and price calculations.",
            improvements: "Add backend integration with Node.js and Express for full-stack functionality, implement user authentication and order management, integrate payment gateway, add product reviews and ratings system, and optimize performance for large product catalogs.",
        },
        {
            id: 3,
            title: "TicketBari",
            shortDesc: "Ticket booking system with authentication and real-time availability",
            image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&h=500&fit=crop",
            tech: ["React", "Firebase", "Tailwind CSS", "React Router"],
            liveLink: "#",
            githubClient: "https://github.com/Alif0007/TicketBari-client",
            fullDescription: "A modern ticket booking platform that allows users to browse events, check availability, and book tickets securely. Features Firebase authentication, real-time seat availability updates, booking history management, and responsive design optimized for both desktop and mobile devices.",
            challenges: "Implementing secure payment integration simulation while maintaining data integrity, handling concurrent booking requests to prevent double-booking, and creating an intuitive booking flow that guides users through the entire process seamlessly.",
            improvements: "Add comprehensive admin dashboard for event management and analytics, implement real payment gateway integration, add email/SMS notifications for booking confirmations, create QR code generation for tickets, and integrate calendar sync for event reminders.",
        },
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    Featured <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl overflow-hidden glow-on-hover ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                                }`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    {project.shortDesc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-2 py-1 rounded text-xs font-medium ${theme === 'dark'
                                                ? 'bg-purple-primary/20 text-purple-300'
                                                : 'bg-purple-primary/10 text-purple-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            +{project.tech.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 btn btn-sm bg-gradient-to-r from-purple-primary to-blue-primary border-0 text-white hover:shadow-glow"
                                    >
                                        View Details
                                    </button>
                                    {project.liveLink !== '#' && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn btn-sm ${theme === 'dark' ? 'btn-outline' : 'btn-outline'
                                                }`}
                                            aria-label="Live demo"
                                        >
                                            <FiExternalLink />
                                        </a>
                                    )}
                                    <a
                                        href={project.githubClient}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn btn-sm ${theme === 'dark' ? 'btn-outline' : 'btn-outline'
                                            }`}
                                        aria-label="GitHub"
                                    >
                                        <FiGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light bg-white'
                            } p-8`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className={`absolute top-1 right-1 p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
                                }`}
                            aria-label="Close modal"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Modal Content */}
                        <div className="space-y-6">
                            {/* Project Image */}
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-2xl"
                            />

                            {/* Title */}
                            <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                {selectedProject.title}
                            </h3>

                            {/* Tech Stack */}
                            <div>
                                <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark'
                                                ? 'bg-purple-primary/20 text-purple-300'
                                                : 'bg-purple-primary/10 text-purple-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Description
                                </h4>
                                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    {selectedProject.fullDescription}
                                </p>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Challenges Faced
                                </h4>
                                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    {selectedProject.challenges}
                                </p>
                            </div>

                            {/* Future Improvements */}
                            <div>
                                <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Future Improvements
                                </h4>
                                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    {selectedProject.improvements}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                {selectedProject.liveLink !== '#' && (
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-gradient-to-r from-purple-primary to-blue-primary border-0 text-white flex items-center gap-2"
                                    >
                                        <FiExternalLink />
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={selectedProject.githubClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`btn ${theme === 'dark' ? 'btn-outline' : 'btn-outline'} flex items-center gap-2`}
                                >
                                    <FiGithub />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;

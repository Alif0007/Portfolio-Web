import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GiCricketBat, GiPaintBrush } from 'react-icons/gi';
import { FiUsers } from 'react-icons/fi';
import aboutImg from '../../public/IMG_3768.JPEG'

const About = () => {
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

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    About <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Me</span>
                </h2>

                <div className={`grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-3xl ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                    } glow-on-hover`}>
                    {/* Text Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            Hi, I'm <span className="font-semibold text-purple-primary">Al Amin Alif</span>, a passionate <span className="font-semibold text-blue-primary">Full-Stack MERN Developer</span> based in <span className="font-semibold text-green-primary">Dhaka, Bangladesh</span>. My programming journey started with simple HTML and CSS experiments during school, evolving into full-stack development through self-learning, online resources, and hands-on projects like my flagship <span className="font-semibold">Book Shelf</span> app.
                        </p>

                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            I enjoy creating efficient, user-friendly web applications that solve real-world problems – from implementing secure authentication and CRUD operations to designing intuitive dashboards with responsive UI. Beyond coding, I love staying active by playing cricket with friends, painting landscapes for creative outlet, and exploring emerging tech trends.
                        </p>

                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            This balance keeps me inspired, collaborative, and always eager to learn – whether contributing to open-source or tackling new challenges. <span className="font-semibold bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary bg-clip-text text-transparent">Let's build something impactful together!</span>
                        </p>

                        {/* Hobbies & Badge */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
                                }`}>
                                <GiCricketBat className="text-purple-primary" size={24} />
                                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Cricket Enthusiast</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
                                }`}>
                                <GiPaintBrush className="text-blue-primary" size={24} />
                                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Landscape Painter</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-primary to-blue-primary text-white font-semibold shadow-glow`}>
                                <FiUsers size={20} />
                                Open to Collaboration
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                            <img
                                src={aboutImg}
                                alt="About Al Amin Alif"
                                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiDownload } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Alif0007', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/al-amin-alif', label: 'LinkedIn' },
        { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
    ];

    return (
        <section
            id="hero"
            className={`min-h-screen flex items-center justify-center relative overflow-hidden pb-10 pt-24 ${theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
        >
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
                    {/* Profile Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <img
                            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/486331888_2669158276626839_3524288496683313016_n.jpg?_nc_cat=106&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHYASn8jyBKyhlBcojasSAXjQ6-_Fi9TH2NDr78WL1MfXfszOYpsSDqZP3JSSvl4RpP9fJUcALzzDgxneQQo0cL&_nc_ohc=yrHelLht6HsQ7kNvwFQpHUc&_nc_oc=AdnUi5TADtLH2S4GAwNKN_A9TLe94PAUdHrGUDgSab5u7C1fQLsQ2d9qSt2xcQu-C6o&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=F7OOxq-445reJWxejAc3Jw&oh=00_Afq-rGsUz17CBXOHvETCDCXXr4DjibD2dvERp-_r2I2a8w&oe=6960B542"
                            alt="Al Amin Alif"
                            className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-purple-primary/50"
                        />
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Hi, I'm <span className="bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary bg-clip-text text-transparent">Al Amin Alif</span>
                        </h1>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            Full-Stack MERN Developer
                        </h2>
                    </div>

                    {/* Tagline */}
                    <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Building scalable web applications with modern tech stacks.
                        <br />
                        <span className="font-semibold bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">
                            I don't just write code - I solve problems.
                        </span>
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 sm:p-4 rounded-full transition-all duration-300 glow-on-hover ${theme === 'dark'
                                    ? 'glass-effect text-white hover:text-purple-primary'
                                    : 'glass-effect-light text-gray-900 hover:text-purple-primary'
                                    }`}
                                aria-label={label}
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="btn btn-lg bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary border-0 text-white flex items-center gap-3 hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-4  text-lg"
                    >
                        <FiDownload size={24} />
                        Download Resume
                    </a>

                    {/* Scroll Indicator */}
                    {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className={`w-6 h-10 rounded-full border-2 ${theme === 'dark' ? 'border-white/30' : 'border-gray-900/30'
                            } flex items-start justify-center p-2`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'
                                } animate-pulse`}></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;

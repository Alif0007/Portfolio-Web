import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
    const { theme } = useTheme();

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Alif0007', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/al-amin-alif7/', label: 'LinkedIn' },
        { icon: FaWhatsapp, href: 'https://wa.me/+8801931889147', label: 'Twitter' },
        { icon: FiFacebook, href: 'https://www.facebook.com/alamin.alif.129/', label: 'Facebook' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black border-t border-white/10' : 'bg-white border-t border-gray-200'
            }`}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary bg-clip-text text-transparent mb-4">
                            Al Amin Alif
                        </h3>
                        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Full-Stack MERN Developer building scalable web applications with modern tech stacks.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`transition-colors ${theme === 'dark'
                                            ? 'text-gray-400 hover:text-purple-primary'
                                            : 'text-gray-600 hover:text-purple-primary'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Connect With Me
                        </h4>
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full transition-all hover:scale-110 ${theme === 'dark'
                                        ? 'bg-white/5 hover:bg-purple-primary/20 text-white'
                                        : 'bg-black/5 hover:bg-purple-primary/10 text-gray-900'
                                        }`}
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                    }`}>
                    <p className={`text-center md:text-left ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        © {new Date().getFullYear()} Al Amin Alif. All Rights Reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

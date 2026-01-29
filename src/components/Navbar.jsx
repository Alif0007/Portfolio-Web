import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? theme === 'dark'
                    ? 'glass-effect shadow-lg'
                    : 'glass-effect-light shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        Al Amin Alif
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${theme === 'dark'
                                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side - Theme Toggle & Resume Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-300 ${theme === 'dark'
                                ? 'text-yellow-300 hover:bg-white/10'
                                : 'text-gray-700 hover:bg-black/5'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <a
                            href="/Al-Amin-Alif(resume).pdf"
                            download
                            className="btn btn-primary bg-gradient-to-r from-purple-primary to-blue-primary border-0 text-white flex items-center gap-2 hover:shadow-glow transition-all"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all ${theme === 'dark'
                                ? 'text-yellow-300 hover:bg-white/10'
                                : 'text-gray-700 hover:bg-black/5'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-all ${theme === 'dark'
                                ? 'text-white hover:bg-white/10'
                                : 'text-gray-900 hover:bg-black/5'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'}`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`block px-4 py-3 rounded-lg transition-all ${theme === 'dark'
                                ? 'text-gray-300 hover:text-white hover:bg-white/10'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/Al-Amin-Alif(resume).pdf"
                        download
                        className="btn btn-primary bg-gradient-to-r from-purple-primary to-blue-primary border-0 text-white w-full flex items-center justify-center gap-2 mt-4"
                    >
                        <FiDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

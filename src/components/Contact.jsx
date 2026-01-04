import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'alaminalif373@gmail.com',
            href: 'mailto:alaminalif373@gmail.com',
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+880 1XX-XXXXXXX',
            href: 'tel:+8801XXXXXXXXX',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: '+880 1XX-XXXXXXX',
            href: 'https://wa.me/8801XXXXXXXXX',
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 fade-in-section ${theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    Get In <span className="bg-gradient-to-r from-purple-primary to-blue-primary bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className={`text-center text-lg mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas!
                </p>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className={`p-8 rounded-3xl glow-on-hover ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                        }`}>
                        <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`input input-bordered w-full ${theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className={`input input-bordered w-full ${theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="form-control">
                                <label className={`label ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className={`textarea textarea-bordered w-full h-32 ${theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-lg bg-gradient-to-r from-purple-primary via-blue-primary to-green-primary border-0 text-white w-full flex items-center justify-center gap-2 hover:shadow-glow disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="loading loading-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105 ${theme === 'dark'
                                                ? 'bg-white/5 hover:bg-white/10'
                                                : 'bg-black/5 hover:bg-black/10'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-purple-primary/20' : 'bg-purple-primary/10'
                                            }`}>
                                            <info.icon className="text-purple-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                                }`}>
                                                {info.label}
                                            </p>
                                            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location/Availability */}
                        <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
                            }`}>
                            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                Location
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                📍 Dhaka, Bangladesh
                            </p>
                            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                🕐 Available for freelance opportunities and full-time positions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

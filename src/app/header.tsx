'use client';
import { useEffect, useState } from 'react';

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`fixed top-0 left-0 right-0 bg-[var(--header-background)] transition-all duration-300 z-50 backdrop-blur-md border-b border-[var(--border-color)] ${
            visible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
                <h1 
                    className="text-2xl font-bold cursor-pointer hover:text-[var(--accent-color)] transition-colors duration-200" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Rj
                </h1>
                <button 
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                </button>
                <nav className={`${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[var(--header-background)] backdrop-blur-md md:static md:block md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center p-4 md:p-0">
                        <li>
                            <a href="#" className="hover:text-[var(--accent-color)] transition-colors duration-200">Home</a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="hover:text-[var(--accent-color)] transition-colors duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className="hover:text-[var(--accent-color)] transition-colors duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="hover:text-[var(--accent-color)] transition-colors duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[var(--accent-color)] text-[var(--accent-color)] px-4 py-2 rounded-lg 
                                    hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

'use client';
import { useEffect, useState } from 'react';
import { UilEnvelope, UilLinkedin, UilGithub, UilFile } from '@iconscout/react-unicons'

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const contactTitle = "contact";

    const contactLinks = [
        {
            name: 'Email',
            value: 'rivanjarjes@gmail.com',
            href: 'mailto:rivanjarjes@gmail.com',
            icon: <UilEnvelope className="w-8 h-8 fill-[var(--accent-color)]" />
        },
        {
            name: 'Resume',
            value: 'View Resume',
            href: '/resume.pdf',
            icon: <UilFile className="w-8 h-8 fill-[var(--accent-color)]" />
        },
        {
            name: 'GitHub',
            value: 'github.com/rivanjarjes',
            href: 'https://github.com/rivanjarjes',
            icon: <UilGithub className="w-8 h-8 fill-[var(--accent-color)]" />
        },
        {
            name: 'LinkedIn',
            value: 'linkedin.com/in/rivanjarjes',
            href: 'https://linkedin.com/in/rivanjarjes',
            icon: <UilLinkedin className="w-8 h-8 fill-[var(--accent-color)]" />
        }
    ];

    const renderText = (text: string, baseDelay: number, charDelay: number) => {
        let totalChars = 0;
        return (
            <>
            
                {text.split(' ').map((word, wordIndex, words) => {
                    const currentDelay = totalChars * charDelay + baseDelay;
                    totalChars += word.length + 1;
                    
                    return (
                        <span key={wordIndex} className="inline-flex whitespace-nowrap">
                            {word.split('').map((char, charIndex) => {
                                const delay = currentDelay + charIndex * charDelay;
                                return (
                                    <span key={charIndex} className="relative inline-block">
                                        <span 
                                            className={`opacity-0 ${isVisible ? 'animate-[appear_0.1s_forwards]' : ''}`}
                                            style={{ animationDelay: `${delay}s` }}
                                        >
                                            {char}
                                        </span>
                                        <span 
                                            className={`absolute inset-y-0 right-0 text-[var(--accent-color)] ${isVisible ? 'animate-[cursorBlink_0.1s_step-end]' : ''}`}
                                            style={{ 
                                                animationDelay: `${delay}s`,
                                                opacity: 0
                                            }}
                                        >
                                            _
                                        </span>
                                    </span>
                                );
                            })}
                            {wordIndex < words.length - 1 && (
                                <span className="relative inline-block">
                                    <span 
                                        className={`opacity-0 ${isVisible ? 'animate-[appear_0.1s_forwards]' : ''}`}
                                        style={{ animationDelay: `${currentDelay + word.length * charDelay}s` }}
                                    >
                                        &nbsp;
                                    </span>
                                </span>
                            )}
                        </span>
                    );
                })}
                <span 
                    className={`inline-block opacity-0 text-[var(--accent-color)] ${isVisible ? 'animate-[appear_0.1s_forwards,blink_0.5s_step-end_infinite]' : ''}`}
                    style={{ 
                        animationDelay: `${(contactTitle.length * 0.05) + 0.2}s, ${(contactTitle.length * 0.05) + 0.3}s`,
                        opacity: 0
                    }}
                >
                    _
                </span>
            </>
        );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5,
                rootMargin: '-50px 0px'
            }
        );

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="contact" className="min-h-[70vh] flex items-center justify-center py-20">
            <div className="max-w-3xl px-4 sm:px-8">
                <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-[var(--accent-color)]">
                    <span className="relative flex flex-wrap">
                        {renderText(contactTitle, 0, 0.05)}
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {contactLinks.map((link, index) => (
                        <div 
                            key={index}
                            className={`opacity-0 transform translate-y-4 transition-all duration-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : ''}
                            `}
                            style={{ transitionDelay: `${(contactTitle.length * 0.05) + 0.3 + (index * 0.1)}s` }}
                        >
                            <a 
                                href={link.href}
                                target={link.name !== 'Email' ? '_blank' : undefined}
                                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="block p-6 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors duration-200 h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{link.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 text-[var(--accent-color)]">
                                            {link.name}
                                        </h3>
                                        <p className="text-[var(--secondary-text)]">
                                            {link.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

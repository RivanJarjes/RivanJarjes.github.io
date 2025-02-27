'use client';
import { useEffect, useState } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [age, setAge] = useState<number>(0);
    const aboutTitle = "about me";
    
    useEffect(() => {
        const calculateAge = () => {
            const birthDate = new Date(2006, 0, 18); // January is 0-indexed
            const today = new Date();
            let currentAge = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            // Adjust age if birthday hasn't occurred this year
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                currentAge--;
            }
            
            return currentAge;
        };

        setAge(calculateAge());
    }, []);

    const aboutContent = `I'm Rivan Jarjes, a ${age} year old CS student from the Greater Toronto Area. I'm primarily interested in software development ` + 
    `and artificial intelligence applications. I'm currently studying Computer Science at Toronto Metropolitan University (2024-2029) and I'm ` + 
    `constantly looking for opportunities to learn and grow as a software engineer. I started programming when I was 11 years old and wanted ` + 
    `to make my own video games. I've since then grown as a programmer and I hope to continue to do so.`;

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

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="about" className="min-h-[70vh] flex items-center justify-center py-20">
            <div className="max-w-3xl px-8">
                <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-[var(--accent-color)]">
                    <span className="relative flex flex-wrap">
                        {renderText(aboutTitle, 0, 0.05)}
                    </span>
                </h2>
                <p className="text-xl text-[var(--secondary-text)] leading-relaxed">
                    <span className="relative flex flex-wrap">
                        {renderText(aboutContent, aboutTitle.length * 0.05 + 0.1, 0.01)}
                        <span 
                            className={`inline-block opacity-0 text-[var(--accent-color)] ${isVisible ? 'animate-[appear_0.1s_forwards,blink_0.5s_step-end_infinite] ' : ''}`}
                            style={{ 
                                animationDelay: `${(aboutContent.length * 0.01) + (aboutTitle.length * 0.05) + 0.1}s, ${(aboutContent.length * 0.01) + (aboutTitle.length * 0.05) + 0.2}s`,
                                opacity: 0
                            }}
                        >
                            _
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
}

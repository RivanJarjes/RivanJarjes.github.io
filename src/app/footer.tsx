'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5
            }
        );

        const footer = document.getElementById('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer id="footer" className="py-6 sm:py-8 mt-12 sm:mt-20 border-t border-[var(--border-color)]">
            <div className="max-w-3xl mx-auto px-4 sm:px-8">
                <div 
                    className={`text-center opacity-0 transform translate-y-4 transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : ''}
                    `}
                >
                    <p className="text-[var(--secondary-text)] italic mb-2">&ldquo;Any fool can write code that a computer can understand. Good programmers write code that humans can understand.&rdquo;</p>
                    <p className="text-sm text-[var(--accent-color)]">― Martin Fowler</p>
                </div>
            </div>
        </footer>
    );
}

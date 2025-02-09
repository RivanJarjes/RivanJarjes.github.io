'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { UilLink } from '@iconscout/react-unicons'
import ReactMarkdown from 'react-markdown';

interface Media {
    type: 'image' | 'video';
    src: string;
}

interface Project {
    name: string;
    short_description: string;
    long_description: string;
    link: string;
    media?: Media[];
}

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const projectsTitle = "projects";
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${window.location.origin}/projects.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data.projects);
                setError(null);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                setError('Failed to load projects');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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
                        animationDelay: `${(projectsTitle.length * 0.05) + 0.2}s, ${(projectsTitle.length * 0.05) + 0.3}s`,
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
                threshold: 0.1,
                rootMargin: '50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const handleProjectClick = (e: React.MouseEvent, project: Project) => {
        e.preventDefault();
        setSelectedProject(project);
        
        // Check if we're on mobile
        const isMobile = window.innerWidth < 1024;
        
        if (isMobile) {
            setTimeout(() => {
                const headerHeight = 20;
                const targetPosition = window.pageYOffset + (sectionRef.current?.getBoundingClientRect().top || 0);
                
                window.scrollTo({
                    top: Math.max(0, targetPosition - headerHeight),
                    behavior: 'auto'
                });
                
                // Instant scroll for terminal on mobile
                if (terminalRef.current) {
                    terminalRef.current.scrollTop = 0;
                }
            }, 0);
        } else {
            // On desktop, only scroll the terminal content smoothly
            if (terminalRef.current) {
                terminalRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div 
            ref={sectionRef}
            id="projects" 
            className="min-h-[70vh] flex items-center justify-center py-20"
        >
            <div className="max-w-6xl px-4 sm:px-8 w-full">
                <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-[var(--accent-color)]">
                    <span className="relative flex flex-wrap">
                        {renderText(projectsTitle, 0, 0.05)}
                    </span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    {/* Terminal Display */}
                    <div 
                        ref={terminalRef}
                        className="bg-black rounded-lg p-4 sm:p-6 font-mono text-green-500 lg:sticky lg:top-24 terminal-scroll order-1"
                        style={{ 
                            height: selectedProject ? 'calc(100vh - 8rem)' : 'auto',
                            maxHeight: selectedProject ? '600px' : 'auto',
                            minHeight: selectedProject ? '300px' : 'auto',
                            overflowY: selectedProject ? 'auto' : 'hidden'
                        }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-red-500">●</span>
                            <span className="text-yellow-500">●</span>
                            <span className="text-green-500">●</span>
                        </div>
                        {selectedProject ? (
                            <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
                                <div className="border-b border-green-500/20 pb-4">
                                    <span className="text-green-500/50">$ project name:</span>
                                    <h4 className="text-xl font-bold mt-2">{selectedProject.name}</h4>
                                </div>
                                <div className="border-b border-green-500/20 pb-4">
                                    <span className="text-green-500/50">$ project link:</span>
                                    <a 
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 mt-2 hover:text-green-400 transition-colors group"
                                    >
                                        <span className="truncate max-w-[90%]" title={selectedProject.link}>
                                            {selectedProject.link}
                                        </span>
                                        <UilLink className="w-4 h-4 fill-green-500 group-hover:fill-green-400 transition-colors shrink-0" />
                                    </a>
                                </div>
                                {selectedProject.media && selectedProject.media.length > 0 && (
                                    <div className="border-b border-green-500/20 pb-4">
                                        <span className="text-green-500/50">$ project media:</span>
                                        <div className="mt-4 space-y-4">
                                            {selectedProject.media.map((media, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden">
                                                    {media.type === 'image' ? (
                                                        <Image 
                                                            src={media.src} 
                                                            alt={`${selectedProject.name} preview`}
                                                            width={800}
                                                            height={450}
                                                            className="w-full h-auto"
                                                        />
                                                    ) : (
                                                        <video 
                                                            src={media.src}
                                                            controls
                                                            className="w-full h-auto"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <span className="text-green-500/50">$ project description:</span>
                                    <div className="mt-2 leading-relaxed prose prose-invert prose-green max-w-none">
                                        <ReactMarkdown
                                            components={{
                                                h1: ({...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                                                h2: ({...props}) => <h2 className="text-xl font-bold mb-3" {...props} />,
                                                h3: ({...props}) => <h3 className="text-lg font-bold mb-2" {...props} />,
                                                p: ({...props}) => <p className="mb-4" {...props} />,
                                                ul: ({...props}) => <ul className="list-disc pl-4 mb-4" {...props} />,
                                                ol: ({...props}) => <ol className="list-decimal pl-4 mb-4" {...props} />,
                                                li: ({...props}) => <li className="mb-1" {...props} />,
                                                a: ({...props}) => (
                                                    <a 
                                                        className="text-green-400 hover:underline" 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        {...props} 
                                                    />
                                                ),
                                                code: ({...props}) => (
                                                    <code className="bg-green-900/20 rounded px-1" {...props} />
                                                ),
                                                pre: ({...props}) => (
                                                    <pre className="bg-black/50 rounded p-4 mb-4 overflow-x-auto" {...props} />
                                                ),
                                            }}
                                        >
                                            {selectedProject.long_description}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-green-500/50">
                                Select a project to view details...
                            </div>
                        )}
                    </div>

                    {/* Project List */}
                    <div 
                        className="projects-scroll order-2" 
                        style={{ 
                            height: 'auto',
                            minHeight: 'auto',
                            maxHeight: 'none',
                            overflow: 'visible'
                        }}
                    >
                        {isLoading ? (
                            <div className="text-center text-[var(--secondary-text)]">
                                Loading projects...
                            </div>
                        ) : error ? (
                            <div className="text-center text-red-500">
                                {error}
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {projects.map((project, index) => (
                                    <div 
                                        key={index}
                                        className={`opacity-0 transform translate-y-4 transition-all duration-300 ease-out
                                            ${isVisible ? 'opacity-100 translate-y-0' : ''}
                                        `}
                                        style={{ transitionDelay: `${(projectsTitle.length * 0.05) + 0.2 + (index * 0.05)}s` }}
                                    >
                                        <div 
                                            onClick={(e) => handleProjectClick(e, project)}
                                            className={`block p-6 rounded-lg border transition-colors duration-200 cursor-pointer
                                                ${selectedProject?.name === project.name 
                                                    ? 'border-[var(--accent-color)]' 
                                                    : 'border-[var(--border-color)] hover:border-[var(--accent-color)]'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-2xl font-bold text-[var(--accent-color)]">
                                                    {project.name}
                                                </h3>
                                                <a 
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="p-1 hover:opacity-80 transition-opacity"
                                                >
                                                    <UilLink className="w-5 h-5 fill-[var(--accent-color)]" />
                                                </a>
                                            </div>
                                            <p className="text-[var(--secondary-text)]">
                                                {project.short_description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

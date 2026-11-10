export const profile = {
    name: 'Rivan Jarjes',
    role: 'Software Developer Intern @ Geotab · CS @ TMU',
    location: 'Toronto, ON',
    bio: [
        "I'm a Computer Science student at Toronto Metropolitan University who likes building backend systems, developer tooling, and products people actually use.",
        "Right now I'm a software developer intern at Geotab, working on infrastructure for AI coding agents, and a part-time research assistant at the University of Toronto, building a learning platform used by hundreds of students.",
    ],
    links: [
        { label: 'GitHub', href: 'https://github.com/rivanjarjes' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/rivanjarjes' },
        { label: 'Email', href: 'mailto:rivanjarjes@gmail.com' },
        { label: 'Resume', href: '/resume.pdf' },
    ],
};

export interface Experience {
    company: string;
    href?: string;
    role: string;
    location: string;
    start: string;
    end: string;
    points: string[];
}

export const experience: Experience[] = [
    {
        company: 'Geotab',
        href: 'https://www.geotab.com',
        role: 'Software Developer Intern',
        location: 'Oakville, ON',
        start: 'Sep 2025',
        end: 'Dec 2026',
        points: [
            'Built and deployed a Kubernetes-based Python backend for AI coding agents, letting 82 developers launch Jira-driven implementation, code-review, and testing workflows.',
            'Cut CI build-stage runtime by 16.1% (3.2 min/run) across 4 .NET repositories by enabling NuGet package caching.',
            'Resolved a 61-issue backlog of API encoding/decoding defects by centralizing request/response handling in Axios interceptors, backed by regression tests.',
            'Expanded React production telemetry to capture 53 previously untracked errors in 2 months.',
        ],
    },
    {
        company: 'University of Toronto',
        role: 'Research Assistant, Software Engineering & Applied AI',
        location: 'Toronto, ON',
        start: 'May 2025',
        end: 'Present',
        points: [
            'Lead full-stack development of a learning platform used by 400+ students across 5 courses, with REST and WebSocket APIs built on FastAPI, PostgreSQL, Next.js, and React.',
            'Architected event-driven services on GCP Cloud Run, Pub/Sub, Redis, and PostgreSQL, processing 1,696 async jobs at 99.9% completion with peaks of 425 jobs/day.',
            'Built a real-time classroom presentation system used in 89 live sessions, syncing 21 displays for up to 50 concurrent participants.',
        ],
    },
    {
        company: 'Metropolitan Game Studios',
        href: 'https://metropolitangamestudios.ca',
        role: 'Web Developer',
        location: 'Toronto, ON',
        start: 'Apr 2025',
        end: 'Apr 2026',
        points: [
            "Led development of the TMU club's public website with Next.js, React, and Tailwind CSS, covering team profiles, events, and game showcases.",
        ],
    },
];

export interface Project {
    name: string;
    year: string;
    description: string;
    stack: string[];
    links: { label: string; href: string }[];
}

export const projects: Project[] = [
    {
        name: 'image2taxonomy',
        year: '2025',
        description:
            "Event-driven product classifier. A Rails + Sidekiq/Redis pipeline dispatches merchant images to a Go microservice hosting Qwen3-VL, constrained by a GBNF grammar generated from Shopify's product taxonomy so it only returns schema-valid categories.",
        stack: ['Ruby on Rails', 'Go', 'Redis', 'Sidekiq'],
        links: [{ label: 'GitHub', href: 'https://github.com/RivanJarjes/image2taxonomy' }],
    },
    {
        name: 'arc-tools-web',
        year: '2025',
        description:
            'Browser-based ARC assembly simulator used by TMU Computer Architecture students, with instruction execution, register/memory inspection, breakpoints, syntax validation, and step-through debugging.',
        stack: ['TypeScript', 'Next.js', 'React'],
        links: [
            { label: 'GitHub', href: 'https://github.com/RivanJarjes/arc-tools-web' },
            { label: 'Live', href: '/arc-simulator' },
        ],
    },
    {
        name: 'miniCrosswordGenerator',
        year: '2025',
        description:
            'NYT Mini-style 5x5 crossword generator that uses LLMs to produce themed words and clues, with connectivity and quality validation.',
        stack: ['Python', 'Spring Boot', 'Next.js', 'OpenAI API'],
        links: [{ label: 'GitHub', href: 'https://github.com/RivanJarjes/miniCrosswordGenerator' }],
    },
    {
        name: 'textEditor',
        year: '2025',
        description:
            'Text editor written from scratch in C++ using a piece table buffer, with native macOS file dialogs and clipboard integration.',
        stack: ['C++', 'SFML', 'Cocoa'],
        links: [{ label: 'GitHub', href: 'https://github.com/RivanJarjes/textEditor' }],
    },
    {
        name: 'monoChess',
        year: '2023',
        description: 'Chess game with local play and peer-to-peer online multiplayer over a custom networking protocol.',
        stack: ['C#', 'MonoGame'],
        links: [{ label: 'GitHub', href: 'https://github.com/RivanJarjes/monoChess' }],
    },
];

export const education = {
    school: 'Toronto Metropolitan University',
    degree: 'B.Sc. (Honours) Computer Science, Co-op',
    start: 'Sep 2024',
    end: 'May 2028',
    details: [
        'NSERC Undergraduate Student Research Award (2025, 2026)',
        "Dean's List (2024–25, 2025–26)",
    ],
};

export const skills: { label: string; items: string[] }[] = [
    { label: 'Languages', items: ['Python', 'Go', 'TypeScript', 'JavaScript', 'C#', 'SQL'] },
    { label: 'Frameworks', items: ['React', 'Next.js', 'FastAPI', '.NET', 'Ruby on Rails'] },
    { label: 'Infrastructure', items: ['GCP', 'AWS', 'Kubernetes', 'Docker', 'Cloud Run', 'Pub/Sub'] },
    { label: 'Tools', items: ['PostgreSQL', 'Redis', 'Git', 'CI/CD', 'Linux', 'pytest', 'xUnit'] },
];

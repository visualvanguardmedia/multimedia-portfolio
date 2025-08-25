import { PortfolioVideo, Skill, Experience, Testimonial } from '@/types';

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: '1',
    title: '2025 Colorist & DP Reel',
    description: 'Professional cinematography and color grading showcase featuring diverse projects from documentary work to commercial productions. This reel demonstrates advanced color correction techniques, creative grading workflows, and cinematographic expertise across multiple formats.',
    platform: 'youtube',
    youtubeId: 'Hhpvn-LIu-w',
    youtubeUrl: 'https://youtu.be/Hhpvn-LIu-w',
    thumbnail: 'https://i.ytimg.com/vi/Hhpvn-LIu-w/hqdefault.jpg',
    duration: '2:45',
    category: 'Showreel',
    tags: ['Color Grading', 'Cinematography', 'DaVinci Resolve', 'Professional Reel'],
    role: 'Director of Photography & Colorist',
    technologies: ['DaVinci Resolve', 'RED Camera', 'Sony FX6', 'Color Wheels', 'LUTs'],
    client: 'Visual Vanguard Media',
    year: 2025,
    featured: true,
  },
  {
    id: '3',
    title: 'FBI Whistleblower: Israel Has Corrupted The US Government',
    description: 'Professional interview production featuring multi-camera setup, advanced lighting design, and precise color grading. This documentary-style interview demonstrates expertise in creating compelling visual narratives for serious journalistic content with technical excellence.',
    platform: 'youtube',
    youtubeId: 'fMeT_FAqWjo',
    youtubeUrl: 'https://youtu.be/fMeT_FAqWjo',
    thumbnail: 'https://i.ytimg.com/vi/fMeT_FAqWjo/hqdefault.jpg',
    duration: '45:30',
    category: 'Documentary',
    tags: ['Interview Production', 'Multi-camera', 'Color Grading', 'Documentary'],
    role: 'Director of Photography & Post-Production Supervisor',
    technologies: ['Multi-cam Setup', 'Professional Lighting', 'DaVinci Resolve', 'Audio Sync'],
    client: 'MintPress News',
    year: 2024,
    featured: true,
    testimonial: {
      name: 'Mnar Adley',
      role: 'Editor-in-Chief',
      company: 'MintPress News',
      quote: 'The technical quality and professional presentation elevated our interview content to broadcast standard. Exceptional work in both production and post-production phases.'
    }
  },
  {
    id: '4',
    title: 'The Resurgence of Auto-Regulation in Powerlifting',
    description: 'Professional podcast production featuring expert audio engineering, multi-track recording, and seamless post-production. This long-form content demonstrates proficiency in podcast workflow optimization and audio quality enhancement.',
    platform: 'youtube',
    youtubeId: 'fS2aLPL0GwY',
    youtubeUrl: 'https://youtu.be/fS2aLPL0GwY',
    thumbnail: 'https://i.ytimg.com/vi/fS2aLPL0GwY/hqdefault.jpg',
    duration: '58:20',
    category: 'Podcast',
    tags: ['Podcast Production', 'Audio Engineering', 'Long-form Content'],
    role: 'Audio Producer & Post-Production Engineer',
    technologies: ['Pro Tools', 'Audition', 'Multi-track Recording', 'Audio Enhancement'],
    client: 'Zao Strength',
    year: 2024,
    featured: false,
  },
  {
    id: '5',
    title: 'The Pay Off | A Powerlifting Short Film',
    description: 'Creative short film showcasing advanced editing techniques, compelling storytelling, and cinematic production values. This project demonstrates ability to create emotionally engaging content that combines sports documentary with narrative filmmaking elements.',
    platform: 'youtube',
    youtubeId: 'opHQQrtgCWM',
    youtubeUrl: 'https://youtu.be/opHQQrtgCWM',
    thumbnail: 'https://i.ytimg.com/vi/opHQQrtgCWM/hqdefault.jpg',
    duration: '8:45',
    category: 'Creative',
    tags: ['Short Film', 'Creative Editing', 'Storytelling', 'Sports Documentary'],
    role: 'Director, Editor & Cinematographer',
    technologies: ['Premiere Pro', 'After Effects', 'Color Grading', 'Sound Design'],
    client: 'Zao Strength',
    year: 2024,
    featured: true,
    testimonial: {
      name: 'Jake Remmert',
      role: 'Founder',
      company: 'Zao Strength',
      quote: 'The creative vision and technical execution brought our story to life in ways we never imagined. This film perfectly captures the essence of powerlifting dedication.'
    }
  },
  {
    id: '6',
    title: "A. Parker's Garage Doors | Meet the Owner",
    description: 'Professional commercial testimonial video featuring expert interview techniques, corporate branding integration, and polished post-production. This project showcases ability to create authentic, engaging business content that drives customer trust and conversion.',
    platform: 'youtube',
    youtubeId: 'nR3dpWKxbOM',
    youtubeUrl: 'https://youtu.be/nR3dpWKxbOM',
    thumbnail: 'https://i.ytimg.com/vi/nR3dpWKxbOM/hqdefault.jpg',
    duration: '3:42',
    category: 'Commercial',
    tags: ['Commercial Video', 'Testimonial', 'Corporate Branding', 'Business Content'],
    role: 'Producer, Director & Editor',
    technologies: ['Professional Lighting', 'Premiere Pro', 'Corporate Graphics', 'Audio Enhancement'],
    client: "A. Parker's Garage Doors",
    year: 2024,
    featured: false,
    testimonial: {
      name: 'Adam Parker',
      role: 'Owner',
      company: "A. Parker's Garage Doors",
      quote: 'The video perfectly represents our family business values and has significantly improved our customer engagement. Professional quality that exceeded our expectations.'
    }
  },
  // Instagram Reels - Visual Vanguard Media Social Content
  {
    id: '7',
    title: 'Rookie Run Club PT - Training Motivation Reel',
    description: 'High-energy fitness content showcasing dynamic training sequences with professional cinematography and motivational storytelling. Features advanced editing techniques, color grading, and sound design to create engaging social media content that drives community engagement.',
    platform: 'instagram',
    instagramId: 'DCgqBpTMqN_',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DCgqBpTMqN_/',
    thumbnail: 'https://via.placeholder.com/600x400/0d9488/ffffff?text=Rookie+Run+Club+PT',
    duration: '0:30',
    category: 'Social Media',
    tags: ['Fitness Content', 'Social Media', 'Training Motivation', 'Quick Edit'],
    role: 'Content Creator & Editor',
    technologies: ['Premiere Pro', 'Color Grading', 'Sound Design', 'Motion Graphics'],
    client: 'Rookie Run Club PT',
    year: 2024,
    featured: false,
  },
  {
    id: '8',
    title: 'Rookie Run Club PT - Workout Highlights',
    description: 'Professional fitness content creation featuring dynamic workout sequences and motivational messaging. Showcases expertise in fast-paced editing, color correction, and social media optimization for maximum engagement and reach.',
    platform: 'instagram',
    instagramId: 'DBg-Tl1M5QD',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DBg-Tl1M5QD/',
    thumbnail: 'https://via.placeholder.com/600x400/0d9488/ffffff?text=Rookie+Run+Club+PT',
    duration: '0:28',
    category: 'Social Media',
    tags: ['Fitness Content', 'Social Media', 'Workout Video', 'Fast-Paced Edit'],
    role: 'Content Creator & Editor',
    technologies: ['Premiere Pro', 'Color Grading', 'Audio Sync', 'Social Optimization'],
    client: 'Rookie Run Club PT',
    year: 2024,
    featured: false,
  },
  {
    id: '9',
    title: 'Rookie Run Club PT - Training Journey',
    description: 'Inspiring fitness journey content with professional production values and storytelling techniques. Demonstrates ability to create compelling narrative arcs within short-form content while maintaining high visual and audio quality standards.',
    platform: 'instagram',
    instagramId: 'DA3NuaoMPLO',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DA3NuaoMPLO/',
    thumbnail: 'https://via.placeholder.com/600x400/0d9488/ffffff?text=Rookie+Run+Club+PT',
    duration: '0:32',
    category: 'Social Media',
    tags: ['Fitness Journey', 'Storytelling', 'Social Media', 'Motivational'],
    role: 'Content Creator & Editor',
    technologies: ['Premiere Pro', 'Color Grading', 'Story Structure', 'Audio Design'],
    client: 'Rookie Run Club PT',
    year: 2024,
    featured: false,
  },
  {
    id: '10',
    title: 'Rookie Run Club PT - Community Focus',
    description: 'Community-centered fitness content highlighting group training dynamics and motivational coaching. Features professional editing, color correction, and audio enhancement to showcase the supportive training environment and community building.',
    platform: 'instagram',
    instagramId: 'DAqJH6_MTIl',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DAqJH6_MTIl/',
    thumbnail: 'https://via.placeholder.com/600x400/0d9488/ffffff?text=Rookie+Run+Club+PT',
    duration: '0:29',
    category: 'Social Media',
    tags: ['Community Building', 'Group Fitness', 'Social Media', 'Motivational'],
    role: 'Content Creator & Editor',
    technologies: ['Premiere Pro', 'Audio Enhancement', 'Color Grading', 'Community Focus'],
    client: 'Rookie Run Club PT',
    year: 2024,
    featured: false,
  },
  {
    id: '11',
    title: 'Powerlifting Competition Promotional Video',
    description: 'Dynamic promotional content for a powerlifting competition featuring high-energy editing, motivational messaging, and compelling visual storytelling. Showcases expertise in sports marketing content creation, athlete-focused cinematography, and competitive event promotion designed to drive participation and engagement.',
    platform: 'instagram',
    instagramId: 'C95kfLhyvv9',
    instagramUrl: 'https://www.instagram.com/visual.vanguard.media/reel/C95kfLhyvv9/',
    thumbnail: 'https://via.placeholder.com/600x400/ea580c/ffffff?text=Powerlifting+Competition',
    duration: '0:35',
    category: 'Social Media',
    tags: ['Sports Marketing', 'Competition Promo', 'Powerlifting', 'Event Promotion', 'Athletic Content'],
    role: 'Content Creator & Video Producer',
    technologies: ['Dynamic Editing', 'Sports Cinematography', 'Promotional Graphics', 'Social Media Optimization'],
    client: 'Competition Organizer',
    year: 2024,
    featured: true,
  }
];

export const skills: Skill[] = [
  { name: 'Video Production', level: 98, category: 'Video Production' },
  { name: 'Cinematography', level: 95, category: 'Video Production' },
  { name: 'Color Grading', level: 92, category: 'Video Production' },
  { name: 'Editing (Premiere Pro)', level: 98, category: 'Video Production' },
  { name: 'Motion Graphics (After Effects)', level: 90, category: 'Video Production' },
  { name: 'DaVinci Resolve', level: 94, category: 'Video Production' },
  
  { name: 'Audio Production', level: 88, category: 'Audio Production' },
  { name: 'Podcast Production', level: 85, category: 'Audio Production' },
  { name: 'Sound Design', level: 82, category: 'Audio Production' },
  { name: 'Audio Engineering', level: 87, category: 'Audio Production' },
  
  { name: 'Photoshop', level: 90, category: 'Design & Graphics' },
  { name: 'Illustrator', level: 85, category: 'Design & Graphics' },
  { name: 'Graphic Design', level: 88, category: 'Design & Graphics' },
  { name: 'Brand Development', level: 83, category: 'Design & Graphics' },
  
  { name: 'Multi-camera Production', level: 95, category: 'Technical' },
  { name: 'Lighting Design', level: 92, category: 'Technical' },
  { name: 'Camera Operation', level: 96, category: 'Technical' },
  { name: 'Live Streaming', level: 80, category: 'Technical' },
];

export const experience: Experience[] = [
  {
    title: 'Founder & Lead Multimedia Producer',
    company: 'Visual Vanguard Media',
    period: '2020 - Present',
    achievements: [
      'Established full-service multimedia production company specializing in documentary, commercial, and creative content',
      'Produced 150+ video projects across documentary, commercial, and creative categories with 4.9/5 client satisfaction',
      'Developed streamlined production workflows that reduced post-production time by 40% while maintaining quality standards',
      'Built strategic partnerships with news organizations, fitness industry leaders, and local businesses',
      'Created comprehensive video marketing campaigns that increased client engagement by average of 63%'
    ],
    technologies: ['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Pro Tools', 'Multi-camera Systems']
  },
  {
    title: 'Senior Video Producer & Editor',
    company: 'Independent Contractor',
    period: '2015 - 2020',
    achievements: [
      'Collaborated with diverse clients including news organizations, fitness brands, and local businesses',
      'Specialized in interview production, podcast creation, and commercial video content',
      'Developed expertise in color grading and cinematography through continuous professional development',
      'Maintained 98% client retention rate through consistent quality delivery and professional communication',
      'Expanded technical skills to include advanced audio production and multi-format content creation'
    ],
    technologies: ['Adobe Creative Suite', 'Final Cut Pro', 'Logic Pro', 'Professional Audio Equipment']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mnar Adley',
    role: 'Editor-in-Chief',
    company: 'MintPress News',
    quote: 'Visual Vanguard Media consistently delivers broadcast-quality content that elevates our journalistic work. Their technical expertise in multi-camera production and color grading is exceptional.',
    rating: 5,
    projectId: '3'
  },
  {
    id: '2',
    name: 'Jake Remmert',
    role: 'Founder',
    company: 'Zao Strength',
    quote: 'Working with Visual Vanguard has transformed how we present our content. From podcasts to creative films, they understand our vision and execute it flawlessly.',
    rating: 5,
    projectId: '5'
  },
  {
    id: '3',
    name: 'Adam Parker',
    role: 'Business Owner',
    company: "A. Parker's Garage Doors",
    quote: 'The commercial video they created has become our most effective marketing tool. Professional, authentic, and results-driven – exactly what our business needed.',
    rating: 5,
    projectId: '6'
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: 'Creative Director',
    company: 'Digital Media Solutions',
    quote: 'One of the most technically proficient and creatively innovative producers I\'ve worked with. Their ability to handle complex projects while maintaining creative vision is remarkable.',
    rating: 5
  }
];

export const companyMetrics = {
  projectsCompleted: 150,
  yearsExperience: 10,
  clientSatisfaction: 4.9,
  avgEngagementIncrease: 63,
  totalVideoViews: '500K+',
  industryAwards: 3
};

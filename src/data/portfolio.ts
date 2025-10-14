import { PortfolioVideo, Skill, Experience, Testimonial } from '@/types';

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: '1',
    title: '2025 Editorial & Color Grading Reel',
    description: 'Professional editing and color grading showcase featuring diverse projects from documentary work to commercial productions. This reel demonstrates editorial decision-making, advanced color correction techniques, pacing choices, and post-production workflow excellence across multiple formats.',
    platform: 'youtube',
    youtubeId: 'Hhpvn-LIu-w',
    youtubeUrl: 'https://youtu.be/Hhpvn-LIu-w',
    thumbnail: 'https://i.ytimg.com/vi/Hhpvn-LIu-w/hqdefault.jpg',
    duration: '2:45',
    category: 'Showreel',
    tags: ['Video Editing', 'Color Grading', 'DaVinci Resolve', 'Professional Reel'],
    role: 'Senior Editor & Colorist',
    technologies: ['DaVinci Resolve', 'Sony A7IV', 'Sony FX30', 'Color Wheels', 'LUTs'],
    client: 'Visual Vanguard Media',
    year: 2025,
    featured: true,
  },
  {
    id: '3',
    title: 'FBI Whistleblower: Israel Has Corrupted The US Government',
    description: 'Long-form documentary interview showcasing multi-camera editing, narrative structure, and precision color grading. This 45-minute edit demonstrates expertise in maintaining pacing across extended content, seamless multi-angle cutting, and collaborative post-production workflow for serious journalistic storytelling.',
    platform: 'youtube',
    youtubeId: 'fMeT_FAqWjo',
    youtubeUrl: 'https://youtu.be/fMeT_FAqWjo',
    thumbnail: 'https://i.ytimg.com/vi/fMeT_FAqWjo/hqdefault.jpg',
    duration: '45:30',
    category: 'Documentary',
    tags: ['Documentary Editing', 'Multi-camera', 'Color Grading', 'Long-form Content'],
    role: 'Lead Editor & Post-Production Supervisor',
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
    id: '5',
    title: 'The Pay Off | A Powerlifting Short Film',
    description: 'Creative short film showcasing editorial storytelling through rhythmic pacing, emotional arc development, and strategic editing choices. This project demonstrates ability to craft compelling narratives through precise cuts, motion graphics integration, sound design, and collaborative creative problem-solving that elevates sports content into cinematic storytelling.',
    platform: 'youtube',
    youtubeId: 'opHQQrtgCWM',
    youtubeUrl: 'https://youtu.be/opHQQrtgCWM',
    thumbnail: 'https://i.ytimg.com/vi/opHQQrtgCWM/hqdefault.jpg',
    duration: '8:45',
    category: 'Creative',
    tags: ['Short Film', 'Creative Editing', 'Storytelling', 'Motion Graphics'],
    role: 'Editor, Colorist & Motion Graphics',
    technologies: ['DaVinci Resolve', 'After Effects', 'Color Grading', 'Sound Design'],
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
    description: 'Commercial testimonial showcasing editorial pacing for business content, corporate branding integration through motion graphics, and polished post-production workflow. This project demonstrates ability to create authentic, engaging edits that maintain viewer attention while driving customer trust through strategic narrative structure and professional finishing.',
    platform: 'youtube',
    youtubeId: 'nR3dpWKxbOM',
    youtubeUrl: 'https://youtu.be/nR3dpWKxbOM',
    thumbnail: 'https://i.ytimg.com/vi/nR3dpWKxbOM/hqdefault.jpg',
    duration: '3:42',
    category: 'Commercial',
    tags: ['Commercial Editing', 'Testimonial', 'Corporate Branding', 'Business Content'],
    role: 'Editor & Post-Production',
    technologies: ['Professional Lighting', 'DaVinci Resolve', 'Sony A7IV', 'Corporate Graphics'],
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
    title: 'Portugal Marathon - Multi-Brand Collaboration Reel',
    description: 'Extended social media reel showcasing Portugal Marathon athletes with multi-brand integration for Rookie Run Club, Effekt, Mirari.pt, and featuring DJ Betoo. Demonstrates advanced vertical format editing with dynamic transitions, music-synced cuts, creative use of backgrounds optimized for vertical orientation, and seamless integration of multiple brand partners. Fast-paced multi-media editing combines athlete footage, brand messaging, and DJ highlights into cohesive longer-form social content. Showcases ability to balance commercial objectives across multiple stakeholders while maintaining engaging editorial rhythm.',
    platform: 'instagram',
    instagramId: 'DCgqBpTMqN_',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DCgqBpTMqN_/',
    thumbnail: '/images/thumbnails/rookie-run-club.png',
    duration: '0:30',
    category: 'Social Media',
    tags: ['Multi-Brand Collaboration', 'Music-Synced Editing', 'Vertical Format', 'Dynamic Transitions', 'Event Coverage'],
    role: 'Lead Editor & Post-Production',
    technologies: ['DaVinci Resolve', 'Music Sync', 'Vertical Optimization', 'Multi-Media Editing', 'Dynamic Transitions'],
    client: 'Rookie Run Club PT, Effekt, Mirari.pt, DJ Betoo',
    year: 2024,
    featured: true,
  },
  {
    id: '8',
    title: 'Rookie Run Club - Recovery Advertisement',
    description: 'High-energy social media edit demonstrating beat-synced cutting, dynamic pacing, and motivational messaging optimized for Instagram Reels. Showcases expertise in fast-paced editorial decisions, color correction, and format-specific editing techniques for maximum platform engagement.',
    platform: 'instagram',
    instagramId: 'DBg-Tl1M5QD',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DBg-Tl1M5QD/',
    thumbnail: '/images/thumbnails/shakeout-run.png',
    duration: '0:28',
    category: 'Social Media',
    tags: ['Social Media Editing', 'Instagram Reels', 'Fast-Paced Edit', 'Beat-Synced'],
    role: 'Social Media Editor',
    technologies: ['DaVinci Resolve', 'Sony FX30', 'Color Grading', 'Social Optimization'],
    client: 'Rookie Run Club PT',
    year: 2024,
    featured: false,
  },
  {
    id: '10',
    title: 'Rookie Run Club x Oficina Loba - Portugal Collaboration',
    description: 'Brand collaboration reel showcasing complete production skillset: directing, cinematography, editing, color grading, and motion graphics. Created for partnership between Rookie Run Club Portugal and Oficina Loba (hand-printed t-shirt company). Features fast-paced cutting, upbeat rhythm, motion graphics/text overlays, and vibrant color grade that captures the energy of both brands. Demonstrates ability to handle full production cycle from concept to delivery for social media campaigns.',
    platform: 'instagram',
    instagramId: 'DAqJH6_MTIl',
    instagramUrl: 'https://www.instagram.com/rookierunclub_pt/reel/DAqJH6_MTIl/',
    thumbnail: '/images/thumbnails/rookie-run-oficina-loba.png',
    duration: '0:29',
    category: 'Social Media',
    tags: ['Brand Collaboration', 'Fast-Paced Editing', 'Motion Graphics', 'Social Media', 'Color Grading'],
    role: 'Director, Cinematographer, Editor & Colorist',
    technologies: ['DaVinci Resolve', 'Sony FX30', 'Motion Graphics', 'Color Grading', 'Fast Cuts'],
    client: 'Rookie Run Club PT & Oficina Loba',
    year: 2024,
    featured: true,
  },
  {
    id: '19',
    title: 'Malice Pizza x Rookie Run Club - Portugal Promo',
    description: 'Commercial promotional video showcasing complete production skillset including cinematography, editorial pacing, and color grading for brand collaboration. Shot on location in Portugal, this project demonstrates ability to capture compelling commercial footage, craft engaging narrative through editing, and deliver polished color grade that enhances brand aesthetics. Fast-paced editing optimized for social media with attention to visual storytelling and commercial appeal.',
    platform: 'instagram',
    instagramId: 'DB91bl2sXDe',
    instagramUrl: 'https://www.instagram.com/p/DB91bl2sXDe/',
    thumbnail: '/images/thumbnails/malice-pizza.png',
    duration: '0:35',
    category: 'Commercial',
    tags: ['Commercial Editing', 'Brand Collaboration', 'Color Grading', 'Social Media', 'Promotional'],
    role: 'Cinematographer, Editor & Colorist',
    technologies: ['DaVinci Resolve', 'Sony FX30', 'Color Grading', 'Commercial Editing'],
    client: 'Malice Pizza & Rookie Run Club PT',
    year: 2024,
    featured: true,
  },
  {
    id: '18',
    title: 'Hyperscale Data Centers Taking Over Minnesota',
    description: 'Long-form documentary investigation showcasing post-production collaboration, audio editing excellence, and story structure development for investigative journalism. Editorial responsibilities included audio post-production and mixing, narrative structure consultation, clip organization and tagging, technical support for the editing team, and mentoring on DaVinci Resolve workflows. Demonstrates ability to support editorial teams while maintaining technical excellence across a complex 10-minute documentary piece.',
    platform: 'youtube',
    youtubeId: 'c5in5xNJkk0',
    youtubeUrl: 'https://youtu.be/c5in5xNJkk0',
    thumbnail: 'https://i.ytimg.com/vi/c5in5xNJkk0/hqdefault.jpg',
    duration: '10:17',
    category: 'Documentary',
    tags: ['Documentary Editing', 'Audio Post-Production', 'Story Structure', 'Technical Support', 'Investigative Journalism'],
    role: 'Post-Production Supervisor & DP',
    technologies: ['DaVinci Resolve', 'Audio Post-Production', 'Editorial Consultation', 'Technical Mentorship'],
    client: 'Breakthrough News',
    year: 2025,
    featured: true,
  },
  // Additional Professional Videos - Expanded Skills Demonstration
  {
    id: '13',
    title: 'Intuitive Training Concept Reel / TikTok Trend',
    description: 'Creative YouTube Short adapting viral TikTok color-action trend format for training content. Each concept describing intuitive training is matched with corresponding color grade and visual treatment. Demonstrates ability to identify trending social media formats, adapt them for niche audiences, and execute quick-turnaround creative edits with color grading for vertical short-form content. Shows editorial flexibility and understanding of platform-specific trends.',
    platform: 'youtube',
    youtubeId: 'LHGkka7MUSQ',
    youtubeUrl: 'https://youtube.com/shorts/LHGkka7MUSQ',
    thumbnail: 'https://i.ytimg.com/vi/LHGkka7MUSQ/hqdefault.jpg',
    duration: '0:60',
    category: 'Social Media',
    tags: ['YouTube Shorts', 'TikTok Trends', 'Creative Editing', 'Color Grading', 'Vertical Video'],
    role: 'Editor & Colorist',
    technologies: ['DaVinci Resolve', 'Trend Adaptation', 'Color Grading', 'Vertical Format'],
    client: 'Visual Vanguard Media',
    year: 2024,
    featured: false,
  },
  {
    id: '14',
    title: 'How AI will Impact the Fitness Industry - Motion Graphics Highlight',
    description: 'Creative motion graphics showcase featuring Adobe After Effects animation, kinetic typography, and sophisticated visual effects. Demonstrates expertise in motion design principles, timing and easing, brand-consistent animation, and collaborative creative workflow for engaging social media content.',
    platform: 'instagram',
    instagramId: 'CqRSxM9I9t0',
    instagramUrl: 'https://www.instagram.com/p/CqRSxM9I9t0/',
    thumbnail: '/images/thumbnails/ai-fitness-industry.webp',
    duration: '0:30',
    category: 'Creative',
    tags: ['Motion Graphics', 'After Effects', 'Animation Design', 'Visual Effects'],
    role: 'Motion Graphics Editor',
    technologies: ['After Effects', 'Kinetic Typography', 'Visual Effects', 'Animation Principles'],
    client: 'Visual Vanguard Media',
    year: 2023,
    featured: true,
  }
];

export const skills: Skill[] = [
  // Video Editing & Post-Production (Primary)
  { name: 'Video Editing', level: 95, category: 'Video Production' },
  { name: 'Adobe Premiere Pro', level: 92, category: 'Video Production' },
  { name: 'DaVinci Resolve', level: 98, category: 'Video Production' },
  { name: 'Post-Production Workflow', level: 94, category: 'Video Production' },
  { name: 'Story Structure & Pacing', level: 93, category: 'Video Production' },
  
  // Motion Graphics & VFX
  { name: 'Adobe After Effects', level: 90, category: 'Video Production' },
  { name: 'Motion Graphics', level: 88, category: 'Video Production' },
  { name: 'Visual Effects', level: 85, category: 'Video Production' },
  { name: 'Fusion (DaVinci)', level: 83, category: 'Video Production' },
  
  // Color Grading & Finishing
  { name: 'Color Grading', level: 96, category: 'Video Production' },
  { name: 'Color Correction', level: 94, category: 'Video Production' },
  
  // Design & Graphics
  { name: 'Photoshop', level: 90, category: 'Design & Graphics' },
  { name: 'Illustrator', level: 85, category: 'Design & Graphics' },
  { name: 'Graphic Design', level: 88, category: 'Design & Graphics' },
  { name: 'Brand Development', level: 83, category: 'Design & Graphics' },
  
  // Audio Post-Production
  { name: 'Audio Post-Production', level: 88, category: 'Audio Production' },
  { name: 'Sound Design', level: 85, category: 'Audio Production' },
  { name: 'Audio Mixing', level: 87, category: 'Audio Production' },
  { name: 'Pro Tools', level: 84, category: 'Audio Production' },
  { name: 'Adobe Audition', level: 82, category: 'Audio Production' },
  
  // Technical Skills
  { name: 'Multi-camera Editing', level: 95, category: 'Technical' },
  { name: 'Media Management', level: 92, category: 'Technical' },
  { name: 'Compression & Encoding', level: 90, category: 'Technical' },
  { name: 'Workflow Optimization', level: 93, category: 'Technical' },
];

export const experience: Experience[] = [
  {
    title: 'Founder & Lead Editor',
    company: 'Visual Vanguard Media',
    period: '2020 - Present',
    achievements: [
      'Lead editor for 150+ projects including long-form documentaries, short-form social content, and commercial videos with 4.9/5 client satisfaction',
      'Developed efficient post-production workflows using Adobe Premiere Pro and DaVinci Resolve, reducing turnaround time by 40%',
      'Collaborated with creative teams, directors, and clients to deliver compelling narratives across documentary, commercial, and social media content',
      'Specialized in multi-camera editing, motion graphics, color grading, and audio post-production for diverse content needs',
      'Created video marketing campaigns that increased client engagement by average of 63% through strategic editing and pacing choices'
    ],
    technologies: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop', 'Pro Tools', 'Media Encoder']
  },
  {
    title: 'Senior Editor & Post-Production Specialist',
    company: 'Independent Contractor',
    period: '2015 - 2020',
    achievements: [
      'Edited diverse content for news organizations, fitness brands, and local businesses with focus on storytelling and technical excellence',
      'Specialized in documentary editing, interview production, podcast post-production, and commercial video content',
      'Mastered Adobe Creative Suite and DaVinci Resolve through continuous professional development and client projects',
      'Maintained 98% client retention rate through collaborative approach, consistent quality, and efficient workflow management',
      'Expanded editorial skills to include advanced motion graphics, color grading, and multi-format content optimization'
    ],
    technologies: ['Adobe Creative Suite', 'Premiere Pro', 'After Effects', 'Final Cut Pro', 'DaVinci Resolve', 'Pro Tools']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mnar Adley',
    role: 'Editor-in-Chief',
    company: 'MintPress News',
    quote: 'Jim\'s editorial expertise consistently delivers broadcast-quality content that elevates our journalistic work. His precision in multi-camera editing, pacing, and color grading is exceptional.',
    rating: 5,
    projectId: '3'
  },
  {
    id: '2',
    name: 'Jake Remmert',
    role: 'Founder',
    company: 'Zao Strength',
    quote: 'Jim\'s editorial vision transformed how we present our content. His ability to craft compelling narratives through editing and motion graphics exceeded our expectations.',
    rating: 5,
    projectId: '5'
  },
  {
    id: '3',
    name: 'Adam Parker',
    role: 'Business Owner',
    company: "A. Parker's Garage Doors",
    quote: 'The commercial video Jim edited has become our most effective marketing tool. His collaborative approach and attention to pacing created professional, authentic content.',
    rating: 5,
    projectId: '6'
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: 'Creative Director',
    company: 'Digital Media Solutions',
    quote: 'One of the most technically proficient and creatively innovative editors I\'ve worked with. Jim\'s collaborative approach and problem-solving skills make complex post-production seamless.',
    rating: 5
  }
];

export const companyMetrics = {
  projectsCompleted: 150,
  yearsExperience: 10,
  avgEngagementIncrease: 63,
  totalVideoViews: '500K+',
  industryAwards: 3
};

import { PortfolioVideo, Skill, Experience, Testimonial } from '@/types';
import portfolioContent from '../../content/portfolio.json';
import testimonialsContent from '../../content/testimonials.json';
import settingsContent from '../../content/settings.json';

export const portfolioVideos: PortfolioVideo[] = portfolioContent.videos as PortfolioVideo[];

export const testimonials: Testimonial[] = testimonialsContent.testimonials as Testimonial[];

export const companyMetrics = settingsContent.metrics;

export const contactInfo = settingsContent.contact;

// Skills and Experience remain static (less frequently edited)
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
  { name: 'Studio Photography', level: 85, category: 'Technical' },
  { name: 'Stop Motion Workflow', level: 78, category: 'Technical' },
  { name: 'OBS / Live Streaming', level: 82, category: 'Technical' },
  { name: 'Blackmagic Web Presenter', level: 80, category: 'Technical' },
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

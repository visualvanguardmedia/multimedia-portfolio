'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { ContactForm } from '@/types';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send data to your backend/email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jim@visualvanguardmedia.com',
      href: 'mailto:jim@visualvanguardmedia.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '952-270-5165',
      href: 'tel:+19522705165'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available across the United States, central to St. Paul, Minnesota',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let&rsquo;s Create Together
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Ready to bring your vision to life? Get in touch and let&rsquo;s discuss
            how we can elevate your next multimedia project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white text-lg hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white text-lg">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Business Hours */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                Emergency projects available 24/7
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-600/20 to-green-800/20 border border-green-600/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Quick Response</span>
              </div>
              <p className="text-slate-300">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300 mb-6">
                  Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.h3 
                  variants={fadeInUp}
                  className="text-2xl font-bold text-white mb-6"
                >
                  Send us a Message
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    placeholder="Project inquiry, quote request, etc."
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="documentary">Documentary</option>
                      <option value="commercial">Commercial</option>
                      <option value="creative">Creative/Artistic</option>
                      <option value="podcast">Podcast Production</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-y"
                    placeholder="Tell us about your project, vision, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

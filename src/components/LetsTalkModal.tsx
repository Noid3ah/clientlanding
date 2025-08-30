'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function LetsTalkModal() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'peddiework1@gmail.com', // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Success
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});

      // Show success message for 3 seconds, then close
      setTimeout(() => {
        setSubmitStatus('idle');
        // Close the modal (you might need to implement this based on your dialog state management)
      }, 3000);
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Let&apos;s Talk</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className='text-orange-500'>Let&apos;s Talk</span>
          </DialogTitle>
          <DialogDescription>peddiework1@gmail.com</DialogDescription>
        </DialogHeader>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
            <p className='text-green-800 font-medium'>
              ✅ Message sent successfully! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
            <p className='text-red-800 font-medium'>
              ❌ There was an error sending your message. Please try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Name Field */}
          <div className='space-y-2'>
            <Label htmlFor='name'>Full Name *</Label>
            <Input
              id='name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Enter your full name'
              required
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className='text-sm text-red-600'>{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className='space-y-2'>
            <Label htmlFor='email'>Email Address *</Label>
            <Input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email address'
              required
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className='text-sm text-red-600'>{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className='space-y-2'>
            <Label htmlFor='message'>Message *</Label>
            <Textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder="I'm always looking for new opportunities to work with clients. Tell us about your project..."
              rows={4}
              required
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className='text-sm text-red-600'>{errors.message}</p>
            )}
          </div>

          <div className='flex flex-col sm:flex-row sm:justify-end'>
            <Button
              type='submit'
              className='rounded-lg h-12 px-8 w-full'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

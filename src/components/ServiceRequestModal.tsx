'use client';

import React, { useState } from 'react';
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

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  service: string;
  timing: string;
  duration: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    timing: '',
    duration: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const services = [
    { value: 'tax-accounting', label: 'Tax Accounting' },
    { value: 'bookkeeping', label: 'Bookkeeping' },
    { value: 'client-management', label: 'Client Management' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const durations = [
    { value: 'one-time', label: 'One-time service' },
    { value: 'monthly', label: 'Monthly ongoing' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'annually', label: 'Annually' },
    { value: 'custom', label: 'Custom arrangement' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.service.trim()) {
      newErrors.service = 'Service selection is required';
    }

    if (!formData.timing.trim()) {
      newErrors.timing = 'Timing is required';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        service: formData.service,
        timing: formData.timing,
        duration: formData.duration,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        description: formData.description,
        to_email: 'peddiework@gmail.com', // Your email address
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
        service: '',
        timing: '',
        duration: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        description: '',
      });
      setErrors({});

      // Show success message for 3 seconds, then close
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b'>
          <h2 className='text-2xl font-bold text-gray-900'>Request Service</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors'
            aria-label='Close modal'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-lg mx-6 mt-4'>
            <p className='text-green-800 font-medium'>
              ✅ Thank you! Your service request has been submitted. We&apos;ll
              be in touch soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className='p-4 bg-red-50 border border-red-200 rounded-lg mx-6 mt-4'>
            <p className='text-red-800 font-medium'>
              ❌ There was an error submitting your request. Please try again.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className='p-6 space-y-6'>
          {/* Service Selection */}
          <div>
            <Label
              htmlFor='service'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              What service do you need? *
            </Label>
            <select
              id='service'
              name='service'
              value={formData.service}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black focus:border-orange-500 h-12 ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value=''>Select a service</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className='mt-1 text-sm text-red-600'>{errors.service}</p>
            )}
          </div>

          {/* Timing and Duration */}
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <Label
                htmlFor='timing'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                When do you need this service? *
              </Label>
              <Input
                type='text'
                id='timing'
                name='timing'
                value={formData.timing}
                onChange={handleInputChange}
                required
                placeholder='e.g., ASAP, Next month, Q1 2024'
                className={errors.timing ? 'border-red-500' : ''}
              />
              {errors.timing && (
                <p className='mt-1 text-sm text-red-600'>{errors.timing}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor='duration'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Service duration *
              </Label>
              <select
                id='duration'
                name='duration'
                value={formData.duration}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black focus:border-orange-500 h-12 ${
                  errors.duration ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value=''>Select duration</option>
                {durations.map((duration) => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
              {errors.duration && (
                <p className='mt-1 text-sm text-red-600'>{errors.duration}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <Label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Full Name *
              </Label>
              <Input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Email Address *
              </Label>
              <Input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
              )}
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <Label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Phone Number
              </Label>
              <Input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className='mt-1 text-sm text-red-600'>{errors.phone}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor='company'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Company Name
              </Label>
              <Input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleInputChange}
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && (
                <p className='mt-1 text-sm text-red-600'>{errors.company}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <Label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Tell us more about your needs *
            </Label>
            <Textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder='Please describe your specific requirements, challenges, or any additional information that would help us understand your needs better...'
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && (
              <p className='mt-1 text-sm text-red-600'>{errors.description}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className='flex gap-4 pt-4'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={onClose}
              className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors'
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestModal;

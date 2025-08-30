# EmailJS Setup Guide

Your contact forms are now set up to send actual emails! Here's how to configure EmailJS for both forms:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (peddiework@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Templates

### Template 1: Contact Form (Let's Talk Modal)

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**

```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_contact123`)

### Template 2: Service Request Form

1. Create another new template
2. Use this template content:

**Subject:** New Service Request from {{from_name}} - {{service}}

**Body:**

```
Service Request Details:
=======================

Service Needed: {{service}}
Timing: {{timing}}
Duration: {{duration}}

Contact Information:
===================
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Project Description:
==================
{{description}}

This service request was submitted from your portfolio website.
```

3. Save the template and note down the **Template ID** (e.g., `template_service456`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

### Update LetsTalkModal.tsx:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your actual Service ID
  'YOUR_CONTACT_TEMPLATE_ID', // Replace with your contact form Template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
);
```

### Update ServiceRequestModal.tsx:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your actual Service ID
  'YOUR_SERVICE_TEMPLATE_ID', // Replace with your service request Template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
);
```

## Step 6: Test Your Forms

1. Test the "Let's Talk" contact form
2. Test the "Request Service" form
3. Check your email (peddiework@gmail.com) for both types of submissions

## Features Added to Both Forms:

✅ **Real email sending** to your inbox  
✅ **Form validation** with error messages  
✅ **Loading states** during submission  
✅ **Success/error feedback** for users  
✅ **Form reset** after successful submission  
✅ **shadcn/ui components** for consistent styling  
✅ **Accessibility** improvements

## Free Tier Limits:

- EmailJS free tier: 200 emails/month
- Perfect for portfolio sites!

## Troubleshooting:

- Check browser console for error messages
- Verify all IDs are correct in both modals
- Ensure your email service is connected
- Check spam folder for test emails
- Make sure you're using the right template ID for each form

## Form Types:

1. **Let's Talk Modal** - Simple contact form (name, email, message)
2. **Service Request Modal** - Detailed service inquiry form (service, timing, duration, contact info, description)

Your contact forms are now fully functional and will send real emails to your inbox! 🎉

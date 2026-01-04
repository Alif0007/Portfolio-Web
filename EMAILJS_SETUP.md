# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions at **alaminalif373@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended for alaminalif373@gmail.com)
4. Click **Connect Account** and sign in with your Gmail (alaminalif373@gmail.com)
5. Give it a Service ID (e.g., `service_portfolio`)
6. Click **Create Service**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** Portfolio Contact Form

**Template ID:** `template_contact`

**Email Template Content:**
```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

**To Email:** `{{to_email}}`

**From Name:** `{{from_name}}`

**From Email:** `{{from_email}}`

**Reply To:** `{{from_email}}`

4. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (it looks like: `xxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace the following values (around line 55-57):

```javascript
// Replace these with your actual values:
const serviceID = 'service_portfolio'; // Your Service ID from Step 2
const templateID = 'template_contact'; // Your Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY'; // Your Public Key from Step 4
```

### Example:
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz456';
const publicKey = 'xB7kL9mP2wQ5nR8t';
```

## Step 6: Test the Contact Form

1. Save all files
2. Open your portfolio in the browser
3. Navigate to the Contact section
4. Fill out the form with test data
5. Click "Send Message"
6. Check your email at alaminalif373@gmail.com

## Email Template Variables Explained

- `{{from_name}}` - Name entered in the contact form
- `{{from_email}}` - Email entered in the contact form
- `{{message}}` - Message text from the contact form
- `{{to_email}}` - Your email (alaminalif373@gmail.com) - hardcoded in the code

## Troubleshooting

### Email not sending?
1. Check browser console for errors
2. Verify your EmailJS Service ID, Template ID, and Public Key are correct
3. Make sure you're using the correct Gmail account in EmailJS
4. Check your EmailJS dashboard for usage limits (free tier: 200 emails/month)

### Email going to spam?
1. Check your Gmail spam folder
2. Add your own email to contacts
3. In EmailJS, verify your domain (optional, for production)

### Form shows error message?
1. Open browser console (F12) to see the error
2. Verify internet connection
3. Check EmailJS service status
4. Ensure all three IDs (serviceID, templateID, publicKey) are correct

## Free Tier Limits

- **200 emails per month**
- Perfect for a personal portfolio
- For higher volume, consider upgrading to a paid plan

## Alternative: Using Environment Variables (Recommended for Production)

To keep your EmailJS keys secure, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_portfolio
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.jsx:
```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

**Important:** Add `.env` to your `.gitignore` file (it's already there)

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

Once configured, all contact form submissions will be sent to **alaminalif373@gmail.com**! ✉️

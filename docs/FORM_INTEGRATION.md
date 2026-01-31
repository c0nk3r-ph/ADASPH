# Form Integration Guide

This document provides examples for integrating the contact form with various external form services.

## Current Implementation

The contact form (`components/forms/ContactForm.tsx`) is ready for integration. It includes:
- Client-side validation
- Loading states
- Error handling
- Success feedback

## Integration Options

### 1. Formspree

**Setup**:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL

**Implementation**:

Update `components/forms/ContactForm.tsx` in the `handleSubmit` function:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setFormState({ status: "loading", message: "" });

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setFormState({
      status: "success",
      message: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    setFormState({
      status: "error",
      message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente.",
    });
  }
};
```

**Pros**:
- Free tier available
- No backend required
- Email notifications
- Spam protection

**Cons**:
- Limited submissions on free tier
- Requires external service

### 2. Netlify Forms

**Setup**:
1. Deploy to Netlify
2. Add `netlify` attribute to form

**Implementation**:

Update `components/forms/ContactForm.tsx`:

```tsx
<form 
  onSubmit={handleSubmit} 
  name="contact"
  netlify
  data-netlify="true"
  className="space-y-6"
  noValidate
>
  {/* Hidden input for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
  
  {/* Rest of form fields */}
</form>
```

Update `handleSubmit`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setFormState({ status: "loading", message: "" });

  try {
    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("form-name", "contact");

    const response = await fetch("/", {
      method: "POST",
      body: formDataToSend,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setFormState({
      status: "success",
      message: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    setFormState({
      status: "error",
      message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente.",
    });
  }
};
```

**Pros**:
- Free with Netlify hosting
- Built-in spam protection
- Email notifications
- No API keys needed

**Cons**:
- Only works with Netlify
- Requires Netlify deployment

### 3. EmailJS

**Setup**:
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email service and template
3. Get service ID, template ID, and public key

**Installation**:
```bash
npm install @emailjs/browser
```

**Implementation**:

Update `components/forms/ContactForm.tsx`:

```typescript
import emailjs from "@emailjs/browser";

// Initialize (in useEffect or component mount)
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY");
}, []);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setFormState({ status: "loading", message: "" });

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }
    );

    setFormState({
      status: "success",
      message: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    setFormState({
      status: "error",
      message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente.",
    });
  }
};
```

**Pros**:
- Free tier available
- Direct email sending
- No backend required
- Works with any hosting

**Cons**:
- Limited emails on free tier
- Requires EmailJS account

### 4. Custom API Route (Requires Server)

**Note**: This requires removing `output: "export"` from `next.config.ts`

**Setup**:
1. Create API route: `app/api/contact/route.ts`
2. Set up email service (SendGrid, Resend, etc.)

**Implementation**:

Create `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend"; // or SendGrid, etc.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: "contact@adasph.com",
      to: "admin@adasph.com",
      subject: `Contact Form: ${body.subject || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${body.subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
```

Update `components/forms/ContactForm.tsx`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setFormState({ status: "loading", message: "" });

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setFormState({
      status: "success",
      message: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    setFormState({
      status: "error",
      message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente.",
    });
  }
};
```

**Pros**:
- Full control
- Custom validation
- Can integrate with database
- Professional setup

**Cons**:
- Requires server (no static export)
- More complex setup
- Need to handle email service

## Recommendation

For a static site, **Formspree** or **Netlify Forms** (if using Netlify) are the best options:
- Easy to set up
- Free tiers available
- No backend required
- Reliable and tested

## Environment Variables

If using API keys, add to `.env.local`:

```env
NEXT_PUBLIC_FORMPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

**Note**: For static export, only `NEXT_PUBLIC_*` variables are available at build time.

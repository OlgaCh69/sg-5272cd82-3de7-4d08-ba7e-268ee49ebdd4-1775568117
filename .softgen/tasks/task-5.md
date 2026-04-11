---
title: Create Unified Contact Page with Platform Selector
status: done
priority: high
type: feature
tags: [contact, form, platform-selector]
created_by: agent
created_at: 2026-04-11T21:02:45Z
position: 5
---

## Notes
Create a dedicated contact page at `/contact` with a form that includes platform selection (Instagram/WhatsApp/Telegram). Remove the contact form section from the main landing page.

**Requirements:**
- New contact page at `/contact` route
- Platform selector dropdown (Instagram, WhatsApp, Telegram, All Platforms)
- Update database to include platform field
- Update contact service to handle platform
- Update Edge Function email template to show platform
- Remove contact section from main landing page
- Update all CTAs to link to `/contact` page
- Update Header navigation to point to `/contact`

## Checklist
- [ ] Add platform column to contacts database table
- [ ] Create new contact page at src/pages/contact.tsx
- [ ] Update ContactForm component to include platform selector
- [ ] Update contact service to handle platform field
- [ ] Update Edge Function to include platform in email
- [ ] Remove contact section from main landing page (index.tsx)
- [ ] Update Header navigation to link to /contact
- [ ] Update all CTA buttons to link to /contact
- [ ] Test form submission with platform selection
# Zepto Mail + reCAPTCHA Setup Instructions

## Environment Variables Required

Add the following to your `.env.local` file:

```bash
# Zepto Mail Configuration
MAIL_URL=https://api.zeptomail.in/v1.1/email
MAIL_TOKEN=your_zepto_mail_token_here
EMAIL_FROM=noreply@yourverifieddomain.com
EMAIL_ADMIN=your-admin-email@example.com

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

## Setup Steps

### 1. Zepto Mail Setup
- Log into your Zepto Mail account
- Verify your sender domain/email address
- Generate an API token
- Add the environment variables above

### 2. reCAPTCHA Setup
- Go to Google reCAPTCHA Admin Console: https://www.google.com/recaptcha/admin/create
- Select reCAPTCHA v3
- Add your domain (e.g., localhost:3000 for development, yourdomain.com for production)
- Get the Site Key and Secret Key
- Add them to your environment variables

### 3. Important Notes

#### Sender Email Verification
You MUST verify your sender email address in Zepto Mail before sending emails. Common issues:
- `SM_111` error: Sender address not verified
- `SERR_157` error: Invalid API Token
- `LE_102` error: Credit exhausted

#### reCAPTCHA v3 Integration
- Using invisible reCAPTCHA v3 for better UX
- Token is automatically generated on form submission
- Score threshold set to 0.5 (configurable in API)

#### Field Changes
- Form field `name` is transformed to `fullName` in the API
- reCAPTCHA token is automatically added during submission

## Testing

1. Start development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check browser console for any errors
5. Check `mail-error.log` for Zepto Mail errors

## Troubleshooting

### Common Zepto Mail Errors
1. **Sender not verified**: Verify your email in Zepto Mail dashboard
2. **Invalid token**: Check your MAIL_TOKEN is correct
3. **Credits exhausted**: Refill your Zepto Mail account

### Common reCAPTCHA Errors
1. **Site key missing**: Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY
2. **Secret key missing**: Add RECAPTCHA_SECRET_KEY
3. **Domain not registered**: Add your domain to reCAPTCHA admin

## Features Implemented

✅ Zepto Mail SDK integration
✅ reCAPTCHA v3 protection
✅ Form validation with Zod
✅ Error handling and logging
✅ TypeScript support
✅ Responsive design
✅ Loading states
✅ Success/error messages

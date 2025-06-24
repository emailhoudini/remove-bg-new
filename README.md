# Wipe BG - AI-Powered Background Removal

A modern, responsive web application for removing backgrounds from images using AI.

## Features

- 🤖 AI-powered background removal
- 🚀 Fast processing (< 5 seconds)
- 📱 Mobile-friendly responsive design
- 🔒 Privacy-first (images auto-deleted)
- 💾 High-quality PNG output
- 🎨 Clean, modern UI

## Setup Instructions

### 1. Environment Variables

To enable real background removal, you need to set up the Remove.bg API key:

1. Sign up at [Remove.bg](https://www.remove.bg/api) to get your API key
2. Create a `.env.local` file in your project root:

\`\`\`bash
REMOVE_BG_API_KEY=your_api_key_here
\`\`\`

### 2. Demo Mode

If no API key is provided, the application will run in demo mode, showing a placeholder result instead of actual background removal.

### 3. Deployment

When deploying to platforms like Vercel, Netlify, or others:

1. Add the `REMOVE_BG_API_KEY` environment variable in your deployment platform's settings
2. The application will automatically detect the API key and switch from demo mode to live mode

#### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. In Vercel dashboard, go to your project settings
4. Navigate to "Environment Variables"
5. Add `REMOVE_BG_API_KEY` with your API key value
6. Redeploy your application

#### Netlify Deployment

1. In Netlify dashboard, go to your site settings
2. Navigate to "Environment variables"
3. Add `REMOVE_BG_API_KEY` with your API key value
4. Redeploy your application

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## API Usage Limits

Remove.bg has different pricing tiers:
- Free: 50 images/month
- Paid plans: Higher limits available

Monitor your usage in the Remove.bg dashboard to avoid service interruptions.

## Troubleshooting

### "Service temporarily unavailable" Error

This usually means:
1. API key is not set or invalid
2. API quota exceeded
3. Network connectivity issues

### Hydration Mismatch Warnings

These are handled automatically by the application and shouldn't affect functionality.

## Support

For issues or questions:
- Email: support@wipebg.ai
- Check the console for detailed error messages
- Verify your API key is correctly set

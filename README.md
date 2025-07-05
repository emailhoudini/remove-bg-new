# Wipe BG - AI-Powered Background Removal

A modern, responsive web application for removing backgrounds from images using AI technology. Built with Next.js and powered by Remove.bg API.

## 🌟 Features

- 🤖 **AI-powered background removal** - Advanced machine learning algorithms
- 🚀 **Lightning fast processing** - Results in under 5 seconds
- 📱 **Mobile-first design** - Fully responsive across all devices
- 🔒 **Privacy-first approach** - Images automatically deleted after processing
- 💾 **High-quality output** - PNG format with transparency support
- 🎨 **Modern UI/UX** - Clean, intuitive interface
- 🌐 **Cross-browser compatibility** - Works on all modern browsers
- 📊 **Usage analytics** - Track processing metrics (optional)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Remove.bg API key (for production use)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wipebg.ai.git
cd wipebg.ai

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application running.

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in your project root:

```bash
# Required for production
REMOVE_BG_API_KEY=your_api_key_here

# Optional configurations
NEXT_PUBLIC_APP_URL=https://wipebg.ai
NEXT_PUBLIC_GA_ID=your_google_analytics_id
MAX_FILE_SIZE=10485760  # 10MB in bytes
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

### API Key Setup

1. **Sign up** at [Remove.bg](https://www.remove.bg/api)
2. **Get your API key** from the dashboard
3. **Add to environment variables** as shown above
4. **Verify setup** by testing the application

## 🛠️ Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test
```

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/wipebg.ai)

1. **Connect repository** to Vercel
2. **Add environment variables** in project settings
3. **Deploy** - automatic deployments on git push

### Netlify

1. **Connect repository** to Netlify
2. **Build settings**: 
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Add environment variables** in site settings
4. **Deploy**

### Docker

```bash
# Build image
docker build -t wipebg .

# Run container
docker run -p 3000:3000 --env-file .env.local wipebg
```

## 🔧 API Integration

### Remove.bg API Limits

| Plan | Images/Month | Cost |
|------|-------------|------|
| Free | 50 | $0 |
| Subscription | 1,000+ | $9.99+ |

### Custom API Integration

To integrate with other background removal services:

1. **Modify API endpoint** in `/pages/api/remove-bg.js`
2. **Update request format** according to new service
3. **Handle response structure** differences
4. **Update environment variables** accordingly

## 📊 Performance

- **Average processing time**: < 5 seconds
- **Supported file formats**: JPEG, PNG, WebP
- **Maximum file size**: 10MB
- **Concurrent requests**: Limited by API provider

## 🔍 Troubleshooting

### Common Issues

#### "Service temporarily unavailable"
- ✅ Check API key validity
- ✅ Verify API quota remaining
- ✅ Test network connectivity
- ✅ Check Remove.bg service status

#### "File too large" Error
- ✅ Ensure file is under 10MB
- ✅ Compress image before upload
- ✅ Check `MAX_FILE_SIZE` environment variable

#### Hydration Mismatch Warnings
- ✅ These are handled automatically
- ✅ No action required - doesn't affect functionality

### Debug Mode

Enable debug logging:

```bash
# Add to .env.local
DEBUG=true
NODE_ENV=development
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow ESLint configuration
- Write tests for new features
- Update documentation
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Remove.bg** - AI background removal API
- **Next.js** - React framework
- **Vercel** - Deployment platform
- **Tailwind CSS** - Styling framework

## 📞 Support

- **Website**: [wipebg.ai](https://wipebg.ai)
- **Email**: support@wipebg.ai
- **Issues**: [GitHub Issues](https://github.com/yourusername/wipebg.ai/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/wipebg.ai/wiki)

---

**Made with ❤️ by Hamza SVANS**

# Tomorrows Media House Website

Official website of Tomorrows Media House, a company specializing in professional website development.

## 🎯 Project Goals

1. Present Tomorrows Media House's services and activities
2. Demonstrate company's technical capabilities through modern and innovative website design
3. Showcase portfolio of completed projects
4. Ensure website accessibility in multiple languages
5. Optimize website for search engines (SEO)
6. Ensure excellent website performance across all devices (Responsive Design)

## 🛠 Technologies

- [React 18.3.1](https://react.dev/) - JavaScript library for user interfaces
- [Next.js 15](https://nextjs.org/) - React framework
- [NextUI v2](https://nextui.org/) - Modern UI component library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization solution
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark/Light theme support
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📂 Project Structure

```
my-website2/
├── app/                    # Main application directory
│   ├── [locale]/          # Localization directory
│   └── layout.tsx         # Main layout component
├── components/            # Reusable components
├── config/               # Configuration files
├── i18n/                 # Internationalization files
├── messages/            # Translations
│   ├── en.json         # English texts
│   └── lt.json         # Lithuanian texts
├── public/              # Static files
│   ├── icons/         
│   ├── logo/          
│   └── projects/      
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install core dependencies:
```bash
npm install react@18.3.1 react-dom@18.3.1
npm install next@15.0.4
npm install @nextui-org/react@2.6.8
npm install tailwindcss@3.4.16 postcss@8.4.49 autoprefixer@10.4.19
npm install next-intl@3.26.1
npm install next-themes@0.4.4
npm install framer-motion@11.13.1
npm install lucide-react@0.468.0
```

3. Install development dependencies:
```bash
npm install -D typescript@5.6.3 @types/react@18.3.3 @types/react-dom@18.3.0
npm install -D eslint@9.17.0 prettier@3.3.3
```

4. Run the development server:
```bash
npm run dev
```

The project will be available at `http://localhost:3000`

## 📦 Available Scripts

```bash
npm run build      # Build the project
npm run start      # Run production version
npm run lint       # Check code with ESLint
```

## 🔧 Development

The project uses:
- ESLint and Prettier for code formatting
- TypeScript for strict typing
- TailwindCSS for styling
- next-intl for internationalization

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Make your changes
4. Submit a Pull Request

## 📄 License

All rights reserved by Tomorrows Media House
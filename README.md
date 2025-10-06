# Sunnyside Agency Landing Page

A modern, responsive landing page for Sunnyside, a full-service creative agency specializing in helping brands grow fast through compelling visuals. This project showcases the agency's services in graphic design and photography, featuring subtle animations and a clean, professional design.

## Features

- **Hero Section**: Eye-catching hero with animated heading ("We are creatives") and a bouncing arrow icon.
- **About Section**: Introduction to the agency and its mission.
- **Services Section**: Highlights graphic design and photography services with engaging visuals.
- **Testimonials**: Client testimonials from satisfied customers, including Emily R., Thomas S., and Jennie F.
- **Project Gallery**: Showcase of past projects with images of milk bottles, oranges, cones, and sugar cubes.
- **Footer**: Contact information and links.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Subtle Animations**: Smooth animations using the Motion library for enhanced user experience.

## Tech Stack

- **React**: Component-based UI library
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Motion**: Animation library for React
- **React Icons**: Icon library
- **Custom Fonts**: Barlow and Fraunces fonts loaded locally

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi-zero/agency-landing-page.git
   cd agency-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Build for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
agency-landing-page/
├── public/
│   ├── images/
│   │   ├── desktop/
│   │   ├── mobile/
│   │   └── people/
│   └── previews/
│       ├── desktopPreview.png
│       └── mobilePreview.png
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   ├── Navbar/
│   │   ├── Project/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   └── ui/
│   ├── sections/
│   │   ├── AboutSection/
│   │   ├── FooterSection/
│   │   ├── HeroSection/
│   │   ├── ProjectSection/
│   │   ├── ServiceSection/
│   │   └── TestimonialSection/
│   ├── utility/
│   │   ├── colors/
│   │   ├── navLinks/
│   │   ├── projects/
│   │   └── user/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Previews

- **Desktop Preview**: [View Desktop Preview](./public/previews/desktopPreview.png)
- **Mobile Preview**: [View Mobile Preview](./public/previews/mobilePreview.png)

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code linting
- `npm run preview`: Preview the production build locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from Frontend Mentor
- Fonts: Barlow and Fraunces from Google Fonts
- Icons: React Icons

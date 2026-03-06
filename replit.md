# Varun Vedala - Product Portfolio

## Overview
A professional product management portfolio website for Varun Vedala, showcasing case studies, work experience, skills, and contact information. Built as a single-page application with smooth scrolling navigation, dark/light theme support, and responsive design.

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Routing**: Single-page with anchor-based navigation
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for entrance animations
- **State**: Local state for theme toggle and case study expansion

### Key Components
- `Navigation` - Fixed navbar with smooth scroll links
- `HeroSection` - Landing hero with name, title, bio
- `AboutSection` - Education and honors cards
- `ExperienceSection` - Timeline of work experiences
- `CaseStudiesSection` - EcoCart and Disaster Defender case studies with expandable details
- `SkillsSection` - Skill categories and interests
- `ContactSection` - Contact methods and CTA
- `ThemeProvider` - Dark/light mode management

### Backend (server/)
- **Framework**: Express.js
- **Endpoints**: Health check at `/api/health`
- Note: Portfolio data is static and embedded in the frontend

### Data (shared/schema.ts)
TypeScript interfaces for:
- `PortfolioData` - Main portfolio structure
- `Experience` - Work experience entries
- `Education` - Education details
- `CaseStudy` - Case study with problem/solution/impact
- `Skill` - Skill categories

## Recent Changes
- **Feb 2, 2026**: Initial portfolio build with all sections
  - Hero, About, Experience, Case Studies, Skills, Contact
  - Dark/light theme toggle
  - Responsive mobile navigation
  - Expandable case study details

## User Preferences
- Clean, professional design
- Focus on product management experience
- Case studies for EcoCart and Disaster Defender

## Running the Project
```bash
npm run dev
```
The app runs on port 5000 with both frontend and backend served together.

## Key Files
- `client/src/App.tsx` - Main app entry point
- `client/src/lib/portfolio-data.ts` - All portfolio content
- `client/src/components/` - React components
- `shared/schema.ts` - TypeScript interfaces

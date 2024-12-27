# My Dream Home - Real Estate Website Documentation

## Project Overview
My Dream Home is a modern real estate website built with Next.js 14+, TypeScript, and Tailwind CSS. The website is designed to showcase properties, provide detailed information about listings, and facilitate communication between potential buyers and the real estate agent.

## Tech Stack
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Image Optimization**: Next.js Image Component
- **Form Handling**: React Hook Form (planned)
- **Data Fetching**: SWR (planned)

## Core Features
1. **Property Listings**
2. **Property Search & Filtering**
3. **Interactive Maps**
4. **Contact Forms**
5. **Image Galleries**
6. **Responsive Design**
7. **SEO Optimization**

## Page Structure

### 1. Homepage (`app/page.tsx`)
Key sections:
- Hero Section with property search
- Featured Properties carousel
- Areas We Cover with interactive map
- Why Choose Us section
- Client Testimonials
- Call-to-Action for property consultation

Components:
- `components/home/hero-section.tsx`
- `components/home/featured-properties.tsx`
- `components/home/areas-we-cover.tsx`
- `components/home/why-choose-us.tsx`
- `components/home/testimonials.tsx`
- `components/home/call-to-action.tsx`

### 2. Property Details (`app/properties/[id]/page.tsx`)
Dynamic route for individual property listings showing:
- Property images gallery
- Detailed information
- Amenities list
- Contact agent form

Components:
- `components/properties/property-gallery.tsx`
- `components/properties/property-details.tsx`
- `components/properties/property-amenities.tsx`
- `components/properties/property-contact.tsx`

### 3. Properties Search (`app/properties/page.tsx`)
Advanced search functionality with:
- Filter options
- Property grid view
- Interactive map view

Components:
- `components/properties/property-search.tsx`
- `components/properties/property-grid.tsx`
- `components/properties/property-map.tsx`

### 4. About Page (`app/about/page.tsx`)
Company and agent information:
- Professional profile of Sushil Bhardwaj
- Company values
- Project gallery

Components:
- `components/about/professional-profile.tsx`
- `components/about/company-values.tsx`
- `components/about/project-gallery.tsx`

### 5. Contact Page (`app/contact/page.tsx`)
Contact information and forms:
- Contact form
- Office location map
- Contact details
- FAQ section

Components:
- `components/contact/contact-form.tsx`
- `components/contact/contact-info.tsx`
- `components/contact/google-map.tsx`
- `components/contact/faq.tsx`

## Shared Components

### 1. Layout Components
- `components/layout/header.tsx`: Page headers with background images
- `components/layout/navbar.tsx`: Navigation menu
- `components/layout/footer.tsx`: Site footer

### 2. Property Card (`components/home/property-card.tsx`)
Reusable property card component used in:
- Featured properties
- Property search results
- Related properties

Features:
- Image with hover effect
- Price tag
- Property details
- Link to property page

## Key Features Implementation

### 1. Property Search
- Advanced filters for price, location, property type
- Real-time search results
- Map integration showing property locations
- Sort and filter functionality

### 2. Image Galleries
- Smooth transitions between images
- Thumbnail navigation
- Responsive design
- Image optimization

### 3. Contact Forms
- Form validation
- Error handling
- Success notifications
- Direct contact options

### 4. Maps Integration
- Interactive property locations
- Area coverage visualization
- Office location display
- Custom markers and popups

## Agent Information
Sushil Bhardwaj is featured as the primary real estate agent across the site:
- Contact details consistent across all pages
- Professional profile in About page
- Contact forms directed to his email
- Profile image and credentials displayed

## Styling Guidelines
- Primary color: #1a3668 (Navy Blue)
- Secondary colors: #2C3E50, #E74C3C, #ECF0F1
- Modern and clean design
- Consistent spacing and typography
- Responsive breakpoints
- Hover effects and animations

## Performance Considerations
1. Image Optimization
   - Next.js Image component for automatic optimization
   - Proper image sizing and formats
   - Lazy loading implementation

2. Code Splitting
   - Dynamic imports for larger components
   - Route-based code splitting
   - Optimized bundle sizes

3. SEO
   - Meta tags implementation
   - Structured data
   - Semantic HTML
   - Proper heading hierarchy

## Future Enhancements
1. User Authentication
2. Saved Properties Feature
3. Virtual Tours Integration
4. Property Comparison Tool
5. Mortgage Calculator
6. Blog Section
7. Newsletter Integration
8. Advanced Analytics

## Development Guidelines
1. Follow TypeScript best practices
2. Maintain component reusability
3. Implement proper error handling
4. Add loading states for async operations
5. Include accessibility features
6. Write comprehensive tests
7. Document component props and functions

# My Dream Home - Real Estate Website

## Project Overview
My Dream Home is a modern real estate website built with Next.js 14+, TypeScript, and Tailwind CSS. The website features both a public-facing frontend for property listings and a secure admin panel for content management.

## Tech Stack
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Form Handling**: React Hook Form
- **Data Fetching**: Supabase Client

## Project Structure

```
app/
├── (admin)/                  # Admin route group
│   ├── layout.tsx           # Admin layout wrapper
│   ├── login/
│   │   └── page.tsx        # Admin login
│   └── admin/              # Protected admin routes
│       ├── page.tsx        # Dashboard
│       ├── properties/     # Properties management
│       ├── areas/          # Areas management
│       └── inquiries/      # Inquiries management
│
├── (frontend)/              # Frontend route group
│   ├── layout.tsx          # Frontend layout with nav & footer
│   ├── page.tsx           # Home page
│   ├── properties/        # Property listings
│   ├── about/            # About page
│   └── contact/          # Contact page
│
└── layout.tsx              # Root layout

components/
├── admin/                  # Admin components
│   ├── layout-client.tsx   # Admin layout with authentication
│   ├── login-client.tsx    # Login form
│   ├── dashboard-client.tsx
│   └── properties-client.tsx
├── home/                   # Homepage components
├── properties/            # Property components
├── about/                # About page components
├── contact/              # Contact components
└── layout/               # Shared layout components
```

## Core Features

### Frontend
1. **Property Listings**
   - Featured properties carousel
   - Advanced search and filtering
   - Interactive map integration
   - Detailed property views

2. **User Interface**
   - Responsive design
   - Modern animations
   - Optimized images
   - SEO-friendly structure

3. **Contact System**
   - Property inquiry forms
   - Agent contact forms
   - Office location map
   - FAQ section

### Admin Panel
1. **Authentication**
   - Secure login system
   - Protected routes
   - Session management

2. **Content Management**
   - Property CRUD operations
   - Area management
   - Inquiry handling
   - Image upload and management

3. **Dashboard**
   - Overview statistics
   - Recent inquiries
   - Property metrics
   - User activity

## Database Schema

### Tables
1. **properties**
   - Basic property information
   - Location details
   - Price and status
   - Features and amenities

2. **areas**
   - Coverage areas
   - Area descriptions
   - Map coordinates

3. **inquiries**
   - Contact form submissions
   - Property inquiries
   - User information

4. **agents**
   - Agent profiles
   - Contact information
   - Credentials

## Development Setup

1. **Environment Variables**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. **Installation**
   ```bash
   npm install
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```

4. **Database Setup**
   - Run schema.sql for table creation
   - Run seed.sql for sample data

## Deployment

1. **Build**
   ```bash
   npm run build
   ```

2. **Production**
   ```bash
   npm start
   ```

## Best Practices

1. **Code Organization**
   - Route groups for admin/frontend separation
   - Client/Server component separation
   - Reusable components
   - Type safety with TypeScript

2. **Performance**
   - Image optimization
   - Component lazy loading
   - API route optimization
   - Caching strategies

3. **Security**
   - Protected admin routes
   - Environment variables
   - Input validation
   - XSS prevention

4. **SEO**
   - Metadata optimization
   - Semantic HTML
   - Sitemap generation
   - robots.txt configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

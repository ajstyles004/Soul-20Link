# Soul Link Foundation

Soul Link Foundation is a full-stack web application dedicated to providing comprehensive mental health services and healthcare interventions to underserved communities. This platform serves as the digital presence for the NGO, allowing them to showcase their work, share updates, and connect with the community.

## Features

### Public Portal
- **Home**: Dynamic slideshow, impact summary, and featured content.
- **Programmes & Events**:
    - **Services**: Detailed information about mental health and healthcare programs.
    - **Events**: Upcoming workshops and community activities.
- **Resources**:
    - **News & Blogs**: Latest updates and insightful articles.
    - **Gallery**: Visual journey of the foundation's work.
    - **Certificates**: Transparency with legal registrations (12A, 80G, CSR-1).
- **Get Involved**:
    - **Donate**: Secure gateay for contributions.
    - **Contact**: Direct lines for support and inquiries.

### Admin Portal
- **Dashboard**: Real-time overview of key metrics (Donations, Messages, Active Users).
- **Content Management System (CMS)**:
    - **News & Blogs**: Full editor for publishing articles.
    - **Events Management**: Create, edit, and schedule events with location details.
    - **Gallery Manager**: Centralized upload and management of visual assets.
- **Secure Authentication**: Protected routes and role-based access.
- **Image Upload**: Local file upload support for all media content.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Lucide React, React Query.
- **Backend**: Node.js, Express.js.
- **Database**: PostgreSQL (via Neon), Drizzle ORM.
- **Routing**: React Router DOM.
- **Build Tool**: Vite.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Soul-20Link
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL=postgresql://user:password@host:port/dbname
   ```

4. **Database Setup**
   Push the schema to your database:
   ```bash
   npm run db:push
   ```

5. **Create Admin User**
   Run the seed script to create the initial admin account (username: `admin`, password: `admin`):
   ```bash
   npx tsx scripts/seed-admin.ts
   ```

6. **Start the Development Server**
   ```bash
   npm run dev
   ```

The application will be available at locally (usually http://localhost:5000).

## License

This project is licensed under the MIT License.

# SoulLink Foundation

SoulLink Foundation is a full-stack web application dedicated to providing comprehensive mental health services and healthcare interventions to underserved communities. This platform serves as the digital presence for the NGO, allowing them to showcase their work, share updates, and connect with the community.

## Live Demo
**Production URL:** [https://soul-20link-production.up.railway.app](https://soul-20link-production.up.railway.app) (Example)

## Features

### Public Portal
- **Home**: Dynamic slideshow with inspirational quotes and impact summary.
- **Programmes & Events**:
    - **Services**: Detailed information about mental health, counseling, and healthcare programs.
    - **Events**: Upcoming workshops, medical camps, and community activities.
- **Resources**:
    - **News & Blogs**: Latest updates, press releases, and articles.
    - **Gallery**: Responsive photo gallery showcasing the foundation's work.
    - **Certificates**: Transparency section displaying legal registrations (12A, 80G, CSR-1).
- **Get Involved**:
    - **Donate**: Information and gateways for contributions.
    - **Contact**: Direct communication channels (WhatsApp, Email, Form).

### Admin Portal
- **Dashboard**: Real-time overview of key metrics (Donations, Messages, Active Users).
- **Content Management System (CMS)**:
    - **News & Blogs**: Full rich-text editor for publishing articles.
    - **Events Management**: Create, edit, and schedule events with location details.
    - **Gallery Manager**: Centralized upload and management of visual assets.
- **Authentication**: secure, role-based access control using Passport.js and Bcrypt.
- **Media Management**: Local file storage for images with seamless serving.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Lucide React, TanStack Query.
- **Backend**: Node.js, Express.js.
- **Database**: PostgreSQL (via Railway/Neon), Drizzle ORM.
- **Authentication**: Passport.js (Local Strategy), Express Session.
- **Build Tool**: Vite (for both client and server).
- **Deployment**: Railway (Docker/Nixpacks).

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Git

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
   Create a `.env` file in the root directory and add your variables:
   ```env
   DATABASE_URL=postgresql://user:password@host:port/dbname
   SESSION_SECRET=your_random_secret_string
   NODE_ENV=development
   ```

4. **Database Setup**
   Push the schema to your database:
   ```bash
   npm run db:push
   ```

5. **Create Admin User**
   Run the seed script to create the default admin account (`admin` / `admin`):
   ```bash
   # Seed a new user
   npx tsx scripts/seed-admin.ts

   # OR Reset password for existing admin
   npx tsx scripts/reset-password.ts
   ```

6. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5000.

### Useful Scripts

- `npm run dev`: Start development server (Client + Server).
- `npm run build`: Build both client and server for production.
- `npm start`: Start the production server (requires build).
- `npm run db:push`: Push Drizzle schema changes to the database.
- `npx tsx scripts/test-db.ts`: Verify database connection and list users.

## Deployment (Railway)

This project is configured for deployment on [Railway](https://railway.app).

1.  **Connect GitHub**: Link your repository to Railway.
2.  **Add Database**: Add a PostgreSQL plugin.
3.  **Variables**: Set the `DATABASE_URL` (use the Public TCP Proxy URL if connecting externally, or the internal one for the app) and `SESSION_SECRET` in the Railway dashboard.
4.  **Listen Port**: Railway automatically sets `PORT`, which the app listens on (default 5000).
5.  **Build Command**: `npm run build`
6.  **Start Command**: `npm start`

**Note on Static Files:** Uploaded images are stored in the `/uploads` directory. For persistent storage in production, you might want to consider adding a volume mount or switching to an external storage provider (S3/Cloudinary) in the future.

## License

This project is licensed under the MIT License.

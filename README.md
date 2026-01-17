# Soul Link Foundation

Soul Link Foundation is a full-stack web application dedicated to providing comprehensive mental health services and healthcare interventions to underserved communities. This platform serves as the digital presence for the NGO, allowing them to showcase their work, share updates, and connect with the community.

## Features

### Public Portal
- **Home**: Overview of the mission, impact, and latest updates.
- **Resource Center**:
    - **News**: Latest press releases and coverage.
    - **Blogs**: insightful articles on mental health.
    - **Gallery**: Visual stories of impact and events.
- **Services**: Detailed information about counseling and healthcare programs.
- **Impact**: Statistics and stories of change.
- **Team**: Meet the dedicated professionals behind the cause.
- **Contact**: Easy ways to get in touch or request support.

### Admin Portal
- **Secure Authentication**: Protected login for administrators.
- **Content Management System (CMS)**:
    - **Create**: Post new updates to News, Blogs, and Gallery.
    - **Edit**: Update existing content and images.
    - **Delete**: Remove outdated or incorrect posts.
- **Image Upload**: Integrated file upload for post images.

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

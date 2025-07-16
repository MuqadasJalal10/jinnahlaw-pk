# Jinnah Law Academy Backend API

A Node.js/Express backend API for the Jinnah Law Academy website with SQLite database and email functionality.

## Features

- **Contact Form API** - Handle contact form submissions
- **Admission Application API** - Process admission applications
- **Email Notifications** - Automated email confirmations and admin notifications
- **Admin Panel API** - Authentication and dashboard functionality
- **Database Storage** - SQLite database for data persistence
- **Security** - Rate limiting, input validation, and CORS protection

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=jinnahlawacademybywasifmateen@gmail.com

# Admin Configuration
ADMIN_EMAIL=jinnahlawacademybywasifmateen@gmail.com
JWT_SECRET=your-random-jwt-secret-key
```

### 3. Gmail Setup for Email

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### 4. Run the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

### Admission Applications
- `POST /api/admission` - Submit application
- `GET /api/admission` - Get all applications (admin)
- `PUT /api/admission/:id/status` - Update application status

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/register` - Create admin user
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/verify` - Verify JWT token

### Health Check
- `GET /api/health` - Server health status

## Database Schema

### contact_submissions
- id, name, email, phone, subject, message
- ip_address, user_agent, created_at, status

### admission_applications
- id, name, email, phone, address, education
- course, subcourse, mode, ip_address, user_agent
- created_at, status, notes

### admin_users
- id, username, email, password_hash, role
- created_at, last_login

## Frontend Integration

Update your React frontend to use the API:

```javascript
// Contact form submission
const submitContact = async (formData) => {
  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  return response.json();
};

// Admission form submission
const submitAdmission = async (formData) => {
  const response = await fetch('http://localhost:5000/api/admission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  return response.json();
};
```

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes, 5 form submissions per minute
- **Input Validation**: Comprehensive validation using express-validator
- **CORS Protection**: Configured for specific origins
- **Helmet**: Security headers
- **JWT Authentication**: Secure admin authentication
- **Password Hashing**: bcrypt with salt rounds

## Email Templates

Professional HTML email templates for:
- Contact form confirmations
- Admission application confirmations
- Admin notifications

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Configure production database path
3. Set up proper CORS origins
4. Use process manager like PM2:

```bash
npm install -g pm2
pm2 start server.js --name "law-academy-api"
```

## Admin Panel Setup

Create first admin user:

```bash
# After server is running, use API or directly insert into database
# Default admin can be created through the register endpoint
```

## Support

For technical support or questions about the API, contact the development team.
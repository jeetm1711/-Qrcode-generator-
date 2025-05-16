# QR Code Generator

A modern web application for generating, customizing, and managing QR codes. Built with React, Node.js, and MongoDB.

## Features

- Generate QR codes for text, URLs, and contact information
- Customize QR code appearance (colors, size)
- Save and manage multiple QR codes
- Download QR codes as PNG images
- User authentication and profile management
- Responsive design for all devices

## Tech Stack

- Frontend: React, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qr-code-generator.git
cd qr-code-generator
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/qr-code-generator
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. Register a new account or login
2. Navigate to the QR code generator
3. Enter your content and customize the appearance
4. Save or download your QR code
5. Manage your saved QR codes in the dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
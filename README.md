# Event Management System

A full-stack college event requirement management application that allows users to create events, define category-specific requirements, review the details, and submit event requirements through a simple multi-step interface.

## 🚀 Features

* Create and manage college event requirements
* Multi-step event creation flow
* Event basic details:

  * Event name
  * Event type
  * Event date / date range
  * Location
* Category-based requirement selection
* Custom requirement checkboxes
* Review event details before submission
* Success confirmation after submission
* Responsive and user-friendly interface
* Backend API integration
* MongoDB database support

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* JavaScript
* Tailwind CSS
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* MongoDB Atlas

### Tools

* Git
* GitHub
* VS Code
* Vercel
* Render

## 📁 Project Structure

```text
event-management/
│
├── app/
│   ├── components/
│   │   ├── CategoryCard.js
│   │   ├── CheckboxGroup.js
│   │   ├── Step1EventBasics.js
│   │   ├── Step2CategoryRequirements.js
│   │   ├── Step3Review.js
│   │   ├── Step4Success.js
│   │   ├── StepIndicator.js
│   │   └── constants.js
│   │
│   ├── post/
│   │   └── page.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── lib/
│   └── api.js
│
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── .env.example
├── .env.local.example
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sandhiya-N/event-management.git
```

### 2. Navigate to the project

```bash
cd event-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Update the API URL according to your backend server.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🔗 API Configuration

The frontend communicates with the backend using REST APIs.

The API URL is configured using:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production, replace it with your deployed backend URL:

```env

Use `.env.example` as a reference for required environment variables.

## 📸 Application Flow

```text
Home Page
    ↓
Event Basics
    ↓
Category & Requirements
    ↓
Review Details
    ↓
Submit Event
    ↓
Success Confirmation
```

## 🎯 Project Objective

The objective of this project is to provide a simple digital platform for collecting and organizing college event requirements. The multi-step workflow helps users provide event information systematically while reducing missing or incomplete requirements.

## 👩‍💻 Author

**Sandhiya N**

GitHub:
https://github.com/Sandhiya-N

## 📄 License

This project is developed for educational and demonstration purposes.

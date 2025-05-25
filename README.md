# Job Listing App

A modern job listing application built with React and Firebase that allows users to browse and filter job listings based on various criteria.

![Job Listing App Screenshot](public/app-screenshot.png)

## Features

- **Real-time Job Listings**: Browse the latest job postings fetched from Firebase Firestore
- **Advanced Filtering**: Filter jobs by:
  - Job Role (iOS Developer, Android Developer, Frontend Developer, etc.)
  - Job Type (Full-Time, Part-Time, Contract)
  - Location (Remote, In-Office, Hybrid)
  - Experience Level (Fresher, Junior Level, Mid Level, Senior Level)
- **Clean UI**: Modern and responsive interface built with TailwindCSS
- **Real-time Updates**: Data synchronization with Firebase

## Tech Stack

- **Frontend**: React 19
- **Styling**: TailwindCSS 4
- **Build Tool**: Vite 6
- **Backend/Database**: Firebase Firestore
- **Date Handling**: Day.js

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/job-listing-app.git
cd job-listing-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure Firebase
   - Create a `.env` file in the project root with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

### Firebase Setup

1. Create a Firestore database in your Firebase project
2. Set up a "jobs" collection with the following fields:
   - title (string): Job role title
   - company (string): Company name
   - type (string): Job type (Full Time, Part Time, etc.)
   - experience (string): Required experience level
   - location (string): Job location type
   - skills (array): List of required skills
   - job_link (string): URL to apply for the job
   - postedOn (timestamp): Date when the job was posted

## Usage

- Browse all jobs on the main page
- Use the search filters at the top to narrow down results:
  1. Select your criteria from the dropdown menus
  2. Click "Apply Filters" to search
  3. Click "Show All Jobs" to reset filters and view all listings
  
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Firebase for the backend infrastructure
- TailwindCSS for the styling utilities

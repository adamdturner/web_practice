# Central Hub - Next.js + Firebase Practice App

A practice application built with **Next.js 14+**, **Firebase Authentication**, and **Cloud Firestore**.

## 🚀 Features

- **Public Landing Page** - Welcome page for all visitors
- **Authentication** - Email/password and Google sign-in
- **Protected Dashboard** - User-only area with profile info
- **User Profiles** - Stored in Cloud Firestore
- **Modern UI** - Dark theme with amber accents

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page (Central Hub)
│   ├── login/page.tsx    # Login/Signup page
│   ├── dashboard/page.tsx # Protected dashboard
│   ├── layout.tsx        # Root layout with AuthProvider
│   └── globals.css       # Global styles
├── components/
│   └── Navbar.tsx        # Navigation component
├── context/
│   └── AuthContext.tsx   # Firebase Auth context
└── lib/
    └── firebase.ts       # Firebase configuration
```

## 🔧 Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** (or use an existing one)
3. Give your project a name and follow the setup wizard

### 2. Enable Authentication

1. In your Firebase project, go to **Build > Authentication**
2. Click **"Get started"**
3. Enable **Email/Password** provider
4. (Optional) Enable **Google** provider for social login

### 3. Create Cloud Firestore Database

1. Go to **Build > Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a location closest to your users

### 4. Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll to **"Your apps"** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app with a nickname
5. Copy the firebaseConfig values

### 5. Set Up Environment Variables

1. Copy `env.local.example` to `.env.local`:
   ```bash
   cp env.local.example .env.local
   ```

2. Fill in your Firebase credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Firestore Security Rules

For production, update your Firestore rules in the Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📚 Next Steps

Once you have the basic setup running, you can:

- Add more pages and features
- Implement Cloud Functions for server-side logic
- Add more authentication providers (GitHub, Twitter, etc.)
- Create additional Firestore collections
- Implement real-time data syncing

## 🛠️ Tech Stack

- [Next.js 14+](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Auth & Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

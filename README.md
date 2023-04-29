<br />

![](twitter.png)

<p align="center">
  Twitter clone built in Next.js + TypeScript + Tailwind CSS using Cloud Firestore and Storage
</p>

## Features ✨

- Authentication with Firebase Authentication
- Strongly typed React components with TypeScript
- Users can add tweets, like, retweet, and reply
- Users can delete tweets, add a tweet to bookmarks, and pin their tweet
- Users can add images and GIFs to tweet
- Users can follow and unfollow other users
- Users can see their and other followers and the following list
- Users can see all users and the trending list
- Realtime update likes, retweets, and user profile
- Realtime trending data from Twitter API
- User can edit their profile
- Responsive design for mobile, tablet, and desktop
- Users can customize the site color scheme and color background
- All images uploads are stored on Firebase Cloud Storage

## Tech 🛠

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)
- [SWR](https://swr.vercel.app)
- [Headless UI](https://headlessui.com)
- [React Hot Toast](https://react-hot-toast.com)
- [Framer Motion](https://framer.com)

## Development 💻

Here are the steps to run the project locally.

1. Clone the repository

   ```bash
   git clone https://github.com/piyush168713/twitter-clone-app.git
   ```

1. Install dependencies

   ```bash
   npm i
   ```

1. Create a Firebase project and select the web app

1. Add your Firebase config to `.env.development`.

1. Make sure you have enabled the following Firebase services:

   - Authentication. Enable the Google sign-in method.
   - Cloud Firestore. Create a database and set its location to your nearest region.
   - Cloud Storage. Create a storage bucket.

1. Install Firebase CLI globally

   ```bash
   npm i -g firebase-tools
   ```

1. Log in to Firebase

   ```bash
   firebase login
   ```

1. Get your project ID

   ```bash
   firebase projects:list
   ```

1. Select your project ID

   ```bash
   firebase use your-project-id
   ```

1. Deploy Firestore rules, Firestore indexes, and Cloud Storage rules

   ```bash
   firebase deploy --except functions
   ```

1. Run the project

   ```bash
   npm run dev
   ```

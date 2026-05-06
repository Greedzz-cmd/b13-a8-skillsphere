# 🎓 SkillSphere – Online Learning Platform

A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

🔗 **Live URL:** [https://b13-a8-skillsphere-pwuk9moot-greedzz-cmds-projects.vercel.app/](https://b13-a8-skillsphere-pwuk9moot-greedzz-cmds-projects.vercel.app/)
📁 **GitHub Repo:** [https://github.com/Greedzz-cmd/b13-a8-skillsphere](https://github.com/Greedzz-cmd/b13-a8-skillsphere)

---

## 📌 Project Purpose

SkillSphere is built to provide an accessible and engaging e-learning experience. Users can browse available courses, view detailed course information, and enroll after creating an account. The platform supports Google authentication and full profile management, making it easy for learners to track and update their information.

---

## ✨ Key Features

- 🔝 **Navbar** – Displays logo, navigation links (Home, Courses, My Profile). Shows user avatar and Logout button when logged in; Login/Register buttons when logged out
- 🔻 **Footer** – Includes contact information, social media links, Terms & Conditions, and Privacy Policy
- 🎥 **Hero Section** – Auto-playing banner slider with motivational headlines like _"Upgrade Your Skills Today 🚀"_ and _"Learn from Industry Experts"_ powered by Swiper.js
- 🔥 **Popular Courses** – Displays the top 3 highest-rated courses with image, title, instructor, rating, and a View Details button
- 📌 **Learning Tips Section** – Study techniques and time management tips to help learners succeed
- 🏆 **Top Instructors Section** – Showcases 3–4 featured instructor cards
- 🆕 **Trending Courses Section** – Highlights trending or newly released courses
- 📚 **All Courses Page** – Browse all available courses; supports search by course title
- 🔒 **Course Details Page** – Protected route showing full course info and curriculum; redirects unauthenticated users to login then back to the page
- 🔐 **Authentication** – Email/password login & registration plus Google OAuth via BetterAuth
- 👤 **My Profile Page** – View logged-in user's profile data (name, email, photo)
- ✏️ **Update Profile** – Update name and profile photo URL from a dedicated update page
- 🍞 **Toast Notifications** – Real-time success and error feedback on all user actions
- ⏳ **Loading States** – Spinners/loaders shown during all data fetching operations
- 🚫 **404 Not Found Page** – Custom page for undefined routes
- 🔄 **No Reload Crashes** – All routes handle direct URL access and browser refresh without errors

---

## 🗂️ Pages & Routes

| Route                | Description                                                         | Protected |
| -------------------- | ------------------------------------------------------------------- | --------- |
| `/`                  | Home page with hero, popular courses, tips, instructors, trending   | ❌        |
| `/courses`           | All courses page with search functionality                          | ❌        |
| `/courses/[id]`      | Full course details and static curriculum                           | ✅        |
| `/login`             | Login form (email/password) + Google OAuth                          | ❌        |
| `/register`          | Registration form (name, email, photo URL, password) + Google OAuth | ❌        |
| `/my-profile`        | View logged-in user profile info                                    | ✅        |
| `/my-profile/update` | Update profile name and photo URL                                   | ✅        |
| `*`                  | Custom 404 Not Found page                                           | ❌        |

---

## 🛠️ Tech Stack

| Technology                                      | Purpose                                        |
| ----------------------------------------------- | ---------------------------------------------- |
| [Next.js](https://nextjs.org/)                  | React framework with App Router                |
| [Tailwind CSS](https://tailwindcss.com/)        | Utility-first CSS styling                      |
| [DaisyUI](https://daisyui.com/)                 | Pre-built Tailwind UI components               |
| [BetterAuth](https://better-auth.com/)          | Authentication (Email/password + Google OAuth) |
| [Swiper.js](https://swiperjs.com/)              | Hero banner slider                             |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications                            |

---

## 📦 NPM Packages Used

| Package           | Version | Purpose             |
| ----------------- | ------- | ------------------- |
| `next`            | ^15.x   | Core framework      |
| `tailwindcss`     | ^3.x    | Styling             |
| `daisyui`         | ^4.x    | UI components       |
| `better-auth`     | ^1.x    | Authentication      |
| `swiper`          | ^11.x   | Hero banner/slider  |
| `react-hot-toast` | ^2.x    | Toast notifications |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of the project:

```env
# BetterAuth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
DATABASE_URL=your_database_url
```

> ⚠️ Never commit `.env.local` to GitHub. It is already listed in `.gitignore`.

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Greedzz-cmd/b13-a8-skillsphere.git

# 2. Navigate into the project directory
cd b13-a8-skillsphere

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Fill in your actual values inside .env.local

# 5. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
b13-a8-skillsphere/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── courses/
│   │   └── [id]/
│   ├── my-profile/
│   │   └── update/
│   ├── layout.jsx
│   ├── page.jsx
│   └── not-found.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CourseCard.jsx
│   └── ...
├── data/
│   └── courses.json
├── lib/
│   └── auth.js
├── public/
└── .env.local        ← not committed
```

---

## 📄 License

This project is for educational purposes only.

---

_Made with ❤️ as part of the Programming Hero B13 Assignment – Category A8 Orange_

<div align="center">

# 🔗 URL Shortener

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <strong>🚀 A modern, full-featured URL shortener application</strong><br>
  Transform long URLs into short, shareable links with analytics and user management
</p>

<p align="center">
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🛠️ Tech Stack</a> •
  <a href="#installation">📦 Installation</a> •
  <a href="#usage">🎯 Usage</a> •
  <a href="#contributing">🤝 Contributing</a>
</p>

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Features

- 🔗 **URL Shortening** - Convert long URLs into memorable links
- 🔐 **Secure Authentication** - Login & registration with profile pictures
- � **Form Validation** - Yup-powered client-side validation
- 🔄 **Loading States** - Beautiful loading animations with react-spinners
- 🛡️ **Protected Routes** - Context-based authentication state

</td>
<td width="50%">

### 🎨 User Experience

- 🌙 **Dark Mode Support** - Built-in light/dark theme support
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful shadcn/ui components with New York style
- 🎯 **Accessible Components** - WAI-ARIA compliant with Radix UI
- 📝 **Interactive FAQ** - Collapsible accordion with common questions

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

| Category          | Technology                                                                                                           | Description                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ⚛️ **Frontend**   | ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)                     | Modern React with hooks      |
| ⚡ **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite&logoColor=white)                         | Lightning fast development   |
| 🎨 **Styling**    | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat&logo=tailwind-css&logoColor=white)    | Utility-first CSS framework  |
| 🗄️ **Backend**    | ![Supabase](https://img.shields.io/badge/Supabase-2.53.0-3ECF8E?style=flat&logo=supabase&logoColor=white)            | Database, Auth & Storage     |
| 🧭 **Routing**    | ![React Router](https://img.shields.io/badge/React_Router-7.7.1-CA4245?style=flat&logo=react-router&logoColor=white) | Client-side routing          |
| 🎯 **Icons**      | ![Lucide](https://img.shields.io/badge/Lucide-0.536.0-F56565?style=flat&logo=lucide&logoColor=white)                 | Beautiful icon library       |
| 🧩 **Components** | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)                 | Accessible UI components     |
| ✅ **Validation** | ![Yup](https://img.shields.io/badge/Yup-1.7.0-FF6B6B?style=flat&logo=javascript&logoColor=white)                     | Schema validation library    |
| 🔄 **Loading**    | ![React Spinners](https://img.shields.io/badge/React_Spinners-0.17.0-4A90E2?style=flat&logo=react&logoColor=white)   | Beautiful loading animations |

</div>

## 📦 Installation

<details open>
<summary><strong>🚀 Quick Start Guide</strong></summary>

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AffanHossainRakib/url-shortener.git
cd url-shortener
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Setup

Create a `.env.local` file in the root directory (see `.env.example` for reference):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note**: The app uses `.env.local` for environment variables. Make sure your Supabase project is properly configured with authentication and storage buckets.

### 4️⃣ Start Development Server

```bash
npm run dev
```

### 5️⃣ Open Your Browser

Navigate to `http://localhost:5173` 🎉

</details>

## 🏗️ Project Structure

```
📁 src/
├── 🧩 components/          # Reusable UI components
│   ├── 🔐 login.jsx        # Login form component
│   ├── 📝 signup.jsx       # Registration form component
│   ├── 🧭 header.jsx       # Navigation header
│   ├── ❌ error.jsx        # Error message component
│   ├── 🚫 404.jsx          # Not found component
│   └── 🎨 ui/             # shadcn/ui components
│       ├── � button.jsx
│       ├── �📄 card.jsx
│       ├── 📥 input.jsx
│       ├── 📑 tabs.jsx
│       ├── 📂 accordion.jsx
│       ├── 👤 avatar.jsx
│       └── 📋 dropdown-menu.jsx
├── 📄 pages/              # Route components
│   ├── 🔐 auth.jsx        # Authentication page
│   ├── 📊 dashboard.jsx   # User dashboard (WIP)
│   ├── 🏠 landing.jsx     # Home/landing page
│   ├── 🔗 link.jsx        # Link details page (WIP)
│   └── ↗️ redirected-link.jsx # URL redirect handler (WIP)
├── 🎛️ layouts/            # Layout components
│   └── 📐 app-layout.jsx  # Main app layout with header
├── 🗄️ db/                 # Database & API layer
│   ├── 🔧 supabase.js     # Supabase client configuration
│   └── 🔑 apiAuth.js      # Authentication API functions
├── 🎣 hooks/              # Custom React hooks
│   └── 🔄 use-fetch.jsx   # Reusable fetch hook with loading states
├── 🛠️ lib/                # Utility functions
│   └── ⚙️ utils.js        # Helper functions (cn utility)
├── 🌐 context.jsx         # Authentication context provider
├── 🖼️ assets/             # Static assets
└── 📱 App.jsx             # Main app with routing setup
```

## 🎯 Available Scripts

<div align="center">

| Command           | Description              | Icon |
| ----------------- | ------------------------ | ---- |
| `npm run dev`     | Start development server | 🚀   |
| `npm run build`   | Build for production     | 📦   |
| `npm run preview` | Preview production build | 👀   |
| `npm run lint`    | Run ESLint               | 🔍   |

</div>

## 🎨 UI Components

<div align="center">

**Powered by modern, accessible components with New York style**

![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

| Component Library               | Purpose                         | Features                   |
| ------------------------------- | ------------------------------- | -------------------------- |
| 🧩 **Radix UI**                 | Unstyled, accessible components | WAI-ARIA compliant         |
| 🎨 **Tailwind CSS v4**          | Utility-first CSS framework     | Native CSS support         |
| 🔧 **Class Variance Authority** | Component variants              | Type-safe styling patterns |
| 🎯 **Lucide React**             | Beautiful icons                 | Consistent iconography     |
| 🎭 **tw-animate-css**           | Animation utilities             | CSS animation helpers      |

### 📦 Available Components

- 🔘 **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link)
- 📄 **Card** - Header, content, footer with actions
- 📥 **Input** - Styled form inputs with validation states
- 📑 **Tabs** - Accessible tab navigation
- 📂 **Accordion** - Collapsible content sections
- 👤 **Avatar** - Profile pictures with fallbacks
- 📋 **Dropdown Menu** - Context menus and dropdowns

## 🗃️ Database Setup

<details>
<summary><strong>📊 Supabase Configuration</strong></summary>

### 1️⃣ Create Supabase Project

Visit [supabase.com](https://supabase.com) and create a new project

### 2️⃣ Enable Authentication

- Go to Authentication settings
- Enable email/password authentication
- Configure your site URL for redirects

### 3️⃣ Storage Setup

Create a storage bucket for profile pictures:

- Go to Storage
- Create a new bucket named `profile-pic`
- Set it to public for profile image access

### 4️⃣ Database Tables

The app currently handles user authentication through Supabase Auth. Additional tables for URL shortening will include:

| Table          | Description                    | Status     |
| -------------- | ------------------------------ | ---------- |
| 👤 **Auth**    | User authentication (built-in) | ✅ Active  |
| 🗂️ **Storage** | Profile pictures storage       | ✅ Active  |
| 🔗 **URLs**    | Shortened URL data             | 🚧 Planned |
| 📊 **Clicks**  | Analytics and click tracking   | 🚧 Planned |

</details>

## 🚦 Routes & Navigation

<div align="center">

| Route        | Page           | Description          | Icon |
| ------------ | -------------- | -------------------- | ---- |
| `/`          | Landing        | URL shortening form  | 🏠   |
| `/auth`      | Authentication | Login & registration | 🔐   |
| `/dashboard` | Dashboard      | Link management      | 📊   |
| `/link/:id`  | Link Details   | Analytics & details  | 🔗   |
| `/:id`       | Redirect       | Short URL handler    | ↗️   |

</div>

## ⚙️ Configuration

<div align="center">

**Modern tooling with sensible defaults**

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

</div>

- ⚡ **Vite**: Fast build tool with HMR
- 🔍 **ESLint**: Code linting with React-specific rules
- 🎨 **Tailwind CSS v4**: Latest version with native CSS support
- 📂 **Path Aliases**: `@/` mapped to `src/` directory

## 🤝 Contributing

<div align="center">

**We welcome contributions! 🎉**

</div>

```bash
# 1️⃣ Fork the repository
# 2️⃣ Create a feature branch
git checkout -b feature/amazing-feature

# 3️⃣ Commit your changes
git commit -m 'Add amazing feature'

# 4️⃣ Push to the branch
git push origin feature/amazing-feature

# 5️⃣ Open a Pull Request
```

## � License

<div align="center">

![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)

**This project is created for educational purposes**

</div>

## 👨‍💻 Developer

<div align="center">

**Affan Hossain Rakib**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AffanHossainRakib)

---

<div align="center">
  <strong>Built with ❤️ using React and Supabase</strong><br>
  <em>⭐ Star this repository if you found it helpful!</em>
</div>

</div>

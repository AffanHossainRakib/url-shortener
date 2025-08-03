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
- 🔐 **Secure Authentication** - Login & registration system
- 📊 **Analytics Dashboard** - Track clicks and detailed statistics
- ⚡ **Real-time Updates** - Live data synchronization

</td>
<td width="50%">

### 🎨 User Experience

- 🌙 **Dark Mode Support** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful shadcn/ui components
- ⚙️ **Custom Links** - Personalized short URLs

</td>
</tr>
</table>

## �️ Tech Stack

<div align="center">

| Category          | Technology                                                                                                        | Description                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| ⚛️ **Frontend**   | ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)                      | Modern React with hooks     |
| ⚡ **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)                          | Lightning fast development  |
| 🎨 **Styling**    | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)     | Utility-first CSS framework |
| 🗄️ **Backend**    | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)                | Database, Auth & Real-time  |
| 🧭 **Routing**    | ![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat&logo=react-router&logoColor=white) | Client-side routing         |
| 🎯 **Icons**      | ![Lucide](https://img.shields.io/badge/Lucide-React-F56565?style=flat&logo=lucide&logoColor=white)                | Beautiful icon library      |
| 🧩 **Components** | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)              | Accessible UI components    |

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

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

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
│   └── 🎨 ui/             # shadcn/ui components
├── 📄 pages/              # Route components
│   ├── 🔐 auth.jsx        # Authentication page
│   ├── 📊 dashboard.jsx   # User dashboard
│   ├── 🏠 landing.jsx     # Home/landing page
│   ├── 🔗 link.jsx        # Link details page
│   └── ↗️ redirected-link.jsx # URL redirect handler
├── 🎛️ layouts/            # Layout components
│   └── 📐 app-layout.jsx  # Main app layout
├── 🛠️ lib/                # Utility functions
│   └── ⚙️ utils.js        # Helper functions
└── 🖼️ assets/             # Static assets
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

**Powered by modern, accessible components**

![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

| Component Library               | Purpose                         | Features               |
| ------------------------------- | ------------------------------- | ---------------------- |
| 🧩 **Radix UI**                 | Unstyled, accessible components | WAI-ARIA compliant     |
| 🎨 **Tailwind CSS**             | Utility-first CSS framework     | Responsive design      |
| 🔧 **Class Variance Authority** | Component variants              | Type-safe styling      |
| 🎯 **Lucide React**             | Beautiful icons                 | Consistent iconography |

## 🗃️ Database Setup

<details>
<summary><strong>📊 Supabase Configuration</strong></summary>

### 1️⃣ Create Supabase Project

Visit [supabase.com](https://supabase.com) and create a new project

### 2️⃣ Database Tables

Set up the following tables:

| Table       | Description                      | Key Fields                            |
| ----------- | -------------------------------- | ------------------------------------- |
| 👤 `users`  | User profiles and authentication | id, email, created_at                 |
| 🔗 `urls`   | Shortened URL data               | id, original_url, short_code, user_id |
| 📊 `clicks` | Analytics and click tracking     | id, url_id, ip_address, timestamp     |

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

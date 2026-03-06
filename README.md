# Bishal Halder - Data Engineer Portfolio

A modern, interactive, and responsive personal portfolio built with React and Tailwind CSS. It highlights my professional experience, skills, and projects as a Data Engineer specializing in Azure, Databricks, and Spark.

## 🚀 Features

- **Modern UI & Design:** Built with React and styled using Tailwind CSS for a sleek, responsive design.
- **Dark Mode Support:** Smoothly transitions between light and dark themes with a floating toggle.
- **Scroll Animations:** Utilizes Framer Motion for elegant scroll-triggered reveal animations.
- **Interactive Hero Section:** Features a dynamic particle background (`tsparticles`) and orbiting visual elements.
- **Functional Contact Form:** Integrated with Web3Forms to securely receive emails directly from the site without needing a backend server.
- **Custom Cursor:** Custom animated cursor for a unique user experience.

## 🛠️ Built With

- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Particles:** [tsParticles](https://particles.js.org/)
- **Forms:** [Web3Forms](https://web3forms.com/)

## 💻 Running Locally

To run this portfolio locally on your machine, follow these steps:

1. **Ensure you have Node.js installed.**
2. **Clone the repository and navigate to the project directory:**
   ```bash
   cd portfolio-master
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:** Visit `http://localhost:5173` to view the app!

## 📧 Contact Setup (Web3Forms)
If you clone this repository for your own use, you will need to update the Contact form:
1. Go to [Web3Forms](https://web3forms.com/) and generate a free API Access Key.
2. Open `components/Contact.tsx`.
3. Locate the `data.append('access_key', 'YOUR_KEY_HERE')` line and paste your Web3Forms access key.

---
*Designed & Built by Bishal Halder*

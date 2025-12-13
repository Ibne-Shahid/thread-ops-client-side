# ThreadOps - Garments Management Hub

![ThreadOps Landing Page](https://i.ibb.co.com/mCvpJX9D/Screenshot-2025-12-13-112115.png)

**ThreadOps** is a modern and user-friendly web platform for managing garments and related inventory. It offers a seamless experience for garment browsing, order tracking, and stock management, designed to empower businesses to manage their operations more efficiently.

---

## 🔹 Live Demo
🌐 **Live Site:** [Click here to visit ThreadOps](https://tranquil-marzipan-bcf147.netlify.app/)

---

## 🚀 Features

- 👚 **Product Browsing:** Explore a wide variety of garments with detailed descriptions, images, pricing, and stock availability. Easily filter and search for garments based on categories, size, color, and price range.
- 📦 **Inventory Management:** Track the inventory of your garments in real-time. Easily update stock quantities, view low stock alerts, and manage your entire garment catalog. Monitor inventory levels and ensure you never run out of popular items.
- 📈 **Sales Analytics Dashboard:** Get insights into your sales performance, top-selling garments, and inventory status. Visualize data with interactive charts, such as bar graphs and pie charts, to make data-driven decisions and optimize your stock.
- 🔐 **User Authentication:** Secure and easy login/registration with Firebase Auth. Users can register and sign in with their email/password or social accounts (Google/Facebook). Role-based access ensures that only authorized users can manage stock or view sensitive data.
- 🛒 **Order Management:** Handle garment orders from start to finish. Process new orders, track order status, and update shipment details all from one place. Customers can view their order history and track their shipments in real-time.
- 🔄 **Real-Time Updates with React Query:** Utilize React Query to efficiently fetch and update garment data. Real-time syncing ensures the inventory and order status are always up to date without needing to reload the page.
- 🛠️ **Customizable UI Components:** The application comes with reusable and customizable UI components built using Tailwind CSS and DaisyUI. Create a personalized experience and maintain a clean and modern design across the platform.
- ⚡ **Mobile-Optimized:** ThreadOps is designed to be fully responsive, offering a seamless experience across all devices, from desktop computers to mobile phones. Users can manage their garment inventory and orders on-the-go.
- 🧑‍💼 **Multi-role Support:** Different user roles, such as Admin and Store Manager, ensure that access control is maintained. Admins have full access to inventory and order management, while store managers can only view and update certain sections.
- 💬 **Notifications and Alerts:** Get notified about important events, such as low stock, new orders, or system errors. Toast notifications and SweetAlert popups keep users informed and guide them through critical actions.
- 📦 **Stripe Integration for Payments:** Manage payments and transaction details using Stripe. Handle garment purchases and subscription services securely, with a smooth and streamlined checkout experience.
- 📑 **Reports & Export Data:** Generate reports on sales, stock levels, and order history. Export data as CSV or PDF for external use, making it easier to share reports with stakeholders.
- 🎯 **Performance & Speed:** Built using the latest web technologies, the platform is optimized for speed. Enjoy a smooth, fast-loading experience with minimal downtime and quick access to garment data.

---

## 🛠️ Technology Stack

**Frontend:**
- React 19
- React Router 7
- Firebase Auth
- Tailwind CSS 4
- Tanstack Query (for efficient data fetching)
- SweetAlert2 (for user-friendly popups)
- React Toastify (for toast notifications)
- Swiper (for carousel/slider components)
- React Icons & Lucide React (for icons)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK
- Stripe (for payments)
- UUID (for unique Tracking IDs)

---

## 💻 Local Setup

Follow these steps to run **ThreadOps** locally:

1. **Clone the repository** </br>
git clone (your-repo-url) </br>
cd thread-ops-client-side

2. **Install dependencies and start development server** </br>
npm install

3. **Create .env file (if needed) and add your Firebase credentials** </br>
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

4. **Run the development server** </br>
npm run dev

5. **Open in browser** </br>
Visit http://localhost:5173 (or the port Vite shows) to see the app.

---

## 👨‍💻 Author
Developed by **Anas Bin Shahid**  
Passionate about crafting modern, performance-focused, and user-friendly web applications.

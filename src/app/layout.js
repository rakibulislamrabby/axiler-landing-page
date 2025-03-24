import { Inter, Hubot_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Primary font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Optional font
const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Axiler | The Autopilot Of Digital Defence",
  description: "Secure today, Confident tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hubotSans.variable} antialiased`}>
        <ToastContainer
          hideProgressBar={true}
          position="top-right"
          toastClassName="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex items-end px-4 py-6 mb-3"
          bodyClassName="text-sm font-medium text-gray-900 flex flex-1"
        />
        <div className="mb-10">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

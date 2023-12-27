import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "g/components/footer/Footer";
import { ThemeProvider } from "g/context/ThemeContext";
import AuthProvider from "g/components/AuthProvider/AuthProvider";
import Navbar from "g/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sujon Ali",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"

export default function Layout() {
  return (
    <div className="bg-black"  >
    <div className="flex w-full flex-col rounded-t-4xl justify-between min-h-screen bg-gradient-to-br from-fuchsia-950 via-black to-indigo-950 transition-all duration-300 overflow-x-hidden p-10">
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer> 
    </div>
    </div>
  );
}
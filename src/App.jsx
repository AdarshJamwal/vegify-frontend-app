import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
     <div className="min-h-[calc(100vh-136px)]">
     <Outlet />
     </div>
     <Footer/>
    </div>
  )
}













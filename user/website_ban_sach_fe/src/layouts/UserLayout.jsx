import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/ChatBot/ChatBot";

function UserLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
      <ChatBot />
    </div>
  );
}

export default UserLayout;

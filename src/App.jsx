import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="w-screen h-screen bg-blue-200  dark:bg-gray-800 dark:text-white flex items-center justify-center text-3xl sm:text-5xl select-none">
      <div className=" w-full sm:px-28 flex flex-col gap-20  items-center">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

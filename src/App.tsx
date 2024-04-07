import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Headlines from "./pages/HeadLines";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Footer from "./components/Footer";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headlines" element={<Headlines />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

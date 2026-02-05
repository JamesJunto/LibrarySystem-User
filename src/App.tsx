import { Dashboard } from "./Pages/Dashboard";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/Side_nav";
import { useGetData } from "./data/data";
import { LoginForm } from "./Components/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const { book, loading, error, fetchData } = useGetData();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen bg-base-200">
          <LoginForm />
        </div>
      ),
    },
    {
      path: "/Dashboard",
      element: (
        <>
          <div className="flex-none">  
            <Header />
          </div>
          <div className="position absolute top-16 left-0 w-64  ">
            <SideNav />
          </div>
          <div className="flex-1 justify-center items-center ">
            <Dashboard
              fetchData={fetchData}
              books={book}
              loading={loading}
              error={error}
            />
          </div>
        </>
      ),
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

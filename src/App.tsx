import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { LoginForm } from "./Components/LoginForm";
import { Dashboard } from "./Pages/Dashboard";
import { useGetData } from "./data/data";
import BorrowedBoooks from "./Pages/BorrowedBooks";

function App() {
  const { book, loading, error, fetchData } = useGetData();

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN PAGE (NO LAYOUT) */}
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center min-h-screen bg-base-200">
              <LoginForm />
            </div>
          }
        />

        {/* DASHBOARD WITH LAYOUT */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                fetchData={fetchData}
                books={book}
                loading={loading}
                error={error}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

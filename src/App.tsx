import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { LoginForm } from "./Components/LoginForm";
import { Dashboard } from "./Pages/Dashboard";
import { useGetData } from "./data/data";
import BorrowedBooksPage from "./Pages/BorrowedBooksPage";
import { useBorrowedBooksData } from "./data/getBorrowedBooksData";

function App() {
  const { book, loading, error } = useGetData();
  const { borrowedBooks, loading: borrowedBooksLoading } = useBorrowedBooksData();

  return (
      <Routes>,
        {/* LOGIN PAGE (NO LAYOUT) */}
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center min-h-screen bg-base-200">
              <LoginForm  />
            </div>
          }
        />

        {/* DASHBOARD WITH LAYOUT */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                books={book}
                loading={loading}
                error={error}
                borrowedBooks={borrowedBooks}
              />
            }
          />
        </Route>

          <Route element={<Layout />}>
          <Route
            path="/borrowed-books"
            element={
              <BorrowedBooksPage borrowedBooks={borrowedBooks} loading={borrowedBooksLoading} />
            }
          />
        </Route>    

      </Routes>
  );
}

export default App;

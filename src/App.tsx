import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { LoginForm } from "./Components/LoginForm";
import { Dashboard } from "./Pages/Dashboard";
import { useGetData } from "./data/data";
import BorrowedBooksPage from "./Pages/BorrowedBooksPage";
import { useBorrowedBooksData } from "./data/getBorrowedBooksData";

function App() {
  const { book, loading, error, fetchAllBooksData } = useGetData();
  const { borrowedBooks, loading: borrowedBooksLoading, fetchData, setBorrowedBooks } = useBorrowedBooksData();

  return (
      <Routes>,
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
                books={book}
                loading={loading}
                fetchAllbooks={fetchAllBooksData}
                error={error}
                borrowedBooks={borrowedBooks}
                fetchData={fetchData}
                setBorrowedBooks={setBorrowedBooks}
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

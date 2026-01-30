import { Dashboard } from "./Pages/Dashboard";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/Side_nav";
import { useGetData } from "./data/data";

function App() {
  const { book, loading, error, fetchData } = useGetData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 ">
        <SideNav />

        <div className="flex-1 flex justify-center">
          <Dashboard
            books={book}
            loading={loading}
            error={error}
            fetchData={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

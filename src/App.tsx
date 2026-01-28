import { Dashboard } from "./Pages/Dashboard";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/Side_nav";

function App() {
  return (
<div className="min-h-screen flex flex-col">
  <Header />

  <div className="flex flex-1">
    <SideNav/>

    <div className="flex-1 flex justify-center">
      <Dashboard />
    </div>
  </div>
</div>
  );
}

export default App;

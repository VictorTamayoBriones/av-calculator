import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/routes";
import { AppStore } from "./redux/store";
import { Loader } from "./components/Loader";

export default function App() {
  
  const { loader } = useSelector((store: AppStore) => store)
  
  return (
    <div className="app">
      <AppRoutes/>
      {
        loader.isLoading &&
        <Loader/>
      }
    </div>
  )
}

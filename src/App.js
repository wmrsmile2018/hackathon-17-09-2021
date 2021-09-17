import "./App.scss";
import Pages from "./components/pages";
import { AllUsers } from "./layouts/allUsers/";
import { CurrentUser } from "./layouts/currentUser/currentUser";

const navigation = [
  { path: "all", title: "По всем" },
  { path: "current", title: "По одному" },
];

function App() {
  return (
    <div className="App">
      <Pages rootPath="/statistics" navigation={navigation}>
        <AllUsers rootPath="/statistics" path="all" />
        <CurrentUser rootPath="/statistics" path="current" />
      </Pages>
    </div>
  );
}

export default App;

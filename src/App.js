import "./App.scss";
import Pages from "./components/pages";
import { AllUsersController } from "./layouts/allUsers/";
import { CurrentUserController } from "./layouts/currentUser/currentUserController";
const navigation = [
  { path: "all", title: "По всем" },
  { path: "current", title: "По одному" },
];

function App() {
  return (
    <div className="App">
      <Pages rootPath="/statistics" navigation={navigation}>
        <AllUsersController rootPath="/statistics" path="all" />
        <CurrentUserController rootPath="/statistics" path="current" />
      </Pages>
    </div>
  );
}

export default App;

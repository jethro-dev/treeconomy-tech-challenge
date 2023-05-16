import "./App.css";
import ProjectList from "./components/ProjectList";

const App = () => (
  <div className="app">
    <div className="app-wrapper">
      {/* Header */}
      <div className="app-header">
        Treeconomy Challenge -{" "}
        <span className="app-header-name">Jethro Au</span>
      </div>

      {/* Product List Component*/}
      <ProjectList />
    </div>
  </div>
);

export default App;

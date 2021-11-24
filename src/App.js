import logo from "./logo.svg";
import "./App.css";
import Button from "@material-tailwind/react/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;

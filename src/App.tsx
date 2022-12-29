import "./App.css";
import Button from "./components/Button";
import { SizeProps, BackgroundColor, ButtonLabel } from "./types/index";

function App() {
  const handler = () => {
    console.log("storybook");
  };
  return (
    <div className="App">
      <Button
        label={ButtonLabel.close}
        backgroundColor={BackgroundColor.pink}
        size={SizeProps.lg}
        onClick={handler}
      />
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ColorsList from "./ColorsList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import ColorDetails from "./ColorDetails";

function App() {
  const [colors, setColors] = useState(['blue', 'red', 'green']);

  const addColor = (color) => {
    setColors([color, ...colors]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route path="/colors/new">
            <NewColorForm addColor={addColor} />
          </Route>
          <Route path="/colors/:color">
            <ColorDetails colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

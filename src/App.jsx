import { Text } from "./components/atoms";
import { colors } from "./styles";

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <Text>Mi texto</Text>
      <Text color={colors.mainColor}>Mi otro texto</Text>
      <form>
        <div>
          <label>Hola</label>
          <input type="text" />
        </div>
        <div>
          <label>Adios</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default App;

import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col mt-4 text-center">
            <h1>Not to do list</h1>
          </div>
        </div>

        {/* form here  */}
        <Form />

        {/* table here */}

        {/* delete butto here  */}
      </div>
    </div>
  );
}

export default App;

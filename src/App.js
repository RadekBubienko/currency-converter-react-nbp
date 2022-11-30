import { Container } from "./Container/styled";
import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";

function App() {


  return (
    <Container>
      <Clock />
      <Header />
      <Form />
    </Container>
  );
};

export default App;
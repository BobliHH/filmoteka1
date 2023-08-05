import './App.css';
import { Container } from './common/Container';
import { Header } from './header/Header';
import { Main } from './main/Main';

export const App = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Container>
        <Main />x
      </Container>
      <Container solidColor="#dedede">footer</Container>
      {/* header */}
      {/* main */}
      {/* footer */}
    </div>
  );
};

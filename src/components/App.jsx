import './App.css';
import { Container } from './common/Container';
import { Modal } from './common/Modal';
import { Header } from './header/Header';
import { Main } from './main/Main';

export const App = () => {
  return (
    <div>
      <Modal/>
      <Container>
        <Header />
      </Container>
      <Container>
        <Main />
      </Container>
      <Container solidColor="#dedede">footer</Container>
      {/* header */}
      {/* main */}
      {/* footer */}
    </div>
  );
};

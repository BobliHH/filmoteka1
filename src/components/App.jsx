import { Component } from 'react';

import './App.css';
import { Container } from './common/Container';
import { Modal } from './common/Modal';
import { Header } from './header/Header';
import { Main } from './main/Main';

export default class App extends Component {
  state = {
    modalIsVisible: false,
    selectedMovie: false,
  };
  constructor() {
    super();
  }
  openModal(id) {
    this.setState({
      modalIsVisible: true,
      selectedMovie: id,
    });
  }
  closeModal() {
    this.setState({
      modalIsVisible: false,
      selectedMovie: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.modalIsVisible && <Modal id={this.state.selectedMovie} />}
        <Container>
          <Header />
        </Container>
        <Container>
          <Main openModal={this.openModal.bind(this)} />
        </Container>
        <Container solidColor="#dedede">footer</Container>
        {/* header */}
        {/* main */}
        {/* footer */}
      </div>
    );
  }
}

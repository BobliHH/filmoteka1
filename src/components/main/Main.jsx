import { Component } from 'react';
import './Main.css';
import { Movie } from './movie/Movie';
// export const Main = () => {
//   return (
//     <main>
//       {isLoading && <h2>Se incarca filmele</h2>}
//       {hasError && <h2>Eroare la incarcare</h2>}
//       {data &&
//         data.results.map(film => {
//           return <Movie movie={film} />;
//         })}
//     </main>
//   );
// };

export class Main extends Component {
  state = {
    isLoading: true,
    hasError: false,
    data: false,
  };
  constructor() {
    super();
    this.fetchData();
  }
  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=53b2ac0d64cbeedea763734f4fe8a4ce`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: false,
          hasError: false,
          data: data,
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          hasError: true,
          data: false,
        });
      });
  }
  render() {
    return (
      <main>
        {this.state.isLoading && <h2>Se incarca filmele</h2>}
        {this.state.hasError && <h2>Eroare la incarcare</h2>}
        {this.state.data &&
          this.state.data.results.map(film => {
            return <Movie movie={film} openModal={this.props.openModal} />;
          })}
      </main>
    );
  }
}

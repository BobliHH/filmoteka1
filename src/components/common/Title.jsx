import PropTypes from 'prop-types';
export const Title = ({ title, tag }) => {
  const fontSize = {
    h1: 46,
    h2: 38,
    h3: 30,
    h4: 25,
  };
  const styles = {
    color: 'white',
    backgroundColor: 'black',
    fontSize: fontSize[tag],
  };

  if (tag === 'h1') {
    return <h1 style={styles}>{title}</h1>;
  }
  if (tag === 'h2') {
    return <h2 style={styles}>{title}</h2>;
  }
  if (tag === 'h3') {
    return <h3 style={styles}>{title}</h3>;
  }
  if (tag === 'h4') {
    return <h4 style={styles}>{title}</h4>;
  }
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};

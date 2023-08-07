import './Modal.css';
export const Modal = props => {
  return (
    <div id="info-modal" className="modal-wrapper">
      <div id="modal">
        <div id="close-modal" className="backdrop">
          x
        </div>
        <div id="movie-card">{props.id}</div>
      </div>
    </div>
  );
};

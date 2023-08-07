import './Modal.css';
export const Modal = ({ id, closeModal }) => {
  return (
    <div id="info-modal" className="modal-wrapper">
      <div id="modal">
        <div id="close-modal" className="backdrop" onClick={closeModal}>
          x
        </div>
        <div id="movie-card">{id}</div>
      </div>
    </div>
  );
};

import './Modal.css';
export const Modal = () => {
  return (
    <div id="info-modal" className="modal-wrapper">
      <div id="modal">
        <div id="close-modal" className="backdrop">
          x
        </div>
        <div id="movie-card"></div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const MovieImage = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <ul className="list-group mb-4">
            <hr />
            <li>Title:{movie.Title}</li>
            <li>Year:{movie.Year}</li>
            <li>imdb:{movie.imdbID}</li>

            <button onClick={() => setModalIsOpen(true)}>Open modal</button>
            <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  backgroundColor: 'grey',
                },
                content: {
                  width: "900px",
                  color: 'black',
                  height: "300px",
                  transform: "translate(-50%, -50%) !important",
                  left: "25%"
                },
                
              }}
            // shouldCloseOnOverlayClick={false}
            >
              <h2>Movie details</h2>
              <div>
                <li>Title:{movie.Title}</li>
                <li>Year:{movie.Year}</li>
                <li>imdb:{movie.imdbID}</li>
                <li>Poster:{movie.Poster}</li>
              </div>
              <div>
                <button className="pull-right" bsStyle="danger"  onClick={() => setModalIsOpen(false)}>Close</button>
              </div>
            </Modal>
            <hr />
          </ul>
        </div>
      ))}

    </>
  );
};

export default MovieImage;
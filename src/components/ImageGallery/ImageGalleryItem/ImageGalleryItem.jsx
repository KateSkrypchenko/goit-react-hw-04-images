import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      setShowModal(false);
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <Item>
        <Image src={webformatURL} alt={tags} loading="lazy" onClick={openModal} />
      </Item>
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          onClose={handleBackdropClick}
          onChange={handleKeyDown}
        />
      )}
    </div>
  );
};

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   openModal = () => {
//     this.setState({
//       showModal: true,
//     });
//   };

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.setState({
//         showModal: false,
//       });
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.setState({
//         showModal: false,
//       });
//     }
//   };

//   render() {
//     const { showModal } = this.state;
//     const { largeImageURL, webformatURL, tags } = this.props;
//     return (
//       <div>
//         <Item>
//           <Image src={webformatURL} alt={tags} loading="lazy" onClick={this.openModal} />
//         </Item>
//         {showModal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             onClose={this.handleBackdropClick}
//             onChange={this.handleKeyDown}
//           />
//         )}
//       </div>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

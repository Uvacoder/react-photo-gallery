import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
// import Gallery from 'react-grid-gallery';
import Gallery from "react-photo-gallery";
import { Modal } from "antd";
import { photos } from "./photos";
// import Carousel, { Modal, ModalGateway } from "react-images";
import ImageDetails from "./ImageDetails";

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    // console.log("index clicked: ", index);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log("current Image: ", currentImage);
  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {viewerIsOpen ? (
        <Modal
          title="Customer Images"
          visible={viewerIsOpen}
          onOk={closeLightbox}
          style={{ top: "0px", paddingBottom: "0px", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
          onCancel={closeLightbox}
          wrapClassName="edit-new-customer-form-modal"
          footer={null}
          width="70%"
          zIndex={2001}
        >
          <ImageDetails onCancel={closeLightbox} currentImage={currentImage} />
        </Modal>
      ) : null}
    </div>
  );
};

// App.defaultProps = {
//   images: [
//     {
//       id: 0,
//       src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
//       thumbnail:
//         "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
//       thumbnailWidth: 240,
//       thumbnailHeight: 320,
//       caption: "8H (gratisography.com)",
//       thumbnailCaption: (
//         <div>
//           <span>8H</span>
//           <br />
//           <span>10/26/2020</span>
//         </div>
//       ),
//       metaData: {
//         customerName: "usman",
//         uplaodedDate: "7/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 1,
//       src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
//       thumbnail:
//         "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 190,
//       caption: "286H (gratisography.com)",
//       thumbnailCaption: (
//         <div>
//           <span>26H</span>
//           <br />
//           <span>10/26/2020</span>
//         </div>
//       ),
//       metaData: {
//         customerName: "hamza",
//         uplaodedDate: "4/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 2,
//       src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
//       thumbnail:
//         "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 148,
//       caption: "315H (gratisography.com)",
//       thumbnailCaption: (
//         <div>
//           <span>31H</span>
//           <br />
//           <span>10/26/2020</span>
//         </div>
//       ),
//       metaData: {
//         customerName: "zain",
//         uplaodedDate: "23/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 3,
//       src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
//       thumbnail:
//         "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 213,
//       caption: "201H (gratisography.com)",
//       thumbnailCaption: (
//         <div>
//           <span>20H</span>
//           <br />
//           <span>10/26/2020</span>
//         </div>
//       ),
//       metaData: {
//         customerName: "abubakar",
//         uplaodedDate: "11/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 4,
//       src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
//       thumbnail:
//         "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
//       thumbnailWidth: 248,
//       thumbnailHeight: 320,
//       caption: "Big Ben (Tom Eversley - isorepublic.com)",
//       thumbnailCaption: "Big Ben",
//       metaData: {
//         customerName: "ali",
//         uplaodedDate: "7/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 5,
//       src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
//       thumbnail:
//         "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 113,
//       caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
//       thumbnailCaption: (
//         <span style={{ color: "darkred" }}>
//           Red Zone - <i>Paris</i>
//         </span>
//       ),
//       metaData: {
//         customerName: "jamal",
//         uplaodedDate: "7/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 6,
//       src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
//       thumbnail:
//         "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
//       thumbnailWidth: 313,
//       thumbnailHeight: 320,
//       caption: "Wood Glass (Tom Eversley - isorepublic.com)",
//       thumbnailCaption: "Wood Glass",
//       metaData: {
//         customerName: "haji",
//         uplaodedDate: "7/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//     {
//       id: 7,
//       src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
//       thumbnail:
//         "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 213,
//       caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
//       thumbnailCaption: "Flower Interior Macro",
//       metaData: {
//         customerName: "shakeel",
//         uplaodedDate: "7/5/2020. 7:20 P.M.",
//       },
//       notes: "",
//     },
//   ],
// };

export default App;

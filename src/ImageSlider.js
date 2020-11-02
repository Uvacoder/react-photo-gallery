import React from "react";
import { Carousel } from "react-responsive-carousel";
import { photos } from "./photos";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesData: photos,
      selectedDataObject: null,
      // imagesData: this.props.images,
      //   ...this.props,
    };
    // console.log("upcoming props: ", this.props);
    this.imageChanged = this.imageChanged.bind(this);
    this.props.onChangeImage(
      this.state.imagesData[this.props.selectedImageIndex]
    );
  }

  // componentWillReceiveProps(newProps) {
  //   //  console.log('new Props', newProps);
  //   const { imagesData } = this.state;
  //   const { selectedImageIndex } = newProps;
  //   // const [imagesData[0], imagesData[newProps.selectedImageIndex] ] = [imagesData[newProps.selectedImageIndex], imagesData[0]];
  //   const imagesDatas = imagesData.map((dataItem) => dataItem.key === selectedImageIndex ? )
  // }

  imageChanged(e) {
    const data = this.state.imagesData.filter(
      (objectData) => objectData.id === e
    )[0];
    this.setState({ selectedDataObject: data });
    console.log("selected Data: ", data);
    this.props.onChangeImage(data);
  }

  render() {
    let count = 0;
    return (
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          onChange={(e) => this.imageChanged(e)}
          useKeyboardArrows={true}
          //    thumbWidth={100}
          // dynamicHeight={true}
          //    selectedItem={e => console.log('selected item rendered')}
        >
          {this.state.imagesData.map((dataObject, index) => {
            if (this.props.selectedImageIndex && count === 0) {
              index = this.props.selectedImageIndex;
              count++;
            }
            // if (this.props.selectedImageIndex === index) {
            //   console.log("index value: ", index);
            //   console.log(
            //     "selected image prop: ",
            //     this.props.selectedImageIndex
            //   );
            //   index = this.props.selectedImageIndex;
            //   console.log("after index value: ", index);
            // }
            return (
              <div className="aspect-ratio-box" key={index}>
                <img src={this.state.imagesData[index].src} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default ImageSlider;

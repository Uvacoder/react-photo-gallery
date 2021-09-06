import React from "react";
import { Row, Col } from "antd";
// import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
import ImageContent from "./ImageContent";

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      selectedObject: null,
    };
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  onChangeImage(e) {
    // console.log("number: ", e);
    this.setState({ selectedObject: e });
  }

  render() {
    // console.log("CI", this.props.currentImage);
    const { selectedObject } = this.state;
    return (
      <React.Fragment>
        <span className="customer-image-details">
          <Row>
            <Col span={18}>
              <ImageSlider
                selectedImageIndex={this.props.currentImage}
                imagesData={this.state.imagesData}
                onChangeImage={(e) => this.onChangeImage(e)}
                data={selectedObject}
              />
            </Col>
            <Col offset={1} span={5}>
              {selectedObject && selectedObject != null && (
                <ImageContent
                  onCancel={this.props.onCancel}
                  data={selectedObject}
                />
              )}
            </Col>
          </Row>
        </span>
      </React.Fragment>
    );
  }
}

export default ImageDetails;

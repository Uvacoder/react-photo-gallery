import React from "react";
import { Row, Col, Button, Input } from "antd";
// import { PushpinOutlined, StarOutlined } from "@ant-design/icons";
const { TextArea } = Input;

export default function ImageContent({ data }) {
  // data.meta
  console.log("props Data: ", data);
  return (
    <React.Fragment>
      <span style={{ position: "fixed" }}>
        <Row>
          <Col span={12}>
            <Button>
              <span>pin &nbsp;</span>
              Pin
            </Button>
          </Col>
          <Col span={12}>
            <Button>
              <span>star &nbsp;</span>
              Star
            </Button>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col span={24}>
            Origin <br />
            {data.metaData.customerName}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            Uploaded By <br />
            {data.metaData.uplaodedDate}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col span={24}>
            Notes
            <TextArea rows={4} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button
              onClick={() => console.log("image with meta data: ", data)}
              type="primary"
            >
              Save
            </Button>
          </Col>
        </Row>
      </span>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from "react";
import { Row, Col, Button, Input, Switch, Select } from "antd";
import { PushpinOutlined, StarOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

export default function ImageContent({ data, onCancel }) {
  const [tags, setTags] = React.useState([]);
  const [notes, setNotes] = React.useState("");
  const [isPinned, setIsPinned] = React.useState(false);
  const [isStar, setIsStar] = React.useState(false);
  const [customerPortal, setCustomerPortal] = useState(false);

 // useEffect(() => {
 //   setTags([]);
 //   setNotes("");
//  }, [data.tags]);

  const addTag = (tag) => {
   // setTags(tag);
    useEffect(() => {
      setTags(data.tags);
      setNotes(data.notes);
    }, [data.tags]);
};
  const imageMetaData = () => {
    console.log("Image Meta Data", data);
    console.log("tags: ", tags);
    console.log("notes: ", notes);
    console.log("customer portal: ", customerPortal);
    console.log("is star", isStar);
    console.log("is pin", isPinned);
  };

  const pinnedImage = () => {
    console.log("pinned image button");
    setIsPinned(true);
  };

  const starImage = () => {
    console.log("star image button");
    setIsStar(true);
  };

  const addTag = (tag) => {
    setTags(tag);
  };

  // console.log('tagssss: ', tags)
  return (
    <React.Fragment>
      <span>
        <Row
          style={{
            width: '100%',
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Col>
            <Button onClick={pinnedImage}>
              <span>
                <PushpinOutlined />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;Pin&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          </Col>
          <Col>
            <Button onClick={starImage}>
              <span>
                <StarOutlined />
                &nbsp;
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;Star&nbsp;&nbsp;
            </Button>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col span={24}>
            <span style={{ color: "#8a8a8a" }}>Origin</span> <br />
            {data.metaData.origin}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <span style={{ color: "#8a8a8a" }}>Uploaded By</span> <br />
            {data.metaData.customerName} on {data.metaData.uplaodedDate}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col span={24}>
            <span style={{ color: "#8a8a8a" }}>Notes</span>
            <TextArea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <span className="records-ddl-multiselect">
              <span style={{ fontSize: 20 }}>Tags</span>
              <Select
                mode="tags"
                onChange={(value) => addTag(value)}
                size="small"
                // style={{ width: 500 }}
                // dropdownStyle={{ minWidth: "50%", height: "32px" }}
                value={tags}
                style={{ width: "100%" }}
              >
                {tags &&
                  tags.map((tag, index) => (
                    <Option key={index} value={tag}>
                      {tag}
                    </Option>
                  ))}
              </Select>
            </span>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <span style={{ fontSize: 20 }}>Visible</span> <br />
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <span>In Customer Portal</span>
              <span>
                <Switch onChange={() => setCustomerPortal(true)} />
              </span>
            </span>
          </Col>
        </Row>
        <br />
        <br />
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Col>
            <Button onClick={onCancel}>Cancel</Button>
          </Col>
          <Col offset={1}>
            <Button type="primary" onClick={imageMetaData}>
              Save
            </Button>
          </Col>
        </Row>
      </span>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { Row, Col, Button, Input, Divider, Switch, Select } from 'antd';
import { PushpinOutlined, StarOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

export default function ImageContent({ data }) { 
  const [ tags, setTags ] = React.useState(data.tags);
  const [ notes, setNotes ] = React.useState("");
  const [isPinned, setIsPinned] = React.useState(false);
  const [isStar, setIsStar] = React.useState(false);
  const [ customerPortal, setCustomerPortal ] = useState(false);

  const imageMetaData = () => {
    console.log('Image Meta Data', data);
    console.log('tags: ', tags);
    console.log('notes: ', notes);
    console.log('customer portal: ', customerPortal);
    console.log('is star', isStar);
    console.log('is pin', isPinned);
  };

  const pinnedImage = () => {
    console.log('pinned image button')
    setIsPinned(true);
  };

  const starImage = () => {
    console.log('star image button')
    setIsStar(true);
  };

  const addTag = (tag) => {
      setTags(tag)
  }

  // console.log('tagssss: ', tags)
  return (
    <React.Fragment>
    <span>
    <Row>
    <Col span={9}> 
      <Button onClick={pinnedImage}><span><PushpinOutlined /></span>&nbsp;&nbsp;&nbsp;&nbsp;Pin&nbsp;&nbsp;&nbsp;&nbsp;</Button>
    </Col>
    <Col span={7} offset={5}>
     <Button onClick={starImage}><span><StarOutlined />&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;Star&nbsp;&nbsp;</Button>
    </Col>
  </Row>
  <hr />
  <br />
  <Row>
     <Col span={24}>
        <span style={{ color : '#8a8a8a' }}>Origin</span> <br />
        { data.metaData.customerName }
     </Col>
  </Row>
  <br />
  <Row>
  <Col span={24}>
        <span style={{ color : '#8a8a8a' }}>Uploaded By</span> <br />
        { data.metaData.uplaodedDate }
  </Col>
  </Row>
  <hr />
  <br />
  <Row>
    <Col span={24}>
      <span style={{ color : '#8a8a8a' }}>Notes</span>
      <TextArea rows={4} value={notes} onChange={e => setNotes(e.target.value)} />
    </Col>
  </Row>
  <br />
  <Row>
      <Col span={24}>
      <span className="records-ddl-multiselect">
      <span style={{ fontSize: 20 }}>Tags</span>
      <Select
        mode="tags"
        onChange={value => addTag(value)}
        size="small"
        // style={{ width: 500 }}
        // dropdownStyle={{ minWidth: "50%", height: "32px" }}
        value={tags}
        style={{ width: '100%' }}
      >
       {
         tags && tags.map((tag, index) => <Option key={index} value={tag}>{tag}</Option>)
       }
      </Select>
       </span>
      </Col>
  </Row>
  <br />
  <Row>
      <Col span={24}>
      <span style={{ fontSize: 20 }}>Visible</span> <br />
       <span 
       style={{ display: "flex", justifyContent: 'space-between'}}>
       <span>In Customer Portal</span>
       <span><Switch onChange={() => setCustomerPortal(true)} /></span>
       </span>
      </Col>
  </Row>
  <br />
  <Row>
    <Col span={5} offset={10}><Button>Cancel</Button></Col>
    <Col span={5} offset={4}><Button type="primary" onClick={imageMetaData}>Save</Button></Col>
  </Row>
  </span>
    </React.Fragment>
  );
}

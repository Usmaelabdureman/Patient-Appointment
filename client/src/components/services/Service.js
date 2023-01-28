import { Avatar,Button,Card } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Item from "./Item";
import doc from "../../Assets/doc.png"
import "./service.css";

const { Meta } = Card;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Service() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Some of Our Doctors</h1>
      <div className="Service">
        <Carousel breakPoints={breakPoints}>
          <Item>
          <Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card>
          </Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button >See more</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description="Specialist of Heart One of the expert specialist in theTikur Anbess Hospital"
    />
  </Card></Item>
          <Item><Card
    cover={
      <img
        alt="example"
        src={doc}
      />
    }
    actions={[
      <Button>see more </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={doc} />}
      title="Dr Samira"
      description=" Specialist of Heart One of the expert specialist in theTikur Anbess Hospital  "
    />
  </Card></Item>
        </Carousel>
      </div>
    </>
  );
}

export default Service
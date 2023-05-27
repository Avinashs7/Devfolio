import React from "react";
import Card from "./Card.jsx";

function CardUse() {
  return (
    <div className="card-container">
      <Card
        title="Interactive Web Design"
        content="It is a low/no code website."
        imageUrl="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
      />
      <Card
        title="Logistics"
        content="It makes supply chain faster."
        imageUrl="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Card
        title="Artificial Intelligence"
        content="Stimulation of human intelligence."
        imageUrl="https://thumbs.dreamstime.com/b/business-woman-drawing-global-structure-networking-business-woman-drawing-global-structure-networking-data-exchanges-customer-109179483.jpg"
      />
      <Card
        title="Life Success"
        content="It help you lead a successful life."
        imageUrl="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        title="Business Consultancy"
        content="It is a business consultancy website."
        imageUrl="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg"
      />
      <Card
        title="IOT"
        content="It help you to intract with nature from your phone."
        imageUrl="https://www.shutterstock.com/image-photo/global-business-structure-networking-analysis-260nw-2151657341.jpg"
      />
      <Card
        title="Finance"
        content="It help you to manage your finance."
        imageUrl="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?cs=srgb&dl=pexels-fauxels-3184292.jpg&fm=jpg"
      />
      <Card
        title="UI/UX"
        content="It help you to give life to your application."
        imageUrl="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?cs=srgb&dl=pexels-fauxels-3183198.jpg&fm=jpg"
      />
    </div>
  );
}

export default CardUse;
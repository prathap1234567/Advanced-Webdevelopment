// BookEventPage.jsx

import React, { useState } from "react";
import "./Bookevent.css";
import Navbar from "../Component/Navbar";

function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle image click
  const handleImageClick = (event) => {
    setSelectedEvent(event);
  };

  return selectedEvent ? (
    <EventDetails event={selectedEvent} />
  ) : (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="book-event-page">
        <h1 className="event-title">Mark Your Day</h1>
        <div className="image-grid">
          <div
            className="image-item item1"
            onClick={() =>
              handleImageClick({
                id: 1,
                name: "KJ BIRTHDAY EVENTS",
                image:
                  "https://images.pexels.com/photos/5725981/pexels-photo-5725981.jpeg?auto=compress&cs=tinysrgb&w=600",
              })
            }
          >
            <span className="event-name">KJ BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item2"
            onClick={() =>
              handleImageClick({
                id: 2,
                name: "AB BIRTHDAY EVENTS",
                image:
                  "https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600",
              })
            }
          >
            <span className="event-name">AB BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item3"
            onClick={() =>
              handleImageClick({
                id: 3,
                name: "AW BIRTHDAY EVENTS",
                image:
                  "https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=600",
              })
            }
          >
            <span className="event-name">AW BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item4"
            onClick={() =>
              handleImageClick({
                id: 4,
                name: "BN BIRTHDAY EVENTS",
                image:
                  "https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=600",
              })
            }
          >
            <span className="event-name">BN BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item5"
            onClick={() =>
              handleImageClick({
                id: 5,
                name: "PO BIRTHDAY EVENTS",
                image:
                  "https://i.pinimg.com/originals/69/c3/03/69c30385c2e2ab1b27064cecd4902235.jpg",
              })
            }
          >
            <span className="event-name">PO BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item6"
            onClick={() =>
              handleImageClick({
                id: 6,
                name: "RMD BIRTHDAY EVENTS",
                image:
                  "https://i.pinimg.com/originals/4e/5c/90/4e5c9060ebc64da507db5a07c35376b8.jpg",
              })
            }
          >
            <span className="event-name">RMD BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item7"
            onClick={() =>
              handleImageClick({
                id: 7,
                name: "VV BIRTHDAY EVENTS",
                image:
                  "https://i.pinimg.com/originals/9d/89/9b/9d899b3159c4153995d2d0b8fc30d3e7.jpg",
              })
            }
          >
            <span className="event-name">VV BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item8"
            onClick={() =>
              handleImageClick({
                id: 8,
                name: "OP BIRTHDAY EVENTS",
                image:
                  "https://cdn.diys.com/wp-content/uploads/2021/04/DIY-Birthday-decor-1.jpg",
              })
            }
          >
            <span className="event-name">OP BIRTHDAY EVENTS</span>
          </div>
          <div
            className="image-item item9"
            onClick={() =>
              handleImageClick({
                id: 9,
                name: "SSS BIRTHDAY EVENTS",
                image:
                  "https://www.togetherv.com/blog/wp-content/uploads/2021/04/shutterstock_2062979228.jpg",
              })
            }
          >
            <span className="event-name">SSS BIRTHDAY EVENTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookevent;

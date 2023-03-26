import { useState } from "react";
import CardRow from "./CardRow/CardRow";
import "./EventsPage.css";
import PopupCard from "./PopupCard/PopupCard";
import SearchBar from "./SearchBar/SearchBar";

function EventsPage() {
  const [popupCard, setPopupCard] = useState("");
  return (
    <div className="w-screen relative h-[200vh]">
      {/* Search Bar */}
      {popupCard}
      <SearchBar />
      <div className="p-8">mmf</div>
      <CardRow
        onCardClick={(data) => {
          // TODO: pass the data later
          setPopupCard(
            <PopupCard
              onPopUpCardClick={() => {
                setPopupCard("");
              }}
            />
          );
        }}
      />
      <CardRow
        onCardClick={(data) => {
          // TODO: pass the data later
          setPopupCard(
            <PopupCard
              onPopUpCardClick={() => {
                setPopupCard("");
              }}
            />
          );
        }}
      />{" "}
      <CardRow
        onCardClick={(data) => {
          // TODO: pass the data later
          setPopupCard(
            <PopupCard
              onPopUpCardClick={() => {
                setPopupCard("");
              }}
            />
          );
        }}
      />{" "}
      <CardRow
        onCardClick={(data) => {
          // TODO: pass the data later
          setPopupCard(
            <PopupCard
              onPopUpCardClick={() => {
                setPopupCard("");
              }}
            />
          );
        }}
      />
    </div>
  );
}

export default EventsPage;

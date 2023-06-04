import React from "react";
import Container from "../../Componets/Shared/Container/Container";
import Header from "../../Componets/Rooms/Header/Header";
import RoomInfo from "../../Componets/Rooms/RoomInfo/RoomInfo";
import RoomReservation from "../../Componets/Rooms/RoomReservation/RoomReservation";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const roomData = useLoaderData()
  return (
    <div>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <div>
              <Header roomData = {roomData}></Header>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-6">
              <RoomInfo roomData = {roomData}></RoomInfo>
              <div className="mb-10 md:col-span-3 order-first md:order-last">
                <RoomReservation roomData = {roomData}></RoomReservation>
              </div>
            </div>
          </div>
        </div>
        
      </Container>
      
    </div>
  );
};

export default RoomDetails;

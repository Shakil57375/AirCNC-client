import React from "react";
import DatePicker from "../Calender/Calender";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-100 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-800">night</div>
      </div>
      <hr />
      <DatePicker></DatePicker>
      <hr />
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center font-semibold text-lg justify-between">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;

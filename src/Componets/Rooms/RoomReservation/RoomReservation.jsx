import React, { useContext, useState } from "react";
import DatePicker from "../Calender/Calender";
import Button from "../Button/Button";
import { AuthContext } from "../../../providers/AuthProvider";
import BookingModal from "../../Modal/BookingModal";
import { formatDistance } from "date-fns";
const RoomReservation = ({ roomData }) => {
  const { user, role } = useContext(AuthContext);
  console.log(roomData.host.email);
  console.log(user.email);
  // Price Calculation
  const totalPrice = formatDistance(new Date(roomData.to), new Date(roomData.from)).split(" ")[0] * roomData.price 
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: 'selection',
  })


  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: roomData.host.email,
    location: roomData.location,
    price: roomData.price,
    to : value.endDate,
    from : value.startDate
  });

  const handleSelect = (ranges) =>{
    setValue({...value})
  } 
  console.log(bookingInfo);
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-100 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>
        <div className="font-light text-neutral-800">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <DatePicker value = {value} handleSelect = {handleSelect}></DatePicker>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user?.email}
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center font-semibold text-lg justify-between">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal isOpen={isOpen} />
    </div>
  );
};

export default RoomReservation;

import React, { useContext, useState } from "react";
import AddRoomForm from "../../Componets/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    startDate : new Date(),
    endDate : new Date(),
    key : "selection"
  })
  const [uploadButtonText, setUploadButtonText] = useState("upload image");
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const guests = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];
    imageUpload(image)
      .then((data) => {
        // console.log(data.data.imageURL);
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          from,
          to,
          price : parseFloat(price),
          guests,
          bedrooms,
          bathrooms,
          description,
          host : {
            name : user?.displayName,
            image : user?.photoURL,
            email : user?.email
          },
          category
        };
        console.log(roomData);

        addRoom(roomData)
        .then(data=>{
          console.log(data);
        })
        .catch(error=>{
          console.log(error.message);
        })

        // console.log(roomData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  const handleDates = (ranges) =>{
    setDates(ranges.selection)
  }

  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates = {handleDates}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;

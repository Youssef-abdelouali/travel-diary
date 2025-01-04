import React, { useState } from 'react';
import '../styles/AddEditTrip.scss';

const AddEditTrip = () => {
  const [trip, setTrip] = useState({
    name: '',
    destination: '',
    date: '',
    description: '',
    photos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setTrip({ ...trip, photos: [...trip.photos, ...files] });
  };

  return (
    <div className="add-edit-trip">
      <h2>Add/Edit Trip</h2>
      <form>
        <input type="text" name="name" placeholder="Enter trip name" value={trip.name} onChange={handleChange} />
        <input type="text" name="destination" placeholder="Enter destination" value={trip.destination} onChange={handleChange} />
        <input type="date" name="date" value={trip.date} onChange={handleChange} />
        <textarea name="description" placeholder="Enter trip description" value={trip.description} onChange={handleChange}></textarea>
        <div className="photo-upload">
          <label>Upload Trip Photos</label>
          <input type="file" onChange={handleFileChange} multiple />
        </div>
        <button type="submit">Save Trip</button>
      </form>
    </div>
  );
};

export default AddEditTrip;

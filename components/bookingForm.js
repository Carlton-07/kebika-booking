import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("Reservation confirmed!");
    } catch (error) {
      console.error("Error booking:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-gold border border-gold rounded-xl max-w-4xl mx-auto p-6 space-y-6"
    >
      <h2 className="text-3xl font-bold text-gold text-center mb-4">
        Book a Table
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="bg-black text-gold border border-gold p-2 rounded w-full md:w-1/3"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="bg-black text-gold border border-gold p-2 rounded w-full md:w-1/3"
          required
        />
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="bg-black text-gold border border-gold p-2 rounded w-full md:w-1/3"
          required
        >
          <option value="">Guests</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-black text-gold border border-gold p-2 rounded w-full"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-black text-gold border border-gold p-2 rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-gold text-black font-bold p-3 rounded w-full"
      >
        Confirm Booking
      </button>
    </form>
  );
}

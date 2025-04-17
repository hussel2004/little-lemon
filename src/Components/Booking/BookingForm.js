import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function BookingForm({availableTimes,dispatch,submitForm}) {
    const [formData, setFormData] = useState({
        date: "",
        time: "17:00",
        number: 1,
        occasion: "Birthday",
    });
    const navigate =useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: id === "guests" ? parseInt(value) : value,
        }));
        if (id === "date") {
            dispatch({ type: "SET_DATE", payload: value });
          }
          
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optionally reset form:
        const formBool=submitForm(formData);
        if(formBool){
            navigate("/booking-confirmation")
        }
        setFormData({
            date: "",
            time: "17:00",
            number: 1,
            occasion: "Birthday",
        });
   
    
    };
    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={formData.date} onChange={handleChange} />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time} onChange={handleChange}>
               {availableTimes.map(elt=>{
                return(
                    <option key={elt} value={elt}>{elt}</option>
                )
               })}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;

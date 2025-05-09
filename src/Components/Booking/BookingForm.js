import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
    });

    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = (fieldValues = formData) => {
        const temp = { ...errors };

        if ('date' in fieldValues)
            temp.date = fieldValues.date ? "" : "La date est requise.";

        if ('guests' in fieldValues)
            temp.guests =
                fieldValues.guests >= 1 && fieldValues.guests <= 10
                    ? ""
                    : "Entre 1 et 10 invités.";

        if ('occasion' in fieldValues)
            temp.occasion = fieldValues.occasion ? "" : "Veuillez choisir une occasion.";

        if ('time' in fieldValues)
            temp.time = fieldValues.time ? "" : "L'heure est requise.";

        setErrors({ ...temp });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        const newValue = id === "guests" ? parseInt(value) : value;

        setFormData((prev) => ({
            ...prev,
            [id]: newValue,
        }));

        if (id === "date") {
            dispatch({ type: "SET_DATE", payload: value });
        }

        validate({ ...formData, [id]: newValue });
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        setTouched({ ...touched, [id]: true });
        validate(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validate(formData);

        if (isFormValid()) {
            const formBool = submitForm(formData);
            if (formBool) {
                navigate("/booking-confirmation");
            }

            setFormData({
                date: "",
                time: "17:00",
                guests: 1,
                occasion: "Birthday",
            });
            setTouched({});
            setErrors({});
        }
    };

    const isFormValid = () => {
        const valid = formData.date &&
            formData.time &&
            formData.occasion &&
            formData.guests >= 1 &&
            formData.guests <= 10;

        return valid && Object.values(errors).every((x) => x === "");
    };

    return (
    <>
        <h1 style={{textAlign:"center"}}>Reservations</h1>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.date && errors.date && (
                <span className="error-text">{errors.date}</span>
            )}

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                {availableTimes.map((elt) => (
                    <option key={elt} value={elt}>{elt}</option>
                ))}
            </select>
            {touched.time && errors.time && (
                <span className="error-text">{errors.time}</span>
            )}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.guests && errors.guests && (
                <span className="error-text">{errors.guests}</span>
            )}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {touched.occasion && errors.occasion && (
                <span className="error-text">{errors.occasion}</span>
            )}

            <input
                type="submit"
                value="Make Your Reservation"
                className="submit-btn"
                disabled={!isFormValid()}
            />
        </form>
    </>
        
    );
}

export default BookingForm;

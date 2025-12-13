import { useState } from "react";
import axios from "axios";
import confetti from "canvas-confetti";

export default function RsvpModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: 1,
    attending: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    
    const phonePattern = /^(?:\+234|0|234)?[789][01]\d{8}$/;
    if (form.phone && !phonePattern.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    // Guests
    if (!form.guests || form.guests < 1) {
      newErrors.guests = "Guests must be at least 1";
    }

    // Attending
    if (!form.attending) {
      newErrors.attending = "Please select Yes or No";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if invalid

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/rsvp`, form);

      setSuccess(true);

      confetti({
        particleCount: 400,
        spread: 160,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#fff3c4", "#fefefe"],
      });

      // Reset form
      setForm({
        name: "",
        phone: "",
        guests: 1,
        attending: "",
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 min-h-screen animate-fadeIn">
      <div className="bg-gradient-to-r from-[#B59410] via-[#fff3c4] to-[#B59410] p-[3px] rounded-3xl shadow-xl w-full max-w-lg">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 animate-slideUp relative">
          {success ? (
            <div className="flex flex-col items-center justify-center py-16 animate-fadeIn animate-scaleUp">
              <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center text-white text-6xl shadow-2xl animate-bounce">
                ✔
              </div>
              <p className="mt-8 text-3xl font-serif text-gray-800 tracking-wide text-center">
                RSVP Submitted!
              </p>
              <p className="mt-2 text-gray-600 text-center">
                Thank you for letting us know
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-serif text-gray-900 text-center mb-8">
                RSVP
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Floating Input Fields */}
                {[
                  {
                    name: "name",
                    type: "text",
                    label: "Full Name",
                    required: true,
                  },
                  { name: "phone", type: "text", label: "Phone (optional)" },
                  {
                    name: "guests",
                    type: "number",
                    label: "Number of Guests",
                    min: 1,
                    required: true,
                  },
                ].map((field) => (
                  <div className="relative" key={field.name}>
                    <input
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      required={field.required}
                      min={field.min}
                      className="peer w-full border-b-2 border-gray-300 focus:border-[#d4af37] outline-none bg-transparent py-3 text-lg"
                    />
                    <label className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-[#d4af37] peer-valid:-translate-y-6 peer-valid:text-sm">
                      {field.label}
                    </label>
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Select */}
                <div className="relative">
                  <select
                    name="attending"
                    value={form.attending}
                    onChange={handleChange}
                    className="w-full text-gray-500 border-b-2 border-gray-300 focus:border-[#d4af37] outline-none bg-transparent py-3 text-lg appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <label className="absolute left-0 top-0 text-gray-500 text-sm pointer-events-none">
                    Attending?
                  </label>
                  {errors.attending && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.attending}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <button
                  type="submit"
                  className="w-full py-3 text-lg rounded-lg font-semibold bg-gradient-to-r from-[#d4af37] to-[#fff3c4] text-black hover:opacity-90 transition shadow-md"
                >
                  Submit RSVP
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 text-gray-500 mt-2"
                >
                  Close
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai"; // Import Send icon
import emailjs from "emailjs-com";
const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error state for validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Success/Error state for form submission
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Real-time validation for each field
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim().length < 3) {
          return "Name must be at least 3 characters long.";
        } else {
          return "";
        }
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address.";
        } else {
          return "";
        }
      case "message":
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters long.";
        } else {
          return "";
        }
      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validate the field in real-time
    const errorMessage = validateField(name, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.message &&
      !errors.name &&
      !errors.email &&
      !errors.message
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");
    // If form is valid, submit the form
    if (isFormValid()) {
      setLoading(true);

      emailjs
        .send(
          "service_resume", // Replace with your EmailJS service ID
          "template_mil88en", // Replace with your EmailJS template ID
          {
            ...formData,
            reply_to: formData.email, // Map the user's email to `reply_to`
          },
          "zia5W6ZodziOv0Y2n" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            setStatusMessage("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setLoading(false);
          },
          (error) => {
            setStatusMessage("Failed to send the message. Please try again.");
            setLoading(false);
          }
        );
    } else {
      console.log("Form is not valid.");
    }
  };

  return (
    <section className=" bg-[rgb(0,0,0,0.3)] w-[300px] md:w-[490px] m-auto  mt-2 p-3 rounded-[15px]">
      <h2 className="text-2xl text-white font-bold mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-white font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-white font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-white font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-[#333a4d] text-white py-2 px-4 rounded flex items-center space-x-2 ${
            !isFormValid()
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary-dark"
          }`}
          disabled={!isFormValid() || loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <AiOutlineSend className="w-5 h-5" /> {/* Send icon */}
              <span>Send</span>
            </>
          )}
        </button>
      </form>
      {/* Status Message */}
      {statusMessage && <p className="mt-4 text-green-500">{statusMessage}</p>}
    </section>
  );
};

export default ContactForm;

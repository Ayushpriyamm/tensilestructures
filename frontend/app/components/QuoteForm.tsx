"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const QuoteForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setIsLoading] = useState(false);

    // 🕒 Set time on mount
    useEffect(() => {
        const timeField = document.querySelector<HTMLInputElement>('input[name="time"]');
        if (timeField) {
            timeField.value = new Date().toLocaleString();
        }
    }, []);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const formEl = form.current;
        if (!formEl) return;

        const formData = new FormData(formEl);
        console.log("FORM VALUES:");
        for (let [key, val] of formData.entries()) {
            console.log(`${key}: ${val}`);
        }

        const newErrors: Record<string, string> = {};

        // Basic validation
        if (!formData.get("name")) newErrors.name = "Please enter your full name";
        if (!formData.get("phone")) newErrors.phone = "Phone number is required";
        if (!formData.get("company")) newErrors.company = "Company is required";
        const email = formData.get("email")?.toString().trim();
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.get("project_type")) {
            newErrors.project_type = "Please select a project type";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        emailjs
            .sendForm(
                "service_7zxv2vo",         // ✅ Your EmailJS service ID
                "template_2mtwd7w",        // ✅ Your EmailJS template ID
                formEl,
                "QHMq2dMrSuQ1PXcDS"        // ✅ Your EmailJS public key
            )
            .then(() => {
                setSubmitted(true);
                setShowModal(true);
                form.current?.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send. Try again later.");
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div
        >
            <div className="w-full max-w-2xl rounded-3xl bg-white border border-gray-200 shadow-2xl p-3 md:p-10 space-y-3">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-extrabold text-gray-800">Request a Free Quotation</h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Share your requirements and get a customized estimate tailored to your project.
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4 grid grid-cols-2 gap-4">
                    {[
                        { label: "Full Name", name: "name", type: "text", placeholder: "John Doe", required: true },
                        { label: "Phone Number", name: "phone", type: "number", placeholder: "+91 98765 43210", required: true },
                        { label: "Company / Organization", name: "company", type: "text", placeholder: "ABC Pvt Ltd", required: true },
                        { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com", required: true },
                    ].map((field) => (
                        <div key={field.name} className="flex flex-col space-y-2 w-full">
                            <label htmlFor={field.name} className="text-gray-700 font-medium text-sm">
                                {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="bg-gray-100 focus:bg-white border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm focus:shadow-lg"
                            />
                            {errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                            )}
                        </div>
                    ))}

                    {/* Project Type */}
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="project_type" className="text-gray-700 font-medium text-sm">
                            Project Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="project_type"
                            required
                            className="bg-gray-100 focus:bg-white border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm focus:shadow-lg"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Project Type</option>
                            <option value="Tensile Structure">Tensile Structure</option>
                            <option value="Walkway Cover">Walkway Cover</option>
                            <option value="Canopy">Canopy</option>
                            <option value="Car Parking Shed">Car Parking Shed</option>
                            <option value="Custom">Custom Project</option>
                        </select>
                        {errors.project_type && (
                            <p className="text-red-500 text-sm mt-1">{errors.project_type}</p>
                        )}
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="budget" className="text-gray-700 font-medium text-sm">
                            Budget Range
                        </label>
                        <select
                            name="budget"
                            className="bg-gray-100 focus:bg-white border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm focus:shadow-lg"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Budget Range</option>
                            <option value="Below ₹50,000">Below ₹50,000</option>
                            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                            <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                            <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                        </select>
                    </div>

                    {/* Project Description */}
                    <div className="flex flex-col space-y-2 w-full col-span-2">
                        <label htmlFor="message" className="text-gray-700 font-medium text-sm">
                            Project Details
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Briefly describe your project or specific requirements..."
                            className="bg-gray-100 focus:bg-white border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm focus:shadow-lg resize-none"
                        ></textarea>
                    </div>

                    {/* Time field */}
                    <input type="hidden" name="time" defaultValue={new Date().toLocaleString()} />

                    {/* Submit Button */}
                    <div className="flex justify-center col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex items-center justify-center gap-2 w-full rounded-md
                          bg-[#4169e1] hover:opacity-85 text-white font-semibold py-3 px-8 
                          shadow-md hover:shadow-xl cursor-pointer transition-all duration-300
                          ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                        >
                            {loading && (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            )}
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm text-center space-y-4 animate-fade-in">
                        <h2 className="text-xl font-bold text-green-600">Quotation Sent!</h2>
                        <p className="text-gray-600 text-sm">
                            Thank you for your request. We’ll get back to you shortly.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="cursor-pointer mt-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuoteForm;

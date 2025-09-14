"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false); // ✅ track sending state

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");

    try {
      const form = event.target;

      // ✅ EmailJS config (replace with your actual IDs from EmailJS dashboard)
      const serviceID = "service_8znthqa";
      const templateID = "template_7n7grac";
      const publicKey = "DJPw7yaxGb3P3GyjP";

      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        form,
        publicKey
      );

      if (response.status === 200) {
        setResult("✅ Form submitted successfully!");
        form.reset();
      } else {
        setResult("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setResult("❌ Network error. Please try again.");
    } finally {
      setIsSending(false); // ✅ re-enable button
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid gap-6 mt-10 mb-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>

        <button
          type="submit"
          disabled={isSending} // ✅ disable while sending
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 ${
            isSending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-900/80 hover:bg-green-800/80 text-white"
          }`}
        >
          {isSending ? "Sending..." : "Submit Now"}
          {!isSending && (
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow white"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          )}
        </button>
        {result && <p className="mt-4 text-center">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;

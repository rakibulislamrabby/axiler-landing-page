"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("say-hi");
  const [isMounted, setIsMounted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("https://app.meghops.com/v2/api/meghops/send-mail", {
        from: data.email,
        name: data.name,
        subject: data.subject,
        text: data.message,
      });
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <section className="relative bg-gray-100 px-4 py-10">
      <div className="md:container mx-auto relative z-10">
        <h2 className="text-2xl pb-8 lg:text-3xl font-medium text-gray-900">
          Let's Discuss Your Cybersecurity Needs
        </h2>

        <div className="rounded-md relative z-10">
          {/* Radio Buttons */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="say-hi"
                checked={selectedOption === "say-hi"}
                onChange={() => setSelectedOption("say-hi")}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedOption === "say-hi"
                    ? "border-green-500 bg-green-500"
                    : "border-gray-400"
                }`}
              ></span>
              Say Hi
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="get-quote"
                checked={selectedOption === "get-quote"}
                onChange={() => setSelectedOption("get-quote")}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedOption === "get-quote"
                    ? "border-gray-700 bg-gray-700"
                    : "border-gray-400"
                }`}
              ></span>
              Get a Quote
            </label>
          </div>

          {/* Flex Container */}
          <div className="relative flex flex-col lg:flex-row justify-between mt-6 items-center lg:items-start">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg relative z-10">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 mt-1 border border-gray-500 rounded-lg focus:ring"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                      validate: (value) =>
                        !value.endsWith("@example.com") || "Use a valid domain",
                    })}
                    className="w-full p-2 mt-1 border border-gray-500 rounded-lg focus:ring"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full p-2 mt-1 border border-gray-500 rounded-lg focus:ring"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full p-2 mt-1 border border-gray-500 rounded-lg focus:ring h-32"
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute right-0 top-8 w-full lg:w-1/2 h-full justify-end items-center pointer-events-none z-20 hidden lg:flex">
        <Image
          src="/assets/images/contact-plane.png"
          alt="Cybersecurity Graphic"
          width={650}
          height={650}
        />
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} />
    </section>
  );
};

export default ContactForm;

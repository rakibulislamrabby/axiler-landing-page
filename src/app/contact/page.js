"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBookOpen, FaPhoneAlt } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await axios.post("https://app.meghops.com/v2/api/meghops/send-mail", {
        from: data.email,
        name: data.name,
        subject: data.subject,
        text: data.message,
      });
      toast.success("Request sent successfully!", { position: "top-right" });
      reset();
    } catch (error) {
      toast.error("Failed to send the email.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative pb-16">
      {/* form section  */}
      {/* form section */}
      <section className="py-12 ">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 relative ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 text-center mb-6">
            We are here for you! How can we help?
          </p>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Drop Us a Line
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            id="contactForm"
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <span className="text-primary text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <span className="text-primary text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                {...register("subject", { required: "Subject is required." })}
              />
              {errors.subject && (
                <span className="text-primary text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="6"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                {...register("message", { required: "Message is required." })}
              />
              {errors.message && (
                <span className="text-primary text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                id="submitButton"
                className="px-8 py-3 w-1/2 text-white bg-black font-hubot font-semibold rounded-lg shadow-lg hover:opacity-80 focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Toast Container to show notifications */}
          <ToastContainer />
        </div>
      </section>

      {/* address card section */}
      <section className="mt-12 lg:mt-20 max-w-5xl mx-auto px-5 sm:px-10">
        <div
          className="w-full rounded-3xl"
          style={{
            border: "solid 1px transparent",
            borderColor: "transparent",
            backgroundImage:
              "linear-gradient(#ffffff, #ffffff), radial-gradient(circle at top left , #07090d, #ffffff00)",
            backgroundColor: "white",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            borderRadius: "24px",
          }}
        >
          <div className="p-5 sm:p-10">
            <h2 className="text-black font-semibold text-center text-lg sm:text-2xl mx-auto w-1/2 border-b pb-5 mb-8 border-[#592D57]">
              Contact Us
            </h2>

            <div className="flex flex-col justify-center md:flex-row md:items-stretch gap-10">
              {/* Contact Info Card */}
              <div
                className="rounded-3xl md:w-1/2 w-full"
                style={{
                  border: "solid 1px transparent",
                  backgroundImage:
                    "linear-gradient(#ffffff, #ffffff), radial-gradient(circle at bottom right, #07090d, #ffffff00)",
                  backgroundColor: "white",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <div className="p-5">
                  <div className="flex items-center space-x-6 mb-7">
                    <LuContact className="flex-shrink-0 h-9 w-9 text-[#1C3765]" />
                    <h3 className="text-black font-semibold text-xl">
                      Contact Info
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-[#1C3765]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.25-.75a.75.75 0 0 0-.75.75v.16l8.568 5.712a.75.75 0 0 0 .864 0l8.568-5.712v-.16a.75.75 0 0 0-.75-.75H3.75Zm17.25 2.88-7.732 5.157a2.25 2.25 0 0 1-2.536 0L3 8.88v7.62a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75V8.88Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="font-medium text-black">
                        Email: reachus@axiler.com
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MdAddCall className="text-2xl font-bold" />
                      <p className="font-medium text-black">
                        Phone: 01798000055
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 text-[#1C3765]">
                        <GrLocation className="text-2xl font-bold" />
                      </span>
                      <p className="font-medium text-black">
                        Location: Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-3xl md:w-1/2 w-full"
                style={{
                  border: "solid 1px transparent",
                  backgroundImage:
                    "linear-gradient(#ffffff, #ffffff), radial-gradient(circle at bottom left, #07090d, #ffffff00)",
                  backgroundColor: "white",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <div className="p-5">
                  <div className="flex items-center space-x-6 mb-7">
                    <FaPhoneAlt className="flex-shrink-0 h-9 w-9 text-[#1C3765]" />
                    <h3 className="text-black font-semibold text-xl">
                      Talk to Us
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-3">
                      <FaBookOpen className="w-6 h-6 text-[#1C3765]" />
                      <p className="font-medium text-black">info@axiler.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RiContactsBookLine className="w-6 h-6 text-[#1C3765]" />
                      <p className="font-medium text-black">+8801722633328</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

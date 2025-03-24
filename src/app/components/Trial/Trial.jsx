"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from "react-toastify";

const Trial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    if (phoneNumber && selectedCountryCode) {
      if (!validatePhoneNumber(phoneNumber, selectedCountryCode)) {
        setError("phone", {
          type: "manual",
          message:
            "Please enter a valid phone number for the selected country.",
        });
        setIsLoading(false);
        return;
      } else {
        clearErrors("phone");
      }
    } else {
      setError("phone", {
        type: "manual",
        message: "Please enter a valid phone number for the selected country.",
      });
      return;
    }

    data.phone = phoneNumber;
    data.country = countryName;

    try {
      setIsLoading(true);
      await axios.post(
        "https://app.meghops.com/v2/api/meghops/send-mail/get-demo",
        data
      );
      toast.success("Your request has been submitted successfully!");
      reset();
      setPhoneNumber("");
      setCountryName("");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const validatePhoneNumber = (phoneNumber, countryCode) => {
    const phone = parsePhoneNumberFromString("+" + phoneNumber, countryCode);
    return phone?.isValid() || false;
  };

  return (
    <main className="px-3 sm:px-10">
      <section className="max-w-6xl py-[100px] mx-auto">
        <div className="rounded-3xl flex flex-col md:flex-row gap-x-6 gap-y-12 bg-white py-6 px-3 sm:px-5 lg:p-8 shadow-lg">
          {/* Info Panel */}
          <div className="md:w-1/2 w-full flex flex-col justify-between space-y-10">
            <div>
              <h2 className="font-semibold text-2xl mb-5 font-hubot">
                Join with us to achieve ultimate cyber safety
              </h2>
              <p className="mb-7 text-sm">
                See how Axiler Managed Security Services can help you:
              </p>
              <ul className="list-disc pl-4 flex flex-col space-y-4 font-hubot">
                <li className="text-base text-justify hyphens-auto">
                  <strong>24/7/365 Security Monitoring</strong> – Our team of
                  experts is always on guard, monitoring your systems for any
                  potential threats. We use sophisticated tools and techniques
                  to detect and respond to security incidents in real time.
                </li>
                <li className="text-base text-justify hyphens-auto">
                  <strong>Exposure Assessment and Management</strong> – We
                  conduct regular assessments to identify potential
                  vulnerabilities and take proactive measures to manage and
                  mitigate risks.
                </li>
                <li className="text-base text-justify hyphens-auto">
                  <strong>Security Consulting</strong> – Our team of experienced
                  consultants provides strategic advice to help you improve your
                  organisation’s security posture.
                </li>
                <li className="text-base text-justify hyphens-auto">
                  <strong>Security Technology Implementation</strong> – We
                  implement cutting-edge security technologies to protect your
                  sensitive data and IT infrastructure.
                </li>
                <li className="text-base text-justify hyphens-auto">
                  <strong>Holistic Cybersecurity Services</strong> – We offer
                  round-the-clock holistic cybersecurity services, ensuring an
                  augmented security posture for your organisation.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm">Supported by</p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <img
                  src="/assets/logo/google-for-startups-light.png"
                  className="h-6 object-contain"
                  alt="Google for Startups"
                />
                <img
                  src="/assets/logo/microsoft-for-startup-light.png"
                  className="h-12 object-contain"
                  alt="Microsoft for Startups"
                />
                <img
                  src="/assets/logo/github-light.png"
                  className="h-8 object-contain"
                  alt="GitHub"
                />
                <img
                  src="/assets/logo/aws-for-startups-light.png"
                  className="h-8 object-contain"
                  alt="AWS"
                />
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="rounded-3xl w-full md:w-1/2 py-6 lg:py-8 px-3 sm:px-5 lg:px-6 border bg-[#f5f8fd] border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-lg font-semibold font-hubot mb-6 text-center">
                Talk To Our Cyber Security Experts
              </h2>

              {/* Name */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required." })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Company & Job Title */}
              <div className="mb-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    {...register("companyName", {
                      required: "Company name is required.",
                    })}
                    className="w-full rounded-md border border-gray-300 px-4 py-2"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Job Title"
                    {...register("jobTitle", {
                      required: "Job title is required.",
                    })}
                    className="w-full rounded-md border border-gray-300 px-4 py-2"
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={(value, country) => {
                    setPhoneNumber(value);
                    setCountryName(country.name);
                    setSelectedCountryCode(country.countryCode.toUpperCase());

                    if (
                      !validatePhoneNumber(
                        value,
                        country.countryCode.toUpperCase()
                      )
                    ) {
                      setError("phone", {
                        type: "manual",
                        message:
                          "Please enter a valid phone number for the selected country.",
                      });
                      setIsLoading(false);
                      return;
                    } else {
                      clearErrors("phone");
                    }
                  }}
                  enableSearch
                  inputStyle={{
                    width: "100%",
                    padding: "10px",
                    borderColor: "#ccc",
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  placeholder="What are you hoping to accomplish with Axiler?"
                  {...register("text", {
                    required: "Message is required.",
                  })}
                  rows="5"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 resize-none"
                ></textarea>
                {errors.text && (
                  <p className="text-red-500 text-sm">{errors.text.message}</p>
                )}
              </div>

              {/* Checkbox */}
              <label
                htmlFor="privacy"
                className="flex space-x-3 mb-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="privacy"
                  className="cursor-pointer mt-1"
                />
                <p className="text-sm text-gray-700">
                  Axiler may contact me with information about products,
                  services, and events. I can opt-out any time in the{" "}
                  <a href="#" className="underline text-blue-600">
                    subscription center
                  </a>
                  .
                </p>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 w-full rounded-md hover:opacity-85 transition"
              >
                {isLoading ? "Submitting..." : "Submit your request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trial;

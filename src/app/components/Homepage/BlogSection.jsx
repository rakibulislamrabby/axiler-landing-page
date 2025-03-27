"use client";
import React from "react";
import Image from "next/image";
import { FiEye } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "What is Cloud Security Compliance?",
    date: "Oct 28th 23",
    views: 236,
    image: "/assets/images/blog-image1.png",
  },
  {
    id: 2,
    title: "Understanding GDPR in Cybersecurity",
    date: "Nov 10th 23",
    views: 180,
    image: "/assets/images/blog-image1.png",
  },
  {
    id: 3,
    title: "ISO Standards for Cloud Security",
    date: "Dec 5th 23",
    views: 320,
    image: "/assets/images/blog-image1.png",
  },
];

const BlogSection = () => {
  return (
    <section className="lg:container py-10 px-5">
      <h2 className="text-2xl pb-8 lg:text-3xl font-medium font-hubot text-gray-900">
        Read our blogs to learn about the latest trends in the world <br /> of
        cybersecurity
      </h2>
      <div className="grid md:grid-cols-3 gap-6  mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl overflow-hidden shadow-lg  transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={blog.image}
                width={400}
                height={400}
                className="w-full object-cover"
                alt={blog.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="bg-black text-white p-4  rounded-b-2xl">
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">📅 {blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300 flex items-center gap-2">
                    <FiEye />
                    {blog.views}
                  </span>
                </div>
              </div>
              <h3 className="text-lg py-4 font-semibold">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

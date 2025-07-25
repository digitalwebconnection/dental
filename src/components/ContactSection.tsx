// components/ContactSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import contactImg from "../../public/image3.png"; // <-- your image

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend / firebase
    console.log(form);
  };

  return ( 
    <section className="bg-white text-[#0c1324] py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Form */}
        <div>
          <h2 className="font-[Times_New_Roman] text-4xl md:text-5xl mb-10">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 max-w-lg"
            autoComplete="off"
          >
            {/* First / Last */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm mb-2">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className="w-full bg-transparent border-b border-[#0c1324] focus:outline-none py-1"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className="w-full bg-transparent border-b border-[#0c1324] focus:outline-none py-1"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#0c1324] focus:outline-none py-1"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-b border-[#0c1324]">
                  {/* Simple country selector mock */}
                  <select
                    className="bg-transparent focus:outline-none text-sm pr-2 py-1"
                    defaultValue="+1"
                    aria-label="Country code"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="flex-1 bg-transparent focus:outline-none py-1"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#0c1324] focus:outline-none py-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#0c1324] focus:outline-none py-1 resize-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-full rounded-full border border-[#0c1324] py-2 text-lg hover:bg-[#0c1324] hover:text-white transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Image */}
        <div className="w-full h-full relative ">
          <Image
            src={contactImg}
            alt="Contact"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

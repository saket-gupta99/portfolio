import { MdEmail } from "react-icons/md";
import { FaMobileButton, FaLocationDot } from "react-icons/fa6";
import { useState, type FormEvent, type ChangeEvent } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="py-32">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold">Get In Touch</h3>
        <p className="text-lg text-gray-800 dark:text-slate-200">
          Ready to bring your ideas to life? Let's discuss your next project
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold">Let's Connect</h4>
          <p className="text-gray-800 dark:text-slate-200">
            I'm always excited to work on new projects and collaborate with
            amazing people. Whether you have a project in mind or just want to
            chat about technology, I'd love to hear from you!
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex gap-8 items-center">
              <div className="bg-pink-600 p-4 rounded-md">
                <MdEmail className="text-slate-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Email</span>
                <span className="text-gray-800 dark:text-slate-200 text-sm">
                  Saketg54@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-pink-600 p-4 rounded-md">
                <FaMobileButton className="text-slate-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Mobile</span>
                <span className="text-gray-800 text-sm dark:text-slate-200">
                  (+91) 8454938049
                </span>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-pink-600 p-4 rounded-md">
                <FaLocationDot className="text-slate-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Location</span>
                <span className="text-gray-800 text-sm dark:text-slate-200">
                  Mumbai, India
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-semibold pl-1 text-lg mb-2">Follow Me</p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/saket-gupta-062baa248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-10 w-10" src="/linkedin.svg" />
              </a>
              <a
                href="https://github.com/saket-gupta99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-10 w-10" src="/github.svg" />
              </a>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="shadow-xl p-8 space-y-8 rounded-md dark:bg-slate-300 dark:text-black"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="flex flex-col lg:flex-row gap-5">
            <label className="flex flex-col lg:w-1/2 gap-1">
              Name
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border rounded-sm p-2 border-gray-400 text-sm"
              />
            </label>
            <label className="flex flex-col lg:w-1/2 gap-1">
              Email
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="border rounded-sm p-2 border-gray-400 text-sm"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1">
            Subject
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion"
              className="border rounded-sm p-2 border-gray-400 text-sm"
            />
          </label>

          <label className="flex flex-col gap-1">
            Message
            <textarea
              name="message"
              required
              minLength={20}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="border rounded-sm p-2 border-gray-400 text-sm"
              rows={6}
            />
          </label>

          <button
            type="submit"
            className="rounded-md w-full bg-pink-600 py-2 text-slate-200 cursor-pointer hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
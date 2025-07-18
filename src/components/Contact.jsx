import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_u4g571d';
const TEMPLATE_ID = 'template_o0051ea';
const PUBLIC_KEY = 'XN_3Y7Zjpz6zAwmRP';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      setError('Failed to send message. Please try again.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {loading && <p>Sending...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {submitted && <p className="text-green-500">Thank you! Your message has been sent.</p>}
        <button
          type="submit"
          className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors font-semibold"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a href="https://github.com/hicham10e" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-gray-700 dark:text-gray-200"><FaGithub /></a>
        <a href="https://linkedin.com/in/mohamed-hicham-heffaf" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-gray-700 dark:text-gray-200"><FaLinkedin /></a>
        <a href="https://twitter.com/MohHicham99" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-gray-700 dark:text-gray-200"><FaTwitter /></a>
        <a href="mailto:mamadoheffaf@gmail.com" className="hover:text-purple-500 text-gray-700 dark:text-gray-200"><FaEnvelope /></a>
      </div>
    </section>
  );
};

export default Contact; 
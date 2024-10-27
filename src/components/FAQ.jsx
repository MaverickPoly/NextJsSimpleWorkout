"use client"
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? '' : 'rotate-45'
          }`}
        >
          <FaTimes size={22} />
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-3 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: 'How do I join the program?', answer: 'Simply sign up on the website and start.' },
    { question: 'What equipment do I need?', answer: 'Most workouts require minimal equipment.' },
    { question: 'Can I cancel my subscription?', answer: 'Yes, you can cancel anytime.' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

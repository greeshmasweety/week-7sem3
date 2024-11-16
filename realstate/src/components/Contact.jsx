import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
  const [result, setResult] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State to show success message

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    setSuccessMessage(''); // Clear any previous success message

    const formData = new FormData(event.target);
    formData.append('access_key', 'ef3a7e14-2a6f-40c2-9a58-06eb6bd745b1');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('');
        setSuccessMessage('Form submitted successfully!'); // Show success message
        event.target.reset(); // Reset the form fields
      } else {
        console.log('Error:', data);
        setResult('Send Message'); // Reset button text
        setSuccessMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Send Message'); // Reset button text
      setSuccessMessage('Network error. Please try again later.');
    }
  };

  return (
    < motion.div 
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='underline underline-offset-4 decoration-1 font-light'>with us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to make a move? Let's build your future together
      </p>

      {/* Contact Form */}
      <form onSubmit={onSubmit}>
        <div className='w-full md:1/2 text-left mb-4'>
          <div>Your Name</div>
          <input
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            type='text'
            name='name'
            placeholder='Your Name'
            required
          />
        </div>
        <div className='w-full md:1/2 text-left mb-4'>
          <div>Your Email</div>
          <input
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
        </div>
        <div className='my-6 text-left'>
          <div>Message</div>
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='message'
            placeholder='Message'
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-12 mb-4 rounded'
        >
          {result ? result : 'Send Message'}
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className='mt-4 text-green-600 font-semibold'>
          {successMessage}
        </div>
      )}
      </motion.div>
   
  );
};

export default Contact;

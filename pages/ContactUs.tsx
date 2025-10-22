import { useState } from "react";


const ContactUs = () => {
  const [email,setEmail] =useState("")
  const [name,setName] =useState("")
  const [subject,setSubject] =useState("")
  const [textArea,setTextArea] =useState("")
  const [success, setSuccess] = useState<string | null>(null);

  const [errors, setErrors] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});



  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
  const newErrors = {
    name: name.length < 7 ? "Name cannot be less than 7 characters" : "",
    email: !/^\S+@\S+\.\S+$/.test(email) ? "Invalid email address" : "",
    subject: subject.length < 10 ? "Subject cannot be less than 10 characters" : "",
    message: textArea.length < 10? "Message cannot be less than 10 characters" : "",
  };

  setErrors(newErrors);



  const hasError = Object.values(newErrors).some((err) => err !== "");

  if (hasError) {
    setSuccess(null);
    return;
  }

  
  setSuccess("✅ Your message was sent successfully!");
  }





  return (
    <section
      className="flex justify-center items-center min-h-screen  p-4"
      aria-labelledby="contact-heading"
    >
      <div className=" p-8 rounded-lg shadow-md w-full max-w-xl ">
        <header className=" mb-8">
          <h1
            id="contact-heading"
            className="text-3xl font-semibold text-gray-900"
          >
            We’d love to help
          </h1>
          <p className="text-gray-600 mt-2">
            Reach out and we’ll get in touch within 24 hours.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                data-testid="test-contact-name"
                placeholder="Your full name"
                className="w-full bg-white mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
                  aria-describedby={errors.name ? "error-name" : undefined}
              />
              {errors &&<p id="errors.name " data-testid="test-contact-error-name" className="text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                data-testid="test-contact-email"
                placeholder="Email address"
                className="bg-white w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
                 aria-describedby={errors.email ? "error-name" : undefined}
              />
                       {errors &&<p id="errors.email "    data-testid="test-contact-error-email" className="text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              data-testid="test-contact-subject"
              placeholder="Subject"
              className="w-full bg-white mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
                   aria-describedby={errors.subject ? "error-name" : undefined}
            />
                     {errors &&<p id="errors.subject" data-testid="test-contact-error-subject" className="text-red-600">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              data-testid="test-contact-message"
              placeholder="Leave us a message..."
              rows={4}
             value={textArea}
             onChange={(e)=>setTextArea(e.target.value)}
              className="w-full bg-white mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
              required
                           aria-describedby={errors.message ? "error-name" : undefined}
            ></textarea>
                     {errors &&<p id="errors.message" data-testid="test-contact-error-message" className="text-red-600">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              data-testid="test-contact-submit"
              className="w-full  bg-[#0b59bf] text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send message
            </button>
          </div>
        </form>
       {success && <p data-testid="test-contact-success" className="text-green-500 mt-3">{success}</p>}

      </div>
    </section>
  );
};

export default ContactUs;

import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane,
  FaHeadset,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBuilding,
  FaUser,
  FaComments
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [selectedTopic, setSelectedTopic] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone Support',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Mon-Fri, 9AM-6PM EST',
      color: 'bg-primary',
      buttonText: 'Call Now',
      action: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      details: ['support@threadops.com', 'sales@threadops.com'],
      description: 'Response within 24 hours',
      color: 'bg-secondary',
      buttonText: 'Send Email',
      action: 'mailto:support@threadops.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Headquarters',
      details: ['123 Fashion Avenue', 'New York, NY 10001', 'United States'],
      description: 'Visit by appointment',
      color: 'bg-accent',
      buttonText: 'Get Directions',
      action: 'https://maps.google.com'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      details: ['+1 (555) 123-4567'],
      description: 'Quick response',
      color: 'bg-green-500',
      buttonText: 'Message Us',
      action: 'https://wa.me/15551234567'
    }
  ];

  const topics = [
    { id: 'general', label: 'General Inquiry', icon: '📋' },
    { id: 'sales', label: 'Sales & Pricing', icon: '💰' },
    { id: 'support', label: 'Technical Support', icon: '🔧' },
    { id: 'partnership', label: 'Partnership', icon: '🤝' },
    { id: 'feedback', label: 'Feedback', icon: '💡' },
    { id: 'demo', label: 'Schedule Demo', icon: '🎥' }
  ];

  const regionalOffices = [
    {
      city: 'London',
      address: '45 Fashion Street, London EC2A 4QJ, UK',
      phone: '+44 20 7123 4567',
      email: 'london@threadops.com'
    },
    {
      city: 'Singapore',
      address: '10 Marina Boulevard, Singapore 018983',
      phone: '+65 6123 4567',
      email: 'singapore@threadops.com'
    },
    {
      city: 'Dubai',
      address: 'Dubai Design District, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@threadops.com'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="hero-content text-center py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              We're here to help you streamline your garment management. 
              Reach out to our team for personalized support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="badge badge-lg badge-primary p-4">
                <FaClock className="mr-2" />
                24/7 Support Available
              </div>
              <div className="badge badge-lg badge-secondary p-4">
                <FaHeadset className="mr-2" />
                Average Response: 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className={`${info.color} text-white p-4 rounded-full mb-4`}>
                  {info.icon}
                </div>
                <h3 className="card-title text-lg">{info.title}</h3>
                <div className="space-y-1 my-3">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm opacity-70">{detail}</p>
                  ))}
                </div>
                <p className="text-xs opacity-60 mb-4">{info.description}</p>
                <a 
                  href={info.action} 
                  className="btn btn-outline btn-sm w-full"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {info.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaComments className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h2 className="card-title text-2xl">Send Us a Message</h2>
                    <p className="opacity-70">We typically respond within 2 hours</p>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="label">
                    <span className="label-text font-semibold">What can we help you with?</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {topics.map((topic) => (
                      <button
                        key={topic.id}
                        className={`btn ${selectedTopic === topic.id ? 'btn-primary' : 'btn-outline'} h-auto py-4 flex-col`}
                        onClick={() => setSelectedTopic(topic.id)}
                      >
                        <span className="text-2xl mb-2">{topic.icon}</span>
                        <span className="text-xs">{topic.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name *</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaUser className="opacity-50" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input input-bordered w-full pl-10"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email Address *</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaEnvelope className="opacity-50" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input input-bordered w-full pl-10"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Company Name</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaBuilding className="opacity-50" />
                        </span>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input input-bordered w-full pl-10"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaPhone className="opacity-50" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input input-bordered w-full pl-10"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <label className="label">
                      <span className="label-text">Subject *</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <label className="label">
                      <span className="label-text">Your Message *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea textarea-bordered h-40"
                      placeholder="Tell us about your garment management needs..."
                      required
                    />
                  </div>

                  <div className="form-control mt-8">
                    <button 
                      type="submit" 
                      className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {!isSubmitting && <FaPaperPlane className="mr-2" />}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg flex items-center gap-2">
                  <FaClock className="text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="badge badge-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="badge">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="badge badge-error">Closed</span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="alert alert-info">
                    <div>
                      <FaHeadset />
                      <span>24/7 Emergency Support for Enterprise Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-secondary" />
                  Global Offices
                </h3>
                <div className="space-y-4 mt-4">
                  {regionalOffices.map((office, index) => (
                    <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                      <h4 className="font-bold text-sm">{office.city}</h4>
                      <p className="text-xs opacity-70 mt-1">{office.address}</p>
                      <div className="flex flex-col gap-1 mt-2">
                        <a href={`tel:${office.phone}`} className="text-xs link link-hover">
                          📞 {office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="text-xs link link-hover">
                          ✉️ {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">Connect With Us</h3>
                <p className="text-sm opacity-70 mb-4">Follow for updates & insights</p>
                <div className="flex gap-3">
                  <a href="https://linkedin.com" className="btn btn-circle btn-outline">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="btn btn-circle btn-outline">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="btn btn-circle btn-outline">
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me" className="btn btn-circle btn-outline bg-green-500 border-green-500 text-white">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="alert bg-primary/10 border-primary/20">
              <div>
                <FaHeadset />
                <div>
                  <h3 className="font-bold">Need Quick Help?</h3>
                  <div className="text-xs">Check our FAQ or documentation</div>
                </div>
              </div>
              <button className="btn btn-sm btn-primary">View FAQ</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Find Our Headquarters</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-6xl text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">ThreadOps Headquarters</h3>
                    <p className="opacity-70">123 Fashion Avenue, New York, NY 10001</p>
                    <button className="btn btn-primary mt-4">
                      <FaMapMarkerAlt className="mr-2" />
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-base-200 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">Visit Instructions</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="badge badge-primary badge-xs mt-1">1</div>
                      <span>Parking available in building garage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="badge badge-primary badge-xs mt-1">2</div>
                      <span>Check-in at reception on 1st floor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="badge badge-primary badge-xs mt-1">3</div>
                      <span>Photo ID required for security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="badge badge-primary badge-xs mt-1">4</div>
                      <span>Please schedule appointment in advance</span>
                    </li>
                  </ul>
                </div>
                <div className="alert alert-success">
                  <div>
                    <span className="font-bold">Free Consultation Available</span>
                    <p className="text-xs">Book a 30-minute consultation with our experts</p>
                  </div>
                  <button className="btn btn-success btn-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Garment Management?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion brands already using ThreadOps to streamline their operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Request Free Demo</button>
            <button className="btn btn-outline btn-accent-content btn-lg">Download Brochure</button>
            <button className="btn btn-outline btn-accent-content btn-lg">
              <FaPhone className="mr-2" />
              Call Sales: (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import {
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaTrophy,
  FaBuilding,
  FaLightbulb,
  FaCogs
} from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      description: '15+ years in fashion tech'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Supply chain specialist'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Tech Director',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYn2UTxswDCp60EsJQa4Ru7mGjhFXXLNtAPQ&s',
      description: 'Full-stack development lead'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Sustainability Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Eco-fashion advocate'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'ThreadOps established with vision to revolutionize garment management' },
    { year: '2019', title: 'First Major Client', description: 'Onboarded first international fashion brand' },
    { year: '2020', title: 'Platform Launch', description: 'Released v1.0 of ThreadOps platform' },
    { year: '2021', title: 'Sustainability Initiative', description: 'Introduced eco-friendly tracking features' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded operations to 3 continents' },
    { year: '2023', title: 'AI Integration', description: 'Launched AI-powered predictive analytics' }
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Transparency',
      description: 'Complete visibility across your supply chain'
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Sustainability',
      description: 'Commitment to eco-friendly practices'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Partnership',
      description: 'Building long-term relationships with clients'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Innovation',
      description: 'Continuously improving our technology'
    }
  ];

  return (

    <div className="min-h-screen bg-base-100 overflow-x-hidden">
      <title>ThreadOps || About Us</title>
      <div className="hero bg-gradient-to-br from-primary/10 to-secondary/10 min-h-[60vh]">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionizing <span className="text-primary">Garment Management</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              ThreadOps is the leading platform transforming how fashion brands manage their production,
              inventory, and supply chains with cutting-edge technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="stat bg-base-100 rounded-lg shadow-lg p-6 text-center">
                <div className="stat-figure text-primary mb-3">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="stat-title text-lg font-semibold">Happy Clients</div>
                <div className="stat-value text-primary text-3xl lg:text-4xl my-2">500+</div>
                <div className="stat-desc text-sm">Global fashion brands</div>
              </div>

              <div className="stat bg-base-100 rounded-lg shadow-lg p-6 text-center">
                <div className="stat-figure text-secondary mb-3">
                  <FaGlobe className="text-3xl" />
                </div>
                <div className="stat-title text-lg font-semibold">Countries</div>
                <div className="stat-value text-secondary text-3xl lg:text-4xl my-2">45+</div>
                <div className="stat-desc text-sm">Active operations</div>
              </div>

              <div className="stat bg-base-100 rounded-lg shadow-lg p-6 text-center">
                <div className="stat-figure text-accent mb-3">
                  <FaTrophy className="text-3xl" />
                </div>
                <div className="stat-title text-lg font-semibold">Awards</div>
                <div className="stat-value text-accent text-3xl lg:text-4xl my-2">12</div>
                <div className="stat-desc text-sm">Industry recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaLightbulb className="text-4xl text-primary" />
                </div>
                <h2 className="card-title text-3xl">Our Mission</h2>
              </div>
              <p className="text-lg">
                To empower fashion brands with intelligent tools that streamline garment production,
                reduce waste, and create sustainable, efficient supply chains for the modern fashion industry.
              </p>
              <div className="divider"></div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="badge badge-primary badge-lg mt-1">✓</div>
                  <span>Reduce production waste by 40%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge badge-primary badge-lg mt-1">✓</div>
                  <span>Improve supply chain efficiency by 60%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge badge-primary badge-lg mt-1">✓</div>
                  <span>Enable real-time tracking across all operations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/10">
                  <FaBuilding className="text-4xl text-secondary" />
                </div>
                <h2 className="card-title text-3xl">Our Vision</h2>
              </div>
              <p className="text-lg">
                To become the global standard for garment management, creating a world where every piece
                of clothing is produced efficiently, sustainably, and transparently from concept to customer.
              </p>
              <div className="divider"></div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-lg mt-1">→</div>
                  <span>Digital transformation of the entire fashion industry</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-lg mt-1">→</div>
                  <span>Zero-waste production by 2030</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-lg mt-1">→</div>
                  <span>Global supply chain transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              The principles that guide every decision we make at ThreadOps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body items-center text-center">
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="card-title text-xl mb-2">{value.title}</h3>
                  <p className="opacity-70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            The passionate team driving innovation in garment management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="card bg-base-100 shadow-xl">
              <figure className="px-6 pt-6">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center pt-4">
                <h3 className="card-title">{member.name}</h3>
                <div className="badge badge-primary badge-lg">{member.role}</div>
                <p className="text-sm opacity-70">{member.description}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-sm btn-outline">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Milestones in our mission to transform garment management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex">
                <div className="card bg-base-100 shadow-lg h-full w-full">
                  <div className="card-body">
                    <div className="badge badge-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="card-title text-lg">
                      {milestone.title}
                    </h3>
                    <p className="opacity-70">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl mb-4">Join the Revolution</h2>
            <p className="text-xl mb-8 max-w-2xl">
              Ready to transform your garment management process? Let's build the future of fashion together.
            </p>
            <div className="card-actions">
              <button className="btn btn-accent btn-lg">Schedule a Demo</button>
              <button className="btn btn-outline btn-lg btn-accent-content">Contact Sales</button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <FaCogs className="text-2xl" />
                <span>24/7 Support</span>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-2xl" />
                <span>Enterprise Security</span>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-2xl" />
                <span>Global Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
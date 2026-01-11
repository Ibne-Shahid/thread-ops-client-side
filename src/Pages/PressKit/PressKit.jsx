import React, { useState } from 'react';
import { FaDownload, FaNewspaper, FaUserTie, FaCalendarAlt, FaGlobe, FaPhone, FaEnvelope, FaFilePdf, FaImage, FaVideo, FaQuoteRight, FaLink } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PressKit = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const companyFacts = [
    { label: 'Founded', value: '2023' },
    { label: 'Headquarters', value: 'Dhaka, Bangladesh' },
    { label: 'Employees', value: '50+' },
    { label: 'Active Factories', value: '200+' },
    { label: 'Garments Tracked', value: '50,000+' },
    { label: 'Uptime', value: '99.9%' },
  ];

  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      bio: 'Former garment factory operations director with 15+ years experience in textile industry.',
      img: 'https://cdn.sanity.io/images/oyf3dba6/production/9fca0bc620a2cfebe91bcb30faab277e4776f1dd-580x580.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Tech entrepreneur specializing in B2B SaaS solutions for manufacturing industries.',
      img: 'https://warburgpincus.com/wp-content/uploads/2019/10/Sarah-Chen-web-1024x991.jpg'
    },
    {
      name: 'Raj Patel',
      role: 'Head of Operations',
      bio: 'Supply chain expert with extensive experience in Bangladesh garment industry.',
      img: 'https://texasconnect.utexas.edu/wp-content/uploads/2022/11/raj-patel-portrait-square.jpg'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Marketing',
      bio: 'Digital marketing specialist focused on B2B manufacturing technology.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20NXhETa_YmHAha5GPwVSSy_UCdnCSivERg&s'
    },
  ];

  const pressReleases = [
    {
      date: 'Nov 15, 2024',
      title: 'ThreadOps Raises $5M in Series A Funding',
      summary: 'Funding to accelerate expansion in Southeast Asian garment markets.',
      link: '#'
    },
    {
      date: 'Sep 28, 2024',
      title: 'ThreadOps Launches AI-Powered Quality Control Module',
      summary: 'New feature reduces fabric defects by 40% in pilot factories.',
      link: '#'
    },
    {
      date: 'Jul 10, 2024',
      title: 'Partnership Announced with Major Textile Association',
      summary: 'Collaboration to digitize 500+ small to medium garment factories.',
      link: '#'
    },
    {
      date: 'May 5, 2024',
      title: 'ThreadOps Expands to Vietnam and Cambodia',
      summary: 'New offices open to serve growing Southeast Asian textile industry.',
      link: '#'
    },
  ];

  const mediaAssets = [
    {
      type: 'Logo',
      formats: ['PNG', 'SVG', 'AI'],
      size: 'Various',
      category: 'brand'
    },
    {
      type: 'Product Screenshots',
      formats: ['JPG', 'PNG'],
      size: 'HD (1920x1080)',
      category: 'product'
    },
    {
      type: 'Team Photos',
      formats: ['JPG'],
      size: 'High Resolution',
      category: 'team'
    },
    {
      type: 'Office Photos',
      formats: ['JPG'],
      size: '4K',
      category: 'office'
    },
    {
      type: 'Brand Guidelines',
      formats: ['PDF'],
      size: '15 MB',
      category: 'brand'
    },
    {
      type: 'Product Demo Video',
      formats: ['MP4'],
      size: '1080p',
      category: 'video'
    },
  ];

  const contactInfo = {
    pressEmail: 'press@threadops.com',
    generalEmail: 'info@threadops.com',
    phone: '+880 1234 567890',
    address: 'Garment Tech Park, Plot 123, Dhaka 1212, Bangladesh',
    mediaContact: 'Maria Garcia, Head of Marketing'
  };

  const handleDownload = (assetName) => {
    toast.success(`Downloading ${assetName}...`);
  };

  const downloadPressKit = () => {
    toast.success('Downloading complete ThreadOps Press Kit (ZIP file)...');
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ThreadOps Press Kit
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Everything journalists, investors, and partners need to know about ThreadOps
            </p>
            <button 
              onClick={downloadPressKit}
              className="btn btn-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto"
            >
              <FaDownload /> Download Full Press Kit
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-base-100 rounded-xl shadow-sm p-6 border">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Company Overview', icon: <FaNewspaper /> },
                  { id: 'facts', label: 'Company Facts', icon: <FaGlobe /> },
                  { id: 'team', label: 'Leadership Team', icon: <FaUserTie /> },
                  { id: 'press', label: 'Press Releases', icon: <FaCalendarAlt /> },
                  { id: 'media', label: 'Media Assets', icon: <FaImage /> },
                  { id: 'contact', label: 'Media Contact', icon: <FaPhone /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-primary text-primary-content' : 'hover:bg-base-200'}`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-bold mb-3">At a Glance</h4>
                <div className="space-y-3">
                  {companyFacts.slice(0, 4).map((fact, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{fact.label}</span>
                      <span className="font-semibold">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                  <h2 className="text-2xl font-bold mb-6">Company Overview</h2>
                  <div>
                    <p className="text-lg mb-6">
                      <strong>ThreadOps</strong> is a revolutionary garment management platform that streamlines production, inventory, and quality control for factories worldwide.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-3">Our Mission</h3>
                        <p>
                          To empower garment manufacturers with technology that increases efficiency, reduces waste, and improves working conditions.
                        </p>
                      </div>
                      <div className="bg-secondary/10 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-3">Our Vision</h3>
                        <p>
                          A fully transparent, efficient, and sustainable global garment industry where technology drives every aspect of production.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mt-8 mb-4">Key Differentiators</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Industry-Specific:</strong> Built exclusively for garment manufacturing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>AI-Powered Insights:</strong> Predictive analytics for fabric waste reduction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Mobile-First:</strong> Designed for factory floor use</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Sustainability Focus:</strong> Tools to reduce environmental impact</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border">
                  <div className="flex items-start gap-4">
                    <FaQuoteRight className="text-3xl text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Boilerplate Statement</h3>
                      <p className="italic">
                        ThreadOps is a leading garment management platform that helps factories streamline production, track inventory, and maintain quality control. Founded in 2023 and headquartered in Dhaka, Bangladesh, ThreadOps serves over 200 factories globally, tracking more than 50,000 garments monthly.
                      </p>
                      <p className="mt-4 text-sm">
                        <strong>For media use:</strong> Feel free to use this boilerplate description in your articles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'facts' && (
              <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                <h2 className="text-2xl font-bold mb-6">Company Facts & Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {companyFacts.map((fact, index) => (
                    <div key={index} className="bg-base-200 p-6 rounded-lg border">
                      <div className="text-3xl font-bold mb-2">{fact.value}</div>
                      <div>{fact.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Milestones</h3>
                    <div className="space-y-4">
                      {[
                        { year: '2023 Q1', event: 'Company Founded' },
                        { year: '2023 Q2', event: 'First 10 Factory Clients' },
                        { year: '2023 Q4', event: 'Series Seed Funding ($1M)' },
                        { year: '2024 Q1', event: 'Expanded to 50+ Factories' },
                        { year: '2024 Q2', event: 'AI Features Launched' },
                        { year: '2024 Q3', event: 'Series A Funding ($5M)' },
                      ].map((milestone, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-20">
                            <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                              {milestone.year}
                            </span>
                          </div>
                          <div className="flex-1 border-l-2 border-primary/30 pl-4 py-1">
                            {milestone.event}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Geographic Presence</h3>
                    <div className="bg-base-200 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span>Bangladesh</span>
                          <span className="font-semibold">150+ factories</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Vietnam</span>
                          <span className="font-semibold">30+ factories</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Cambodia</span>
                          <span className="font-semibold">15+ factories</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>India</span>
                          <span className="font-semibold">10+ factories</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Other Regions</span>
                          <span className="font-semibold">5+ factories</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'team' && (
              <div className="space-y-8">
                <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                  <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-base-200 rounded-lg border">
                        <img 
                          src={member.img} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-primary font-semibold mb-3">{member.role}</p>
                          <p>{member.bio}</p>
                          <div className="mt-4">
                            <button className="text-sm text-primary hover:text-primary/80 font-medium">
                              Download Bio & Photo →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4">Available for Interviews</h3>
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <p className="mb-4">
                        Our executives are available for interviews on topics including:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Digital Transformation in Garment Industry',
                          'Sustainable Manufacturing',
                          'AI in Textile Production',
                          'Bangladesh Tech Ecosystem',
                          'Supply Chain Innovation',
                          'Future of Fashion Manufacturing'
                        ].map((topic, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'press' && (
              <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
                
                <div className="space-y-6">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:border-primary/30">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-base-200 text-sm font-semibold px-3 py-1 rounded-full">
                              {release.date}
                            </span>
                            <span className="text-sm">Press Release</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                          <p className="mb-4">{release.summary}</p>
                        </div>
                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleDownload(`Press Release - ${release.date}`)}
                            className="btn btn-outline btn-primary btn-sm"
                          >
                            <FaFilePdf /> PDF
                          </button>
                          <a href={release.link} className="btn btn-primary btn-sm">
                            Read Online
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-base-200 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Media Coverage</h3>
                  <p className="mb-4">
                    ThreadOps has been featured in leading industry publications:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      'Textile Today',
                      'Apparel Insider',
                      'Bangladesh Business News',
                      'Tech in Asia',
                      'Manufacturing Digest'
                    ].map((publication, index) => (
                      <span key={index} className="bg-base-100 px-4 py-2 rounded border">
                        {publication}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'media' && (
              <div className="space-y-8">
                <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                  <h2 className="text-2xl font-bold mb-6">Media Assets</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {mediaAssets.map((asset, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-lg ${asset.category === 'brand' ? 'bg-primary/10 text-primary' : asset.category === 'video' ? 'bg-secondary/10 text-secondary' : 'bg-base-200'}`}>
                            {asset.category === 'brand' ? <FaImage /> : 
                             asset.category === 'video' ? <FaVideo /> : 
                             <FaFilePdf />}
                          </div>
                          <div>
                            <h3 className="font-bold">{asset.type}</h3>
                            <p className="text-sm">{asset.size}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm mb-2">Available Formats:</div>
                          <div className="flex flex-wrap gap-2">
                            {asset.formats.map((format, idx) => (
                              <span key={idx} className="bg-base-200 text-xs font-medium px-3 py-1 rounded">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => handleDownload(asset.type)}
                          className="btn btn-outline btn-primary btn-sm w-full"
                        >
                          <FaDownload /> Download
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-xl font-bold mb-4">Brand Guidelines</h3>
                    <div className="bg-base-200 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-bold mb-2">ThreadOps Brand Guidelines (PDF)</h4>
                          <p className="text-sm mb-2">
                            Complete guide to using ThreadOps logos, colors, and typography
                          </p>
                          <div className="flex items-center gap-2 text-sm">
                            <span>Last updated: Nov 2024</span>
                            <span>•</span>
                            <span>25 pages</span>
                            <span>•</span>
                            <span>15 MB</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDownload('Brand Guidelines')}
                          className="btn btn-primary px-6"
                        >
                          <FaDownload /> Download Guidelines
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-8 border">
                <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FaUserTie className="text-xl text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Primary Contact</h3>
                          <p>{contactInfo.mediaContact}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FaEnvelope className="text-xl text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Email Addresses</h3>
                          <p className="mb-1">
                            <strong>Press Inquiries:</strong> {contactInfo.pressEmail}
                          </p>
                          <p>
                            <strong>General Inquiries:</strong> {contactInfo.generalEmail}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FaPhone className="text-xl text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Phone</h3>
                          <p>{contactInfo.phone}</p>
                          <p className="text-sm mt-1">Available 9AM-6PM BST, Monday-Friday</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FaGlobe className="text-xl text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Address</h3>
                          <p>{contactInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-base-200 p-6 rounded-lg h-full">
                      <h3 className="font-bold text-lg mb-4">Quick Response Guarantee</h3>
                      <p className="mb-6">
                        We guarantee a response to all press inquiries within 24 hours during business days.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-base-100 rounded border">
                          <h4 className="font-bold mb-2">For Journalists</h4>
                          <p className="text-sm">
                            Schedule interviews, request expert commentary, or get access to embargoed news.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-base-100 rounded border">
                          <h4 className="font-bold mb-2">For Investors</h4>
                          <p className="text-sm">
                            Access financial information, investor presentations, and executive briefings.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-base-100 rounded border">
                          <h4 className="font-bold mb-2">For Analysts</h4>
                          <p className="text-sm">
                            Request market data, industry analysis, and proprietary research.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn btn-outline btn-primary">
                      <FaLink /> Company Website
                    </button>
                    <button className="btn btn-outline btn-secondary">
                      <FaNewspaper /> LinkedIn
                    </button>
                    <button className="btn btn-outline">
                      Follow on Twitter
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-content">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Something Specific?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our press team directly for customized media kits, exclusive interviews, or specific data requests.
            </p>
            <a 
              href={`mailto:${contactInfo.pressEmail}`}
              className="btn btn-secondary btn-soft font-semibold px-8 py-3"
            >
              Email Press Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;
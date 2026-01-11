import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign, FaFilter, FaBuilding, FaArrowRight, FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Production Manager",
      company: "StitchWell Garments",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      experience: "5+ years",
      salary: "$50,000 - $70,000",
      postedDate: "2 days ago",
      description: "Oversee garment production operations, manage teams, and ensure quality standards.",
      featured: true,
      category: "Management"
    },
    {
      id: 2,
      title: "Quality Control Supervisor",
      company: "Premium Textiles Ltd",
      location: "Chittagong, Bangladesh",
      type: "Full-time",
      experience: "3+ years",
      salary: "$35,000 - $45,000",
      postedDate: "1 week ago",
      description: "Monitor garment quality, implement QC protocols, and train inspection teams.",
      featured: true,
      category: "Quality"
    },
    {
      id: 3,
      title: "Garment Merchandiser",
      company: "Global Apparel Solutions",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$40,000 - $55,000",
      postedDate: "3 days ago",
      description: "Handle client orders, production planning, and supplier coordination.",
      featured: false,
      category: "Merchandising"
    },
    {
      id: 4,
      title: "Fabric Technician",
      company: "Textile Innovations Inc",
      location: "Savar, Bangladesh",
      type: "Contract",
      experience: "2+ years",
      salary: "$30,000 - $38,000",
      postedDate: "5 days ago",
      description: "Test fabric quality, maintain inventory, and assist in material selection.",
      featured: false,
      category: "Technical"
    },
    {
      id: 5,
      title: "Sewing Supervisor",
      company: "Precision Stitch Factory",
      location: "Narayanganj, Bangladesh",
      type: "Full-time",
      experience: "3+ years",
      salary: "$28,000 - $35,000",
      postedDate: "1 day ago",
      description: "Supervise sewing operations, train operators, and meet production targets.",
      featured: true,
      category: "Production"
    },
    {
      id: 6,
      title: "Inventory Analyst",
      company: "ThreadOps Partner",
      location: "Remote",
      type: "Part-time",
      experience: "2+ years",
      salary: "$25,000 - $32,000",
      postedDate: "4 days ago",
      description: "Track garment inventory, analyze stock levels, and generate reports.",
      featured: false,
      category: "Analytics"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = jobs;
    
    if (searchTerm) {
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (locationFilter) {
      result = result.filter(job => 
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    
    if (jobTypeFilter) {
      result = result.filter(job => job.type === jobTypeFilter);
    }
    
    if (categoryFilter) {
      result = result.filter(job => job.category === categoryFilter);
    }
    
    setFilteredJobs(result);
  }, [searchTerm, locationFilter, jobTypeFilter, categoryFilter, jobs]);

  const handleApplyJob = (jobId) => {
    toast.success(`Application submitted for job #${jobId}! We'll contact you soon.`);
  };

  const handleSaveJob = (jobId) => {
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        const newFeaturedStatus = !job.featured;
        toast.success(newFeaturedStatus ? "Job saved to favorites!" : "Job removed from favorites");
        return { ...job, featured: newFeaturedStatus };
      }
      return job;
    });
    
    setJobs(updatedJobs);
  };

  const jobCategories = ["All", "Management", "Quality", "Merchandising", "Technical", "Production", "Analytics"];
  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"];

  const featuredJobs = jobs.filter(job => job.featured);
  const remoteJobs = jobs.filter(job => job.location.includes("Remote") || job.type === "Remote");

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Find Your Perfect Role in Garment Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Join {jobs.length}+ opportunities at leading garment factories and textile companies worldwide
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or keyword..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full md:w-64 pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
              <button 
                className="btn btn-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="container mx-auto px-4 md:px-8 py-6 rounded-lg shadow-sm -mt-4 md:mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Job Type</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
              >
                {jobTypes.map(type => (
                  <option key={type} value={type === "All" ? "" : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {jobCategories.map(cat => (
                  <option key={cat} value={cat === "All" ? "" : cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button 
                className="btn btn-outline btn-secondary w-full"
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("");
                  setJobTypeFilter("");
                  setCategoryFilter("");
                }}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">{jobs.length}</div>
            <div className="text-gray-600">Total Jobs</div>
          </div>
          <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-secondary mb-2">{featuredJobs.length}</div>
            <div className="text-gray-600">Featured Roles</div>
          </div>
          <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-accent mb-2">{remoteJobs.length}</div>
            <div className="text-gray-600">Remote Opportunities</div>
          </div>
          <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div 
                key={job.id} 
                className={` rounded-xl shadow-sm border ${job.featured ? 'border-secondary border-2' : 'border-gray-100'} hover:shadow-md transition-all duration-300`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <FaBuilding className="text-primary" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleSaveJob(job.id)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {job.featured ? <FaStar className="text-yellow-500" size={20} /> : <FaRegStar size={20} />}
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">{job.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-gray-400" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gray-400" />
                      <span className="text-sm">{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaDollarSign className="text-gray-400" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{job.postedDate}</span>
                    <div className="flex gap-3">
                      <button
                        className="btn btn-outline btn-primary btn-sm"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => handleApplyJob(job.id)}
                        className="btn btn-primary btn-sm flex items-center gap-2"
                      >
                        Apply Now <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No jobs found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("");
                  setJobTypeFilter("");
                  setCategoryFilter("");
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Looking to Hire in the Garment Industry?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Post your job openings and reach qualified professionals from ThreadOps' network of 200+ factories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-white text-primary font-semibold hover:bg-gray-100">
                Post a Job - $299/month
              </button>
              <Link to="/contact" className="btn btn-outline btn-white font-semibold">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Alena D'costa", role: "Factory Owner", quote: "Found our perfect Production Manager through ThreadOps Jobs.", date: "12/10/2024" },
              { name: "Jason Lee", role: "Production Manager", quote: "Landed my dream role at a leading garment factory.", date: "28/09/2024" },
              { name: "Meera Chand", role: "Quality Controller", quote: "ThreadOps Jobs connected me with premium textile companies.", date: "05/11/2024" }
            ].map((testimonial, index) => (
              <div key={index} className=" p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => <FaStar key={i} size={16} />)}
                </div>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
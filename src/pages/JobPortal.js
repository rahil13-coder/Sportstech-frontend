import React, { useState, useEffect } from 'react';

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "Brazil", "Japan", "China",
  "South Africa", "Mexico", "Argentina", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland", "Singapore", "New Zealand",
  "United Arab Emirates", "Qatar", "Saudi Arabia", "Egypt", "Nigeria", "Kenya", "Indonesia", "Malaysia", "Thailand", "Vietnam",
  "Philippines", "Pakistan", "Bangladesh", "Russia", "Turkey", "Poland", "Belgium", "Austria", "Portugal", "Greece",
  "Ireland", "Norway", "Denmark", "Finland", "Czech Republic", "Hungary", "Romania", "Ukraine", "Chile", "Colombia",
  "Peru", "Venezuela", "Ecuador", "Algeria", "Morocco", "Tunisia", "Ghana", "Ethiopia", "Tanzania", "Uganda",
  "Angola", "Mozambique", "Zambia", "Zimbabwe", "Kazakhstan", "Uzbekistan", "Sri Lanka", "Myanmar", "Nepal", "Cambodia",
  "Laos", "Mongolia", "Fiji", "Papua New Guinea", "Israel", "Lebanon", "Jordan", "Kuwait", "Bahrain", "Oman",
  "Cyprus", "Malta", "Iceland", "Luxembourg", "Estonia", "Latvia", "Lithuania", "Slovenia", "Slovakia", "Croatia",
  "Serbia", "Bulgaria", "Albania", "Bosnia and Herzegovina", "North Macedonia", "Moldova", "Belarus", "Georgia", "Armenia", "Azerbaijan"
];

const JobPortal = ({ onBackClick }) => {
  const [userType, setUserType] = useState(null); // 'seeker' or 'employer'
  const [selectedCountry, setSelectedCountry] = useState('');
  const [jobListings, setJobListings] = useState([]);
  const [message, setMessage] = useState('');

  // Employer Form States
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [applicationLink, setApplicationLink] = useState('');

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobListings')) || [];
    setJobListings(storedJobs);
  }, []);

  const handlePostJob = (e) => {
    e.preventDefault();
    if (!jobTitle || !companyName || !jobLocation || !jobDescription || !requirements || !applicationLink) {
      setMessage('Please fill in all job details.');
      return;
    }

    const newJob = {
      id: Date.now(),
      title: jobTitle,
      company: companyName,
      location: jobLocation,
      description: jobDescription,
      requirements: requirements,
      applicationLink: applicationLink,
      country: selectedCountry, // Associate job with selected country
      postedDate: new Date().toLocaleDateString(),
    };

    const updatedJobListings = [...jobListings, newJob];
    localStorage.setItem('jobListings', JSON.stringify(updatedJobListings));
    setJobListings(updatedJobListings);

    setMessage('Job posted successfully!');
    setJobTitle('');
    setCompanyName('');
    setJobLocation('');
    setJobDescription('');
    setRequirements('');
    setApplicationLink('');
  };

  const filteredJobs = jobListings.filter(job =>
    selectedCountry === '' || job.country === selectedCountry
  );

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '20px', borderRadius: '8px', maxWidth: '900px', margin: '50px auto', textAlign: 'center', color: 'white' }}>
      <h2 style={{ marginBottom: '20px' }}>Job Portal</h2>
      {message && <p style={{ color: 'lightgreen', marginBottom: '10px' }}>{message}</p>}

      {!userType && (
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setUserType('seeker')} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' }}>
            Looking for Job
          </button>
          <button onClick={() => setUserType('employer')} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' }}>
            Giving Job
          </button>
        </div>
      )}

      {userType && !selectedCountry && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Select Your Country</h3>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white', marginTop: '10px' }}
          >
            <option value="">-- Select a Country --</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <button onClick={() => setSelectedCountry('')} style={{ backgroundColor: 'gray', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' }}>
            Back to User Type Selection
          </button>
        </div>
      )}

      {userType === 'employer' && selectedCountry && (
        <div style={{ textAlign: 'left', border: '1px solid #555', padding: '20px', borderRadius: '8px' }}>
          <h3>Post a New Job in {selectedCountry}</h3>
          <form onSubmit={handlePostJob}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Job Title:</label>
              <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Company Name:</label>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Job Location (City/State):</label>
              <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Job Description:</label>
              <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white', minHeight: '100px' }} required></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Requirements:</label>
              <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white', minHeight: '100px' }} required></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Application Link/Email:</label>
              <input type="text" value={applicationLink} onChange={(e) => setApplicationLink(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }} required />
            </div>
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px', width: '100%' }}>
              Post Job
            </button>
          </form>
          <button onClick={() => setSelectedCountry('')} style={{ backgroundColor: 'gray', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', width: '100%' }}>
            Change Country
          </button>
        </div>
      )}

      {userType === 'seeker' && selectedCountry && (
        <div style={{ textAlign: 'left' }}>
          <h3>Jobs in {selectedCountry}</h3>
          {filteredJobs.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No jobs available in {selectedCountry}.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {filteredJobs.map(job => (
                <div key={job.id} style={{ border: '1px solid #555', borderRadius: '8px', padding: '15px', backgroundColor: '#222' }}>
                  <h4 style={{ color: 'skyblue', marginBottom: '5px' }}>{job.title}</h4>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Location:</strong> {job.location}, {job.country}</p>
                  <p><strong>Posted:</strong> {job.postedDate}</p>
                  <p>{job.description.substring(0, 150)}...</p>
                  <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue', textDecoration: 'none' }}>Apply Now</a>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => setSelectedCountry('')} style={{ backgroundColor: 'gray', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px', width: '100%' }}>
            Change Country
          </button>
        </div>
      )}

      <button type="button" onClick={onBackClick} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '30px', width: '100%' }}>
        Back to Contact Page
      </button>

      <footer className="custom-footer">
        <p className="footer-text">© ZAKRU Technologies Pvt. Ltd.</p>
        <div className="social-icons">
          <a
            href="https://youtube.com/@public_0cassion?si=nswULJf9ZyvFmk-m"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube Channel"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/rahil.patial.9?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook Profile"
              className="social-icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default JobPortal;
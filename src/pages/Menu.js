import React from 'react';
import './Menu.css'; // Import the CSS file
import { trackClick } from '../utils/trackClick'; // Import trackClick

const Menu = ({ toggleHome, toggleAdmin, toggleBlogs, toggleBooks, toggleGames, toggleContact, toggleJobs }) => { // New: Accept toggleJobs prop

  const handleMenuClick = (elementId, originalOnClick) => (e) => {
    if (originalOnClick) {
      originalOnClick(e);
    }
    trackClick(elementId, 'navbar-link', window.location.pathname);
  };

  return (
    <div className="menu-container">
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-home', toggleHome)}>Home</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-admin', toggleAdmin)}>Admin</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-blogs', toggleBlogs)}>Blogs</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-books', toggleBooks)}>Books</a> {/* Updated: Use toggleBooks */}
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-contact', toggleContact)}>Contact</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-jobs', toggleJobs)}>Jobs</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-cricket', null)}>Cricket</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-football', null)}>Football</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-tennis', null)}>Tennis</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-basketball', null)}>Basketball</a>
      <a href="#" className="menu-link" onClick={handleMenuClick('navbar-games', toggleGames)}>Games</a>
    </div>
  );
};

export default Menu;

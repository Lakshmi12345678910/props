import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyLinks: ['Home', 'Placements', 'Corporate Training', 'Contact Us'],
      trendingCourses: [
        'UI Development Course',
        'Angular JS Course',
        'React JS Course',
        'Digital Marketing Course',
        'Python Course'
      ],
      contactInfo: {
        address: '#63, 1st Floor, 16th Main, 8th Cross, 4th Stage, Bangalore, India - 560061',
        phone: '+91 8431-040-457',
        email: 'info@achieversit.com'
      }
    };
  }

  render() {
    return (
      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '20px' }}>
        <div className="footer-container">
          <div className="company-info">
            <h4>AchieversIT</h4>
            <p>
              AchieversIT provides a wide group of opportunities for freshers and experienced
              candidates who can develop their skills and build their career opportunities across
              multiple companies.
            </p>
          </div>

          <div className="footer-links">
            <div className="company-links">
              <h4>Company</h4>
              <ul>
                {this.state.companyLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div className="trending-courses">
              <h4>Trending Courses</h4>
              <ul>
                {this.state.trendingCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>{this.state.contactInfo.address}</li>
                <li>India: {this.state.contactInfo.phone}</li>
                <li>Email: <a href={`mailto:${this.state.contactInfo.email}`}>{this.state.contactInfo.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer; 

// components/Experience.js
import React from 'react';
import './style.css';

function Experience() {
  return (
    <div className='container'>
      <h2 className='heading'>Experience</h2>

      <div className="contact-card">
        <h3>SRE Intern</h3>
        <p><strong>FourKites - Real-time Supply Chain Visibility Platform</strong><br />
        August 2023</p>
        <ul className="content">
          <li>Established vigilant monitoring of services, contributing to a 20% reduction in downtime.</li>
          <li>Adeptly resolved over 300 pager alerts to uphold system stability.</li>
          <li>Optimized log collection, decreasing processing time by 30%.</li>
          <li>Spearheaded 50+ deployments through pipeline and Elastic Beanstalk for seamless updates.</li>
          <li>Managed approximately 100 service request tickets, meeting deadlines for results delivery.</li>
          <li>Engineered dashboards on Chronosphere for enhanced infrastructure monitoring.</li>
        </ul>
      </div>
      
      <div className="contact-card">
        <h3>Cyber-Security Intern</h3>
        <p><strong>Treacle Technologies Private Limited (IIT Kanpur) - Remote</strong><br />
        March 2023 - May 2023</p>
        <ul className="content">
          <li>Specialized in honeypots and network security, particularly in Zeek honeypot technology.</li>
          <li>Analyzed over 10k network packets, identifying attacks such as DDoS, spoofing, trojan, and man-in-the-middle.</li>
          <li>Devised and executed strategies to counter cyber threats, bolstering network security.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;

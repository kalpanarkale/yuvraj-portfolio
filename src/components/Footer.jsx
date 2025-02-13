import React from "react";
import "../App.css"; // Import the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p className="footer-text">
        I'M SUPER <span className="green">ACTIVE</span> ON{" "}
        <img src="/assets/instagram.png" alt="Instagram" className="icon" /> AND{" "}
        <img src="/assets/linkedin.png" alt="LinkedIn" className="icon" />,  
        WHENEVER I SCROLL THROUGH THOSE{" "}
        <span className="pink">BEAUTIFUL</span> DESK SETUPS ON{" "}
        <img src="/assets/pinterest.png" alt="Pinterest" className="icon" />,  
        I'M LIKE, "WAIT, I NEED TO GET MY{" "}
        <span className="yellow">PROJECTS</span> ON{" "}
        <img src="/assets/behance.png" alt="Behance" className="icon" /> AND{" "}
        <img src="/assets/dribbble.png" alt="Dribbble" className="icon" />,  
        SOMETIMES <span className="red">IMPOSTER</span> SYNDROME CREEPS IN,  
        BUT I JUST <span className="purple">PUSH</span> THROUGH.  
        <span className="emoji">😎</span>
      </p>

        {/* Floating Stickers */}
        <img src="/assets/done-sticker.png" alt="Done" className="done-sticker" />
        <img src="/assets/feedback-wanted.png" alt="Feedback Wanted" className="feedback-sticker" />
        <img src="/assets/pubg-avatar.png" alt="PUBG Avatar" className="avatar-sticker" />

        {/* Job Availability */}
        <div className="status">
          <span className="status-dot"></span> Actively looking for full-time opportunities
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Thinking by ❤️ Designing by 🧠</p>
          <a href="mailto:Yuvrajgupta0221@gmail.com" className="email-link">
            <img src="/assets/gmail-icon.png" alt="Gmail" className="gmail-icon" /> Yuvrajgupta0221@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

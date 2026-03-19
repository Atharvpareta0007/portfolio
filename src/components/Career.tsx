import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Intern</h4>
                <h5>Quest Digiflex Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed LLM-based travel itinerary generation system integrating OpenStreetMap and Wikipedia APIs. Built multilingual NLP translation pipeline and speech-to-speech AI assistant.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Shri Vaishnav Vidyapeeth Vishwavidyalaya</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CGPA of 6.2. Specializing in AI/ML, NLP pipelines, and Python. IBM certified in Python for Data Science and AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>MP Board & CBSE</h5>
              </div>
              <h3>Pre-2022</h3>
            </div>
            <p>
              Completed Class XII from MP Board with 73.4% and Class X from CBSE with 72.2%. Volunteer for Scout and Guide Program and Taekwondo Tournament Participant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

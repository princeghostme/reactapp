import './AboutUs.css'; // Custom CSS for additional styling

const AboutUs = () => {
  return (
    <div className="about-us py-5">
      <div className="container">
        {/* About Us Section */}
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h2 className="display-4 mb-4 fw-bold text-dark-green">About Us</h2>
            <p className="lead text-muted">
              At <span className="text-success fw-bold">Bite And Diet</span>, we are revolutionizing the way people approach nutrition and health. Our mission is to make professional counseling easy, affordable, and convenient for everyone. With over <span className="text-dark-green fw-bold">3000 clients</span> served since May 24, 2020, we have helped individuals manage chronic diseases, achieve weight goals, and boost overall well-being—all without side effects.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and History Sections */}
        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our Mission</h3>
                <p className="card-text text-muted">
                  To empower individuals to lead healthy lives through personalized, evidence-based nutrition plans. We aim to reduce dependency on medications and promote natural healing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our Vision</h3>
                <p className="card-text text-muted">
                  To eliminate pain caused by malnutrition and create a world where everyone has access to affordable, sustainable, and effective health solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our History</h3>
                <p className="card-text text-muted">
                  For the past <span className="text-dark-green fw-bold">9 years</span>, we have been dedicated to helping people achieve their health goals. Our journey began with a simple idea: to make healthy living accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h2 className="display-4 mb-4 fw-bold text-dark-green">Our Approach</h2>
            <p className="lead text-muted">
              We follow a simple yet effective 6-step process to ensure your health journey is seamless and enjoyable:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Appointment Call:</strong> Book your consultation at a time that suits you.
                  </li>
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Requirement Analysis:</strong> We review your health reports, medical history, and lifestyle to understand your needs.
                  </li>
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Choose Your Plan:</strong> Select from customized monthly, quarterly, half-yearly, or yearly plans.
                  </li>
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Payment Process:</strong> Enjoy a hassle-free and secure payment experience.
                  </li>
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Plan Delivery:</strong> Receive your personalized diet plan within 24 hours of your consultation.
                  </li>
                  <li className="list-group-item border-0">
                    <strong className="text-dark-green">Follow Up & Consultation:</strong> Regular follow-ups to track progress and make adjustments as needed.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h2 className="display-4 mb-4 fw-bold text-dark-green">Why Choose Us?</h2>
            <p className="lead text-muted">
              Here’s what sets us apart from the rest:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Personalized Plans</h3>
                <p className="card-text text-muted">
                  Every plan is tailored to your unique needs, preferences, and lifestyle. We ensure it’s enjoyable and sustainable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Evidence-Based Advice</h3>
                <p className="card-text text-muted">
                  Our recommendations are backed by science and designed to deliver real results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Daily Support</h3>
                <p className="card-text text-muted">
                  Our WhatsApp assistance ensures you’re never alone on your journey. We’re here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Affordable & Accessible</h3>
                <p className="card-text text-muted">
                  We believe everyone deserves access to quality nutrition counseling, which is why our plans are pocket-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h2 className="display-4 mb-4 fw-bold text-dark-green">What Our Clients Say</h2>
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <blockquote className="blockquote">
                  <p className="mb-0 text-muted">
                    "Bite And Diet has transformed my life! I no longer rely on medications, and my energy levels have skyrocketed. The personalized plan was easy to follow, and the daily support kept me motivated."
                  </p>
                  <footer className="blockquote-footer mt-2 text-dark-green">Happy Client</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
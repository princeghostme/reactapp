import './WhyBiteAndDiet.css';

const WhyBiteAndDiet = () => {
  return (
    <div className="why-bite-and-diet py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h2 className="display-4 fw-bold text-dark-green">Why Choose Us?</h2>
            <p className="lead text-muted">
              Discover the <span className="text-success fw-bold">Bite And Diet</span> Advantage
            </p>
            <p className="text-muted">
              Amidst a sea of conflicting nutritional advice on social media, distinguishing fact from fiction can be overwhelming. At Bite And Diet, we cut through the noise with evidence-based, personalized nutrition plans tailored to your unique needs.
            </p>
          </div>
        </div>

        {/* Why Bite And Diet Stands Out Section */}
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green mb-4">Why Bite And Diet Stands Out</h3>
                <p className="card-text text-muted">
                  Many so-called experts propagate misinformation about diet and health, leaving you confused and misled. We provide clarity and guidance to help you make informed decisions and follow a personalized nutrition plan that promotes health without side effects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Diet Myths Debunked Section */}
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green mb-4">Common Diet Myths Debunked</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 text-muted">Dieting is not about starving yourself.</li>
                  <li className="list-group-item border-0 text-muted">Carbs are not the enemy; balanced intake matters.</li>
                  <li className="list-group-item border-0 text-muted">A vegan diet isn't automatically the healthiest choice.</li>
                  <li className="list-group-item border-0 text-muted">White salt isn't harmful if consumed in moderation.</li>
                  <li className="list-group-item border-0 text-muted">Specific fruits and vegetables can be part of a diabetic diet.</li>
                  <li className="list-group-item border-0 text-muted">Wheat can be a healthy part of a balanced diet.</li>
                  <li className="list-group-item border-0 text-muted">Protein intake can be managed even with uric acid issues.</li>
                  <li className="list-group-item border-0 text-muted">Diabetes management is possible with lifestyle changes, not just medication.</li>
                  <li className="list-group-item border-0 text-muted">Blood pressure can be controlled through diet and lifestyle.</li>
                  <li className="list-group-item border-0 text-muted">Supplements are not always necessary for good health.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green mb-4">Benefits of Choosing Bite And Diet</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 text-muted">Reduced medical expenses through preventive care.</li>
                      <li className="list-group-item border-0 text-muted">Potential reduction in medication needs and side effects.</li>
                      <li className="list-group-item border-0 text-muted">Improved energy, focus, and overall productivity.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 text-muted">Enhanced physical fitness and self-confidence.</li>
                      <li className="list-group-item border-0 text-muted">Better overall happiness and quality of life.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and History Section */}
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our Mission</h3>
                <p className="card-text text-muted">
                  To lead a healthy life with the help of various personalized plans.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our Vision</h3>
                <p className="card-text text-muted">
                  To reduce pain caused by malnutrition and empower individuals to achieve optimal health.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold text-dark-green">Our History</h3>
                <p className="card-text text-muted">
                  For the past 9 years, we have been committed to helping people achieve their health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBiteAndDiet;
import React from "react";
import "./ItemLong.css";
import { Link } from "react-router-dom";

interface BiteAndDietDetails {
  overview?: string;
  keyFactors?: string[];
  complications?: string[];
  approach?: string[];
}

interface ItemsProps {
  id: string;
  image?: string;
  heading?: string;
  subType?: string;
  description?: string;
  keyPoints?: string[];
  benefits?: string[];
  targetAudience?: string;
  duration?: string;
  oldPrice?: number;
  effectivePrice?: number;
  biteAndDietDetails?: BiteAndDietDetails;
  buttons?: React.ReactNode;
}

const Items: React.FC<ItemsProps> = ({
  id,
  image,
  heading,
  subType,
  description,
  keyPoints = [],
  benefits = [],
  targetAudience,
  duration,
  oldPrice,
  effectivePrice,
  biteAndDietDetails,
  buttons,
}) => {
  return (
    <Link to={`/plan-details/${id}`} className="text-decoration-none">
      <div className="cardLongItem">
        <div className="card rounded-5 p-4 shadow-lg">
          <div className="card-body">
            {/* Image Section */}
            {image && (
              <div className="d-flex justify-content-center image-container">
                <img className="img-fluid rounded" src={image} alt={heading || "Product Image"} />
              </div>
            )}

            {/* Heading & Subtype */}
            {heading && (
              <>
                <h2 title={heading} className="fs-3 fw-bold text-dark text-shadow">
                  {heading}
                </h2>
                <hr />
              </>
            )}
            {subType && (
              <h4 title={subType} className="fs-5 fw-semibold text-muted">{subType}</h4>
            )}

            {/* Description */}
            {description && (
              <p title={description} className="fs-6 text-secondary">{description}</p>
            )}

            {/* Pricing Section */}
            {(oldPrice !== undefined || effectivePrice !== undefined) && (
              <div className="py-3">
                <h6>Subscription Starts at -</h6>
                <div>
                  {oldPrice !== undefined && (
                    <p className="mt-3 mb-1">
                      <span className="text-muted fs-6">Old Price: </span>
                      <span className="fs-6 text-decoration-line-through text-danger">₹{oldPrice}</span>
                    </p>
                  )}
                  {effectivePrice !== undefined && (
                    <p className="mb-0">
                      <span className="text-muted fs-6">Effective Price: </span>
                      <span className="fs-6 fw-bold text-success">₹{effectivePrice}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Key Points */}
            {keyPoints.length > 0 && (
              <div className="mt-3">
                <h6 className="fw-semibold">Key Highlights:</h6>
                {keyPoints.map((point, index) => (
                  <span key={index} className="badge bg-csPrimary text-csPrimary m-1 px-3 py-2">
                    {point}
                  </span>
                ))}
              </div>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="mt-3">
                <h6 className="fw-semibold">Benefits:</h6>
                <ul className="list-unstyled">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-secondary fs-6">✔ {benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Audience & Duration */}
            {(targetAudience || duration) && (
              <div className="mt-3">
                {targetAudience && (
                  <p className="fs-6"><strong>Target Audience:</strong> {targetAudience}</p>
                )}
                {duration && (
                  <p className="fs-6"><strong>Duration:</strong> {duration}</p>
                )}
              </div>
            )}

            {/* Bite And Diet Details */}
            {biteAndDietDetails && (
              <div className="mt-4">
                <h5 className="fw-bold text-dark">How Bite And Diet Helps?</h5>

                {biteAndDietDetails.overview && (
                  <p className="text-secondary fs-6">{biteAndDietDetails.overview}</p>
                )}

                {biteAndDietDetails.keyFactors && biteAndDietDetails.keyFactors.length > 0 && (
                  <div className="mt-3">
                    <h6 className="fw-semibold">Key Factors:</h6>
                    <ul className="list-unstyled">
                      {biteAndDietDetails.keyFactors.map((factor, index) => (
                        <li key={index} className="text-secondary fs-6">✔ {factor}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {biteAndDietDetails.complications && biteAndDietDetails.complications.length > 0 && (
                  <div className="mt-3">
                    <h6 className="fw-semibold">Possible Complications:</h6>
                    <ul className="list-unstyled">
                      {biteAndDietDetails.complications.map((complication, index) => (
                        <li key={index} className="text-secondary fs-6">⚠ {complication}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {biteAndDietDetails.approach && biteAndDietDetails.approach.length > 0 && (
                  <div className="mt-3">
                    <h6 className="fw-semibold">Our Approach:</h6>
                    <ul className="list-unstyled">
                      {biteAndDietDetails.approach.map((approach, index) => (
                        <li key={index} className="text-secondary fs-6">➡ {approach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {buttons && <div className="mt-4">{buttons}</div>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Items;

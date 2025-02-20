import React, { JSX } from "react";
import "./ItemLong.css";
import { Link } from "react-router-dom";

interface ItemLongProps {
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
  buttons?: JSX.Element;
}

const ItemLong: React.FC<ItemLongProps> = ({
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
  buttons,
}) => {
  return (
    <Link to={""} className="text-decoration-none">
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
                <h2 title={heading} className="fs-3 fw-bold text-truncate-1 text-dark text-shadow">
                  {heading}
                </h2>
                <hr />
              </>
            )}
            {subType && (
              <h4 title={subType} className="fs-5 fw-semibold text-truncate-2 text-muted">
                {subType}
              </h4>
            )}

            {/* Description */}
            {description && (
              <p title={description} className="fs-6 text-truncate-3 text-secondary">
                {description}
              </p>
            )}

            {/* Pricing Section */}
            {(oldPrice !== undefined || effectivePrice !== undefined) && (
              <div className="py-3">
                <h6>Subscription Starts at -</h6>
                <div>
                  {oldPrice !== undefined && (
                    <p className="mt-3 mb-1">
                      <span className="text-muted fs-6">Old Price: </span>
                      <span className="fs-6 text-decoration-line-through text-danger">
                        ₹{oldPrice}
                      </span>
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
                  <span key={index} className="badge bg-csPrimary text-csPrimary m-1 px-3 py-2 text-truncate-1">
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
                  <p className="fs-6">
                    <strong>Target Audience:</strong> {targetAudience}
                  </p>
                )}
                {duration && (
                  <p className="fs-6">
                    <strong>Duration:</strong> {duration}
                  </p>
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

export default ItemLong;

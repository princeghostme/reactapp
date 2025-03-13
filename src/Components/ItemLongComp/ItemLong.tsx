import React, { JSX } from "react";
import "./ItemLong.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface ItemLongProps {
  id: number;
  image?: string;
  heading?: string;
  subType?: string;
  description?: string;
  keyPoints?: string[];
  benefits?: string[];
  targetAudience?: string;
  duration?: number;
  oldPrice?: number;
  effectivePrice?: number;
  buttons?: JSX.Element;
}

const ItemLong: React.FC<ItemLongProps> = ({
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
  buttons,
}) => {
  const plans = useSelector((state: RootState) => state.local.subscribtions.value);
  const subscribed = plans.includes(id);
  console.log(image)
  return (
    <div className="text-decoration-none">
      <div className="cardLongItem">
        <div className="rounded-5 p-4 shadow-sm">
          <div className="">
            {/* Image Section */}
            {image && (
              <div className="d-flex justify-content-center image-container m-4">
                <img
                  className="img-fluid rounded"
                  src={image}
                  alt={heading || "Product Image"}
                  style={{
                    height:"13vh"
                  }}
                />
              </div>
            )}

            {/* Heading & Subtype */}
            {heading && (
              <>
                <h2
                  title={heading}
                  className="fs-3 fw-bold text-truncate-1 text-csPrimary mb-3"
                >
                  {heading}
                </h2>
                <hr className="mb-3" />
              </>
            )}
            {subType && (
              <h4
                title={subType}
                className="fs-5 fw-semibold text-truncate-2 text-muted mb-4"
              >
                {subType}
              </h4>
            )}

            {/* Description */}
            {description && (
              <p
                title={description}
                className="fs-6 text-truncate-3 text-secondary mb-4"
              >
                {description}
              </p>
            )}

            {/* Pricing Section */}
            {(oldPrice !== undefined || effectivePrice !== undefined) && (
              <div className="py-3 border-top border-bottom mb-4">
                <h6 className="fw-semibold mb-3">Subscription Starts at -</h6>
                <div>
                  {oldPrice !== undefined && (
                    <p className="mb-2">
                      <span className="text-muted fs-6">Old Price: </span>
                      <span className="fs-6 text-decoration-line-through text-danger">
                        ₹{oldPrice}/Program
                      </span>
                    </p>
                  )}
                  {effectivePrice !== undefined && (
                    <p className="mb-0">
                      <span className="text-muted fs-6">Effective Price: </span>
                      <span className="fs-6 fw-bold text-success">
                        ₹{effectivePrice}/Program
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Key Points */}
            {keyPoints.length > 0 && (
              <div className="mt-4 mb-4">
                <h6 className="fw-semibold mb-3">Key Highlights:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="badge bg-csPrimary text-white px-3 py-2 text-truncate-1"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="mt-4 mb-4">
                <h6 className="fw-semibold mb-3">Benefits:</h6>
                <ul className="list-unstyled">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-secondary fs-6 mb-2">
                      ✔ {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Audience & Duration */}
            {(targetAudience || duration) && (
              <div className="mt-4 mb-4">
                {targetAudience && (
                  <p className="fs-6 mb-2">
                    <strong>Target Audience:</strong> {targetAudience}
                  </p>
                )}
                {duration && (
                  <p className="fs-6 mb-0">
                    <strong>Duration:</strong> {duration} weeks
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {buttons && <div className="mt-4">{buttons}</div>}

            {/* Subscribed Badge */}
            {subscribed && (
              <span className="badge bg-warning p-2 float-end mt-2">
                Already Subscribed!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemLong;
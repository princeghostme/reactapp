import React, { useState } from 'react';
import './loginSiginUp.css';

// Define reusable input field component
interface InputFieldProps {
    label: string;
    type?: string;
    required?: boolean;
    [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", ...props }) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <input type={type} className="form-control" {...props} />
    </div>
);

// Define reusable select field component
interface SelectFieldProps {
    label: string;
    options: { value: string; label: string }[];
    required?: boolean;
    [key: string]: any;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, ...props }) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <select className="form-select" {...props}>
            <option value="">Select</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

// Main Signup component
const Signup: React.FC = () => {
    const [diseases, setDiseases] = useState<string[]>([""]);
    const [allergies, setAllergies] = useState<string[]>([""]);
    const [medications, setMedications] = useState<string[]>([""]);

    const handleAddField = (field: string) => {
        switch (field) {
            case "disease":
                setDiseases([...diseases, ""]);
                break;
            case "allergy":
                setAllergies([...allergies, ""]);
                break;
            case "medication":
                setMedications([...medications, ""]);
                break;
            default:
                break;
        }
    };

    const handleChangeField = (field: string, index: number, value: string) => {
        switch (field) {
            case "disease":
                const newDiseases = [...diseases];
                newDiseases[index] = value;
                setDiseases(newDiseases);
                break;
            case "allergy":
                const newAllergies = [...allergies];
                newAllergies[index] = value;
                setAllergies(newAllergies);
                break;
            case "medication":
                const newMedications = [...medications];
                newMedications[index] = value;
                setMedications(newMedications);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container my-5">
            <form className="p-4 shadow rounded bg-light-green">
                <h2 className="text-center mb-4">Signup</h2>

                {/* Personal Information */}
                <div className="row">
                    <div className="col-md-4">
                        <InputField label="First Name" required />
                    </div>
                    <div className="col-md-4">
                        <InputField label="Last Name" required />
                    </div>
                    <div className="col-md-4">
                        <InputField label="Date of Birth" type="date" required />
                    </div>
                </div>

                {/* Address Information */}
                <div className="row">
                    <div className="col-md-8">
                        <InputField label="Address 1" required />
                    </div>
                    <div className="col-md-4">
                        <InputField label="Address 2" />
                    </div>
                </div>

                {/* Age, Weight, Gender, and Phone Number */}
                <div className="row">
                    <div className="col-md-3">
                        <InputField label="Age" type="number" required />
                    </div>
                    <div className="col-md-3">
                        <InputField label="Weight (kg)" type="number" required />
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            label="Gender"
                            options={[
                                { value: "male", label: "Male" },
                                { value: "female", label: "Female" },
                                { value: "other", label: "Other" },
                            ]}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <InputField label="Phone Number" type="tel" required />
                    </div>
                </div>

                {/* Contact and Preferences */}
                <div className="row">
                    <div className="col-md-6">
                        <InputField label="Email" type="email" required />
                    </div>
                    <div className="col-md-6">
                        <SelectField
                            label="Type of Recommendation"
                            options={[
                                { value: "diet_plan", label: "Diet Plan" },
                                { value: "exercise", label: "Exercise" },
                                { value: "both", label: "Both" },
                            ]}
                            required
                        />
                    </div>
                </div>

                {/* Dietary Habits and Doctor's Prescription */}
                <div className="row">
                    <div className="col-md-6">
                        <SelectField
                            label="Dietary Habit"
                            options={[
                                { value: "veg", label: "Vegetarian" },
                                { value: "nonveg", label: "Non-Vegetarian" },
                                { value: "vegan", label: "Vegan" },
                            ]}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <InputField label="Doctor's Prescription" type="file" />
                    </div>
                </div>

                {/* Diseases Section */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label">Diseases (if any)</label>
                            {diseases.map((disease, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Enter disease name"
                                    value={disease}
                                    onChange={(e) => handleChangeField("disease", index, e.target.value)}
                                />
                            ))}
                            <button
                                type="button"
                                className="btn btn-outline-secondary mt-2"
                                onClick={() => handleAddField("disease")}
                            >
                                + Add More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Allergies Section */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label">Allergies (if any)</label>
                            {allergies.map((allergy, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Enter allergy name"
                                    value={allergy}
                                    onChange={(e) => handleChangeField("allergy", index, e.target.value)}
                                />
                            ))}
                            <button
                                type="button"
                                className="btn btn-outline-secondary mt-2"
                                onClick={() => handleAddField("allergy")}
                            >
                                + Add More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Medications Section */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label">Medications (if any)</label>
                            {medications.map((medication, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Enter medication name"
                                    value={medication}
                                    onChange={(e) => handleChangeField("medication", index, e.target.value)}
                                />
                            ))}
                            <button
                                type="button"
                                className="btn btn-outline-secondary mt-2"
                                onClick={() => handleAddField("medication")}
                            >
                                + Add More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
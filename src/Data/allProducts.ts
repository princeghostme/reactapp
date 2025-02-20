import diabetes from "../assets/dibetseImg.webp";
import kneepain from "../assets/kneePain.png";
import pcod from "../assets/pcodImg.png";
import bloodPressure from "../assets/bloodpressure.png";
import antiageingAndglow from "../assets/antiageingAndglow.webp";
import weightLoss from "../assets/weightloss.png";

export interface AllProductProp {
    id: string;
    image?: string;
    heading?: string;
    subType?: string;
    description?: string;
    oldPrice?: number;
    newPrice?: number;
    keyPoints?: string[];
    benefits?: string[];
    targetAudience?: string;
    duration?: string;
    category: "newPlan" | "popularPlan";
    biteAndDietDetails?: {
        overview: string;
        keyFactors: string[];
        complications?: string[];
        approach: string[];
    };
}

const allProduct: AllProductProp[] = [
    {
        id: "plan-001",
        image: diabetes,
        heading: "Diabetes Management Plan",
        subType: "Diabetes Control & Wellness Plan",
        description: "A personalized meal plan designed to stabilize blood sugar levels and improve overall metabolic health.",
        oldPrice: 7999,
        newPrice: 5499,
        keyPoints: [
            "Optimize blood sugar control",
            "Enhance insulin response",
            "Support weight management",
            "Improve energy levels"
        ],
        benefits: [
            "Customized diet plan",
            "Regular dietitian consultation",
            "Access to exclusive recipes"
        ],
        targetAudience: "Individuals with diabetes or prediabetes",
        duration: "4 weeks",
        category: "newPlan",
        biteAndDietDetails: {
            overview: "Helps stabilize blood sugar and improve metabolic health.",
            keyFactors: [
                "Blood sugar regulation",
                "Improved insulin sensitivity",
                "Weight management"
            ],
            complications: [
                "High blood sugar",
                "Nerve damage",
                "Heart disease"
            ],
            approach: [
                "Balanced diet with controlled sugar intake",
                "Personalized nutrition plans",
                "Regular monitoring and diet adjustments"
            ]
        }
    },
    {
        id: "plan-002",
        image: kneepain,
        heading: "Knee Pain Relief Plan",
        subType: "Joint & Inflammation Management Diet",
        description: "A targeted diet strategy to reduce joint pain and inflammation with essential nutrients and anti-inflammatory foods.",
        oldPrice: 6499,
        newPrice: 4499,
        keyPoints: [
            "Strengthen joint health",
            "Reduce chronic inflammation",
            "Improve mobility and flexibility"
        ],
        benefits: [
            "Personalized meal guidance",
            "Physical activity suggestions",
            "Support for chronic pain relief"
        ],
        targetAudience: "People suffering from arthritis or joint pain",
        duration: "6 weeks",
        category: "newPlan",
        biteAndDietDetails: {
            overview: "Reduces joint pain and inflammation through targeted nutrition.",
            keyFactors: [
                "Joint flexibility",
                "Inflammation reduction",
                "Cartilage protection"
            ],
            complications: [
                "Osteoarthritis",
                "Rheumatoid arthritis",
                "Mobility issues"
            ],
            approach: [
                "Anti-inflammatory diet",
                "Essential vitamins & minerals",
                "Lifestyle modifications",
                "Physical activity guidance"
            ]
        }
    },
    {
        id: "plan-003",
        image: pcod,
        heading: "PCOS Management Plan",
        subType: "PCOS Hormonal Balance Diet",
        description: "A tailored nutrition program to regulate hormones, enhance fertility, and manage PCOS symptoms naturally.",
        oldPrice: 5999,
        newPrice: 3999,
        keyPoints: [
            "Balance hormone levels",
            "Improve metabolic health",
            "Support weight regulation",
            "Enhance skin and hair health"
        ],
        benefits: [
            "Diet modifications for PCOS",
            "Hormone regulation tips",
            "Fitness and wellness strategies"
        ],
        targetAudience: "Women struggling with PCOS and hormonal imbalance",
        duration: "8 weeks",
        category: "newPlan",
        biteAndDietDetails: {
            overview: "Designed to help manage PCOS symptoms and hormonal balance.",
            keyFactors: [
                "Hormonal balance",
                "Insulin resistance improvement",
                "Weight and skin health"
            ],
            complications: [
                "Irregular menstrual cycle",
                "Weight gain",
                "Acne & hair loss"
            ],
            approach: [
                "Balanced diet focusing on whole foods",
                "Low glycemic index meals",
                "Physical activity & lifestyle changes"
            ]
        }
    },
    {
        id: "plan-004",
        image: bloodPressure,
        heading: "Blood Pressure Control Plan",
        subType: "Hypertension Diet & Heart Health Plan",
        description: "A heart-friendly meal plan designed to lower high blood pressure and improve cardiovascular health naturally.",
        oldPrice: 3999,
        newPrice: 1599,
        keyPoints: [
            "Regulate blood pressure",
            "Reduce sodium intake",
            "Boost heart function",
            "Enhance vascular health"
        ],
        benefits: [
            "Custom dietary recommendations",
            "Lifestyle coaching",
            "Regular health tracking"
        ],
        targetAudience: "Individuals with hypertension or heart disease risk",
        duration: "5 weeks",
        category: "popularPlan",
        biteAndDietDetails: {
            overview: "Helps manage blood pressure naturally through diet and lifestyle changes.",
            keyFactors: [
                "Heart health",
                "Low sodium intake",
                "Blood circulation improvement"
            ],
            complications: [
                "Hypertension",
                "Heart disease",
                "Stroke risk"
            ],
            approach: [
                "DASH diet principles",
                "Balanced nutrient intake",
                "Hydration and stress management"
            ]
        }
    },
    {
        id: "plan-005",
        image: antiageingAndglow,
        heading: "Skin Glow & Anti-Aging Plan",
        subType: "Nutrient-Rich Skin Rejuvenation Diet",
        description: "A beauty-enhancing diet to nourish skin from within, reducing fine lines and promoting youthful radiance.",
        oldPrice: 3499,
        newPrice: 1299,
        keyPoints: [
            "Boost collagen production",
            "Improve skin elasticity",
            "Reduce wrinkles and fine lines",
            "Enhance natural glow"
        ],
        benefits: [
            "Skin-friendly meal plans",
            "Anti-aging skincare tips",
            "Hydration and detox guidance"
        ],
        targetAudience: "Anyone looking for youthful and glowing skin",
        duration: "6 weeks",
        category: "popularPlan",
        biteAndDietDetails: {
            overview: "A diet designed to enhance skin health and slow down aging.",
            keyFactors: [
                "Collagen production boost",
                "Hydration & nourishment",
                "Wrinkle reduction"
            ],
            complications: [
                "Premature aging",
                "Dry skin",
                "Wrinkles & fine lines"
            ],
            approach: [
                "Antioxidant-rich diet",
                "Hydration and detox support",
                "Essential vitamins and minerals"
            ]
        }
    }
];

export default allProduct;

import "./faqs.responsive.css";
import "./faqs.css";

import { faqs } from "../../../src/assets/utils/faqs"
import { FaqElement } from "../../components/faqElement/faqElement";

export const Faqs = () => {
    
    return (
        <section className="faqs-section">
            <div className="faqs-container">
                <h2>FAQ - PREGUNTAS FRECUENTES</h2>
                <div className="faqs-elements">
                    {faqs.map((item, index) => (
                        <FaqElement 
                            key={index} 
                            currentFaq={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

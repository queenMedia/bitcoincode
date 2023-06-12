import "./faqElement.css";

export const FaqElement = ({currentFaq}) => {
    
    return (
        <div className="faq-element">
            <div className="faq-content">
                <h3>{currentFaq.question}</h3>
                <p>{currentFaq.response}</p>
            </div>
        </div>
  );
};
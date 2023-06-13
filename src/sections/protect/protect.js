import "./protect.css";
import "./protect.responsive.css";
import bitgo from "../../assets/images/bit-go.png"
import norton from "../../assets/images/norton.png"
import securetrading from "../../assets/images/secure-trading.png"
import mcafee from "../../assets/images/mcafee.png"
export const Protect = (props) => {
  return (
   <section className="protect">
    <img src={bitgo} alt="protect" className="img" />  
    <img src={norton} alt="protect" className="img" />  
    <img src={securetrading} alt="protect" className="img" />  
    <img src={mcafee} alt="protect" className="img" />  
    <div className="money-content" >
        <p className="green-money">
            <span className="green-money-small">
                BID
            </span>
            US$11,790
        </p>
    </div>
    <div className="money-content" >
        <p className="black-money">
            <span className="black-money-small">
                BID
            </span>
            US$11,790
        </p>
    </div>
    </section>
  );
};

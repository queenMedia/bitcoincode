import "./footer.css";
import "./footer.responsive.css";

import Logo from "../../assets/bitcoin360ai/invest/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container">
            <div className="footer_image_container_main">
                <div className="footer_image_container">
                    <img src={Logo} alt="logo" className="footer_image" />
                </div>
            </div>
            <p className="footer_text">
                REGULATION & HIGH RISK INVESTMENT WARNING: Trading Forex, CFDs and Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. Please click here to read a full risk warning. Bitcoin 360AI is a technology, marketing and advertising service. Bitcoin 360AI does not gain or lose profits based on your trading results and operates as a technology, marketing and advertising service. Bitcoin 360AI is not a financial services firm and does not operate as a financial services firm and is only used as a marketing tool by third party advertisers and brokers to attract customers. Its your obligation to check and decide weather the broker you were connected to applies to all local rules and regulations and is regulated in your country jurisdiction and is allowed to receive customers from your location your are in, before you fund your account with the broker and start trading with it. please report Bitcoin 360AI (by clicking report abuse) if you find that the broker assigned to you is not regulated in your jurisdiction so we can cancel your account with Bitcoin 360AI.
            </p>
            <p className="footer_text">
                We are required to tell potential investors that our software's past performance does not necessarily predict future results, therefore you should not speculate with capital that you cannot afford to lose.
            </p>
            <p className="footer_text">
                USA REGULATION NOTICE: Option trading is not regulated within the United States. Bitcoin 360AI is not supervised or regulated by any financial agencies nor US agencies. Any unregulated trading activity by U.S. residents is considered unlawful. Bitcoin 360AI does not accept customers located within the United States or holding an American citizenship.
            </p>
            <p className="footer_text">
                SITE RISK DISCLOSURE: Bitcoin 360AI does not accept any liability for loss or damage as a result of reliance on the information contained within this website; this includes education material, price quotes and charts, and analysis. Please be aware of the risks associated with trading the financial markets; never invest more money than you can risk losing. The risks involved in trading Forex, CFDs and Cryptocurrencies may not be suitable for all investors. Bitcoin 360AI doesn't retain responsibility for any trading losses you might face as a result of using the data hosted on this site.
            </p>
            <p className="footer_text">
                LEGAL RESTRICTIONS: without limiting the undermentioned provisions, you understand that laws regarding financial contracts vary throughout the world, and it is your responsibility to make sure you properly comply with any law, regulation or guideline in your country of residence regarding the use of the Site. To avoid any doubt, the ability to access our Site does not necessarily mean that our Services and/or your activities through the Site are legal under the laws, regulations or directives relevant to your country of residence.
            </p>
            <p className="footer_text">
                Please note that Bitcoin 360AI receives advertising fees for directing users to open an account with the brokers/advertisers and/or for driving traffic to the advertiser website.
            </p>
            <p className="footer_text">
                If you feel you landed on this page by wrongdoings and/or misleading information of an advertisement, pre lander, email or any other promotions of a 3rd party website/promoter or by please report it by clicking REPORT ABUSE
            </p>
            <p className="footer_text">
                We have placed cookies on your computer to help improve your experience when visiting this website. You can change cookie settings on your computer at any time. Use of this website indicates your acceptance of this website's Privacy Policy.
            </p>
            <p className="footer_text">
                © 2023 All Rights Reserved - Bitcoin 360AI
            </p>











        </div>
    </footer>
  );
};
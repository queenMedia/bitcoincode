import "./footer.css";
import "./footer.responsive.css";

import Logo from "../../assets/bitcoin360ai/invest/img/logo.png";

import { useTranslation } from 'react-i18next';
export const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className="footer">
        <div className="footer_container">
            <div className="footer_image_container_main">
                <div className="footer_image_container">
                    <img src={Logo} alt="logo" className="footer_image" />
                </div>
            </div>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_one')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_two')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_three')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_four')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_five')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_six')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_seven')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_eight')}
            </p>
            <p className="footer_text">
                {t('footer.paragraph.paragraph_nine')}
            </p>











        </div>
    </footer>
  );
};
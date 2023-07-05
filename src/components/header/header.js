import "./header.css";
import "./header.responsive.css";
import logo from "../../../src/assets/bitcoin360ai/7222d243862daf533fdbbeabaeb8f8f9.png";
import { useTranslation } from 'react-i18next';

export const Header = (props) => {
  const { t } = useTranslation();

  return (
    <header className="header" onClick={()=> props.openModal()}>
      <div className="header_container" >
        <img src={logo} alt="logo" className="header_image" />
        <button className="header_button">{t('header.button')}</button>
      </div>
    </header>
  );
};

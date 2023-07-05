import "./form.css";
import "./form.responsive.css";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  phonecode,
  country,
  landing,
  idpass,
  whitePage,
  api,
  gram,
  production_api,
} from "../../config";
import { getIpAddress } from "./service";
import axios from "axios";
import { useTranslation } from 'react-i18next';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Form = (props) => {
  const { t } = useTranslation();
  const [first_name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAdddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await getIpAddress();
      setIpAdddress(response);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log({
        first_name,
        last_name,
        email,
        phone,
        ipAddress,
        location: window.location.href,
      });
      axios.post(production_api + "saveToDb", {
        first_name,
        last_name,
        email,
        phone,
      });
      gram(first_name, last_name, phone, ipAddress);
      const resp = await axios.post(production_api + "pushLead", {
        first_name,
        last_name,
        email,
        phone,
        ip: ipAddress,
        url: window.location.href,
      });
      setLoading(false);
      if (resp.data) {
        window.location.href = resp.data;
      } else {
        setErrorMessage(
          "por favor ingrese un correo electrónico y un número de teléfono válidos"
        );
      }
    } catch (error) {
      setLoading(false);
      setName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      console.log(error.message);
      setErrorMessage(
        "por favor ingrese un correo electrónico y un número de teléfono válidos"
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
       {!props.warning ?
            <button className="close_modal" type="button" onClick={()=> props.closeModal()}>x</button>
          : null}
      <h1 className="form_header">{t('form.title')} </h1>
      {loading ? (
        <PropagateLoader cssOverride={override} />
      ) : (
        <div className="body_form">
          <input
            placeholder={t('form.inputs.input_one')}
            className="form_input"
            value={first_name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder={t('form.inputs.input_two')}
            className="form_input"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder={t('form.inputs.input_three')}
            className="form_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-input-group">
            <span className="country">+{phonecode}</span>
            <input
              placeholder={t('form.inputs.input_four')}
              className="input-for-form-input-group"
              type="number"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <p
            style={{
              marginBottom: "5px",
              color: "red",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </p>
          <button type="submit" className="button_submit">
            {" "}
            {t('form.button')}
          </button>
        </div>
      )}
      {props.warning ?
      (
        <>
        <span className="warning" data-intgrtn-i18n="intgrtn-span-69">
        {t('form.warning.warning_one')}
        <a href="#" className="warning_link"> {t('form.warning.warning_two')}</a>
        {t('form.warning.warning_three')}
        <a href="#" className="warning_link">{t('form.warning.warning_four')} </a>
        <br/>
       {t('form.warning.warning_five')}
        <br/>
        {t('form.warning.warning_six')}
        <br/>
        {t('form.warning.warning_seven')}
      </span>
        </>
      ) : null}
      
    </form>
  );
};

import "./form.css";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { phonecode, country, landing, idpass, whitePage } from "../../config";
import { getIpAddress } from "./service";
import qs from "qs";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.get("tp_aff_sub"));
      const params = {
        idnombre: name,
        idapellidos: lastName,
        idphone: phoneNumber.replace(/\s/g, ""),
        idcorreo: email,
        phonecode: phonecode,
        country: country,
        source: `${window.location.href}`,
        landing: landing,
      };
      const url = window.location.href.replace(
        `${window.location.origin}/${landing}`,
        whitePage
      );
      const urlRedirect = `${url}&idpass=${idpass}&idnombre=${params.idnombre}&idapellidos=${params.idapellidos}&idphone=${params.idphone}&idcorreo=${params.idcorreo}&phonecode=${params.phonecode}&country=${params.country}&source=${window.location.host}&landing=${params.landing}`;
      console.log({ urlRedirect });
      window.location.href = urlRedirect;
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
      <h1 className="form-header">Crea una cuenta</h1>
      {loading ? (
        <PropagateLoader cssOverride={override} />
      ) : (
        <div className="body-form">
          <input
            placeholder="Nombre"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Apellidos"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Correo Electrónico"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-input-group">
            <span className="country">+{phonecode}</span>
            <input
              placeholder="Número de Teléfono"
              className="input-for-form-input-group"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <p
            style={{
              "margin-bottom": "5px",
              color: "red",
              fontSize: "12px",
              "text-align": "center",
            }}
          >
            {errorMessage}
          </p>
          <button type="submit" className="button-submit">
            {" "}
            Registrar agora
          </button>
        </div>
      )}
      <small className="warning">
        *Al enviar, confirmas que has leído y aceptado el <span>política de privacidad</span>{" "}
        y <br/><span> términos y  condiciones.</span><br/>  **Al enviar este formulario, acepto recibir
        todo el material de marketing por <br/>  correo electrónico, SMS y teléfono.<br/> 
        ***Todas las operaciones conllevan riesgos.<br/>  ****Regístrese solo si tiene
        18 años o más.
      </small>
    </form>
  );
};

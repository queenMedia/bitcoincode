import "./form.css";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { phonecode, country, landing, idpass, whitePage } from "../../config";

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
      const url = window.location.href.replace(`${window.location.origin}/${landing}`,whitePage);
      const urlRedirect = `${url}&idpass=${idpass}&idnombre=${params.idnombre}&idapellidos=${params.idapellidos}&idphone=${params.idphone}&idcorreo=${params.idcorreo}&phonecode=${params.phonecode}&country=${params.country}&source=${window.location.host}&landing=${params.landing}`;
      console.log({urlRedirect})
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
      <h1 className="form-header">
        DISPONIBILIDAD LIMITADA{" "}
        <span className="remark-yellow">
          Asesor
          <br />
          Gratuito
        </span>{" "}
        NO ESPERE
      </h1>
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
            <span className="country"> +51</span>
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
            COMIENCE A OPERAR
          </button>
        </div>
      )}
      <small className="warning">
        Al completar este formulario, entiendo que seré redirigido a un socio de
        trading de terceros y que se compartirá mi información personal.
      </small>
    </form>
  );
};

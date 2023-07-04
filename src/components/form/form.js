import "./form.css";
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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Form = () => {
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
      <h1 className="form-header">Crea una cuenta</h1>
      {loading ? (
        <PropagateLoader cssOverride={override} />
      ) : (
        <div className="body-form">
          <input
            placeholder="Nombre"
            className="form-input"
            value={first_name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Apellidos"
            className="form-input"
            value={last_name}
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
          <button type="submit" className="button-submit">
            {" "}
            Regístrate ahora
          </button>
        </div>
      )}
      <small className="warning">
        *Al enviar, confirmas que has leído y aceptado el{" "}
        <span>política de privacidad</span> y <br />
        <span> términos y condiciones.</span>
        <br /> **Al enviar este formulario, acepto recibir todo el material de
        marketing por <br /> correo electrónico, SMS y teléfono.
        <br />
        ***Todas las operaciones conllevan riesgos.
        <br /> ****Regístrese solo si tiene 18 años o más.
      </small>
    </form>
  );
};

import "./form.css";
import axios from "axios";
import { useState, useEffect } from "react";
export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIPAddress(response.data.ip);
        console.log(response.data.ip);
      } catch (error) {
        console.log("Error fetching IP address:", error);
      }
    };

    fetchIPAddress();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("ipAddress", ipAddress);
    console.log("url", window.location.origin + window.location.pathname + window.location.search);

    setName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
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
      <div className="body-form">
        <input placeholder="Nombre" className="form-input" />
        <input placeholder="Apellidos" className="form-input" />
        <input placeholder="Correo Electrónico" className="form-input" />
        <div className="form-input-group">
          <span className="country"> +51</span>
          <input
            placeholder="Número de Teléfono"
            className="input-for-form-input-group"
          />
        </div>
        <button type="submit" className="button-submit">
          {" "}
          COMIENCE A OPERAR
        </button>
      </div>
      <small className="warning">
        Al completar este formulario, entiendo que seré redirigido a un socio de
        trading de terceros y que se compartirá mi información personal.
      </small>
    </form>
  );
};

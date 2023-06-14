import "./form.css";
import axios from "axios";
import { useState, useEffect, CSSProperties } from "react";

import swal from 'sweetalert';
import { sendLead, isValidUrl } from "./service";

import PropagateLoader from "react-spinners/PropagateLoader";
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
  const [ipAddress, setIPAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !phoneNumber || !ipAddress) {
      setErrorMessage("por favor complete todos los campos");
      return;
    }
    setLoading(true);

    console.log({ name, lastName, email, phoneNumber, ipAddress });
    const url =
      window.location.origin +
      window.location.pathname +
      window.location.search;

    let data = {
      first_name: name,
      last_name: lastName,
      email: email,
      phone: phoneNumber.replace(/\s/g, ""),
      ip: ipAddress,
      url: url,
      token: "9e4f669c32cdc317998cb41e5375cffb",
    };

    const params = {
      idnombre: data.first_name,
      idapellidos: data.last_name,
      idphone: data.phone,
      idcorreo: data.email,
      phonecode: '51',
      country: 'PE',
      source: `${window.location.href}`,
      landing: "Invest in Bitcoin Code"
    };

    try {

      if (window.location.search.includes("aff_sub")) {
        const url = window.location.href.replace(`${window.location.origin}/`, "https://www.martinviz.com/article/martin-vizcarra-asegura-dejar-la-presidencia-de-peru-con-la-frente-en-alto/thanku/");
        const urlRedirect = `${url}&idpass=123qwe321&idnombre=${params.idnombre}&idapellidos=${params.idapellidos}&idphone=${params.idphone}&idcorreo=${params.idcorreo}&phonecode=${params.phonecode}&country=${params.country}&source=${window.location.host}&landing=Invest in Amazon`;
        window.location.href = urlRedirect;
      } else {
        await sendLead({ values: params })
        .then(data => {
            if(data.result == 1) {
                swal("", "¡Éxito! pronto nos pondremos en contacto con usted.", "success");
              
                if (data.autoLogin && isValidUrl(data.autoLogin)) {
                  setTimeout(() => { window.location.href = data.autoLogin; }, 4000);
                }

                setName("");
                setLastName("");
                setEmail("");
                setPhoneNumber("");
            } else {
                swal("", "Vaya, algo salió mal, inténtalo de nuevo.", "error");
            }
            setLoading(false);
        })
        .catch(error => {
          swal("", "Vaya, algo salió mal, inténtalo de nuevo.", "error");
          setLoading(false);
        });
      }  
      
    } catch (error) {
      setLoading(false);
      setName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      console.log(error.message);
      setErrorMessage("por favor ingrese un correo electrónico y un número de teléfono válidos");
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
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Apellidos"
            className="form-input"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Correo Electrónico"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-input-group">
            <span className="country"> +51</span>
            <input
              placeholder="Número de Teléfono"
              className="input-for-form-input-group"
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <p style={{ "margin-bottom": "5px" , "color":"red" , "fontSize" : "12px" , "text-align":"center" }}>{errorMessage}</p>
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

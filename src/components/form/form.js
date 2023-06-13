import "./form.css";
export const Form = (props) => {
  return (
    <form className="form">
        <h1 className="form-header">
            DISPONIBILIDAD LIMITADA <span className="remark-yellow">Asesor<br/>
            Gratuito</span> NO ESPERE
        </h1>
        <div className="body-form">
          <input placeholder="Nombre" className="form-input" />
          <input placeholder="Apellidos" className="form-input" />
          <input placeholder="Correo Electrónico" className="form-input" />
          <div className="form-input-group">
              <span className="country"> +52</span>
              <input placeholder="Número de Teléfono" className="input-for-form-input-group" />
          </div>
          <button type="submit" className="button-submit"> COMIENCE A OPERAR</button>
        </div>
        <small className="warning">Al completar este formulario, entiendo que seré redirigido a un socio de trading de terceros y que se compartirá mi información personal.</small>
    </form>
  );
};

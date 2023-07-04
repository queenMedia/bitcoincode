import axios from "axios";

export const sendLead = async ({ values }) => {
  const request = await fetch(
    `https://ceomarketing-group.com/api-rest/jon-brave/`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...values }),
    }
  );
  const response = await request.json();

  return response;
};

export const isValidUrl = (url) => {
  let urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator

  return !!urlPattern.test(url);
};

export const getIpAddress = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res.data.ip;
};
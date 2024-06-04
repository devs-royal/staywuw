import axios from "axios";

const isDevelopment = process.env.REACT_APP_EMAIL_DEV === "true";

let API_ENDPOINT;

if (isDevelopment) {
  API_ENDPOINT = "https://api.sandboxmexico.com/confirmation/start";
} else {
  API_ENDPOINT = "https://api.royalvacationsmexico.com/confirmation/start";
}

export default function ConfirmationEmail(props) {
  const { requestBody } = props;

  const axiosEmail = async () => {
    try {
      const response = await axios.post(API_ENDPOINT, requestBody);
    } catch (error) {
      console.error(error);
    }
  };

  axiosEmail();

  return null;
}

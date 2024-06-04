import axios from 'axios';

const sendToSlack = async (message, errorDetails) => {
  try {
    await axios.post("https://sandboxmexico.com/logger/SendToSlackDeva.php", {
      text: message,
      attachments: [
        {
          text: JSON.stringify(errorDetails, null, 2),
          color: "danger"
        }
      ]
    });
  } catch (err) {
    console.error("Failed to send error to Slack:", err);
  }
};

export default sendToSlack;

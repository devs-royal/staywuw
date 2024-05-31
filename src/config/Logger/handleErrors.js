import axios from "axios";

// CONSTRUCTION JSON SEND ERROR
export function handleErrorsAxios(error) {
  try {
    const mexicoCityTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Mexico_City",
    });
    const pageUrl = window.location.href;
    const payload = error.config.data || null;

    // API REST BACK
    if (error && error.response) {
      const title = " ERROR DE API 3312 ";

      const errorInfo = {
        "Codigo de axios": error.code,
        "Status del error 😭": error.response ? error.response.status : "N/A",
        pageUrl: pageUrl,
        "Endpoint Back ❌": error.config.url,
        Payload: payload,
        Response: error.response ? error.response.data : null,
        "Fecha y hora del error": mexicoCityTime,
      };

      sendLoggerFront(title, errorInfo);
    }
  } catch (err) {
    console.error("Error al enviar el error a Slack:", err);
  }
}

// ERROR COMPONENT REACT FRONT
export function handleErrorsComponent(errorReact) {
  try {
    const mexicoCityTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Mexico_City",
    });
    const pageUrl = window.location.href;

    if (errorReact) {
      const title = " :confused_dog: TENEMOS UN 3312 :alert: ";

      const errorInfo = {
        pageUrl: pageUrl,
        "Fecha y hora del error": mexicoCityTime,
        error: errorReact.componentStack,
      };

      sendLoggerFront(title, errorInfo);
    }
  } catch (err) {
    console.error("Error al enviar el error a Slack:", err);
  }
}

// ENDPOINT
// export function sendLoggerFront(title, errorInfo) {
//   const slackMessage = {
//     text: title,
//     channel: "#logs-front",
//     attachments: [
//       {
//         color: "danger",
//         text: JSON.stringify(errorInfo, null, 2),
//       },
//     ],
//   };

// }

// export function sendLoggerFront(title, errorInfo) {
//   const slackMessage = {
//     text: title,
//     channel: "#logs-front",
//     attachments: [
//       {
//         color: "danger",
//         text: JSON.stringify(errorInfo, null, 2),
//       },
//     ],
//   };

//   // Enviar la solicitud HTTP POST al servidor PHP
//   fetch('/sendToSlack.php', {
//     method: 'POST',
//     body: JSON.stringify(slackMessage),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }



export function sendLoggerFront(title, errorInfo) {
  // VALID DEVELOP 
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const phpLoggerEndpoint = process.env.REACT_APP_DEV_ERROR === 'true'
    ? 'https://sandboxmexico.com/logger/SendToSlackDev.php'
    : 'https://www.royalvacationsmexico.com/logger/SendToSlack.php';

  const data = {
    text: title,
    channel: "#logs-front",
    attachments: [
      {
        color: "danger",
        text: JSON.stringify(errorInfo, null, 2),
      },
    ],
  };

  axios.post(phpLoggerEndpoint, data)
    .then((response) => {
      console.log('Registro de error enviado a Slack con éxito:', response.data);
    })
    .catch((error) => {
      console.error('Error al enviar registro de error a Slack:', error);
    });
}


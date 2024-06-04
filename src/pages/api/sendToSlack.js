// pages/api/sendToSlack.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { title, errorType, errorDetails } = req.body;

  if (!title || !errorType || !errorDetails) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const message = {
    text: `${title}: ${errorType}`,
    attachments: [
      {
        text: `\`\`\`${JSON.stringify(errorDetails, null, 2)}\`\`\``,
        color: 'danger',
      },
    ],
  };

  try {
    const response = await axios.post('https://hooks.slack.com/services/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', message, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      res.status(200).json({ success: true, message: 'Message sent to Slack successfully' });
    } else {
      res.status(response.status).json({ success: false, message: 'Failed to send message to Slack' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message to Slack', error: error.message });
  }
}

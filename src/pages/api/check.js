
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}

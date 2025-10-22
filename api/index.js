export default async function handler(req, res) {
  const msg = req.query.msg || "sin_mensaje";

  // URL de tu Firebase Realtime Database (.json al final)
  const firebaseURL = "https://tesis-rutas-default-rtdb.firebaseio.com";

  // Objeto a enviar
  const data = {
    mensaje: msg,
    fecha: new Date().toISOString()
  };

  // Enviar a Firebase
  const response = await fetch(firebaseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  res.status(200).json({ status: "OK", firebase_response: result });
}

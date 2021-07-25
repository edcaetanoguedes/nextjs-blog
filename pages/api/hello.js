//req = HTTP incoming message , res = HTTP server response
export default function handler(req, res) {
  console.debug("api/hello query: ", req.query);
  console.debug("api/hello cookies: ", req.cockies);
  console.debug("api/hello body: ", req.body);

  res.status(200).json({ text: "Hello!" })
}
const express =require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("server is running online!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server running on port ${PORT} ');
});

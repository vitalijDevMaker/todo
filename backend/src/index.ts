import app from "./app.ts";

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server start on port " + "http://localhost:" + PORT);
});

import { app } from "./app";

export const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`💡 Running app locally on port: ${PORT}`);
});

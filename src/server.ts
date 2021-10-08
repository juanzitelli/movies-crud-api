import { app } from "./app";
import { connect } from "./data/db/mongodb";

export const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connect();
  console.log(`💡 Running app locally on port: ${PORT}`);
});

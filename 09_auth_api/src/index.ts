import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3000;
const app = new AppModule().getApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
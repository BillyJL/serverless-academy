import { AppModule } from "./app.module";
import { appConfig } from "./config";

const { port } = appConfig;
const app = new AppModule().getApp();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

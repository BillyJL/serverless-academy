import { UserStatisticModule } from "./usersStatistics/userStatistic.module.js";

export class AppModule {
    run() {
        new UserStatisticModule().run();
    }

}

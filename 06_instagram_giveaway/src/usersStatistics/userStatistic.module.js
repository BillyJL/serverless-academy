import { UserStatisticController } from "./userStatistic.controller.js";
import { getDataArray } from "./utils/getDataArray.js";

export class UserStatisticModule {
    async run() {
        const dataArray = await getDataArray();

        const userStatistic = new UserStatisticController(dataArray);
    
        const uniqueUsers = userStatistic.countUniqueUsers();
        const usersInAllFiles = userStatistic.countUsersInAllFiles();
        const usersInAtLeastTenFiles = userStatistic.countUsersInAtLeastTenFiles();
    
        console.log(`Unique Users: ${uniqueUsers}`);
        console.log(`Users in All Files: ${usersInAllFiles}`);
        console.log(`Users in At Least Ten Files: ${usersInAtLeastTenFiles}`);
        console.log(`Elapsed Time: ${elapsedTime}ms`);
    }
}
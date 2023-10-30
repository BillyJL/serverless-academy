import { UserStatisticsService } from "./userStatistics.service.js";

export class UserStatisticController {
    constructor(dataArray) {
        this.dataArray = dataArray;
        this.userStatisticService = new UserStatisticsService();
    }

    countUniqueUsers() {
        return this.userStatisticService.countUniqueUsers(this.dataArray);
    }

    countUsersInAllFiles() {
        return this.userStatisticService.countUsersInAllFiles(this.dataArray);
    }

    countUsersInAtLeastTenFiles() {
        return this.userStatisticService.countUsersInAtLeastTenFiles(this.dataArray);
    }
}
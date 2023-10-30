export class UserStatisticsService {
    countUniqueUsers(dataArray) {
        const allUsers = new Set();
    
        dataArray.forEach((fileData) => {
            fileData.forEach((username) => {
                allUsers.add(username.trim());
            });
        });
    
        return allUsers.size;
    }

    countUsersInAllFiles(dataArray) {
        const usersInAllFiles = new Set(dataArray[0]);
    
        for (let i = 1; i < dataArray.length; i++) {
            const currentFileUsers = new Set(dataArray[i]);
            usersInAllFiles.forEach((username) => {
                if (!currentFileUsers.has(username)) {
                    usersInAllFiles.delete(username);
                }
            });
        }
    
        return usersInAllFiles.size;
    }

    countUsersInAtLeastTenFiles(dataArray) {
        const userCountMap = new Map();
    
        dataArray.forEach((fileData) => {
            fileData.forEach((username) => {
                const trimmedUsername = username.trim();
                userCountMap.set(
                    trimmedUsername,
                    (userCountMap.get(trimmedUsername) || 0) + 1
                );
            });
        });
    
        let count = 0;
        userCountMap.forEach((value) => {
            if (value >= 10) {
                count++;
            }
        });
    
        return count;
    }
}
export class DataHandlerService {
    transformData(inputData) {
        const transformedData = {};

        inputData.forEach((record) => {
            const userId = record.user._id;
            const userName = record.user.name;
            const vacationPeriod = {
                startDate: record.startDate,
                endDate: record.endDate,
            };

            if (!transformedData[userId]) {
                transformedData[userId] = {
                    userId,
                    userName,
                    vacations: [vacationPeriod],
                };
            } else {
                transformedData[userId].vacations.push(vacationPeriod);
            }
        });

        return Object.values(transformedData);
    }
}

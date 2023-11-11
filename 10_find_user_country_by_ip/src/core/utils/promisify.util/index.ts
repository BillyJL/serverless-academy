import { Reject, Resolve } from "./types";

export const promisify = <Type>(
    callback: (resolve: Resolve<Type>, reject: Reject) => void
): Promise<Type> => {
    return new Promise((resolve, reject) => {
        callback(resolve, reject);
    });
};

export * from './types';

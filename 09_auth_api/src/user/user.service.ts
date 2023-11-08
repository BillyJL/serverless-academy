import { UserModel } from "./user.model";

export class UserService {
    private userModel: UserModel = new UserModel();

    public async getUserById(userId: string) {
        const user = await this.userModel.getUserById(userId);
        const email = user.rows[0].email;
        return {
            id: userId,
            email,
        };
    }

    public async getUserByEmail(email: string) {
        const user = await this.userModel.getUserByEmail(email);
        return user.rows[0];
    }

    public async addUser(
        id: string,
        email: string,
        password: string,
        refreshToken: string
    ) {
        await this.userModel.addUser(id, email, password, refreshToken);
    }
}

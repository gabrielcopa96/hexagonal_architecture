import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { ForAuthenticating } from "../ports/drivers";
import { AuthenticatedUser, User } from "./schemas";

export class Api implements ForAuthenticating {

    constructor(
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQuerier: ForRepoQuerying
    ) { }

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);

        const permissions = await this.controlAuthenticator.getPermissions(email, password);

        const user = await this.repoQuerier.getUser(email);

        const result = {
            ...user,
            ...authDetails,
            ...permissions
        }

        console.log("Login", result);

        return result;
    }

    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user, password);

        const authDetails = await this.controlAuthenticator.getAuthDetails(newUser.email, password);

        const permissions = await this.controlAuthenticator.getPermissions(newUser.email, password);

        const result = {
            ...newUser,
            ...authDetails,
            ...permissions
        }

        console.log("Register: ", result);

        return result;
    }
}
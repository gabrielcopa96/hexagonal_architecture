import { Api } from "../../app/api";
import { AuthenticatedUser, User } from "../../app/schemas";
import { ForAuthenticating } from "../../ports/drivers";

export class AuthenticatorProxyAdapter implements ForAuthenticating {

    constructor(private readonly api: Api) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.api.login(email, password);
    }

    async register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.api.register(user, password);
    }
    
}
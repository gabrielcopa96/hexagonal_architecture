import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
    token: "1231490jsd0f",
    refreshToken: "1231490dts1d"
}

const permissionsMock: Permissions = {
    admin: true,
    user: false
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {

    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }

}
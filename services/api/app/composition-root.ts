import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { Api } from "./api";

const compositionMock = () => {

    const controlAuthenticatorMock = new ControlAuthenticatorStub();

    const repoQuerierStub = new RepoQuerierStub();

    const apiMock = new Api(controlAuthenticatorMock, repoQuerierStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(apiMock);

    return {
        authenticatorProxyAdapter
    }
}

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
    name: "John Doe",
    email: "john@gmail.com"
}

authenticatorProxyAdapter.login("john@mail.com", '1234545');
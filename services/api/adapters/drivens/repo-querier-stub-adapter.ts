import { ForRepoQuerying } from "../../ports/drivens";
import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";

const userMock: RepoUser = {
    id: "123",
    name: "John Doe",
    email: "john@mail.com"
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}
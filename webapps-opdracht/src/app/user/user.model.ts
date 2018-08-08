export class User {
    _id: String;
    _username: String;
    _password: String;

    constructor(id: String, username: String, password: String) {
        this._id = id;
        this._username = username;
        this._password = password;
    }
}

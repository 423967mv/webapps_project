export class Image {
    private _id: Number;
    private _gallery = String;
    private _description = String;
    private _url = String;

    constructor(id: Number, gallery = String, description = String, url = String) {
        this._id = id;
        this._gallery = gallery;
        this._description = description;
        this._url = url;
    }
}

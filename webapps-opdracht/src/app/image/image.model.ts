export class Image {
    _id: String;
    _title: String;
    _gallery: String;
    _description: String;
    _url: String;

    constructor(id: String, title: String, gallery: String, description: String, url: String) {
        this._id = id;
        this._title = title;
        this._gallery = gallery;
        this._description = description;
        this._url = url;
    }
}

export class Image {
    _title: String;
    _gallery: String;
    _description: String;
    _url: String;

    constructor(title: String, gallery: String, description: String, url: String) {
        this._title = title;
        this._gallery = gallery;
        this._description = description;
        this._url = url;
    }
}

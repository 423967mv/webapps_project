export class Image {
     _id: Number;
     _gallery: String;
     _description: String;
     _url: String;

    constructor(id: Number, gallery: String, description: String, url: String) {
        this._id = id;
        this._gallery = gallery;
        this._description = description;
        this._url = url;
    }
}

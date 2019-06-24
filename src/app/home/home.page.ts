import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Base64} from '@ionic-native/base64/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    myPhoto = '';

    constructor(
        private base64: Base64,
        private camera: Camera
    ) {
    }

    snapshot() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        });
    }

}

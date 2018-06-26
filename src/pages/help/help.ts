import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Loading, LoadingController} from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})

export class HelpPage {
    video: any = {
        url: 'https://www.youtube.com/embed/SW1I5sfWnsg',
        title: 'Vídeo Institucional',
        description: 'Vídeo institucional sobre a realização e como se comportar durante a visita.'
    };

    trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                private domSanitizer: DomSanitizer,
                public navParams: NavParams) {}

    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        this.loading.present();
    }

    handleIFrameLoadEvent(): void {
        this.loading.dismiss();
    }
}

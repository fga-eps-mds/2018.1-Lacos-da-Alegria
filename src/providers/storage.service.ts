import { Injectable } from '@angular/core';
import { LocalUser } from '../models/local-user';

@Injectable()

export class StorageService {

    setLocalUser(localUser: LocalUser){
        if (localUser == null) {
            localStorage.removeItem("localUser");
        } else {
            localStorage.setItem("localUser", JSON.stringify(localUser));
        }
    }

    getLocalUser(): LocalUser{
        let localUser = localStorage.getItem("localUser");

        if(localUser){
            return JSON.parse(localUser);
        } else {
            return null;
        }
    }

    getLocalPhoto() {
        let photo = localStorage.getItem("photo");

        if (photo == null) {
            return null;
        } else {
            return photo;
        }
    }

    setLocalPhoto(photo: string) {
        localStorage.setItem("photo", photo);
    }

    clearPhoto(){
        localStorage.removeItem("photo");
    }

}

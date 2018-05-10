import { LocalUser } from './../models/local-user';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    
    getLocalUser(): LocalUser {
        let localUser = localStorage.getItem("localUser");
        if ( localUser == null ) {
        return null;
        } else {
        return JSON.parse(localUser);
        }
    }

    setLocalUser(localUser: LocalUser) {
        if (localUser == null) {
        localStorage.removeItem("localUser");
        } else {
        localStorage.setItem("localUser", JSON.stringify(localUser));
        }
    }
}
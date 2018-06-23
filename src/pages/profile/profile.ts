import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestUserProvider } from '../../providers/rest-user';

import { LoginPage } from '../login/login';
import { StorageService } from '../../providers/storage.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfValidation } from '../../validators/cpf-validation';
import { EmailValidation } from '../../validators/email-validation';
import { User } from '../../models/user';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;
  edit: boolean = false;
  changePassword: boolean = false;
  image: any;

  errorUsername: boolean = false;
  errorPassword: boolean = false;
  errorCheckPasswords: boolean = false;
  errorEmail: boolean = false;
  errorWhatsapp: boolean = false;
  errorName: boolean = false;
  errorCpf: boolean = false;
  errorAddress: boolean = false;
  errorDdd: boolean = false;

  id: any;
  editProfileForm: FormGroup;
  editPasswordForm: FormGroup;

	constructor(
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public params: NavParams,
    public restProvider: RestUserProvider,
    private camera: Camera,
    private domSanitizer: DomSanitizer,
    public storage: StorageService) {
      this.editProfileForm = this.formBuilder.group({
        username: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$'), Validators.required])],
        email: ['', Validators.compose([Validators.required, EmailValidation.isValid])],
        whatsapp: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern('[0-9]*')])],
        name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+([ ]?[a-zA-Z])*$'), Validators.required])],
        cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), CpfValidation.isValid])],
        birth: ['', Validators.compose([Validators.required])],
        address: ['',Validators.compose([Validators.minLength(5), Validators.maxLength(80), Validators.required]) ],
        region:['', Validators.required],
        preference:['', Validators.required],
        howDidYouKnow: ['', Validators.required],
        ddd: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('((([1,4,6,8,9][1-9])|(2[1,2,4,7,8])|(3[1-8])|(4[1-9])|(5[1-5])|(7[1,3,4,5,7,9])))')])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(255)])],
        genre:['', Validators.required],
        want_ongs:['', Validators.required],
        role:['',Validators.required],
        inscrito:['',Validators.required]
      });

      this.editPasswordForm = this.formBuilder.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
    this.id = this.restProvider.getId();
    this.image = this.storage.getLocalPhoto();
    this.restProvider.getUser(this.id).then ((data) => {
      this.user= data;
    }, (err) => {
      console.log(err);
    })
  }

  checkPasswords(){
    if(this.editPasswordForm.value.password != this.editPasswordForm.value.confirmPassword && this.editPasswordForm.value.confirmPassword){
      this.errorCheckPasswords = true;
    } else {
      this.errorCheckPasswords = false;
    }
  }

  getForm(): User{
    let aux: string;

    if(this.changePassword){
      aux = this.editPasswordForm.value.password;
    } else {
      aux = this.editProfileForm.value.password;
    }
    let user: User = {
      username: this.editProfileForm.value.username,
      password: aux,
      email: this.editProfileForm.value.email,
      whatsapp: this.editProfileForm.value.whatsapp,
      name: this.editProfileForm.value.name,
      cpf: this.editProfileForm.value.cpf,
      birth: this.editProfileForm.value.birth,
      address: this.editProfileForm.value.address,
      region: this.editProfileForm.value.region,
      preference: this.editProfileForm.value.preference,
      howDidYouKnow: this.editProfileForm.value.howDidYouKnow,
      ddd: this.editProfileForm.value.ddd,
      genre: this.editProfileForm.value.genre,
      want_ongs: this.editProfileForm.value.want_ongs,
      role: this.editProfileForm.value.role,
      inscrito: this.editProfileForm.value.inscrito
    }

    return user;
  }

  showError(data, id: string){
    switch (id) {
      case 'us':
        if (!data && this.editProfileForm.value.username) {
          this.errorUsername = true;
        } else {
          this.errorUsername = false;
        }
        break;
      case 'pw':
        if (!data && this.editPasswordForm.value.password) {
          this.errorPassword = true;
        } else {
          this.errorPassword = false;
        }
        break;
      case 'em':
        if (!data && this.editProfileForm.value.email) {
          this.errorEmail = true;
        } else {
          this.errorEmail = false;
        }
        break;
      case 'wa':
        if (!data && this.editProfileForm.value.whatsapp) {
          this.errorWhatsapp = true;
        } else {
          this.errorWhatsapp = false;
        }
        break;
      case 'nm':
        if (!data && this.editProfileForm.value.name) {
          this.errorName = true;
        } else {
          this.errorName = false;
        }
        break;
      case 'cpf':
        if (!data && this.editProfileForm.value.cpf) {
          this.errorCpf = true;
        } else {
          this.errorCpf = false;
        }
        break;
      case 'ad':
        if (!data && this.editProfileForm.value.address) {
          this.errorAddress = true;
        } else {
          this.errorAddress = false;
        }
        break;
      case 'ddd':
        if (!data && this.editProfileForm.value.ddd) {
          this.errorDdd = true;
        } else {
          this.errorDdd = false;
        }
      default:
        break;
    }

  }

  showBirth(data){
    data = data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4);

    return data;
  }

  editProfile(){
    this.edit=true;
    this.changePassword=false;
    this.editProfileForm.patchValue({
      genre: this.user.genre,
      password: this.user.password,
      birth: this.user.birth,
      username: this.user.username,
      name: this.user.name,
      email: this.user.email,
      whatsapp: this.user.whatsapp,
      cpf: this.user.cpf,
      address: this.user.address,
      ddd: this.user.ddd,
      want_ongs: this.user.want_ongs,
      region: this.user.region,
      preference: this.user.preference,
      howDidYouKnow: this.user.howDidYouKnow,
      role: this.user.role,
      inscrito: this.user.inscrito
    })
  }

  confirmEditPassword(){
    this.restProvider.editPassword(this.restProvider.getId(), this.getForm())
      .subscribe((data)=>{
        this.changePassword= false
        console.log('data = ',data);
        let alert2 = this.alertCtrl.create({
          title: 'Tudo certo!',
          subTitle: 'Nova senha alterada com sucesso',
          buttons: ['Ok']
        });
        alert2.present();
      }, (err)=>{
        if(err.error.error == "A senha nova coincide com a senha antiga"){
          console.log("deeeu")
          let alert = this.alertCtrl.create({
            title: 'Ops!',
            subTitle: 'Nova senha igual à senha antiga',
            buttons: ['Ok']
          });
          alert.present();
        }
      })
  }

  editPassword(){
    this.edit = false;
    this.changePassword = true;

    this.editPasswordForm.patchValue({
      password: '',
      confirmPassword: ''
    })
  }

  confirmEdit(){
    this.restProvider.editProfile( this.restProvider.getId(), this.getForm())
      .subscribe((data:any) => {
        this.user = data;
        this.edit = false;
        console.log('put padrao else = ',data);
      }, (error)=>{
        this.edit = false;
        console.log('Erro put else = ', error);
      })
  }

  showCpf(data){
    data = (data.substr(0,3) + '.' + data.substr(3,3) + '.' +
    data.substr(6,3) + '-' + data.substr(9,2));

    return data;
  }

  getUser(id) {
    this.restProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log(this.user);
    });
  }

  confirmDelete(){
    const prompt = this.alertCtrl.create({
      title: 'Deseja realmente excluir a conta?',
      message: "Após a conta ser excluída, não poderá ser recuperada.",
      inputs: [
        {
          name: 'password',
          placeholder: 'Senha',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log('Saved clicked');
            console.log("Senha  = ", data);
            this.restProvider.deleteUser(this.id, data)
              .then(response => {
                this.storage.clearLocalUser();
                console.log(response);
                this.navCtrl.push(LoginPage);
              }, error => {
                console.log(error.error);

                const alert = this.alertCtrl.create({
                  title: 'Não foi possível excluir a conta',
                  subTitle: 'As senhas não coincidem',
                  buttons: ['OK']
                });
                alert.present();
              })
          }
        }
      ]
    });
    prompt.present();
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      targetWidth: 200,
      targetHeight: 200,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.storage.setLocalPhoto(this.image);
    }, (err) => {
        console.log(err);
      });
  }

  openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 200,
      targetHeight: 200,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions)
      .then(file_uri =>{
        this.image = file_uri;
        this.storage.setLocalPhoto(this.image);        
      }, err => console.log(err));
  }

}

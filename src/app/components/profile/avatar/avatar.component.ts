import { OnInit, Component, ViewChild } from '@angular/core';

import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';

import { MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { ProfileService } from '../profile.service';

import Helpers from '../../../tools/helpers';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: [ './avatar.component.scss' ]
})
export class AvatarComponent implements OnInit {
  @ViewChild('cropper') cropper: ImageCropperComponent;
  subscriptions: Subscription[] = [];
  error: string;
  imageMaxSize = 10;
  loading = false;
  cropperSettings: CropperSettings;
  data: any;
  croppedImg: any;
  number: number;
  isShow = false;
  hidde = false;
  loadingImg: boolean;

  constructor(private profileService: ProfileService,
              private snackBar: MatSnackBar) {
    this.loading = false;
    this.error = '';

    this.cropperSettings = new CropperSettings();

    this.cropperSettings.canvasHeight = 400;
    this.cropperSettings.croppedWidth = 140;
    this.cropperSettings.croppedHeight = 140;
    this.cropperSettings.noFileInput = true;

    this.data = {};
  }

  ngOnInit() {
    this.loadingImg = true;
    this.profileService.notifyOther({option: 'avatar', value: 'Сменить аватар'});
    this.profileService.getAvatar()
      .subscribe(img => {
        this.loadingImg = false;
        if (img) {
          this.hidde = false;
        } else {
          this.hidde = true;
        }
        this.croppedImg = `https://expressfromus.com${img.cropped_image_url}`;
      });
  }

  show() {
    this.isShow = !this.isShow;
    this.hidde = true;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate() {
    this.number = this.getRandomInt(1, 50);
  }

  onChange($event) {
    this.loading = true;
    this.error = '';

    const files = $event.srcElement.files;
    if (!files.length) {
      return false;
    }

    const file = files[ 0 ];
    const name = file.name;
    const ext = Helpers.getFileExt(name);
    const allwdExtns = /png|jpg|jpeg/i;

    if (!ext || !allwdExtns.test(ext)) {
      this.error = 'Недопустимый формат файла \'' + ext + '\'.';
      return false;
    }

    const size = file.size;
    if (!size || size > this.imageMaxSize * 1024 * 1024) {
      this.error = 'Размер файла превышает максимально допустимый размер ' + this.imageMaxSize + 'Mb';
      return false;
    }

    const image: any = new Image();
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  onSave() {
    const ts = Math.ceil(new Date().getTime() / 1000);
    const blob = Helpers.dataURItoBlob(this.data.image);

    const ext = blob.type.match(/\/[0-9a-z]+$/i)[0].slice(1);
    const file = new File( [blob], 'blobImage_' + ts + '.' + ext, { type: blob.type } );
    this.error = '';
    this.loading = true;
    if (file) {
    this.profileService.changeAvatar(this.data.original.src.replace(/^data:image\/png;base64,/, ''), this.data.image.replace(/^data:image\/png;base64,/, '')).subscribe(x => {
      this.generate();
      this.snackBar.open('Аватар успешно изменен', 'Закрыть', {
        duration: 3000,
      });
      this.croppedImg = `https://expressfromus.com${x.cropped_image_url}`;
      this.isShow = false;
    });
    }
  }

}

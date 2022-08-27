import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() stateUser: any;
  miPortfolio: any;
  updateBanner: any;
  urlPhotoPerfil: any;
  constructor(
    private datosPortfolio: PortfolioService,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.getBanner().subscribe((data) => {
      this.miPortfolio = data[0];
    });
    this.getImages();
  }

  setBanner() {
    this.updateBanner = this.miPortfolio;
  }

  onUpdateBanner(modifiedBanner: any) {
    modifiedBanner.id = this.updateBanner.id;
    modifiedBanner.img_perfil = this.updateBanner.img_perfil;
    this.datosPortfolio.updateBanner(modifiedBanner).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  onUpdatePhotoPerfil(modifiedBanner: any) {
    this.datosPortfolio.updateBanner(modifiedBanner).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  estaLogueado() {
    if (
      this.stateUser === null ||
      typeof this.stateUser === undefined ||
      typeof this.stateUser === 'undefined' ||
      this.stateUser.auth.currentUser === null
    ) {
      return false;
    } else {
      return true;
    }
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `profilePicture/${file.name}`);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.setBanner();
        this.updateBanner.img_perfil = file.name;
        this.onUpdatePhotoPerfil(this.updateBanner);
      })
      .catch((error) => console.log(error));
  }

  async getImages() {
    const imagesRef = ref(this.storage, `profilePicture`);

    await listAll(imagesRef)
      .then((response) => {
        for (let item of response.items) {
          if (item.name === this.miPortfolio.img_perfil) {
            getDownloadURL(item)
              .then((response) => {
                this.urlPhotoPerfil = response;
              })
              .catch((error) => console.log(error));
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

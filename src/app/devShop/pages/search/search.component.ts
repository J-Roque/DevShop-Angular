import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Devshop } from 'src/app/interface/devshop';
import { DevshopService } from 'src/app/services/devshopService.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  colecionProd: Devshop[] = [];
  prodList: Devshop[] = [];

  formleguage = new FormControl<string | null>('', Validators.required);

  constructor(
    private devshopService: DevshopService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params
      .pipe(
        switchMap(params => {
          const lenguage = params['lenguage'];
          if (lenguage) {
            return this.devshopService.getAllProductLenguage(lenguage);
          }
          return [];
        })
      )
      .subscribe(
        data => {
          this.colecionProd = data;
        },
        error => {
          console.error('Error fetching product data', error);
        }
      );
  }

  seachLenguageProd() {
    const lenguage = this.formleguage.value;
    if (this.formleguage.valid && lenguage) {
      this.devshopService.getAllProductLenguage(lenguage)
        .subscribe(
          data => {
            this.prodList = data;
          },
          error => {
            console.error('Error fetching product data', error);
          }
        );
    }
  }
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../config/service/config.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoffeeListView, IntiaCoffeeListView, LABEL} from 'src/app/config/model/data.model';
import { StoreService } from 'src/app/config/service/store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ConfigService],
})

export class DetailComponent implements OnInit {
  info: CoffeeListView = IntiaCoffeeListView;
  formData: FormGroup = new FormGroup({});
  id: number = NaN;
  Label = LABEL;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.getDetail();

    this.formData = new FormGroup({
      Notes: new FormControl(
        this.info.notes,
        Validators.compose([Validators.required])
      ),
    });
  }

 getDetail() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
     this.store.selectCoffeebyId(this.id).subscribe((currentCoffee: CoffeeListView) => {
      this.info = currentCoffee;
    });
  }

  async saveList(data: any) {
    // this.info.notes = data.Notes || '';
    // await this.service.saveData(this.info);
    this.router.navigate(['']);
  }
  focusBack() {
    setTimeout(()=> {
      const elebtn = document.getElementById(this.id.toString());
      elebtn && elebtn.focus();
    }, 0);
  }
}

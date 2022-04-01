import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../config/service/config.service';
import { FormGroup } from '@angular/forms';
import { IntiaListView, TABLE_COLUMNS, TransactionListView } from 'src/app/config/model/data.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ConfigService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  listData: any;
  p: number = 0;
  pageCount: number = 0;

  info: TransactionListView = IntiaListView;
  formData: FormGroup = new FormGroup({});

  ListHeader = TABLE_COLUMNS;
  @Input('list') set _list(s: any) {
    if (!s) {
      return;
    }
    this.listData = s;
  }
  constructor(
  ) { }

  ngOnInit(): void {
    this.p = 1;
    this.pageCount = this.listData.length/10;
  }
}

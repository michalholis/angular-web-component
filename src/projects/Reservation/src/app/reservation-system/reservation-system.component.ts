import { RequestModel } from './../../models/request-model';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseItemModel } from '../../models/response-item-model';
import { ResponseModel } from '../../models/response-model';

@Component({
  selector: 'app-reservation-system',
  templateUrl: './reservation-system.component.html',
  styleUrls: ['./reservation-system.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationSystemComponent implements OnInit {
  public mRequest: RequestModel;
  public mTest = 0;

  @Input() public bgColor = 'red';
  @Input() public apiKey: string;

  public Open(aRequest: string) {
    this.mRequest = JSON.parse(aRequest);
    // je bohuzel treba zavolat pokazde, kdyz pracujeme s promennou, ktera je primo bindovana do GUI
    // a byla nekde zmenena skrze metodu mimo komponentu, ostatni modely by mely mit binding v
    // poradku, prikladem je mTest, pokud bindujeme jen na mRequest.request, tak bude vse v poradku
    // a staci jen zavolat detectChanges po uvodni zmene (ted), pokud bychom nekde bindovali naprimo,
    // napr. ngIf="mRequest", pak bychom museli detectChanges zavolat i v onButtonClick kde nastavujeme
    // mRequest na null
    this.mCd.detectChanges();
  }

  constructor(private mHost: ElementRef, private mCd: ChangeDetectorRef) {
    this.mHost.nativeElement.Open = this.Open.bind(this);
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--bg-color', this.bgColor);
  }

  onButtonClick() {
    this.mRequest = null;
    this.mTest += 1;

    const lResponse = new ResponseModel();
    lResponse.status = 'OK';

    const lResponseItem = new ResponseItemModel();
    lResponseItem.create = new Date(Date.now());
    lResponseItem.dateTimeEnd = new Date(Date.now());
    lResponseItem.dateTimeStart = new Date(Date.now());
    lResponseItem.estimatedPrice = 800;
    lResponseItem.eventId = 123;
    lResponseItem.timeout = 300;

    lResponse.response = [
      lResponseItem
    ];

    window.dispatchEvent(new CustomEvent('button-pressed',
    {
      detail: lResponse
    }));
  }
}

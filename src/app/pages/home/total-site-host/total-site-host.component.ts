import { Component, Input } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faRubleSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-total-site-host',
  templateUrl: './total-site-host.component.html',
  styleUrls: ['./total-site-host.component.scss']
})
export class TotalSiteHostComponent {
  @Input() totalCost: number = 0;
  rubleIcon = faRubleSign;
  sProp: SizeProp = '1x';
}

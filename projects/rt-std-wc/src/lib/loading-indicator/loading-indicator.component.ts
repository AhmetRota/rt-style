import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rt-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {

  @Input() showLoadingIndicator = false;
  @Input() isExporting = false;

  constructor() { }

}
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'rt-tabs',
  templateUrl: './rt-tabs.component.html',
  styleUrls: ['./rt-tabs.component.scss'],
})
export class RtTabsComponent implements OnInit {

  @Input() buttonList: any[] = [];
  @Input() defaultSelection = 0;
  @Output() changeToggle = new EventEmitter<number>();
  selectedToggle = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedToggle = this.defaultSelection;
  }

  changeSelectedToggle(event: MatButtonToggleChange) {
    this.selectedToggle = event.value;
    this.changeToggle.emit(event.value);
  }

}


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'rt-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent{

  header: string = '';
  content: string = '';

  constructor(private matDialog: MatDialog) { }
  
  closePopover() {
    this.matDialog.closeAll();
  }

}

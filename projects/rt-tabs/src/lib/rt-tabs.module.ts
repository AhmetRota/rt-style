import { NgModule } from '@angular/core';
import { RtTabsComponent } from './rt-tabs.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RtTabsComponent],
  imports: [
    MatButtonToggleModule,
    MatIconModule,
    CommonModule
  ],
  exports: [RtTabsComponent]
})
export class RtTabsModule { }

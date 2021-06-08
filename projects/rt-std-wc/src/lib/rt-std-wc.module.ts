import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { PopoverComponent } from './popover/popover.component';
import { PopoverService } from './popover/popover.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './feedback/feedback.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormValidatorService } from './services/form-validator.service';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [TabsComponent, SelectMenuComponent, PopoverComponent, FeedbackComponent, LoadingIndicatorComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonToggleModule,
    NoopAnimationsModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    PopoverService,
    FeedbackService,
    FormValidatorService
  ],
  exports: [TabsComponent, SelectMenuComponent, PopoverComponent, FeedbackComponent, LoadingIndicatorComponent]
})
export class RTSTDWCModule { }

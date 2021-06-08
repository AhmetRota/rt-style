import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeedbackSizes } from './feedback.service';
import { FeedbackService } from './feedback.service';

/**
 * The purpose of this component is to display notifications.
 *
 * show: {string} show flag, default true
 * message: {string} feedback message
 * iconName: {string} icon selected according to feedback type
 * title: {string}  feedback title
 * feedbackType: {FeedbackTypes} Type of feedback
 * sizeType: {FeedbackSizes} Size of component
 */
@Component({
  selector: 'rt-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  show = false;
  message = '';
  iconName = '';
  title = '';
  feedbackType = '';
  sizeType: FeedbackSizes = FeedbackSizes.Large;

  private subscription = new Subscription();

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.subscription.add(this.feedbackService.feedbackState
      .subscribe((state: any) => {
       this.feedbackType = state.type;
       this.message = state.message;
       this.title = state.title;
       this.show = state.show;
       this.sizeType = state.sizeType;

       if (this.feedbackType.includes('success')) {
         this.iconName = 'check_circle_outline';
       } else if (this.feedbackType.includes('warning')) {
         this.iconName = 'warning';
       } else if (this.feedbackType.includes('error')) {
         this.iconName = 'error_outline';
       } else if (this.feedbackType.includes('info')) {
         this.iconName = 'info_outline';
       }

       setTimeout(() => this.show = false, state.duration);
     }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.show = false;
  }

  hasTitle(title: string): boolean {
    return title !== '';
  }

}


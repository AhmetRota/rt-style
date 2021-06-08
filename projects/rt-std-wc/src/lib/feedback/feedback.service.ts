import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export enum FeedbackSizes {
    Large = 'large',
    Medium = 'medium'
}
export enum FeedbackTypes {
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
    Info = 'info',
    SuccessEmbedded = 'success-embedded',
    WarningEmbedded = 'warning-embedded',
    ErrorEmbedded = 'error-embedded',
    InfoEmbedded = 'info-embedded',
    StripeSuccess = 'stripe-success',
    StripeWarning = 'stripe-warning',
    StripeError = 'stripe-error',
    StripeInfo = 'stripe-info',
    StripeSuccessFull = 'stripe-success-full',
    StripeWarningFull = 'stripe-warning-full',
    StripeErrorFull = 'stripe-error-full',
    StripeInfoFull = 'stripe-info-full',
}

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    private feedbackSubject = new Subject<any>();
    feedbackState = this.feedbackSubject.asObservable();

    constructor() {
    }

    showFeedback(title: string, message: string, type: string, sizeType: FeedbackSizes, duration = 5000) {
        this.feedbackSubject.next({
            show: true,
            title,
            message,
            type,
            sizeType,
            duration
        });
    }
}

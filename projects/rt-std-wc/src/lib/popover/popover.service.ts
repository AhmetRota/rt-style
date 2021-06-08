import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { PopoverComponent } from './popover.component';

export enum PopoverPosition {
    topCenter,
    topRight,
    topLeft,
    bottomCenter,
    bottomRight,
    bottomLeft,
    rightCenter,
    rightUp,
    rightBottom,
    leftCenter,
    leftUp,
    leftBottom,
}
/**
 * Service to create modal dialog windows.
 */
@Injectable({
    providedIn: 'root'
})
export class PopoverService {

    private dialogWidth = 232;
    private dialogHeight: number = 0;
    private shiftSpace: number = 83;
    private bufferSpace: number = 10;

    constructor(public matDialog: MatDialog) { }

    openPopop(element: any, position: PopoverPosition, header: string, content: string) {
        element.disabled = true;
        const dialogDef = this.matDialog.open(PopoverComponent, {
            hasBackdrop: false,
            disableClose: false
        });
        dialogDef.componentInstance.header = header;
        dialogDef.componentInstance.content = content;

        dialogDef.afterClosed().subscribe(() => element.disabled = false);

        const dialogElement: any = document.getElementsByClassName('mat-dialog-container');
        dialogElement[0].style.visibility = 'hidden';
        setTimeout(() => {
            this.dialogHeight = dialogElement[0].offsetHeight;
            const coordinates = this.getcoordinates(element, position);

            dialogElement[0].classList.add('custom-dialog');
            dialogElement[0].style.position = 'absolute';
            dialogElement[0].style.top = coordinates.top;
            dialogElement[0].style.left = coordinates.left;
            dialogElement[0].style.width = this.dialogWidth + 'px';
            dialogElement[0].style.height = 'auto';
            dialogElement[0].style.maxHeight = '240px';
            dialogElement[0].style.visibility = 'visible';
        }, 100);
    }

    private getcoordinates(element: any, position: PopoverPosition): { top: string, left: string } {
        let top;
        let left;
        var rect = element.getBoundingClientRect();


        switch (position) {
            case PopoverPosition.topCenter:
                top = `${rect.top - this.bufferSpace - this.dialogHeight}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2)}px`;
                break;
            case PopoverPosition.topLeft:
                top = `${rect.top - this.bufferSpace - this.dialogHeight}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2) - this.shiftSpace}px`;
                break;
            case PopoverPosition.topRight:
                top = `${rect.top - this.bufferSpace - this.dialogHeight}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2) + this.shiftSpace}px`;
                break;
            case PopoverPosition.bottomCenter:
                top = `${rect.bottom + this.bufferSpace}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2)}px`;
                break;
            case PopoverPosition.bottomLeft:
                top = `${rect.bottom + this.bufferSpace}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2) - this.shiftSpace}px`;
                break;
            case PopoverPosition.bottomRight:
                top = `${rect.bottom + this.bufferSpace}px`;
                left = `${rect.left - (this.dialogWidth / 2) + (rect.width / 2) + this.shiftSpace}px`;
                break;
            case PopoverPosition.rightCenter:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2)}px`;
                left = `${rect.right + this.bufferSpace}px`;
                break;
            case PopoverPosition.rightUp:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2) - (this.dialogHeight / 4)}px`;
                left = `${rect.right + this.bufferSpace}px`;
                break;
            case PopoverPosition.rightBottom:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2) + (this.dialogHeight / 4)}px`;
                left = `${rect.right + this.bufferSpace}px`;
                break;
            case PopoverPosition.leftCenter:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2)}px`;
                left = `${rect.left - (this.dialogWidth) - this.bufferSpace}px`;
                break;
            case PopoverPosition.leftUp:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2) - (this.dialogHeight / 4)}px`;
                left = `${rect.left - (this.dialogWidth) - this.bufferSpace}px`;
                break;
            case PopoverPosition.leftBottom:
                top = `${rect.top - (this.dialogHeight / 2) + (rect.height / 2) + (this.dialogHeight / 4)}px`;
                left = `${rect.left - (this.dialogWidth) - this.bufferSpace}px`;
                break;
        }

        return { top, left }
    }


}
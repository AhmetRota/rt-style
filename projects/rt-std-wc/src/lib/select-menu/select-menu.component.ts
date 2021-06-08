import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

interface Item {
  value: number;
  name: string;
}
@Component({
  selector: 'rt-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {

  @Input() itemList: Item[] | { labelName: string, labelData: Item[]}[] = [];
  @Input() isRightMenu = true;
  @Input() isCheckboxMenu = true;
  @Input() isGroup = false;
  @Input() isShowButton = false;
  @Input() menuId = 0;
  @Output() multiSelectMenuChangeEvent = new EventEmitter<{menuId: number, selectedItem: number[]}>();

  singleItemList: Item[]  = [];
  groupItemList: { labelName: string, labelData: Item[]}[] = [];
  selectedList: number[] = [];
  selectedRadioId = null;
  constructor() {
  }
  ngOnInit(): void {
    this.itemList.forEach((item: any) => {
      if (item.labelName) {
        this.groupItemList.push(item);
      } else {
        this.singleItemList.push(item);
      }
    });
  }

  onCheckboxChange(e: any) {
    if (e.checked) {
      this.selectedList.push(parseInt(e.source.id.split('|')[1], 10));
    } else {
      const index = this.selectedList.findIndex(list => list === parseInt(e.source.id.split('|')[1], 10));
      this.selectedList.splice(index, 1);
    }
    if (!this.isShowButton) {
      this.multiSelectMenuChangeEvent.emit({ menuId: this.menuId, selectedItem: this.selectedList });
    }
  }

  emitStatus() {
    this.multiSelectMenuChangeEvent.emit({ menuId: this.menuId, selectedItem: this.selectedList });
  }

  onRadioChange(e: any) {
    this.selectedRadioId = e.value;
    this.multiSelectMenuChangeEvent.emit({ menuId: this.menuId, selectedItem: [e.value] });
  }

  getClassNameRadio(id: number) {
    return (id === this.selectedRadioId) ? 'selected-row' : '';
  }

  getClassNameCheckbox(id: number) {
    const index = this.selectedList.findIndex(x => x === id);
    return (index !== -1) ? 'selected-row' : '';
  }

}


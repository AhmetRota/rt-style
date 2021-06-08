import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService, FeedbackSizes, FeedbackTypes } from 'projects/rt-std-wc/src/lib/feedback/feedback.service';
import { PopoverService, PopoverPosition } from 'projects/rt-std-wc/src/lib/popover/popover.service';
import { FormValidatorService, FormStatusIcons } from 'projects/rt-std-wc/src/lib/services/form-validator.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RlsLibrary';

  exampleInput = [
    {
      id: 0,
      text: 'deneme 1',
      icon: 'view_list',
      isViewText: false
    },
    {
      id: 1,
      text: 'deneme 2',
      icon: 'list',
      isViewText: false
    },
    {
      id: 2,
      text: 'deneme 3',
      icon: 'list',
      isViewText: true
    },
    {
      id: 3,
      text: 'deneme 4',
      icon: 'list',
      isViewText: true
    }
  ];
  selectedVal = 1;

  exampleMultiSelectItems = [
    { value: 1, name: 'Item 1'},
    { value: 2, name: 'Item 2'},
    { value: 3, name: 'Item 3'},
    { value: 4, name: 'Item 4'},
    { value: 5, name: 'Item 5'},
    { value: 6, name: 'Item 6'},
    { value: 7, name: 'Item 7'},
  ];

  exampleMultiSelectItemsWithGroup = [
    {
      labelName: 'Label 1',
      labelData: [
       { value: 1, name: 'Item 1'},
       { value: 2, name: 'Item 2'},
       { value: 3, name: 'Item 3'},
      ]
    },
    {
      labelName: 'Label 2',
      labelData: [
       { value: 4, name: 'Item 1'},
       { value: 5, name: 'Item 2'},
       { value: 6, name: 'Item 3'},
      ]
    },
    {
      labelName: 'Label 3',
      labelData: [
       { value: 7, name: 'Item 1'},
       { value: 8, name: 'Item 2'},
       { value: 9, name: 'Item 3'},
      ]
    }
  ];

  myControl = new FormControl();
  options: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
  filteredOptions: Observable<string[]>;

  dropdownItems = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
    { id: 4, name: 'Item 4'},
    { id: 5, name: 'Item 5'},
    { id: 6, name: 'Item 6'}
  ];
  selectedDropdownItems: number[] = [];

  searchDropdownItems = [
    { id: 11, name: 'Item 1'},
    { id: 21, name: 'Item 2'},
    { id: 31, name: 'Item 3'},
    { id: 41, name: 'Item 4'},
    { id: 51, name: 'Item 5'},
    { id: 61, name: 'Item 6'}
  ];
  filteredDropdownItems = this.searchDropdownItems.map(item => item.id);
  searchSelectedDropdownItems: number[] = [];

  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  constructor(
    private popoverService: PopoverService,
    private feedbackService: FeedbackService,
    private formBuilder: FormBuilder,
    private formValidatorService: FormValidatorService
  ) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.feedbackService.showFeedback('Title', 'TexTextTextTextTextTextText', FeedbackTypes.Success, FeedbackSizes.Large);
    }, 4000);
  }

  switchTheme() {
    document.body.classList.toggle('dark');
  }

  changeToggle($event: number) {
    console.log($event);
  }

  multiSelectMenuChangeEvent($event: {menuId: number, selectedItem: number[]}) {
    console.log($event);
  }
  
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  getClassNameMatOption(id: number) {
    return this.selectedDropdownItems.includes(id) ? 'selected-option-row' : '';
  }

  getClassNameSearchMatOption(id: number) {
    const styleRow =  this.searchSelectedDropdownItems.includes(id) ? 'selected-option-row' : '';
    const styleShow =  this.filteredDropdownItems.includes(id) ? '' : 'hidden-row';
    return styleRow + ' ' + styleShow;
  }

  onSearchInputChange($event: any) {
    this.filteredDropdownItems = this.searchDropdownItems.filter(item => item.name.includes($event.target.value)).map(item => item.id);
  }

  get popoverPosition() {
    return PopoverPosition;
  }

  openPopover(element: any, position: PopoverPosition) {
    const header = 'Header';
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ac erat sed sollicitudin. Nullam sagittis libero in molestie lacinia. Nulla aliquam velit Nullam.';

    this.popoverService.openPopop(element, position, header, content);
  }
  
  get getControl(){
    return this.userForm.controls;
  }

  getErrorClass(form: FormGroup, field: string) {
    return this.formValidatorService.getErrorClass(form, field);
  }

  getIconName(form: FormGroup, field: string) {
    return this.formValidatorService.getIconName(form, field);
  }

  focus(form: FormGroup, field: string) {
    const iconName = this.formValidatorService.getIconName(form, field, true);
    const element = document.getElementById(field);
    (element as any).innerText = iconName;
  }

  blur(form: FormGroup, field: string) {
    const iconName = this.formValidatorService.getIconName(form, field, false);
    const element = document.getElementById(field);
    (element as any).innerText = iconName;
  }

  getClassNameForColor(icon: any): any {
    let classNameForColor;
    switch (icon._elementRef.nativeElement.innerText) {
      case FormStatusIcons.Cancel: 
        classNameForColor = 'cancel';
        break;
      case FormStatusIcons.Error:
        classNameForColor = 'error'
        break;
      case FormStatusIcons.Approved:
      classNameForColor = 'approved'
      break;
    }

    return classNameForColor;
  }
}

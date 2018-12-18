import { EventEmitter, Input, Output, SimpleChanges } from "@angular/core";

export class BaseFilter {
  @Input() selectedValue: string;
  @Output() valueSelected = new EventEmitter<string>();
  readonly notSelectedValue: string = 'Not selected';
  displayValue: string;
  dropdownValues: string[];

  onInit() {
    if (this.selectedValue) {
      const dropdownValue = this.dropdownValues.find(item => item.toLowerCase() === this.selectedValue.toLowerCase());
      this.displayValue = dropdownValue ? dropdownValue : this.notSelectedValue;
    } else {
      this.clear();
    }
  }

  onChanges(changes: SimpleChanges) {
    if (!changes.selectedValue.currentValue) {
      this.clear();
    }
  }

  onValueSelected(value) {
    this.displayValue = value;
    this.valueSelected.emit(value);
  }

  clear() {
    this.displayValue = this.notSelectedValue;
  }
}

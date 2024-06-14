import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

export interface MyBottomSheetConfig {
  info: string
}

@Component({
  selector: 'app-my-bottom-sheet',
  standalone: true,
  imports: [],
  templateUrl: './my-bottom-sheet.component.html',
  styleUrl: './my-bottom-sheet.component.scss'
})
export class MyBottomSheetComponent {
  constructor(
    private matBottomSheetRef: MatBottomSheetRef,
    @Inject(MAT_BOTTOM_SHEET_DATA) public myBottomSheetConfig: MyBottomSheetConfig) {
  }
}

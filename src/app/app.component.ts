import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MyBottomSheetComponent, MyBottomSheetConfig} from "./my-bottom-sheet/my-bottom-sheet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private readonly matBottomSheet: MatBottomSheet) {
  }

  openFirstBottomSheet() {
    this.matBottomSheet.open<MyBottomSheetComponent, MyBottomSheetConfig>(MyBottomSheetComponent, {
      disableClose: true,
      closeOnNavigation: true,
      hasBackdrop: false,
      data: {
        info: "first bottom sheet"
      }
    })
  }

  openSecondBottomSheet() {
    this.matBottomSheet.open<MyBottomSheetComponent, MyBottomSheetConfig>(MyBottomSheetComponent, {
      disableClose: true,
      closeOnNavigation: true,
      hasBackdrop: false,
      data: {
        info: "second bottom sheet"
      }
    })
  }
}

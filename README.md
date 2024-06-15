# Reproducer for MatBottomSheet bug in zoneless setup
https://github.com/angular/components/issues/29258

* Just click one of the "open bottom sheet" buttons
* BottomSheet appears
* Just click one of the buttons again
* BottomSheet disappears (as it should)
* An `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value for '@state': 'void'. Current value: 'visible'. Expression location: MatBottomSheetContainer component` is logged to the console
* The new BottomSheet will not appear

import {Component, Inject} from '@angular/core';
import {Book} from '../../model/book';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {}
  closeDialog() {
    this.dialogRef.close();
  }
}

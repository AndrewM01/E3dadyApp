import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Return true when the user confirms
  }

  onCancel(): void {
    this.dialogRef.close(false); // Return false when the user cancels
  }
}

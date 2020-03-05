import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent {

  constructor(private dialogRef: MatDialogRef<UploadImageDialogComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
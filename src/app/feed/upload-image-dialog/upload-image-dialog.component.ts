import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent {

  public imageChangedEvent: Event;
  public croppedImage: string;

  constructor(private dialogRef: MatDialogRef<UploadImageDialogComponent>) {
    this.imageChangedEvent = null;
    this.croppedImage = "";
  }

  fileChangeEvent(event: Event): void {
      this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }

  close(): void {
      this.dialogRef.close();
  }
}
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from "@angular/forms";
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-service-hp',
  templateUrl: './service-hp.component.html',
  styleUrls: ['./service-hp.component.css']
})
export class ServiceHPComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;
  fileToUpload :File = null;
  constructor(public fb: FormBuilder,private service : ServiceService) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
    this.imageURL = '/assets/images/';
  }

  ngOnInit(): void { }


  // Image Preview
  showPreview(event) {
    this.fileToUpload = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: this.fileToUpload
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.fileToUpload)
  }

  // Submit Form
  submit(imageForm : any) {
    this.service.PostFile(imageForm,this.fileToUpload).subscribe(data => {console.log('done');
    this.imageURL = '/assets/images/default-png';});
    console.log(this.uploadForm.value);


  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})
export class CommonErrorComponent implements OnInit {
  @Input() formField!: FormControl;
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

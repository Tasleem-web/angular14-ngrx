import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-error-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-error-control.component.html',
  styleUrls: ['./common-error-control.component.scss'],
})
export class CommonErrorControlComponent implements OnInit {

  @Input() formField!: FormControl;
  @Input() label: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}

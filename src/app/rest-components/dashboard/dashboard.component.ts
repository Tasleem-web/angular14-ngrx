import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.userForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      address: this.formBuilder.array([])
    })
  }

  createAddressGroup(): FormGroup {
    return this.formBuilder.group({
      street: [],
      city: [],
      state: [],
      contacts: this.formBuilder.array([])
    })
  }

  createContact() {
    return this.formBuilder.group({
      contactPerson: [],
      phoneNumber: []
    })
  }

  addAddress() {
    const addressArry = this.userForm.get('address') as FormArray;
    addressArry.push(this.createAddressGroup())
  }

  addContact(addressIndex: number) {
    const addressArray = this.userForm.get('address') as FormArray;
    const contactArray = addressArray.at(addressIndex).get('contacts') as FormArray;
    contactArray.push(this.createContact());
  }


  get addressArrayForm(): FormArray {
    return <FormArray>this.userForm.get('address');
  }

  get addressControls() {
    return (this.userForm.get('address') as FormArray).controls;
  }

  getContactControls(addressIndex: number): FormGroup[] {
    const addressArray = this.userForm.get('address') as FormArray;
    const addressGroup = addressArray?.at(addressIndex) as FormGroup;
    const contactsFormArray = addressGroup?.get('contacts') as FormArray;
    return contactsFormArray?.controls as FormGroup[] || [];
  }

  removeContact(formIndex: number, contactIndex: number) {
    ((this.userForm.get('address') as FormArray).at(formIndex).get('contacts') as FormArray).removeAt(contactIndex)
  }

}

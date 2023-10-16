import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent  implements OnInit{
  

  items: MenuItem[] = [];
  visible: boolean = false;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the menu items
    this.items = [
      {
        label: 'Administrator',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Master Data', icon: 'pi pi-fw pi-plus' },
          { label: 'Client', icon: 'pi pi-fw pi-video' },
          { label: 'User Registration', icon: 'pi pi-fw pi-video' ,   command: (event: any) => {
            this.showDialog();      } },
          { label: 'User List', icon: 'pi pi-fw pi-bookmark'},
          { label: 'Product', icon: 'pi pi-fw pi-video' },
          { label: 'Client Products', icon: 'pi pi-fw pi-video' },
          { label: 'Release Note', icon: 'pi pi-fw pi-video' },
          { label: ' System Settings', icon: 'pi pi-fw pi-video' }
        ]
      },
      {
        label: 'Client Products',
        icon: 'pi pi-fw pi-trash',
       
      },
      {
        label: 'Service',
        icon: 'pi pi-fw pi-trash',
       
      },
      {
        label: 'QA',
        icon: 'pi pi-fw pi-trash',
       
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-trash',
       
      },
    
    ];

    // Initialize the userForm with form controls
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      department: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      designation: ['', Validators.required],
      isActive: [false, Validators.required],
    });
  }

  showDialog() {
    // You may fetch user details and update the form here
    this.userForm.patchValue({
      userId: '123', // Example: Replace with actual data
      department: 'IT', // Example: Replace with actual data
      userName: 'JohnDoe', // Example: Replace with actual data
      password: 'password123', // Example: Replace with actual data
      designation: 'Developer', // Example: Replace with actual data
      isActive: true, // Example: Replace with actual data
    });

    this.visible = true;
  }

  submitForm() {
    if (this.userForm.valid) {
      // Process the form data, e.g., send it to a server
      console.log('Form submitted:', this.userForm.value);
      this.closeDialog();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  closeDialog() {
    this.visible = false;
    this.userForm.reset();
  }
}

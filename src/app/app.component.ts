import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  inputValue: string = '';

  products: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // Initialize sample data
    this.products = [
      {
        id: 1,
        name: 'Laptop',
        category: 'Electronics',
        price: 899,
        quantity: 5,
      },
      {
        id: 2,
        name: 'Smartphone',
        category: 'Electronics',
        price: 699,
        quantity: 10,
      },
      {
        id: 3,
        name: 'Headphones',
        category: 'Accessories',
        price: 199,
        quantity: 15,
      },
      {
        id: 4,
        name: 'Monitor',
        category: 'Electronics',
        price: 349,
        quantity: 8,
      },
      {
        id: 5,
        name: 'Keyboard',
        category: 'Accessories',
        price: 89,
        quantity: 20,
      },
    ];
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Your message has been sent: ' + this.inputValue,
    });
  }
}

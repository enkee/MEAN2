import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { UserComponent } from './app.otros';
import { CommentsComponent } from './app.coments';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarService } from './car.service';
import { ReversePipe } from './reverse.pipe';
import {
  LowerCasePipe,
  DecimalPipe,
  DatePipe,
  CurrencyPipe,
} from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user name="marco" (addItemEvent)="addItem($event)" /> {{ version }}
      <ul>
        @for (item of items; track item) {
        <li>{{ item }}</li>
        }
      </ul>
    </section>
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder{
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
    <!-- formulario -->
    <div>
      <p>Username: {{ username }}</p>
      <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
      <p>Framework: {{ favoriteFramework }}</p>
      <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
      </label>
      <button (click)="showFramework()">show framework</button>
    </div>
    <!-- Reactive Forms -->
    <div>
      <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <input type="text" formControlName="name" name="name" />
        <input type="email" formControlName="email" name="email" />
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>

      <h2>Profile Form</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>
    </div>
    <!-- Injectable Service -->
    <p>{{ CarService.getCars() }}</p>
    <p>{{ CarService.getCar(0) }}</p>
    <!-- Dependency Injection -->
    <p>Car listing: {{ display }}</p>
    <!-- LowerCase Pipe -->
    {{ username2 | lowercase }}
    <!-- Pipes -->
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    <!-- Revers Pipe -->
    Reverse Machine: {{ word | reverse }}

  `,
  imports: [
    UserComponent,
    CommentsComponent,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe
  ],
})
export class AppComponent {
  version = 'v0.1';
  //Output
  items: string[] = [];
  addItem(item: string) {
    console.log('Item added', item);
    this.items.push(item);
  }
  //Formularios
  favoriteFramework = '';
  username = 'youngTech';
  showFramework() {
    alert(this.favoriteFramework);
  }
  //Formulario Reactivo
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  //Servicio Injectado
  CarService = inject(CarService);
  //Dependencia injectable
  display = '';
  /*
  constructor(){
    this.display = this.CarService.getCars().join(' ⭐️ ');
  }
*/
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join('⭐️');
  }
  //LowerCase Pipe
  username2 = 'yOunGTECh';
  //Pipes
  num= 103.1234
  birthday= new Date(2023, 3, 2)
  cost = 4560.34
  //Reverse Pipe
  word = 'You are a champion'
}

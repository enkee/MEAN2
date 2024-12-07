import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    @if(isServerRunning){
    <span>Yes, the server is running</span>
    }@else{
    <span>No, the server is running</span>
    } @for(user of users; track user.id){
    <p>{{ user.name }}</p>
    }
    <img [src]="imgUrl" title="{{ message }}" (mouseover)="onMouseOver()" />
    <p>El nombre de usuario es {{ name }}</p>
    <button class="btn" (click)="addItem()">AddItem</button>
    <!-- Otimizacion de Imagen -->
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img
          ngSrc="/assets/logo.svg"
          alt="Angular logo"
          width="32"
          height="32"
        />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="132" height="132" />
      </li>
    </ul>
  `,
  styles: `
    :host{
      color:blue;
    }
    `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  isServerRunning = true;
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Enrique' },
    { id: 4, name: 'Cyntia' },
  ];
  imgUrl =
    'https://pbs.twimg.com/profile_images/722831508998897664/TI227a2u_400x400.jpg';

  message = '';
  //Evento
  onMouseOver() {
    this.message = 'miau..!!';
  }
  //Variable input
  @Input() name = '';

  //Comunicacion con el componente padre output
  @Output() addItemEvent = new EventEmitter<string>();
  //Evento output
  addItem() {
    this.addItemEvent.emit('tortuga');
  }
  //Optimizacion de Imagen
  logoUrl = 'https://pbs.twimg.com/profile_images/722831508998897664/TI227a2u_400x400.jpg';
  logoAlt = 'Angular Logo';
  username = 'yungeTech';

}

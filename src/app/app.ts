import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  Header,
  Sidebar,
  RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
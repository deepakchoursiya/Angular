import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "https://i.pinimg.com/736x/17/a4/ab/17a4abbc769be0d348f9e52a6fb20232.jpg";  
  
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // ✅ Fixed typo
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "https://i.pinimg.com/736x/17/a4/ab/17a4abbc769be0d348f9e52a6fb20232.jpg";  
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick($event: MouseEvent) {  // ✅ Added type
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}

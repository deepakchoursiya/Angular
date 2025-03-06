import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "https://i.pinimg.com/736x/17/a4/ab/17a4abbc769be0d348f9e52a6fb20232.jpg";  
  url = "https://www.bridgelabz.com";
  userName: string = ""; // Initialized userName variable
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick($event: MouseEvent) {  
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput() {  
    console.log("Change Event Occurred!", this.userName);
    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;
    this.nameError = nameRegex.test(this.userName) ? "" : "Name is Incorrect!";
  }
}

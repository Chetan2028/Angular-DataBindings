import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewHelloWorld';
  imgUrl;
  url;
  userName;
  nameError;

  ngOnInit() : void {
    this.title = "Hello From BridgeLabz";
    this.imgUrl = "../assets/bridgelabz_logo.png";
    this.url = "https://bridgelabz.com";
  }

  onClick($event){
    console.log("Mouse clicked",$event);
    window.open(this.url);
  }

  onInput($event) {
    console.log("Input through  keyboard" , $event);
    const nameRegx = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegx.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Invalid input";
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tryflx";
}

/**
 * Login
 */
@Component({
  templateUrl: "login.html",
  styles:[":host{flex:1;display:flex}"]
})
export class LoginComponent {
  constructor() {

  }
}

/**
 * Secure
 */
@Component({
  templateUrl:"secure.html",
  styles:[":host{flex:1;display:flex}"]
})
export class SecureComponent {
  constructor() {

  }
}

/**
 * PageOneComponent
 */
@Component({
  templateUrl:"pageone.html",
  styles:[":host{flex:1;display:flex}"]
})
export class PageOneComponent {
  constructor() {

  }
}

/**
 * PageTwoComponent
 */
@Component({
  template:"<lorem-ipsum></lorem-ipsum>"
})
export class PageTwoComponent {
  constructor() {

  }
}

/**
 * LoremIpsumComponent
 */
@Component({
  selector:"lorem-ipsum",
  templateUrl:"loremipsum.html"
})
export class LoremIpsumComponent {
  constructor() {

  }
}
import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RemoteService } from "./RemoteService";
import { finalize } from "rxjs/operators";
import { LogHelper } from "./LogHelper";

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

  public config: Object;

  constructor(private remoteService: RemoteService) {

  }

  ngOnInit() {
    this.remoteService.get200().subscribe((config)=>{
      this.config = config;
    });
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

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * LoremIpsumComponent
 */
@Component({
  selector:"lorem-ipsum",
  templateUrl:"loremipsum.html"
})
export class LoremIpsumComponent {

  private name: string = "The quick brown fox";
  private animal: string = "animal";

  constructor(public remoteService: RemoteService, public dialog: MatDialog) {
  }

  public get400() {
    this.remoteService.get400().pipe(finalize(() => {
      this.log("get400.finalize");
    })).subscribe({
      error: (e) => {
        this.log("get400.Oof!"+e);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {

      // width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  private log(...args: any[]) {
    new LogHelper(this).log(args);
  }

}

/**
 * DialogOverviewExampleDialog
 */
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  public message: string;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {

      this.message = data.name.repeat(2);

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.message, animal: ""}
    });

  }

}

import { Component} from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public isTextFieldFocus:any=false;
  constructor(private keyboard: Keyboard) {
  }
  focusInput(event){
    this.isTextFieldFocus=true;
  }
  onFoucusOut(event){
    this.isTextFieldFocus=false;
  }
  closeKeyboard(){
    this.isTextFieldFocus=false;
    this.keyboard.hide();
  }

}

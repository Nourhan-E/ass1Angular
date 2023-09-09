import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isEmpty:boolean[] = [true, true, true, true];
  showLable(e:any){
    console.log(e);
    switch (e.target.value){
      case '':
        switch (e.target.id){
          case 'userName':
            this.isEmpty[0] =true;
            break;
          case 'userAge':
              this.isEmpty[1] =true;
              break;
          case 'userEmail':
            this.isEmpty[2] =true;
            break;
          case 'userPassword':
            this.isEmpty[3] =true;
            break;  
          default:
            break;
          
        }
        break;
        default:
          switch (e.target.id){
            case 'userName':
              this.isEmpty[0]=false;
              break;
            case 'userAge':
                  this.isEmpty[1] =false;
                  break;
            case 'userEmail':
                this.isEmpty[2] =false;
                break;
            case 'userPassword':
                this.isEmpty[3] =false;
                break; 
            default:
            break;

          }
          break;
        }
  }

}

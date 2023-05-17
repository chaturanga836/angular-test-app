import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService , IinfoData } from '../services/data.service';

enum PasswordTypes{
  text = "text",
  password = "password"
}

@Component({
  selector: 'app-crate-from',
  templateUrl: './create-from.component.html',
  styleUrls: ['./create-from.component.css']
})
export class CreateFromComponent implements OnInit{

  private static readonly emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public profileForm  !: FormGroup
  public passwordType:PasswordTypes  = PasswordTypes.password;
  public isVisiblePassword: boolean = false;

  public isSubmitted:boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataService ){

  }

  ngOnInit(){

      this.profileForm  = this.fb.group({
        emailCtrl : new FormControl('', [Validators.required, Validators.pattern(CreateFromComponent.emailPattern)]),
        passwordCtrl: new FormControl('', [Validators.required, Validators.minLength(8)])
      });

      this.profileForm.valueChanges.subscribe( val=>{
         this.isSubmitted = false;
      });
  }

  public toggleVisiblePassword(){
    this.isVisiblePassword = ! this.isVisiblePassword;
    if(this.isVisiblePassword){
       this.passwordType = PasswordTypes.text;
    }else{
      this.passwordType = PasswordTypes.password;
    }
  }
  public onSubmit(form: FormGroup){

    if (this.profileForm.valid) {
      

      let obj:IinfoData = {
        email: this.profileForm.value.emailCtrl,
        password: this.profileForm.value.passwordCtrl
      };

      this.dataService.addInfoData(obj);

      this.profileForm.reset();
      this.isSubmitted = true;
    }

    
  }
  

  get formControl(){

    return this.profileForm.controls;
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
 listArr:any=[];
 currentData:any;

//add submit data
  handleFormSubmit(form: NgForm) {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
    console.log(typeof form.value.fullname,this.listArr);
    
    let dataExist = this.listArr.find((data:any)=>data.fullname==form.value.fullname)
    console.log(dataExist);
    if(!dataExist){
      //get date data
      let objectDate = new Date(form.value.dateVal);
        console.log(objectDate, typeof objectDate)
      let day = objectDate.getDate();
      console.log(day); // 23

      let month = objectDate.getMonth();
      let monthName = this.getMonthName(month+1)

      console.log(monthName); 

      let year = objectDate.getFullYear();
      console.log(year);
      let obj = {
        fullname: form.value.fullname,
        dateVal: `${monthName} ${day}, ${year}`,
        nickname: form.value.nickname,
        isbtnShow:false
      }
      this.listArr.push(obj)
    }
    //reset form
    form.resetForm();
    $('#staticBackdrop').modal('hide'); 
     }

     //get list data
     getConfirm(list:any){
      console.log(list);
      this.currentData=list;
      $('#secondExampleModal').modal('show'); 
     }
     //on second model click
     getInfo(data:string){
      console.log('second model click',data);
      let index = this.listArr.findIndex((x: any) => x.fullname === this.currentData.fullname);
      if(data=='delete'){
       
        console.log(index);
        this.listArr.splice(index,1)
        console.log(this.listArr);
        
      }else{
        this.listArr[index].isbtnShow=true;
      }
      $('#secondExampleModal').modal('hide'); 
      
     }


     //open form model
     openAddModel(){
      $('#staticBackdrop').modal('show'); 
     }
     //get month from date
     getMonthName(monthNumber:number) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', { month: 'short' });
    }
}

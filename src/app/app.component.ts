import { Component } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VirtualScrollApp';

  constructor(private service:DisplayService){}

  mycards:any=[];

  ngOnInit(){
  this.getData();
  }

  getData(){
    this.service.getImgs().subscribe((data)=>{
      console.log(data);
      this.mycards= data;
    });
  }
}

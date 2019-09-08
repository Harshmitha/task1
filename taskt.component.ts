import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskt',
  templateUrl: './taskt.component.html',
  styleUrls: ['./taskt.component.css']
})
export class TasktComponent implements OnInit {
  search = "";
  album="https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/:5d7247e730c9f90007b2bb6a"
  // list:string;
  // public ele=[ ]
  public moviedata;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get(this.album).subscribe(data=>{
      this.moviedata=data
      console.log("4",data)
    }) 
  }
  add(){
    this.router.navigateByUrl("taskm")
  }
//   add(){
//     this.ele.push(this.list)
//     this.list=""
//     console.log(this.ele);
//   }
// del(i){
//   this.ele.splice(i,1);
// }
}

import { Component, OnInit } from '@angular/core';
import { DataService , IinfoData } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public dataList:Array<IinfoData> = [];
  public readonly pageSize:number = 5;
  public page:number = 1;
  public totalPages:number = 0;
  public currentPage: number = 1;

  private _dataList :Array<IinfoData> = [];
  
  constructor(private dataService: DataService ){
 
  }

  ngOnInit(): void {
     this._dataList = this.dataService.getInfoData;
     this.totalPages = Math.ceil( this._dataList.length/ this.pageSize);

     this.paginate();
  }

  private paginate(){
    this.dataList = this._dataList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  public goPrev(){
    this.page -= 1;
    this.currentPage = this.page;
    this.paginate();
  }

  public goNext(){
    this.page += 1;
    this.currentPage = this.page;
    this.paginate();
  }

  public goStart(){
    this.page = 1;
    this.currentPage = this.page;
    this.paginate();
  }

  public goEnd(){
    this.page = this.totalPages;
    this.currentPage = this.page;
    this.paginate();
  }

  public onChangePage(){

    if(this.currentPage <= this.totalPages && this.currentPage !== this.page && this.page > 0){
      this.page = this.currentPage;
      this.paginate();
    }
  }

}

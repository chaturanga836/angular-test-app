import { Injectable } from '@angular/core';

export interface IinfoData {
  email:string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private infoList:Array<IinfoData> = [];

  constructor() { }

  public addInfoData(data:IinfoData){

    this.infoList.push(data);
  }

  public get getInfoData(): Array<IinfoData>{
    return this.infoList;
  }
}

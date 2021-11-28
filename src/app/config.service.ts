import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _search: any = null;
  private _data: any = null;

  constructor() { }

  public load(enviroments: any): void {
    this.search = enviroments.search;
    this.data = enviroments.data;
  }

  public get data(): any {
    return this._data;
  }

  public set data(value: any) {
    this._data = value;
  }

  public get search(): any {
    return this._search;
  }

  public set search(value: any) {
    this._search = value;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _search: any = null;

  constructor() { }

  public load(enviroments: any): void {
    this.search = enviroments.search
  }

  public get search(): any {
    return this._search;
  }

  public set search(value: any) {
    this._search = value;
  }
}

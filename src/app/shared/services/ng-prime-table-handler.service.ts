import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ITextContent } from "src/app/shared/interfaces/ITextContent";

@Injectable({
  providedIn: 'root'
})
export class NgPrimeTableHandlerService {

  private likePreffix = 'belike_';
  private notLikePreffix = 'notbelike_';
  private startsWith = '_startwith';
  private endsWith = '_endswith';

  constructor() { }

  getParamsForQuery(event: LazyLoadEvent, validFilters: any[]) {
    let page = this.getPageCurrent(event);
    let perPage = this.getPerPage(event);
    let filters = this.getFilters(event, validFilters);
    let orderBy = this.getOrderBy(event);
    let orderType = this.getOrderType(event);
    let semiParams = {
      perpage: perPage,
      page: page,
      orderBy: orderBy,
      orderType: orderType
    };
    if(semiParams.orderBy == null) {
      delete semiParams.orderBy;
      delete semiParams.orderType;
    }
    const params = Object.assign(semiParams, filters);
    return params;
  }

  getPageCurrent(event: LazyLoadEvent) {
    let first = event.first ? event.first : 1;
    let rows = event.rows ? event.rows : 1;
    let page = Math.round((first / rows) + 1);
    if(event.rows == undefined) {
      page = 1;
    }
    if (Number.isNaN(page)) {
      return 1;
    }
    return page;
  }

  getPerPage(event: LazyLoadEvent) {
    if (event.rows === undefined) {
      return 5;
    } else {
      return event.rows;
    }
  }

  getOrderBy(event: LazyLoadEvent) {
    if (event.sortField === undefined ) {
      return null;
    } else {
      return event.sortField;
    }
  }

  getOrderType(event: LazyLoadEvent) {
    if (event.sortOrder === undefined) {
      return null;
    } else if (event.sortOrder == 1) {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }

  getFilters(event: LazyLoadEvent, validFilters: any[]) {
    let params:any = null;
    if (event.filters === undefined) {

    } else {
      let filters = event.filters;
      validFilters.forEach((value) => {
        console.log(value);
        if (typeof filters[value] !== 'undefined') {
          if (filters[value].value == null) {

          } else {
            let key = this.setParamWithMatchModeAction(filters[value].matchMode, value);
            params[key] = filters[value].value;
          }
        } else {

        }
      });
    }
    return params;

  }

  setParamWithMatchModeAction(matchMode: string|undefined, param: string):string {
    switch (matchMode) {
      case 'startsWith':
        return this.likePreffix + param + this.startsWith;
      case 'contains':
        return this.likePreffix + param;
      case 'notContains':
        return this.notLikePreffix + param;
      case 'endsWith':
        return this.likePreffix + param + this.endsWith;
      case 'equals':
        return param;
      case 'notEquals':
        return param + '<>';
      default:
        return '';
    }
  }

  getFilterTextTranslation(): ITextContent {
    return {
      spanish: {
        startsWith: "Comienza con",
        contains: "Contiene",
        notContains: "No contiene",
        endsWith: "Termina con",
        equals: "Igual",
        notEquals: "No es igual",
        noFilter: "Sin filtro",
      },
      english: {
        startsWith: "Starts with",
        contains: "Contains",
        notContains: "Not contains",
        endsWith: "Ends with",
        equals: "Equals",
        notEquals: "Not equals",
        noFilter: "No filter",
      }
    }
  }

}

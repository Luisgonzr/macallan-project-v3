import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'; //npm install sweetalert2


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
  ) { }

  private getToast(didOpenFunc:()=>void,didCloseFunc:()=>void):any{
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: didOpenFunc,
      didClose: didCloseFunc
    })
  }

  /**
   * Open a toast for success message
   * this.toast.openSuccessToast('Message',()=>{},()=>{});
   * @param title Message to be displayed
   * @param didOpenFunc Can be ()=>{}
   * @param didCloseFunc Can be ()=>{}
   */
  openSuccessToast(title:string, didOpenFunc:()=>void,didCloseFunc:()=>void ){
    let toast = this.getToast(didOpenFunc,didCloseFunc)
    toast.fire({
      icon: 'success',
      title: title
    });
  }

  /**
   * Open a toast for error message
   * this.toast.openErrorToast('Message',()=>{},()=>{});
   * @param title Message to be displayed
   * @param didOpenFunc Can be ()=>{}
   * @param didCloseFunc Can be ()=>{}
   */
  openErrorToast(title:string, didOpenFunc:()=>void,didCloseFunc:()=>void  ){
    this.getToast(didOpenFunc,didCloseFunc).fire({
      icon: 'error',
      title: title
    });
  }

}





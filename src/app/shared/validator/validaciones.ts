import { FormControl } from '@angular/forms';


export const nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



export const noPuedeSer=(control:FormControl)=>{
    console.log('ingresa valid');
    let valor=control.value?.trim().toLowerCase();
    console.log(valor);
  
    if (valor==='strider') {
      console.log('return validacion');
      return{
        noStrider:true
      }
    }
    return null;
  }
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table"
import { MatInputModule } from "@angular/material/input"
import { MatDialogModule } from "@angular/material/dialog"
import { MatSelectModule } from "@angular/material/select"
import { MatRadioModule } from "@angular/material/radio"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { addToken3Interceptor } from './utils/add-token3.interceptor';


// ACA COLOCAMOS TODAS LAS IMPORTACIONES DE ANGULAR


@NgModule({
    exports:[
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule ,
        MatCardModule,
        MatIconModule
    ],


    imports:[
    CommonModule,
    // es para los mensajes
    ToastrModule.forRoot({
      timeOut: 40000, //tiempo mensjaes
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ],


    // para los interceptores
    // useClass : AddTokenInterceptor :interceptor
    // en angular 18 > son funciones por eso usamos el usevalue
    providers:[
      {provide : HTTP_INTERCEPTORS , useValue : addToken3Interceptor , multi:true}
    ]


  })
export class AppMaterialModule{

}

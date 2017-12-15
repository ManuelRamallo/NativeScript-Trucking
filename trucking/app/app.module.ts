import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {RutasService} from './services/rutas.service';
import {CamionesService} from './services/camiones.service';
import {CamionesComponent} from './camiones/camiones.component';
import {ListadoCamionesComponent} from './listado-camiones/listado-camiones.component';
import {RutasComponent} from './rutas/rutas.component';
import {ListadoRutasComponent} from './listado-rutas/listado-rutas.component';
import {CargasComponent} from './cargas/cargas.component';
import {ListadoCargasComponent} from './listado-cargas/listado-cargas.component';
import {InicioComponent} from './inicio/inicio.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        CamionesComponent,
        ListadoCamionesComponent,
        RutasComponent,
        ListadoRutasComponent,
        CargasComponent,
        ListadoCargasComponent,
        InicioComponent
    ],
    providers: [
        ItemService,
        CamionesService,
        RutasService

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

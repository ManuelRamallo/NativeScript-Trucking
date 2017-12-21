"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var rutas_service_1 = require("./services/rutas.service");
var camiones_service_1 = require("./services/camiones.service");
var camiones_component_1 = require("./camiones/camiones.component");
var listado_camiones_component_1 = require("./listado-camiones/listado-camiones.component");
var rutas_component_1 = require("./rutas/rutas.component");
var listado_rutas_component_1 = require("./listado-rutas/listado-rutas.component");
var cargas_component_1 = require("./cargas/cargas.component");
var listado_cargas_component_1 = require("./listado-cargas/listado-cargas.component");
var inicio_component_1 = require("./inicio/inicio.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                camiones_component_1.CamionesComponent,
                listado_camiones_component_1.ListadoCamionesComponent,
                rutas_component_1.RutasComponent,
                listado_rutas_component_1.ListadoRutasComponent,
                cargas_component_1.CargasComponent,
                listado_cargas_component_1.ListadoCargasComponent,
                inicio_component_1.InicioComponent
            ],
            providers: [
                item_service_1.ItemService,
                camiones_service_1.CamionesService,
                rutas_service_1.RutasService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsMERBQXNEO0FBQ3RELGdFQUE0RDtBQUM1RCxvRUFBZ0U7QUFDaEUsNEZBQXVGO0FBQ3ZGLDJEQUF1RDtBQUN2RCxtRkFBOEU7QUFDOUUsOERBQTBEO0FBQzFELHNGQUFpRjtBQUNqRiw4REFBMEQ7QUFFMUQsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBbUN0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFqQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsc0NBQWlCO2dCQUNqQixxREFBd0I7Z0JBQ3hCLGdDQUFjO2dCQUNkLCtDQUFxQjtnQkFDckIsa0NBQWU7Z0JBQ2YsaURBQXNCO2dCQUN0QixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxrQ0FBZTtnQkFDZiw0QkFBWTthQUVmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSdXRhc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcnV0YXMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2FtaW9uZXNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbWlvbmVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhbWlvbmVzQ29tcG9uZW50fSBmcm9tICcuL2NhbWlvbmVzL2NhbWlvbmVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlzdGFkb0NhbWlvbmVzQ29tcG9uZW50fSBmcm9tICcuL2xpc3RhZG8tY2FtaW9uZXMvbGlzdGFkby1jYW1pb25lcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1J1dGFzQ29tcG9uZW50fSBmcm9tICcuL3J1dGFzL3J1dGFzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlzdGFkb1J1dGFzQ29tcG9uZW50fSBmcm9tICcuL2xpc3RhZG8tcnV0YXMvbGlzdGFkby1ydXRhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nhcmdhc0NvbXBvbmVudH0gZnJvbSAnLi9jYXJnYXMvY2FyZ2FzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlzdGFkb0Nhcmdhc0NvbXBvbmVudH0gZnJvbSAnLi9saXN0YWRvLWNhcmdhcy9saXN0YWRvLWNhcmdhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0luaWNpb0NvbXBvbmVudH0gZnJvbSAnLi9pbmljaW8vaW5pY2lvLmNvbXBvbmVudCc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcclxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIENhbWlvbmVzQ29tcG9uZW50LFxyXG4gICAgICAgIExpc3RhZG9DYW1pb25lc0NvbXBvbmVudCxcclxuICAgICAgICBSdXRhc0NvbXBvbmVudCxcclxuICAgICAgICBMaXN0YWRvUnV0YXNDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyZ2FzQ29tcG9uZW50LFxyXG4gICAgICAgIExpc3RhZG9DYXJnYXNDb21wb25lbnQsXHJcbiAgICAgICAgSW5pY2lvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSXRlbVNlcnZpY2UsXHJcbiAgICAgICAgQ2FtaW9uZXNTZXJ2aWNlLFxyXG4gICAgICAgIFJ1dGFzU2VydmljZVxyXG5cclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
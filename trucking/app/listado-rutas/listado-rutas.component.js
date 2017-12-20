"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rutas_service_1 = require("../services/rutas.service");
var ListadoRutasComponent = (function () {
    function ListadoRutasComponent(servicioRutas) {
        this.servicioRutas = servicioRutas;
        this.listaRutas = [];
    }
    ListadoRutasComponent.prototype.ngOnInit = function () {
        this.listaRutas = this.servicioRutas.mostrarRutas();
    };
    ListadoRutasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-listado-rutas',
            templateUrl: './listado-rutas.component.html',
            styleUrls: ['./listado-rutas.component.scss']
        }),
        __metadata("design:paramtypes", [rutas_service_1.RutasService])
    ], ListadoRutasComponent);
    return ListadoRutasComponent;
}());
exports.ListadoRutasComponent = ListadoRutasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby1ydXRhcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YWRvLXJ1dGFzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyREFBdUQ7QUFTdkQ7SUFLRSwrQkFBb0IsYUFBMEI7UUFBMUIsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFGOUMsZUFBVSxHQUFTLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRW5ELHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFckQsQ0FBQztJQVhVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQU1rQyw0QkFBWTtPQUxuQyxxQkFBcUIsQ0FhakM7SUFBRCw0QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UnV0YXNTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9ydXRhcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtSdXRhc30gZnJvbSAnLi4vbW9kZWxzL1J1dGFzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGFkby1ydXRhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RhZG8tcnV0YXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3RhZG8tcnV0YXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGFkb1J1dGFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIGxpc3RhUnV0YXM6UnV0YXNbXT1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNpb1J1dGFzOlJ1dGFzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMubGlzdGFSdXRhcz0gdGhpcy5zZXJ2aWNpb1J1dGFzLm1vc3RyYXJSdXRhcygpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
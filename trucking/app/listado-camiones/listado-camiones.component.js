"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camiones_service_1 = require("../services/camiones.service");
var ListadoCamionesComponent = (function () {
    function ListadoCamionesComponent(servicioCamiones) {
        this.servicioCamiones = servicioCamiones;
        this.listadoCamiones = [];
    }
    ListadoCamionesComponent.prototype.ngOnInit = function () {
        this.listadoCamiones = this.servicioCamiones.mostrarCamiones();
    };
    ListadoCamionesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-listado-camiones',
            templateUrl: './listado-camiones.component.html',
            styleUrls: ['./listado-camiones.component.scss']
        }),
        __metadata("design:paramtypes", [camiones_service_1.CamionesService])
    ], ListadoCamionesComponent);
    return ListadoCamionesComponent;
}());
exports.ListadoCamionesComponent = ListadoCamionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby1jYW1pb25lcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YWRvLWNhbWlvbmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxpRUFBNkQ7QUFRN0Q7SUFLRSxrQ0FBcUIsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFIdEQsb0JBQWUsR0FBWSxFQUFFLENBQUM7SUFHNkIsQ0FBQztJQUU1RCwyQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFakUsQ0FBQztJQVhVLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNqRCxDQUFDO3lDQU11QyxrQ0FBZTtPQUwzQyx3QkFBd0IsQ0FhcEM7SUFBRCwrQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2FtaW9uZXN9IGZyb20gJy4uL21vZGVscy9DYW1pb25lcyc7XHJcbmltcG9ydCB7Q2FtaW9uZXNTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jYW1pb25lcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGFkby1jYW1pb25lcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RhZG8tY2FtaW9uZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3RhZG8tY2FtaW9uZXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGFkb0NhbWlvbmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbGlzdGFkb0NhbWlvbmVzOkNhbWlvbmVzW109W107XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzZXJ2aWNpb0NhbWlvbmVzOiBDYW1pb25lc1NlcnZpY2UgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5saXN0YWRvQ2FtaW9uZXMgPSB0aGlzLnNlcnZpY2lvQ2FtaW9uZXMubW9zdHJhckNhbWlvbmVzKCk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19
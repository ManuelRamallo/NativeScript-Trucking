"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rutas_1 = require("../models/Rutas");
var rutas_service_1 = require("../services/rutas.service");
var router_1 = require("@angular/router");
var RutasComponent = (function () {
    function RutasComponent(rutaService, route) {
        this.rutaService = rutaService;
        this.route = route;
    }
    RutasComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.ruta = this.rutaService.mostrarUnaRuta(id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Rutas_1.Rutas)
    ], RutasComponent.prototype, "ruta", void 0);
    RutasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-rutas',
            templateUrl: './rutas.component.html',
            styleUrls: ['./rutas.component.scss']
        }),
        __metadata("design:paramtypes", [rutas_service_1.RutasService, router_1.ActivatedRoute])
    ], RutasComponent);
    return RutasComponent;
}());
exports.RutasComponent = RutasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0YXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnV0YXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELHlDQUFzQztBQUN0QywyREFBdUQ7QUFDdkQsMENBQStDO0FBUS9DO0lBSUUsd0JBQW9CLFdBQXdCLEVBQVMsS0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQ3JFLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBRUksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVwRCxDQUFDO0lBVlE7UUFBUixZQUFLLEVBQUU7a0NBQU0sYUFBSztnREFBQztJQUZULGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBS2dDLDRCQUFZLEVBQWUsdUJBQWM7T0FKOUQsY0FBYyxDQWMxQjtJQUFELHFCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi4vaXRlbS9pdGVtJztcclxuaW1wb3J0IHtSdXRhc30gZnJvbSAnLi4vbW9kZWxzL1J1dGFzJztcclxuaW1wb3J0IHtSdXRhc1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3J1dGFzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1ydXRhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3J1dGFzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ydXRhcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdXRhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHJ1dGE6UnV0YXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnV0YVNlcnZpY2U6UnV0YXNTZXJ2aWNlLHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgIHRoaXMucnV0YSA9IHRoaXMucnV0YVNlcnZpY2UubW9zdHJhclVuYVJ1dGEoaWQpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
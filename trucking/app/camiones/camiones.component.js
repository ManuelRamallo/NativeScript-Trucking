"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Camiones_1 = require("../models/Camiones");
var camiones_service_1 = require("../services/camiones.service");
var router_1 = require("@angular/router");
var CamionesComponent = (function () {
    function CamionesComponent(camionesservice, route) {
        this.camionesservice = camionesservice;
        this.route = route;
    }
    CamionesComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.camion = this.camionesservice.mostrarUnCamion(id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Camiones_1.Camiones)
    ], CamionesComponent.prototype, "camion", void 0);
    CamionesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-camiones',
            templateUrl: './camiones.component.html',
            styleUrls: ['./camiones.component.scss']
        }),
        __metadata("design:paramtypes", [camiones_service_1.CamionesService, router_1.ActivatedRoute])
    ], CamionesComponent);
    return CamionesComponent;
}());
exports.CamionesComponent = CamionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBQ3ZELCtDQUE0QztBQUM1QyxpRUFBNkQ7QUFDN0QsMENBQXVEO0FBUXZEO0lBSUUsMkJBQW9CLGVBQStCLEVBQVUsS0FBcUI7UUFBOUQsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRXZGLG9DQUFRLEdBQVI7UUFFSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNELENBQUM7SUFUUTtRQUFSLFlBQUssRUFBRTtrQ0FBUSxtQkFBUTtxREFBQztJQUZkLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FLb0Msa0NBQWUsRUFBaUIsdUJBQWM7T0FKdkUsaUJBQWlCLENBYTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2FtaW9uZXN9IGZyb20gJy4uL21vZGVscy9DYW1pb25lcyc7XHJcbmltcG9ydCB7Q2FtaW9uZXNTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jYW1pb25lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1jYW1pb25lcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWlvbmVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYW1pb25lcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW1pb25lc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhbWlvbjpDYW1pb25lcztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW1pb25lc3NlcnZpY2U6Q2FtaW9uZXNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgdGhpcy5jYW1pb24gPSB0aGlzLmNhbWlvbmVzc2VydmljZS5tb3N0cmFyVW5DYW1pb24oaWQpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
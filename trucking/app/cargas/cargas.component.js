"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Carga_1 = require("../models/Carga");
var carga_service_1 = require("../services/carga.service");
var router_1 = require("@angular/router");
var CargasComponent = (function () {
    function CargasComponent(cargaService, route) {
        this.cargaService = cargaService;
        this.route = route;
    }
    CargasComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.carga = this.cargaService.mostarUnaCarga(id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Carga_1.Carga)
    ], CargasComponent.prototype, "carga", void 0);
    CargasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-cargas',
            templateUrl: './cargas.component.html',
            styleUrls: ['./cargas.component.scss']
        }),
        __metadata("design:paramtypes", [carga_service_1.cargaService, router_1.ActivatedRoute])
    ], CargasComponent);
    return CargasComponent;
}());
exports.CargasComponent = CargasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZ2FzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmdhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFDdkQseUNBQXNDO0FBQ3RDLDJEQUF1RDtBQUN2RCwwQ0FBK0M7QUFRL0M7SUFJRSx5QkFBb0IsWUFBeUIsRUFBVSxLQUFxQjtRQUF4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUksQ0FBQztJQUVqRixrQ0FBUSxHQUFSO1FBRUksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUd0RCxDQUFDO0lBVlE7UUFBUixZQUFLLEVBQUU7a0NBQVEsYUFBSztrREFBQztJQUZYLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBS2lDLDRCQUFZLEVBQWlCLHVCQUFjO09BSmpFLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhcmdhfSBmcm9tICcuLi9tb2RlbHMvQ2FyZ2EnO1xyXG5pbXBvcnQge2NhcmdhU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY2FyZ2Euc2VydmljZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWNhcmdhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcmdhcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZ2FzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmdhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhcmdhOiBDYXJnYTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJnYVNlcnZpY2U6Y2FyZ2FTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgdGhpcy5jYXJnYSA9IHRoaXMuY2FyZ2FTZXJ2aWNlLm1vc3RhclVuYUNhcmdhKGlkKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19
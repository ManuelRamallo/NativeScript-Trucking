"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var carga_service_1 = require("../services/carga.service");
var ListadoCargasComponent = (function () {
    function ListadoCargasComponent(cargasService) {
        this.cargasService = cargasService;
        this.listaCarga = [];
    }
    ListadoCargasComponent.prototype.ngOnInit = function () {
        this.listaCarga = this.cargasService.mostrarCarga();
    };
    ListadoCargasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-listado-cargas',
            templateUrl: './listado-cargas.component.html',
            styleUrls: ['./listado-cargas.component.scss']
        }),
        __metadata("design:paramtypes", [carga_service_1.cargaService])
    ], ListadoCargasComponent);
    return ListadoCargasComponent;
}());
exports.ListadoCargasComponent = ListadoCargasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby1jYXJnYXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGFkby1jYXJnYXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJEQUF1RDtBQVN2RDtJQUlFLGdDQUFvQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUYvQyxlQUFVLEdBQVMsRUFBRSxDQUFBO0lBRThCLENBQUM7SUFFcEQseUNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBVFUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBS21DLDRCQUFZO09BSnBDLHNCQUFzQixDQVdsQztJQUFELDZCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtjYXJnYVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2NhcmdhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhcmdhfSBmcm9tICcuLi9tb2RlbHMvQ2FyZ2EnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1saXN0YWRvLWNhcmdhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RhZG8tY2FyZ2FzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0YWRvLWNhcmdhcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0YWRvQ2FyZ2FzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbGlzdGFDYXJnYTpDYXJnYVtdPVtdXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FyZ2FzU2VydmljZTogY2FyZ2FTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5saXN0YUNhcmdhPSB0aGlzLmNhcmdhc1NlcnZpY2UubW9zdHJhckNhcmdhKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
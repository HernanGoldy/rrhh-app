package hg.rrhhClorinda.controllers;

import hg.rrhhClorinda.models.Empleado;
import hg.rrhhClorinda.service.EmpleadoServicioImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//http://localhost:8080/rrhh-app/
@RequestMapping("rrhh-app")
@CrossOrigin(value = "http://localhost:5173")
public class EmpleadoControlador {

    @Autowired
    private EmpleadoServicioImp empleadoServicio;

    //http://localhost:8080/rrhh-app/empleados
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados() {
        return empleadoServicio.listarEmpleados();
    }

    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado) {
        return empleadoServicio.guardarEmpleado(empleado);
    }
}

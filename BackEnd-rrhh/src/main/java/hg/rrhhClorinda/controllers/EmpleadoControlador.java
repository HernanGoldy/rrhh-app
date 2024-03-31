package hg.rrhhClorinda.controllers;

import hg.rrhhClorinda.exception.RecursoNoEncontradoException;
import hg.rrhhClorinda.models.Empleado;
import hg.rrhhClorinda.service.EmpleadoServicioImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id) {
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);

        if (empleado == null) {
            throw new RecursoNoEncontradoException("Empleado " + id + " no encontrado");
        }
        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id,
                                                       @RequestBody Empleado empleadoRecibido) {
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null) {
            throw new RecursoNoEncontradoException("Empleado " + id + " no existe");
        } else {
            empleado.setNombre(empleadoRecibido.getNombre());
            empleado.setApellido(empleadoRecibido.getApellido());
            empleado.setDepartamento(empleadoRecibido.getDepartamento());
            empleado.setSueldo(empleadoRecibido.getSueldo());
        }
        empleadoServicio.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    }
}

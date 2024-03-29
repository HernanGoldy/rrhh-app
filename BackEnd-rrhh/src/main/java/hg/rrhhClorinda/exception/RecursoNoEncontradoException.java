package hg.rrhhClorinda.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNoEncontradoException extends RuntimeException {
    // Constructor
    public RecursoNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}

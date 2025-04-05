package com.dc.vehiculo.controller;
import com.dc.vehiculo.model.Vehiculo;
import com.dc.vehiculo.service.VehiculoService;
import com.dc.vehiculo.service.impl.VehiculoServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehiculo")
@CrossOrigin(origins = "http://localhost:5173/")
public class VehiculoController {

    @Autowired
    private VehiculoServiceImpl vehiculoServiceImpl;

    @PostMapping
    public ResponseEntity<Vehiculo> crearVehiculo (@RequestBody Vehiculo vehiculo){
        Vehiculo vehiculoCreado = vehiculoServiceImpl.crearVehiculo(vehiculo);
        return ResponseEntity.status(HttpStatus.CREATED).body(vehiculoCreado);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Optional<Vehiculo>> buscarVehiculoPorId(@PathVariable Long id){
        Optional<Vehiculo> vehiculoOptional = vehiculoServiceImpl.buscarVehiculoPorId(id);
        return ResponseEntity.ok().body(vehiculoOptional);
    }

    @GetMapping
    public ResponseEntity<List<Vehiculo>> listarVehiculos(){
        List<Vehiculo> vehiculoList = vehiculoServiceImpl.listarVehiculos();
        return ResponseEntity.ok().body(vehiculoList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehiculo> actualizarVehiculo(@PathVariable Long id, @RequestBody Vehiculo vehiculo){
        return vehiculoServiceImpl.buscarVehiculoPorId(id)
                .map(existingVehiculo -> {
                    Vehiculo vehiculoActualizado = vehiculoServiceImpl.actualizarVehiculo(id, vehiculo);
                    return ResponseEntity.ok(vehiculoActualizado);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarVehiculo (@PathVariable Long id){
        vehiculoServiceImpl.eliminarVehiculo(id);
        return ResponseEntity.noContent().build();
    }
}

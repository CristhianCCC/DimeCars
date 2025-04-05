package com.dc.vehiculo.service;
import com.dc.vehiculo.model.Vehiculo;
import org.hibernate.sql.Delete;

import java.util.List;
import java.util.Optional;

public interface VehiculoService {

    public Vehiculo crearVehiculo (Vehiculo vehiculo);

    public Optional<Vehiculo> buscarVehiculoPorId(Long id);

    public List<Vehiculo> listarVehiculos ();

    public Vehiculo actualizarVehiculo (Long id, Vehiculo vehiculo);

    public void eliminarVehiculo (Long id);
}

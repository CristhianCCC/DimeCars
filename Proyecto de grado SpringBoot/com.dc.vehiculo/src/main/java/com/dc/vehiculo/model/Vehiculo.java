package com.dc.vehiculo.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private Double precio;

    private String descripcion;


}

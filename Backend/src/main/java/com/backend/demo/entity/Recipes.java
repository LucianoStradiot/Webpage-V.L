package com.backend.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Recipes {
    @Id
    private Long id;
    private Foto foto;
    private Titulo titulo;
    private Descripcion descripcion;
    private String link;
}

package com.backend.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Admin {

    @Id
    @NotNull
    private Long id;

    @NotNull
    private String username;
    @NotNull
    private String password;




}

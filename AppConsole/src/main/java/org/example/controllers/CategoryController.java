package org.example.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

    @GetMapping("/")
    public ResponseEntity<String> index() {
        return new ResponseEntity<>("Привіт", HttpStatus.OK);
    }
}

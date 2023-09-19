package org.example.controllers;

import lombok.AllArgsConstructor;
import org.example.dto.category.CategoryCreateDTO;
import org.example.entities.CategoryEntity;
import org.example.repositories.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
public class CategoryController {

    private final CategoryRepository categoryRepository;
    @GetMapping()
    public ResponseEntity<List<CategoryEntity>> index() {
        return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping()
    public CategoryEntity create(@RequestBody CategoryCreateDTO dto)
    {
        var cat = CategoryEntity
                .builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .image(dto.getImage())
                .build();
        categoryRepository.save(cat);
        return cat;
    }
}

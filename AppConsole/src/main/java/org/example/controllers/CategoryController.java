package org.example.controllers;

import lombok.AllArgsConstructor;
import org.example.dto.category.CategoryCreateDTO;
import org.example.dto.category.CategoryItemDTO;
import org.example.dto.category.CategoryUpdateDTO;
import org.example.entities.CategoryEntity;
import org.example.mappers.CategoryMapper;
import org.example.repositories.CategoryRepository;
import org.example.storage.StorageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final StorageService storageService;
    private final CategoryMapper categoryMapper;
    @GetMapping()
    public ResponseEntity<List<CategoryItemDTO>> index() {
        var result = categoryMapper.listCategoriesToItemDto(categoryRepository.findAll());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public CategoryItemDTO create(@ModelAttribute CategoryCreateDTO dto)
    {
        Date currentDate = new Date(); // Get the current date and time
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy HH:mm:ss"); // Define the desired date format
        String formattedDate = dateFormat.format(currentDate);
        String dateString = formattedDate; // Your date string in yyyy-MM-dd format
        Date date = null;
        try {
            date = dateFormat.parse(dateString);
            System.out.println("Parsed Date: " + date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if(date!=null) {
            String fileName = storageService.saveImage(dto.getImage());
            var instant = date.toInstant();
            var zoneId = ZoneId.systemDefault(); // Use the system default time zone or specify your desired time zone
            var localDateTime = instant.atZone(zoneId).toLocalDateTime();
            var cat = CategoryEntity
                    .builder()
                    .name(dto.getName())
                    .description(dto.getDescription())
                    .image(fileName)
                    .dateCreate(localDateTime)
                    .build();
            categoryRepository.save(cat);
            return categoryMapper.categoryToItemDTO(cat);
        }
        return null;
    }

    @GetMapping("{id}")
    public ResponseEntity<CategoryItemDTO> getCategoryById(@PathVariable int id) {
        Optional<CategoryEntity> catOpt = categoryRepository.findById(id);
        if(catOpt.isPresent())
        {
            var result = categoryMapper.categoryToItemDTO(catOpt.get());
            return ResponseEntity.ok().body(result);
        }
        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCategoryById(@PathVariable int id) {
        Optional<CategoryEntity> catOpt = categoryRepository.findById(id);
        if(catOpt.isPresent())
        {
            var cat = catOpt.get();
            if(cat.getImage()!=null) {
                storageService.removeFile(cat.getImage());
            }
            categoryRepository.delete(cat);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value="{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<CategoryItemDTO> updateCategoryById(@PathVariable int id, @ModelAttribute CategoryUpdateDTO dto) {
        Optional<CategoryEntity> catOpt = categoryRepository.findById(id);
        if(catOpt.isPresent())
        {
            var cat = catOpt.get();
            if(dto.getImage()!=null) {
                if (cat.getImage() != null) {
                    storageService.removeFile(cat.getImage());
                }
                String fileName = storageService.saveImage(dto.getImage());
                cat.setImage(fileName);
            }
            cat.setName(dto.getName());
            cat.setDescription(dto.getDescription());
            categoryRepository.save(cat);
            var result = categoryMapper.categoryToItemDTO(cat);
            return ResponseEntity.ok().body(result);
        }
        return ResponseEntity.notFound().build();
    }
}

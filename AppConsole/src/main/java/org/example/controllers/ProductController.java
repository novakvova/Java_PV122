package org.example.controllers;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import org.example.dto.product.ProductCreateDTO;
import org.example.entities.ProductEntity;
import org.example.entities.ProductImageEntity;
import org.example.mappers.ProductMapper;
import org.example.repositories.ProductImageRepository;
import org.example.repositories.ProductRepository;
import org.example.storage.StorageService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@SecurityRequirement(name="my-api")
public class ProductController {
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final ProductMapper productMapper;
    private final StorageService storageService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ProductEntity> create(@ModelAttribute ProductCreateDTO dto) {
        ProductEntity product = productMapper.productByCreateProductDTO(dto);
        product.setImages(new ArrayList<>());
        productRepository.save(product);
        for(MultipartFile image : dto.getImages()) {
            String fileName = storageService.saveImage(image);
            ProductImageEntity pi = ProductImageEntity.builder()
                    .product(product)
                    .image(fileName)
                    .build();
            productImageRepository.save(pi);
            product.getImages().add(pi);
        }
        return ResponseEntity.ok().body(product);
    }
}

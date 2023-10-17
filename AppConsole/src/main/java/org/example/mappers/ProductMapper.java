package org.example.mappers;

import org.example.dto.product.ProductItemDTO;
import org.example.entities.CategoryEntity;
import org.example.entities.ProductEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(target = "categoryId", source = "category.id")
    ProductItemDTO productToItemDTO(ProductEntity product);

    @Named("categoryIdToCategory")
    static CategoryEntity categoryIdToCategory(int categoryId) {
        CategoryEntity category = CategoryEntity
                .builder()
                .id(categoryId)
                .build();

        return category;
    }
}

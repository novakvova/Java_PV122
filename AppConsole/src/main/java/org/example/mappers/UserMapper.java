package org.example.mappers;

import org.example.dto.category.CategoryItemDTO;
import org.example.dto.user.UserItemDTO;
import org.example.entities.CategoryEntity;
import org.example.entities.UserEntity;
import org.example.entities.UserRoleEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "roles", source = "userRoles", qualifiedByName = "userToListRoles")
    UserItemDTO userToItemDTO(UserEntity user);
    List<UserItemDTO> listUsersToItemDto(List<UserEntity> list);
    @Named("userToListRoles")
    static String [] userToListRoles(List<UserRoleEntity> userRoles) {
        String [] list = userRoles.stream()                                      //витягується списочок ролей, які є у юзера
                .map((role) -> role.getRole().getName()).toArray(String []:: new);
        return list;
    }
}

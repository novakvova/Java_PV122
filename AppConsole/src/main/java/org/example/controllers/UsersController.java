package org.example.controllers;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import org.example.dto.category.CategoryItemDTO;
import org.example.dto.user.UserItemDTO;
import org.example.entities.UserEntity;
import org.example.mappers.CategoryMapper;
import org.example.mappers.UserMapper;
import org.example.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@SecurityRequirement(name="my-api")
public class UsersController {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    @GetMapping()
    public ResponseEntity<List<UserItemDTO>> index() {
        var result = userMapper.listUsersToItemDto(userRepository.findAll());// categoryMapper.listCategoriesToItemDto(categoryRepository.findAll());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

package org.example.services;

import lombok.AllArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.CategoryEntity;
import org.example.entities.RoleEntity;
import org.example.entities.UserEntity;
import org.example.entities.UserRoleEntity;
import org.example.repositories.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.Date;

@Service
@AllArgsConstructor
public class SeedService {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    public void seedRoleData() {
        if(roleRepository.count()==0) {
            var admin = RoleEntity
                    .builder()
                    .name(Roles.Admin)
                    .build();
            roleRepository.save(admin);

            var user = RoleEntity
                    .builder()
                    .name(Roles.User)
                    .build();
        }
    }
    public void seedUserData() {
        if(userRepository.count() == 0) {
            var user = UserEntity
                    .builder()
                    .firstName("Валера")
                    .lastName("Підкаблучник")
                    .email("admin@gmail.com")
                    .phone("+38096 234 56 33")
                    .password(passwordEncoder.encode("123456"))
                    .build();
            userRepository.save(user);
            var role = roleRepository.findByName(Roles.Admin);
            var ur = UserRoleEntity
                    .builder()
                    .role(role)
                    .user(user)
                    .build();
            userRoleRepository.save(ur);
        }
    }

    public void seedCategory() {
        if(categoryRepository.count()==0) {
            Date currentDate = new Date(); // Get the current date and time
            var instant = currentDate.toInstant();
            var zoneId = ZoneId.systemDefault(); // Use the system default time zone or specify your desired time zone
            var localDateTime = instant.atZone(zoneId).toLocalDateTime();
            var laptop = CategoryEntity
                    .builder()
                    .name("Ноутбуки")
                    .description("Для дорослих і малих")
                    .image("laptop.webp")
                    .dateCreate(localDateTime)
                    .build();
            categoryRepository.save(laptop);

            var clothes = CategoryEntity
                    .builder()
                    .name("Одяг")
                    .description("Для дівчат та хлопців")
                    .image("clothes.webp")
                    .dateCreate(localDateTime)
                    .build();
            categoryRepository.save(clothes);
        }
    }
}

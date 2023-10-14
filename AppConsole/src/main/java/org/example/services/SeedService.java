package org.example.services;

import lombok.AllArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.*;
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
    private final ProductImageRepository productImageRepository;

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

    public void seedProduct() {
        if(productRepository.count()==0) {
            var laptop = CategoryEntity
                    .builder()
                    .id(1)
                    .build();
            var hp= ProductEntity
                    .builder()
                    .name("Ноутбук HP ProBook 440 G10")
                    .description("Экран 14\" IPS (1920x1080) Full HD, матовый / Intel Core i5-1335U (3.4 - 4.6 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 2050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.38 кг / серебристый")
                    .category(laptop)
                    .build();
            productRepository.save(hp);

            var dell= ProductEntity
                    .builder()
                    .name("Ноутбук Dell Latitude 5430")
                    .description("Экран 14\" WVA (1920x1080) Full HD, матовый / Intel Core i5-1235U (3.3 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel Iris Xe Graphics / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Linux / 1.36 кг / серый")
                    .category(laptop)
                    .build();
            productRepository.save(dell);

            var clothes = CategoryEntity
                    .builder()
                    .id(2)
                    .build();
            var girl= ProductEntity
                    .builder()
                    .name("Толстовка New Balance Q Speed Sherpa WJ33285BK L Черная")
                    .description("Собираетесь ли вы на пробежку или просто на прогулку, толстовка New Balance Q Speed Sherpa создана для того, чтобы идти в ногу с вами.")
                    .category(clothes)
                    .build();
            productRepository.save(girl);
        }
    }

    public void seedProductImage() {
        if(productImageRepository.count()==0) {
            var hpProbook = ProductEntity
                    .builder()
                    .id(1)
                    .build();
            var image1= ProductImageEntity
                    .builder()
                    .image("probook1.webp")
                    .product(hpProbook)
                    .build();
            productImageRepository.save(image1);

            var image2= ProductImageEntity
                    .builder()
                    .image("probook2.webp")
                    .product(hpProbook)
                    .build();
            productImageRepository.save(image2);
            var image3= ProductImageEntity
                    .builder()
                    .image("probook3.webp")
                    .product(hpProbook)
                    .build();
            productImageRepository.save(image3);
        }
    }
}

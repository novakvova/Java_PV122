package org.example.configuration;

import lombok.AllArgsConstructor;
import org.example.storage.StorageProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@AllArgsConstructor
public class AdditionalResourceWebConfig implements WebMvcConfigurer {
    private final StorageProperties storageProperties;
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/"+storageProperties.getFolder()+"/**")
                .addResourceLocations("file:"+storageProperties.getFolder()+"\\");
    }
}

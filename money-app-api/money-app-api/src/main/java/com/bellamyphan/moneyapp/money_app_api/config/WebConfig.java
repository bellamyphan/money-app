package com.bellamyphan.moneyapp.money_app_api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow cross-origin requests for all endpoints under /api/**
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200")  // Allow Angular app running on localhost:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Specify allowed methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);  // Allow credentials (cookies, authentication)
    }
}
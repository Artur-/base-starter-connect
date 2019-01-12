package com.vaadin.connect.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.vaadin.connect.oauth.EnableVaadinConnectOAuthServer;

/**
 * Spring boot starter class.
 */
@SpringBootApplication
@EnableVaadinConnectOAuthServer
public class StarterApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(StarterApplication.class);
    }

    /**
     * Main method to run the application.
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(StarterApplication.class, args);
    }
}

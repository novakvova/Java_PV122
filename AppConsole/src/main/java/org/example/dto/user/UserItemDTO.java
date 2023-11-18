package org.example.dto.user;

import lombok.Data;

@Data
public class UserItemDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String [] roles;
}

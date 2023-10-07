package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.account.AuthResponseDto;
import org.example.dto.account.GoogleAuthDto;
import org.example.dto.account.LoginDto;
import org.example.services.AccountService;
import org.example.services.GoogleApiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/account")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService service;
    private final GoogleApiService googleApiService;

    @PostMapping("login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto dto) {
        try {
            var auth = service.login(dto);
            return ResponseEntity.ok(auth);
        }catch(Exception ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("google")
    public ResponseEntity<AuthResponseDto> googleLogin(@RequestBody GoogleAuthDto dto) {
        try {
//            var auth = service.login(dto);
            var user = googleApiService.getUserInfo(dto.getAccess_token());
            var auth = AuthResponseDto.builder().build();
            return ResponseEntity.ok(auth);
        }catch(Exception ex) {
            System.out.println("---Error----"+ ex.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}

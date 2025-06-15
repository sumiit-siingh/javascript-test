package com.loginapp.loginbackend.controller;

import com.loginapp.loginbackend.dto.LoginRequest;
import com.loginapp.loginbackend.dto.SignupRequest;
import com.loginapp.loginbackend.dto.UserResponse;
import com.loginapp.loginbackend.model.User;
import com.loginapp.loginbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public UserResponse registerUser(@RequestBody SignupRequest signupRequest) {
        User user = userService.registerUser(signupRequest);
        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }

    @PostMapping("/login")
    public UserResponse loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }
}

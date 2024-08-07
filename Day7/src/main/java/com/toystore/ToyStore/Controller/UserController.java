package com.toystore.ToyStore.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.toystore.ToyStore.Model.User;
import com.toystore.ToyStore.Service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/userauth")
public class UserController {

    @Autowired
    private UserService uService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        User existUser = uService.findUserByEmail(user.getEmail());
        if (existUser == null) {
            uService.registerUser(user);
            return "saved";
        } else {
            return "exist";
        }
    }

    @GetMapping("/signin")
    public ResponseEntity<User> signIn(@RequestParam String email, @RequestParam String password) {
        User user = uService.authorizeUser(email, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = uService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        User existingUser = uService.findUserById(id);
        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }

        existingUser.setBlocked(updatedUser.isBlocked());
        uService.updateUser(existingUser);
        return ResponseEntity.ok(existingUser);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        User existingUser = uService.findUserById(id);
        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }

        uService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/verify-password")
    public ResponseEntity<Void> verifyPassword(@RequestParam String email, @RequestParam String password) {
        boolean isVerified = uService.verifyPassword(email, password);
        if (isVerified) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}

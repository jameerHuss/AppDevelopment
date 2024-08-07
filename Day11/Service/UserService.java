package com.toystore.ToyStore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.toystore.ToyStore.Model.User;
import com.toystore.ToyStore.Repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void registerUser(User user) {
        userRepository.save(user);
    }

    public User authorizeUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean verifyPassword(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);
        return user != null;
    }
}

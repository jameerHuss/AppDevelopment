package com.toystore.ToyStore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.toystore.ToyStore.Model.Admin;
import java.util.*;
@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByEmail(String email);
    Admin findByEmailAndPassword(String email, String password);
    List<Admin> findByRole(String role);
}

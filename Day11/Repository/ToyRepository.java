package com.toystore.ToyStore.Repository;

import com.toystore.ToyStore.Model.Toy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToyRepository extends JpaRepository<Toy, Long> {
}

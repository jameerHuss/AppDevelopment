package com.toystore.ToyStore.Service;

import com.toystore.ToyStore.Model.Toy;
import com.toystore.ToyStore.Repository.ToyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToyService {
    @Autowired
    private ToyRepository toyRepository;

    public List<Toy> getAllToys() {
        return toyRepository.findAll();
    }

    public Optional<Toy> getToyById(Long id) {
        return toyRepository.findById(id);
    }

    public Toy saveToy(Toy toy) {
        return toyRepository.save(toy);
    }

    public void deleteToy(Long id) {
        toyRepository.deleteById(id);
    }
}
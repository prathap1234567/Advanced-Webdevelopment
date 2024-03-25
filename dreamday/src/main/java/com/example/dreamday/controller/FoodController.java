
package com.example.dreamday.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dreamday.entity.Food;
import com.example.dreamday.entity.Theme;
import com.example.dreamday.repository.Foodrepo;

@RestController
@RequestMapping("/food")
public class FoodController {
     @Autowired
    private Foodrepo repository;
    @GetMapping("/gall")
    @PreAuthorize("hasAuthority('admin')")
    public List<Food> getAllTheProducts() {
        return repository.findAll();
    }
   
    @PostMapping("/addfood")
    @PreAuthorize("hasAuthority('admin')")
    public void postAllTheProducts(@RequestBody Food e) {
        repository.save(e);
    }
     @PutMapping("/updateFood")
    @PreAuthorize("hasAuthority('admin')")
    public void updTheme(@RequestBody Food t) {
        repository.saveAndFlush(t);;
    }
    @DeleteMapping("/del/{id}")
    @PreAuthorize("hasAuthority('admin')")
    public void delTheme(@PathVariable int id) {
        repository.deleteById(id);;
    }
}
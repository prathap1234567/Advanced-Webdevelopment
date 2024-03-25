package com.example.dreamday.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.dreamday.entity.Food;


public interface Foodrepo extends JpaRepository<Food, Integer> {
    

}
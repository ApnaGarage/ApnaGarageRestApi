package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.Location;

public interface LocationRepo extends JpaRepository<Location, Integer> {

	
	
}

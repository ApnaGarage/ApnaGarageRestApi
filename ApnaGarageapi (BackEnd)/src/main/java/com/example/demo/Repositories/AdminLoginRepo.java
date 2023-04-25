package com.example.demo.Repositories;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.AdminLogin;
import com.example.demo.Entities.User;

public interface AdminLoginRepo extends JpaRepository<AdminLogin,String> {

	 AdminLogin findByEmail(String email); 
	
}

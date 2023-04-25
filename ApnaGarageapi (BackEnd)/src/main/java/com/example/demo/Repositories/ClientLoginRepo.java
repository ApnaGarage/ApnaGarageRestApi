package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.AdminLogin;
import com.example.demo.Entities.ClientLogin;

public interface ClientLoginRepo extends JpaRepository<ClientLogin,String>{

	 ClientLogin findByEmail(String email); 

}

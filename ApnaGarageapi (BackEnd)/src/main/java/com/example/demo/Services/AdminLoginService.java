package com.example.demo.Services;

import java.util.List;

import com.example.demo.Entities.AdminLogin;
import com.example.demo.payloads.AdminLoginDto;
import com.example.demo.payloads.LocationDto;
import com.example.demo.payloads.UserDto;

public interface AdminLoginService {
	//create   locationDto);
public 	AdminLoginDto createAdminLogin(AdminLoginDto adminLoginDto);

	
		//update
	AdminLoginDto varifyAdminLogin (String emailId);
		
		
		//delete
			public void   deleteAdminLogin (String emailId);
			
		
		//get
			AdminLoginDto getAdminLogin (String emailId);
			 
			 //getAll
			 List< AdminLoginDto>getAdminLogins();
}

package com.example.demo.Services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.AdminLogin;
import com.example.demo.Repositories.AdminLoginRepo;
import com.example.demo.Services.AdminLoginService;
import com.example.demo.payloads.AdminLoginDto;

@Service
public class AdminLoginServiceImpl implements AdminLoginService {

	@Autowired
	private AdminLoginRepo adminLoginRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public AdminLoginDto varifyAdminLogin(String emailId) {
		AdminLogin cat=this.adminLoginRepo.findByEmail(emailId);
		
		if(cat.getEmail()==emailId)
		{return this.modelMapper.map(cat, AdminLoginDto.class);}
		else
		{return this.modelMapper.map(cat, AdminLoginDto.class);}
		
//cat.setEmail(adminLoginDto.getEmail());
//cat.setPassword(adminLoginDto.getPassword());
//AdminLogin updatedcat=this.adminLoginRepo.save(cat);
//		return this.modelMapper.map(updatedcat, AdminLoginDto.class);
//		
	}

	@Override
	public void deleteAdminLogin(String emailId) {
		AdminLogin cat=this.adminLoginRepo.findByEmail(emailId);
		this.adminLoginRepo.delete(cat);
		
	}

	@Override
	public AdminLoginDto getAdminLogin(String emailId) {
		AdminLogin cat=this.adminLoginRepo.findByEmail(emailId);
		
		return this.modelMapper.map(cat,AdminLoginDto.class); 
	}

	@Override
	public List<AdminLoginDto> getAdminLogins() {
		List<AdminLogin> adminLogins= this.adminLoginRepo.findAll();
		List<AdminLoginDto> catDtos=adminLogins.stream().map((cat)->this.modelMapper.map(cat,AdminLoginDto.class)).collect(Collectors.toList());
				return catDtos;
	}

	
	@Override
	public  AdminLoginDto createAdminLogin(AdminLoginDto adminLoginDto) {
		
		AdminLogin cat=	this.modelMapper.map(adminLoginDto, AdminLogin.class);
		AdminLogin addedcat=this.adminLoginRepo.save(cat);
			return this.modelMapper.map(addedcat,AdminLoginDto.class);
	}

}

package com.example.demo.Services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.AdminLogin;
import com.example.demo.Entities.ClientLogin;
import com.example.demo.Repositories.AdminLoginRepo;
import com.example.demo.Repositories.ClientLoginRepo;
import com.example.demo.Services.ClientLoginService;
import com.example.demo.payloads.AdminLoginDto;
import com.example.demo.payloads.ClientLoginDto;


@Service
public class ClientLoginServiceImpl implements ClientLoginService {

	
	@Autowired
	private ClientLoginRepo clientLoginRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ClientLoginDto createClientLogin(ClientLoginDto clientLoginDto) {
		ClientLogin cat=this.modelMapper.map(clientLoginDto, ClientLogin.class);
		ClientLogin addedcat=this.clientLoginRepo.save(cat);
			return this.modelMapper.map(addedcat,ClientLoginDto.class);
		
	}

	@Override
	public ClientLoginDto varifyClientLogin(String emailId) {
      ClientLogin cat=this.clientLoginRepo.findByEmail(emailId);
		
		if(cat.getEmail()==emailId)
		{return this.modelMapper.map(cat, ClientLoginDto.class);}
		else
		{return this.modelMapper.map(cat, ClientLoginDto.class);}
		
	}

	@Override
	public void deleteClientLogin(String emailId) {
		ClientLogin cat=this.clientLoginRepo.findByEmail(emailId);
		this.clientLoginRepo.delete(cat);;
		
	}

	@Override
	public ClientLoginDto getClientLogin(String emailId) {
		ClientLogin cat=this.clientLoginRepo.findByEmail(emailId);
		
		return this.modelMapper.map(cat,ClientLoginDto.class); 
	}

	@Override
	public List<ClientLoginDto> getClientLogins() {
		List<ClientLogin> clientLogins= this.clientLoginRepo.findAll();
		List<ClientLoginDto> catDtos=clientLogins.stream().map((cat)->this.modelMapper.map(cat,ClientLoginDto.class)).collect(Collectors.toList());
				return catDtos;
	}

}

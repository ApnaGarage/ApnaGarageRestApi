package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.AdminLoginService;
import com.example.demo.Services.ClientLoginService;
import com.example.demo.payloads.AdminLoginDto;
import com.example.demo.payloads.ApiResponce;
import com.example.demo.payloads.ClientLoginDto;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
public class ClientLogin {
	
	@Autowired
	private ClientLoginService clientLoginService;
	
	@GetMapping("/{emailId}") //userPath variable
	public ResponseEntity<ClientLoginDto> varifyClientLogin( @PathVariable("emailId") String  emailId)
	{
		ClientLoginDto varifyClientLoginDto=this.clientLoginService.varifyClientLogin(emailId);
	return  new ResponseEntity<ClientLoginDto>(varifyClientLoginDto ,HttpStatus.OK);
	}

	

	@PostMapping("/")
	public  ResponseEntity<ClientLoginDto> createClientLogin( @RequestBody ClientLoginDto clientLoginDto)
	{
		ClientLoginDto createClientLoginDto=this.clientLoginService.createClientLogin(clientLoginDto);
		return new ResponseEntity<ClientLoginDto>(createClientLoginDto, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{emailId}")
	public ResponseEntity<ApiResponce> deleteClientLogin(@PathVariable("emailId") String  emailid)
	{
		this.clientLoginService.deleteClientLogin(emailid);
		return  new ResponseEntity<ApiResponce> (new ApiResponce("User successfully delete", true),HttpStatus.OK);
		
		
	}
	
	
	@GetMapping("/alluser")
	public ResponseEntity<List<ClientLoginDto>> getClientLogins()
	{
		return ResponseEntity.ok(this.clientLoginService.getClientLogins());
	}
}

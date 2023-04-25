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
import com.example.demo.payloads.AdminLoginDto;
import com.example.demo.payloads.ApiResponce;

@RestController
@RequestMapping("/api/adminlogin")
@CrossOrigin("*")
public class AdminLogin {
	@Autowired
	private AdminLoginService adminLoginService;
	

	@GetMapping("/{emailId}") //userPath variable
	public ResponseEntity<AdminLoginDto> varifyAdminLogin( @PathVariable("emailId") String  emailId)
	{
		AdminLoginDto varifyAdminLoginDto=	this.adminLoginService.varifyAdminLogin(emailId);
	return  new ResponseEntity<AdminLoginDto>(varifyAdminLoginDto ,HttpStatus.OK);
	}
	
	@PostMapping("/postadmin")
	public  ResponseEntity<AdminLoginDto> createAdminLogin( @RequestBody AdminLoginDto adminLoginDto)
	{
		AdminLoginDto createAdminLoginDto=this.adminLoginService.createAdminLogin(adminLoginDto);
		return new ResponseEntity<AdminLoginDto>(createAdminLoginDto, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{emailId}")
	public ResponseEntity<ApiResponce> deleteAdminLogin(@PathVariable("emailId") String  emailid)
	{
		this.adminLoginService.deleteAdminLogin(emailid);
		return  new ResponseEntity<ApiResponce> (new ApiResponce("User successfully delete", true),HttpStatus.OK);
		
		
	}
	
	
	@GetMapping("/alluser")
	public ResponseEntity<List<AdminLoginDto>> getAdminLogins()
	{
		return ResponseEntity.ok(this.adminLoginService.getAdminLogins());
	}
	
	
//	@GetMapping("/{emailId}")
//	public  ResponseEntity<AdminLoginDto> getAdminLogin(@PathVariable String emailId )
//	{
//		AdminLoginDto adminLoginDto=this.adminLoginService.getAdminLogin(emailId);
//		return new  ResponseEntity<AdminLoginDto>(adminLoginDto,HttpStatus.OK);
//	
//	}
//	
	
	
}

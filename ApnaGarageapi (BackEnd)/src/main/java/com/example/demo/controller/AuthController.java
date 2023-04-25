/*package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Security.JwtTokenHelper;
import com.example.demo.payloads.JwtAuthRequest;
import com.example.demo.payloads.JwtAuthResponce;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
	
@Autowired
private JwtTokenHelper jwtTokenHelper;

@Autowired
private UserDetailsService  userDetailsService;

@Autowired
private AuthenticationManager authenticationManager;
	
	@PostMapping("/login")
 public ResponseEntity<JwtAuthResponce> createToken(@RequestBody JwtAuthRequest request)
{
	this.authenticate(request.getUsername(),request.getPassword()) ;
	UserDetails	userDetails =	this.userDetailsService.loadUserByUsername(request.getUsername());
	String token = this.jwtTokenHelper.generateToken(userDetails);
	JwtAuthResponce responce=new JwtAuthResponce();
	responce.setToken(token);
	return new ResponseEntity<JwtAuthResponce>(responce,HttpStatus.OK);
	
 }

	private void authenticate(String username, String password) {
		
		UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username,password);
		
		this.authenticationManager.authenticate(authenticationToken);
		
	}
	
}*/

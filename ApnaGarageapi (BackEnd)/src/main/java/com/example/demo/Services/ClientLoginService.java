package com.example.demo.Services;

import java.util.List;

import com.example.demo.payloads.AdminLoginDto;
import com.example.demo.payloads.ClientLoginDto;

public interface ClientLoginService {

	          //create   locationDto);
	            public 	ClientLoginDto createClientLogin(ClientLoginDto clientLoginDto);

		
			   //update
	            ClientLoginDto varifyClientLogin(String emailId);
			
			
			    //delete
				public void   deleteClientLogin (String emailId);
				
			
			     //get
				ClientLoginDto getClientLogin (String emailId);
				 
				 //getAll
				 List<ClientLoginDto>getClientLogins();
}

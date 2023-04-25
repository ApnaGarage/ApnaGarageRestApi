package com.example.demo.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ClientLoginDto {
	@Email(message="Email address is not valid !!")
	private String email;
	
	
	@NotEmpty
	@Size(min=3, max=10,message ="password must be min 3 chars and max of 10 chars !! ")
	private String password;
}

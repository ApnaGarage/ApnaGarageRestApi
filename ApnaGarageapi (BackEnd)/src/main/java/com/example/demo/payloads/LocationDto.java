package com.example.demo.payloads;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LocationDto {


		private int id;
	
		@NotBlank
		@Size(min=4)
	private  String  name;
	
		@NotBlank
		@Size(min=4)
	private  String  street;
	
		@NotBlank
		@Size(min=4)
	private  String  city;
	
		@NotBlank
		@Size(min=4)
	private  String  state;
	
		@NotBlank
		@Size(min=6)
	private  Integer  zip;
	
		@NotBlank
		private  String  bikeCompany;
		
		@NotBlank	
	private  String  bikeModel;
}

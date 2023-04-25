package com.example.demo.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Location {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
	

	private  String  name;
	
	
	private  String  street;
	
	
	private  String  city;
	

	private  String  state;
	
	
	private  Integer  zip;
	
	
	private  String  bikeCompany;
	
	private  String  bikeModel;
	
}

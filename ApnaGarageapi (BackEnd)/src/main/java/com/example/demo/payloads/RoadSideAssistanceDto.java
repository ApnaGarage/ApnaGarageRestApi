package com.example.demo.payloads;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RoadSideAssistanceDto {

	
	
	private Integer rsa_id;
	
	private String name;
	
	private String chassisno;
	
	private String location;

	private String mobileno;
	
}

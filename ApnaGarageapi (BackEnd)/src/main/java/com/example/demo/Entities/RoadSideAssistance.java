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
public class RoadSideAssistance {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer rsa_id;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	private String chassisno;
	
	@Column(nullable=false)
	private String location;
	
	@Column(nullable=false)
	private String mobileno;
	
	

}

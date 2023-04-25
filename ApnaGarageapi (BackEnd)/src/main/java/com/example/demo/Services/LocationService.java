package com.example.demo.Services;

import java.util.List;

import com.example.demo.payloads.LocationDto;

public interface LocationService {

	//create 
	
	 LocationDto createLocation (LocationDto  locationDto);
	
	//update
	 LocationDto updateLocation (LocationDto  locationDto,Integer locationId);
	
	
	//delete
		public void   deleteLocation (Integer  locationId);
		
	
	//get
		 LocationDto getLocation (Integer  locationId);
		 
		 //getAll
		 List< LocationDto>getLocations();

	
	
}

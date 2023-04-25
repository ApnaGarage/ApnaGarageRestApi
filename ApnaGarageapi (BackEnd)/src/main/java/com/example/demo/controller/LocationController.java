package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.LocationService;
import com.example.demo.payloads.ApiResponce;
import com.example.demo.payloads.LocationDto;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/locations")
@CrossOrigin("*")	
public class LocationController {

	@Autowired
	private LocationService locationService;
	 
	//create 
	@PostMapping("/postlocation")
	public ResponseEntity<LocationDto> createLocation( @RequestBody LocationDto locationDto)
	{
	LocationDto createLocation=	this.locationService.createLocation(locationDto);
	return new  ResponseEntity<LocationDto>(createLocation,HttpStatus.CREATED);
	}
	
	
	//update
	@PutMapping("/{catId}")
	public ResponseEntity<LocationDto> updateLocation( @RequestBody LocationDto locationDto,@PathVariable Integer catId )
	{
	LocationDto updatedLocation=this.locationService.updateLocation(locationDto,catId);
	return new  ResponseEntity<LocationDto>(updatedLocation,HttpStatus.OK);
	}
	
	
	
	//delete
	@DeleteMapping("/{catId}")
	public  ResponseEntity<ApiResponce> deleteLocation(@PathVariable Integer catId )
	{
	this.locationService.deleteLocation(catId);
	return new  ResponseEntity<ApiResponce>(new ApiResponce("location is deleted successfully !!",true),HttpStatus.OK);
	}
	//get
	@GetMapping("/{catId}")
	public  ResponseEntity<LocationDto> getLocation(@PathVariable Integer catId )
	{
		LocationDto locationDto=this.locationService.getLocation(catId);
		return new  ResponseEntity<LocationDto>(locationDto,HttpStatus.OK);
	
	}
	
	//get ALL
	@GetMapping("/")
	public  ResponseEntity<List<LocationDto>> getLocations()
	{
		List<LocationDto> locations=this.locationService.getLocations();
	return  ResponseEntity.ok(locations);
	
	}
	
	
}

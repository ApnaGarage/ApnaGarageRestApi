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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.RoadSideAssistanceService;
import com.example.demo.payloads.ApiResponce;
import com.example.demo.payloads.RoadSideAssistanceDto;

@RestController
@RequestMapping("/api/rsa")
@CrossOrigin("*")
public class RoadSideAssistanceController {

	@Autowired
	private RoadSideAssistanceService roadSideAssistanceService;
	
	@PostMapping("/postrsa")
	public ResponseEntity<RoadSideAssistanceDto> createRoadSideAssistance( @RequestBody RoadSideAssistanceDto roadSideAssistanceDto)
	{
		RoadSideAssistanceDto createRoadSideAssistance=	this.roadSideAssistanceService.createRoadSideAssistance(roadSideAssistanceDto);
	return new  ResponseEntity<RoadSideAssistanceDto>(createRoadSideAssistance,HttpStatus.CREATED);
	}
	
	
	@PutMapping("/{rsaId}")
	public ResponseEntity<RoadSideAssistanceDto> updateRoadSideAssistance( @RequestBody RoadSideAssistanceDto roadSideAssistanceDto,@PathVariable Integer rsaId )
	{
		RoadSideAssistanceDto updateRoadSideAssistance=this.roadSideAssistanceService.updateRoadSideAssistance(roadSideAssistanceDto,rsaId);
	return new  ResponseEntity<RoadSideAssistanceDto>(updateRoadSideAssistance,HttpStatus.OK);
	}
	
	@DeleteMapping("/{rsaId}")
	public  ResponseEntity<ApiResponce> deleteRoadSideAssistance(@PathVariable Integer rsaId )
	{
	this.roadSideAssistanceService.deleteRoadSideAssistance(rsaId);
	return new  ResponseEntity<ApiResponce>(new ApiResponce("location is deleted successfully !!",true),HttpStatus.OK);
	}
	
	@GetMapping("/{catId}")
	public  ResponseEntity<RoadSideAssistanceDto> getRoadSideAssistance(@PathVariable Integer rsaId )
	{
		RoadSideAssistanceDto roadSideAssistanceDto=this.roadSideAssistanceService.getRoadSideAssistance(rsaId);
		return new  ResponseEntity<RoadSideAssistanceDto>(roadSideAssistanceDto,HttpStatus.OK);
	
	}
	@GetMapping("/")
	public  ResponseEntity<List<RoadSideAssistanceDto>> getRoadSideAssistances()
	{
		List<RoadSideAssistanceDto> roadSideAssistances=this.roadSideAssistanceService.getRoadSideAssistances();
	return  ResponseEntity.ok(roadSideAssistances);
	
	}
}

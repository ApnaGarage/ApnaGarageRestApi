package com.example.demo.Services;

import java.util.List;

import com.example.demo.payloads.LocationDto;
import com.example.demo.payloads.RoadSideAssistanceDto;

public interface RoadSideAssistanceService {

	
	//create	 
	 RoadSideAssistanceDto createRoadSideAssistance(RoadSideAssistanceDto  roadSideAssistanceDto);
	 
	 
	//update
	 
	 RoadSideAssistanceDto updateRoadSideAssistance(RoadSideAssistanceDto  roadSideAssistanceDto, Integer rsa_id);

    //delete
	 
public void  deleteRoadSideAssistance(Integer rsa_id);
	 
	 
	 //get  RSA
	 
	 RoadSideAssistanceDto getRoadSideAssistance(Integer rsa_id );
	 
	 //get all rsa
		 List<RoadSideAssistanceDto>getRoadSideAssistances(); 
	 
}

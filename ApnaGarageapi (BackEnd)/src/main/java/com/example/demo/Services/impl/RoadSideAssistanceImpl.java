package com.example.demo.Services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Location;
import com.example.demo.Entities.RoadSideAssistance;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Repositories.RoadSideAssistanceRepo;
import com.example.demo.Services.RoadSideAssistanceService;
import com.example.demo.payloads.LocationDto;
import com.example.demo.payloads.RoadSideAssistanceDto;



@Service
public class RoadSideAssistanceImpl implements RoadSideAssistanceService {
    @Autowired
    private RoadSideAssistanceRepo roadSideAssistanceRepo;

    @Autowired
     private ModelMapper modelMapper;


  
	@Override
	public RoadSideAssistanceDto createRoadSideAssistance(RoadSideAssistanceDto roadSideAssistanceDto) {
		
		RoadSideAssistance cat=this.modelMapper.map(roadSideAssistanceDto, RoadSideAssistance.class);
		RoadSideAssistance addedcat=this.roadSideAssistanceRepo.save(cat);
		return this.modelMapper.map(addedcat, RoadSideAssistanceDto.class);
		
	}

	@Override
	public RoadSideAssistanceDto updateRoadSideAssistance(RoadSideAssistanceDto roadSideAssistanceDto, Integer rsa_id) {

		RoadSideAssistance cat=this.roadSideAssistanceRepo.findById(rsa_id)
					.orElseThrow(()-> new ResourceNotFoundException("RoadSideAssistance", "roadSideAssistance id", rsa_id));
	cat.setName(roadSideAssistanceDto.getName());
	cat.setChassisno(roadSideAssistanceDto.getChassisno());
	cat.setLocation(roadSideAssistanceDto.getLocation());
	cat.setMobileno(roadSideAssistanceDto.getMobileno());


	RoadSideAssistance updatedcat=this.roadSideAssistanceRepo.save(cat);
			return this.modelMapper.map(updatedcat, RoadSideAssistanceDto.class);
			
		}
		
	
	

	@Override
	public void deleteRoadSideAssistance(Integer rsa_id) {
		RoadSideAssistance cat=this.roadSideAssistanceRepo.findById(rsa_id).orElseThrow(()-> new ResourceNotFoundException("RoadSideAssistance", "roadSideAssistance id", rsa_id));
		this.roadSideAssistanceRepo.delete(cat);
			}

	@Override
	public RoadSideAssistanceDto getRoadSideAssistance(Integer rsa_id) {
		RoadSideAssistance cat=this.roadSideAssistanceRepo.findById(rsa_id).orElseThrow(()-> new ResourceNotFoundException("RoadSideAssistance", "roadSideAssistance id", rsa_id));
		
		return this.modelMapper.map(cat,RoadSideAssistanceDto.class);
	
	}

	@Override
	public List<RoadSideAssistanceDto> getRoadSideAssistances() {
		List<RoadSideAssistance> roadSideAssistances= this.roadSideAssistanceRepo.findAll();
		List<RoadSideAssistanceDto> catDtos=roadSideAssistances.stream().map((cat)->this.modelMapper.map(cat,RoadSideAssistanceDto.class)).collect(Collectors.toList());
				return catDtos;
				}

}

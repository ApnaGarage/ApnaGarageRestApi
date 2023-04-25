package com.example.demo.Services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Location;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Repositories.LocationRepo;
import com.example.demo.Services.LocationService;
import com.example.demo.payloads.LocationDto;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepo locationRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public LocationDto createLocation(LocationDto locationDto) {

	Location cat=	this.modelMapper.map(locationDto, Location.class);
	 Location addedcat=this.locationRepo.save(cat);
		return this.modelMapper.map(addedcat,LocationDto.class);
	}

	@Override
	public LocationDto updateLocation(LocationDto locationDto, Integer locationId) {
		Location cat=this.locationRepo.findById(locationId)
				.orElseThrow(()-> new ResourceNotFoundException("Location", "location id", locationId));
cat.setName(locationDto.getName());
cat.setStreet(locationDto.getStreet());
cat.setCity(locationDto.getCity());
cat.setState(locationDto.getState());
cat.setZip(locationDto.getZip());
cat.setBikeCompany(locationDto.getBikeCompany());
cat.setBikeModel(locationDto.getBikeModel());

		Location updatedcat=this.locationRepo.save(cat);
		return this.modelMapper.map(updatedcat, LocationDto.class);
	}

	@Override
	public void deleteLocation(Integer locationId) {
		Location cat=this.locationRepo.findById(locationId).orElseThrow(()-> new ResourceNotFoundException("Location", "location id", locationId));
		this.locationRepo.delete(cat);
	}

	@Override
	public LocationDto getLocation(Integer locationId) {

		Location cat=this.locationRepo.findById(locationId).orElseThrow(()-> new ResourceNotFoundException("Location", "location id", locationId));
		
		return this.modelMapper.map(cat,LocationDto.class);
	}

	@Override
	public List<LocationDto> getLocations() {
List<Location> locations= this.locationRepo.findAll();
List<LocationDto> catDtos=locations.stream().map((cat)->this.modelMapper.map(cat,LocationDto.class)).collect(Collectors.toList());
		return catDtos;
	}

}

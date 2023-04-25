package com.example.demo.Services;

import java.util.List;

import com.example.demo.payloads.UserDto;

public interface  UserService {

UserDto createUser(UserDto user);
UserDto	 updateUser(UserDto user,Integer userId);

UserDto  getUserById(Integer userId);
List<UserDto> getAllUsers();
void deleteUser(Integer userId);
}

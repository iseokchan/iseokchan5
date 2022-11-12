package com.iseokchan.iseokchan5.service

import com.iseokchan.iseokchan5.dto.UserDto
import com.iseokchan.iseokchan5.entity.User


interface UserService{
    fun toDTO(user: User): UserDto {
        return UserDto(id = user.id, username = user.username)
    }
}

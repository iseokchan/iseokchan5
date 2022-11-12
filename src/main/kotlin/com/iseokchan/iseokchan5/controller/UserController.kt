package com.iseokchan.iseokchan5.controller

import com.iseokchan.iseokchan5.dto.UserDto
import com.iseokchan.iseokchan5.service.UserService
import com.iseokchan.iseokchan5.service.UserServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class UserController {
    @Autowired
    private lateinit var userService: UserServiceImpl

    @get:QueryMapping
    val users: List<UserDto>
        get() = userService.findAll()
}

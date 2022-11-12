package com.iseokchan.iseokchan5.service

import com.iseokchan.iseokchan5.dto.UserDto
import com.iseokchan.iseokchan5.entity.User
import com.iseokchan.iseokchan5.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import javax.transaction.Transactional


@Service
@Transactional
class UserServiceImpl : UserService {

    @Autowired
    private lateinit var userRepository: UserRepository

    fun findAll(): List<UserDto> {
        return userRepository.findAll().map { user: User ->
            toDTO(
                user
            )
        }
    }

}
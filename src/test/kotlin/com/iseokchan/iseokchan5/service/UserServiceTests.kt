package com.iseokchan.iseokchan5.service

import com.iseokchan.iseokchan5.dto.UserDto
import com.iseokchan.iseokchan5.repository.UserRepository
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.graphql.tester.AutoConfigureGraphQlTester
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.graphql.test.tester.GraphQlTester


@SpringBootTest
@AutoConfigureGraphQlTester
class UserServiceTest {
    @Autowired
    private lateinit var graphQlTester: GraphQlTester

    @Autowired
    private lateinit var userRepository: UserRepository

    @Test
    @Throws(java.lang.Exception::class)
    fun getUsersEmpty() {
        graphQlTester.documentName("getUsers")
            .execute()
            .path("getUsers[*]")
            .entityList(UserDto::class.java)
            .hasSize(0)

    }
}

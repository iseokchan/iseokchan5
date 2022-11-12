package com.iseokchan.iseokchan5.repository;

import com.iseokchan.iseokchan5.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.graphql.data.GraphQlRepository

@GraphQlRepository
interface UserRepository : JpaRepository<User, Long> {
}
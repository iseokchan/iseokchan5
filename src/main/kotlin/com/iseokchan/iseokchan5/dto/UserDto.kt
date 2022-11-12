package com.iseokchan.iseokchan5.dto

import com.iseokchan.iseokchan5.entity.Sex
import java.io.Serializable
import java.time.LocalDateTime

/**
 * A DTO for the {@link com.iseokchan.iseokchan5.entity.User} entity
 */
data class UserDto(
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
    val deletedAt: LocalDateTime? = null,
    val id: Long? = null,
    val username: String? = null,
    val password: String? = null,
    val name: String? = null,
    val sex: Sex? = null,
    val isActive: Boolean = true,
    val isAdmin: Boolean = false
) : Serializable
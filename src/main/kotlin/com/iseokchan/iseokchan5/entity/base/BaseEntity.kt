package com.iseokchan.iseokchan5.entity.base

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime
import javax.persistence.*


@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
abstract class BaseEntity {
    @CreatedDate
    private val createdAt: LocalDateTime? = null

    @LastModifiedDate
    private val updatedAt: LocalDateTime? = null

    @Column
    private val deletedAt: LocalDateTime? = null
}
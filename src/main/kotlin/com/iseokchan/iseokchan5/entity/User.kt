package com.iseokchan.iseokchan5.entity


import com.iseokchan.iseokchan5.entity.base.BaseEntity
import javax.persistence.*


enum class Sex {
    MALE, FEMALE
}

@Entity
@Table(name = "user")
class User : BaseEntity() {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null

    @Column(length = 128, unique = true, nullable = false)
    val username: String? = null

    @Column(length = 256)
    val password: String? = null

    @Column(length = 32)
    val name: String? = null

    @Enumerated(EnumType.ORDINAL)
    val sex: Sex? = null

    @Column(nullable = false)
    val isActive = true

    @Column(nullable = false)
    val isAdmin = false
}

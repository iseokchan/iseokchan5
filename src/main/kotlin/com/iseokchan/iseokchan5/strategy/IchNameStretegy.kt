package com.iseokchan.iseokchan5.strategy

import org.hibernate.boot.model.naming.Identifier
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment
import java.util.*


/**
 * @see https://johnmarc.tistory.com/104
 */
class IchNameStrategy : PhysicalNamingStrategyStandardImpl() {
    private val PREFIX = "ich_"
    override fun toPhysicalTableName(name: Identifier, context: JdbcEnvironment): Identifier {
        val prefixedTableName = Identifier(PREFIX + name.text.lowercase(Locale.getDefault()), name.isQuoted)
        return super.toPhysicalTableName(prefixedTableName, context)
    }
}
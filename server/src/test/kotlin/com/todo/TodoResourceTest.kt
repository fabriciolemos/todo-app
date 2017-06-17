package com.todo

import com.jayway.jsonpath.Configuration
import com.jayway.jsonpath.JsonPath
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(TodoApplication::class), webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoResourceTest {

    @Autowired
    lateinit var testRestTemplate: TestRestTemplate

    @Test
    fun whenGetCalled_shouldReturnDescriptions() {
        val result = testRestTemplate.getForEntity("/todo", String::class.java)

        assertNotNull(result)
        assertEquals(HttpStatus.OK, result.statusCode)

        val document = Configuration.defaultConfiguration().jsonProvider().parse(result.body)
        assertEquals("Todo 1", JsonPath.read(document, "[0].description"))
        assertEquals("Todo 2", JsonPath.read(document, "[1].description"))
    }
}

package com.todo

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = arrayOf("*"), allowCredentials = "true", allowedHeaders = arrayOf("*"))
class TodoResource (val repository: TodoRepository) {

    @GetMapping("todo")
    fun getTodos() = repository.findAll()

}


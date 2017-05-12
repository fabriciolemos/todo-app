package com.todo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TodoResource {

    @GetMapping("todo")
    fun getTodos() = arrayOf(Todo("Todo 1"), Todo("Todo 2"))

}
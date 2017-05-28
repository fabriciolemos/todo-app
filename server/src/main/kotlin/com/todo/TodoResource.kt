package com.todo

import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = arrayOf("*"), allowCredentials = "true", allowedHeaders = arrayOf("*"))
class TodoResource(val repository: TodoRepository) {

    @GetMapping("todo")
    fun getTodos(): Iterable<Todo> = repository.findAll()

    @PostMapping("todo")
    fun createTodo(@RequestBody todo: Todo): Todo = repository.save(todo)

}


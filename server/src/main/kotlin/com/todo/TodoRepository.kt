package com.todo

import org.springframework.data.repository.CrudRepository

interface TodoRepository : CrudRepository<Todo, Long> {
}
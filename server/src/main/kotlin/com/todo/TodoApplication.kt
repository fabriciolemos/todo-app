package com.todo

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class TodoApplication {

    @Bean
    open fun init(repository: TodoRepository) = CommandLineRunner {
        repository.deleteAll()
        repository.save(Todo("Todo 1"))
        repository.save(Todo("Todo 2"))
        repository.save(Todo("Todo 3"))
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(TodoApplication::class.java, *args)
}

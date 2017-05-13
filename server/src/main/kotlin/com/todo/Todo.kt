package com.todo

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Todo(var description: String = "",
           @Id @GeneratedValue
           var id: Long = 0)
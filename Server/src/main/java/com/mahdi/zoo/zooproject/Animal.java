package com.mahdi.zoo.zooproject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "animals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animal {
    @Id
    private ObjectId id ;
    private String animalId;
    private String name;
    private String species;
    private String AnimalClass;
    private String habitat;
    private String diet;
    private String average_lifespan;
    private String image_url;
    private size size;
}


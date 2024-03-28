package com.mahdi.zoo.zooproject;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnimalRepository extends MongoRepository<Animal, ObjectId> {
    Optional<Animal> findAnimalByAnimalId(String animalId);
}

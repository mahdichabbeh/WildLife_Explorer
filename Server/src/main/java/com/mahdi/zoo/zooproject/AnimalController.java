package com.mahdi.zoo.zooproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/animals")
public class AnimalController {
    @Autowired
    private AnimalService animalService;

    @GetMapping
    public ResponseEntity<List<Animal>> getAllAnimals(){
        return new ResponseEntity<List<Animal>>(animalService.allAnimals(),HttpStatus.OK);
    }
    @GetMapping("/{animalId}")
    public ResponseEntity<Optional<Animal>> getSingleAnimal(@PathVariable String animalId){
        return new ResponseEntity<Optional<Animal>>(animalService.singleAnimal(animalId),HttpStatus.OK);
    }
}

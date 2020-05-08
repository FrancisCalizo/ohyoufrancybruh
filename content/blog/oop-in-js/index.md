---
title: "Object-Oriented Programming in JavaScript 💡"
date: "2020-05-08"
description: "While not a class-based object-oriented language, JavaScript has ways of using OOP. Let's take a quick look!"
tags: ['Code', 'JavaScript', 'Software' , 'Web', Development', 'Object', 'Oriented', 'Programming']
---

Object-oriented programming (OOP) is the concept of using objects to represent data and methods, and objects are a collection of associated properties and values. The idea is to use objects to model real world things that we want to represent inside our programs.

OOP in JavaScript is a bit different than OOP in other languages, like Java. Let's take a quick look on how OOP theory can be put into practice in JavaScript (This post assumes you understand the basic structure of an object literal).

## Constructors

In JavaScript, special functions called constructor functions are used to define and initialize objects and their features. This provides a way to create an many objects as you wish while being able to attach data and methods to them. With constructor functions, you are able to create (or *instantiate*) instances on an object. Constructors are useful when you want to create multiple similar objects with the same properties and methods. In simpler terms, constructors can ve viewed almost as a template to create other objects.

## Inheritance

Inheritance in OOP is an object's ability to access methods and other properties from another object. It is the concept of one thing (an object) gaining the behaviors (properties) of something else (another object). Inheritance in JavaScript differs quite a bit than inheritance in standard object-oriented programming languages. While other languages utilize *classical inheritance*, inheritance in JavaScript works through prototypes and this form of inheritance is called *prototypal inheritance* (more on prototypes later).

## Prototypes

Prototype are the mechanism by which JavaScript objects inherit features from one another. All objects in JavaScript have a prototype, all objects in JavaScript inherit methods from a prototype. Objects can have a prototype objectm which acts as a template object that it inherits methods and properties from. The JavaScript prototype property allows you to add new properties and methods to object constructors.

## Classes

Classes are primarily syntactical sugar over the existing prototype-based inheritance found in JavaScript. You can think of classes as a type of function which its properties assigned inside its constructor method. The constructor method lets us set fields and is called each time the class object is initialized.

#### Static Methods

The static keyword defines a static method for a class. Static methods have no access to data stored in specific objects and aren't called on instances of a class. They are called on the class itself and are often utlity funcitons.

## Subclasses

A subclass is a class that inherits all properties of another class while being able to add or modify properties, similar to how inheritance works with constructors functions and instantiation (explained above).

#### The super() method

The super() method is used to access and call functions on an object's parent. By calling the super() method, we call the parent's constuctor method and get access to the parent's properties and methods.

###
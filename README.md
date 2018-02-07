# Closures: Using JS to build Classes

Take a look at the code in `index.js` and discuss the questions below. Each question is stand alone and assumes you will be starting with fresh code. 

**Note: To run the code, open `index.html` in your browser and open up your terminal.**
**Note 2: Keep in mind that the use of 'class' and 'instance' is loose here. This language is used only to draw upon your familiarity with Object Oriented programming. Strictly speaking, there are no classes or instances of classes in this code, just functions and objects! Keep this distinction in mind as you discuss with your table mates.**

### Person 'Class'

Inspect the 'Person' object in your terminal. Notice that the 'new', 'getCount', and 'all' keys on this object have functions as their values. 

While playing around with these functions, consider the following:

1. What does each function do?
2. Where do these keys and their respective values come from?
3. Why are you not able to directly manipulate the 'count' and 'all' variables? How does the use of a closure keep these variables private?
4. Try making a few instances of Person using the 'new' function. What does this function return? How are the 'count' and 'all' variables affected when you make an instance? How does this work?
5. In your terminal, try making a new Person class object by running `let Person2 = PersonClassCreator()`. Try the 'all' and 'getCount' functions on this new object. Why do these functions return values different than those of the original Person class object?
6. Instead of writing explicitly `let Person = PersonClassCreator()`, how could use an IIFE to instantiate the Person Class object? (hint: besides deleting `let Person = PersonClassCreator()`, you should only have to modify 2 lines of code to get this working)
7. Try building a 'findByAge' class method that accepts a person's age and finds all users that are of that age. Where should this function be defined? How would you make this function accessible to the Person class object?

### Person 'Instance'

Inspect the 'mary' object in your terminal. Notice the functions available to the 'mary' object. 

While playing around with these functions, consider the following:

1. What does each function do?
2. Where do these keys and their respective values come from?
3. Why are you not able to directly manipulate the 'personName', 'personAge', 'personOccupation', 'personPhrases' variables? How does the use of a closure keep these variables private?
4. Notice that the 'whoAmI' function uses 'this'. In this context, what is 'this'? Try console logging it. Would it be possible to rewrite only this function without using 'this'?
5. Imagine foregoing the getter and setter methods and changing the return value of 'newPerson' to the following: 
```Javascript
    {
        name: personName,
        age: personAge,
        occupation: personOccupation,
        phrases: personPhrases
        whoAmI: whoAmI,
        addPhrase: addPhrase,
        removePhrase: removePhrase,
        sayRandomPhrase: sayRandomPhrase
    }
```
    What would change? Why are the instance variables no longer private? How would the 'whoAmI' function change?
6. Try writing a new instance method of your choosing. Where would you write it? How would you make it available to Person instances? 
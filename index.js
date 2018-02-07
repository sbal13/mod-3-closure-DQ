function PersonClassCreator () {
	// Initializing class variables
	let count = 0
	let all = []
	///////////////

	// 'new' method. Creates a new Person instance. (ends on line 86)
	function newPerson(name, age, occupation, phrases){
		// Incrementing 'count' class variable
		count ++
		///////////////

		// Instantiating instance variables
		let personName = name
		let personAge = age
		let personOccupation = occupation
		let personPhrases = [...phrases]
		///////////////

		// Instance methods
        function whoAmI(){
            return `My name is ${this.getName()}. I am ${this.getAge()}, and I work as a ${this.getOccupation()}`
        }
        function sayRandomPhrase(){
        	return personPhrases[Math.floor(Math.random()*personPhrases.length)]
        }
        function addPhrase(phrase){
        	personPhrases.push(phrase)
        }
        function removePhrase(index){
        	personPhrases = [...personPhrases.slice(0,index), ...personPhrases.slice(index+1)]
        }
        ///////////////

        // Getters
        function getName(){
        	return personName
        }
        function getAge(){
        	return personAge
        }
        function getOccupation(){
        	return personOccupation
        }
        function getPhrases(){
        	return [...personPhrases]
        }
        ///////////////


        // Setters
        function setName(name) {
        	personName = name
        }
        function setAge(age) {
        	personAge = age
        }
        function setOccupation(occupation) {
        	personOccupation = occupation
        }
        ///////////////


        // Building the Person instance object

        let personInstance = { 
        	getPhrases: getPhrases,
        	getName: getName,
        	getAge: getAge,
        	getOccupation: getOccupation,
        	setName: setName,
        	setAge: setAge,
        	setOccupation: setOccupation,
        	whoAmI: whoAmI,
        	addPhrase: addPhrase,
        	removePhrase: removePhrase,
        	sayRandomPhrase: sayRandomPhrase
        }
        ///////////////

        // Adding Person instance object to 'all' class variable
		all.push(personInstance)
		///////////////

		return personInstance
    }

    // Class methods
	function getCount() {
		return count
    }
    function allPeople() {
    	return [...all]
    }
    ///////////////

    // Building the Person Class object
	let personClass =  {
		new: newPerson, 
		getCount: getCount, 
		all: allPeople
	}
	///////////////

	return personClass
}


// Instantiating the Person class. 
let Person = PersonClassCreator()

// Instantiating a Person object
let mary = Person.new("Mary", 27, "Teacher", ["Hey there!", "Dude what is that?"])


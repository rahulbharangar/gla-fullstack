const student = { 
    name: "John", 
    dob: "2000-01-01" 
  };
  
  const studentcopy = { ...student }; 
  console.log("🚀 ~ studentcopy:", studentcopy);
  
  studentcopy.dob = "updatedob";
  console.log("🚀 ~ dob:", studentcopy.dob); 
  
  const updatekey = 'dob'; // Define updatekey with the key you want to update
  const updatedData = "newUpdateData"; // Define updatedData with the new value
  
  student[updatekey] = updatedData;
  console.log("🚀 ~ student:", student);


  

//sec half


  





  // Array of objects
const students = [
    {
      name: "Alice",
      dob: "2001-05-15",
      collegeName: "XYZ University",
      major: "Computer Science",
      graduationYear: 2024,
      gpa: 3.8
    },
    {
      name: "Bob",
      dob: "2000-01-01",
      collegeName: "ABC College",
      major: "Mathematics",
      graduationYear: 2023,
      gpa: 3.6
    },
    {
      name: "Charlie",
      dob: "2002-09-10",
      collegeName: "PQR Institute",
      major: "Physics",
      graduationYear: 2025,
      gpa: 3.9
    }
  ];
  
  // Accessing objects in the array
  const firstStudent = students[0];
  const secondStudent = students[1];
  const thirdStudent = students[2];
  
  console.log("🚀 ~ firstStudent:", firstStudent);
  console.log("🚀 ~ secondStudent:", secondStudent);
  console.log("🚀 ~ thirdStudent:", thirdStudent);
  
  // Accessing specific properties of objects in the array
  const firstStudentName = students[0].name;
  const secondStudentCollege = students[1].collegeName;
  const thirdStudentGPA = students[2].gpa;
  
  console.log("🚀 ~ firstStudentName:", firstStudentName);
  console.log("🚀 ~ secondStudentCollege:", secondStudentCollege);
  console.log("🚀 ~ thirdStudentGPA:", thirdStudentGPA);
  
  // Looping through the array of objects
  students.forEach(student => {
    console.log(`${student.name} is studying ${student.major} at ${student.collegeName}.`);
  });
  
  // Adding a new object to the array
  students.push({
    name: "David",
    dob: "1999-11-20",
    collegeName: "LMN University",
    major: "Chemistry",
    graduationYear: 2022,
    gpa: 3.7
  });
  
  console.log("🚀 ~ students array after adding a new student:", students);
  
  // Updating an object in the array
  students[1].major = "Statistics";
  students[1].gpa = 3.7;
  
  console.log("🚀 ~ students array after updating the second student:", students);
  
  // Deleting an object from the array
  students.splice(2, 1); // Removes the third student (index 2)
  
  console.log("🚀 ~ students array after deleting the third student:", students);

  console.log(students);
  student = stdent.map((item,index) =>{
    const updateValue = item.order*5;


  });
  // map unction 
 // array use map by map get value and index of particular fun followed by arrow function 

student.map((valur, index) => {
    const updateValue = value.gpa *5;
    value.order = updateValue;
    return value;

});

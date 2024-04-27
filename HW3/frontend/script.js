class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  printGrade() {
    const max = 100;
    // some operation with max
    //console.log(this.name);
  }
}

const st = new Student("subu", "123");

st.printGrade();

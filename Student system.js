document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var reg_number = document.getElementById("reg_number").value;
    var jamb_score = document.getElementById("jamb_score").value;
    var phone = document.getElementById("phone").value;
    var jamb_reg = document.getElementById("jamb_reg").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var photo = document.getElementById("photo").files[0];

    var student = {
      name: name,
      reg_number: reg_number,
      jamb_score: jamb_score,
      dob: dob,
      phone: phone,
      jamb_reg: jamb_reg,
      email: email,
      gender: gender,
      photo: photo,
    };

    // console.log(student);

    localStorage.setItem("studentData", JSON.stringify(student));

    alert("Student data has been successfully stored.");

    document.getElementById("admissionForm").reset();
  });

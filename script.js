const form = document.querySelector("#registration-form");
form.addEventlisener("submit" , function(event){
    event.preventDefault(); // Prevent form submission
    const firstName = form.elements["firstname"].value;
    const lastname = form.elements["lastname"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const passwors = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;
    const gender = form.elements["gender"].value;

    console log("სახელი:", firstname);
    console log("გვარი", lastname);
    console log("მეილი", email);
    console log("ტელეფონი", phone);
    console log("პაროლი", password);
    console log("გაიმეორე პაროლი", confirmpassword);
    console log("სქესი", gender);

});
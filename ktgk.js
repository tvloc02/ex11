function validateForm() {
    // Clear any existing errors
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Get form values
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;

    var isValid = true;

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Email không hợp lệ";
        isValid = false;
    }

    // Phone validation (Vietnam phone format)
    var phonePattern = /^(0|\+84)\d{9,10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerText = "Số điện thoại không hợp lệ";
        isValid = false;
    }

    // Check if other fields are filled
    if (address === "" || city === "" || zip === "") {
        alert("Yêu cầu nhập đầy đủ thông tin.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").innerText = "Thành công";
    }
}

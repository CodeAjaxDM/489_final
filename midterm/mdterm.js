function appendAlert(message, type) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  }

function validateEmail()
{
    valid = false;
    // let email - if it will change
    const email = document.getElementById("email").value;
    const name = document.getElementById("first_name").value;
    console.log(email);
    const valid_at = email.includes('@');
    const valid_com = (email.endsWith(".com") || email.endsWith(".org") || email.endsWith(".edu"));
    const valid_name = name.length >= 5 && name.length <= 20;
    valid = valid_at && valid_com&& valid_name;
    console.log(valid);
    if(!valid)
    {
        appendAlert("Invalid email!", "danger");
    }
    return valid;
}
console.log("Hello");
function toggleSwitch() {
  const checkBox = document.getElementById("toggle-checkbox");
  const amountAnnually = document.querySelectorAll(".amount-annually");
  const amountMonthly = document.querySelectorAll(".amount-monthly");
  for (let i = 0; i < amountAnnually.length; i++) {
    if (checkBox.checked == true) {
      amountMonthly[i].style.display = "table";
      amountAnnually[i].style.display = "none";
    } else {
      amountMonthly[i].style.display = "none";
      amountAnnually[i].style.display = "table";
    }
  }
}

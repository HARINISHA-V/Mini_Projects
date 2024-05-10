
// creating table and appending inputs
my_function = () => {
let select_tbody = document.querySelector(".datas");
let inputs = document.querySelectorAll("input");
let tr_create = document.createElement("tr");
let exp_name = document.createElement("td");
let amount = document.createElement("td");
let action = document.createElement("td");
exp_name.innerHTML = inputs[0].value;
amount.innerHTML = inputs[1].value;
action.innerHTML = `<button onclick="removeRow(this)"class="btn btn-danger">Remove</button>`;
tr_create.append(exp_name, amount, action);
select_tbody.append(tr_create);
sum();
};
// remove
function removeRow(button) {
const row = button.parentNode.parentNode;
row.remove();
sum();
}
//  total
let sum = () => {
let tot = document.getElementsByClassName("total");
let amount = document.querySelectorAll("table tr td:nth-child(even)");
let sum = 0;
for (let i = 0; i <= amount.length - 1; i++) {
  let amount_only = amount[i]["innerText"];
  let e = parseInt(amount_only);
  if (!e) {
    e = 0;
  }
  sum += e;
}

tot[0].innerHTML = `Total Expence =$${sum}`;
}

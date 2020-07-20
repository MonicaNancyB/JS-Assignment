document.getElementById("btn").onclick = function () {
    let sales = document.getElementById("salesid").value;
    let comm;
    switch (true) {
      case sales >= 0 && sales < 5001:
        comm = sales * 0.02;
        break;
      case sales >= 5001 && sales < 10001:
        comm = 5000 * 0.02 + (sales - 5000) * 0.05;
        break;
      case sales >= 10001 && sales < 20001:
        comm = 5000 * 0.02 + 5000 * 0.05 + (sales - 10000) * 0.07;
        break;
      case sales >= 20001:
        comm = 5000 * 0.02 + 5000 * 0.05 + 10000 * 0.07 + (sales - 20000) * 0.1;
        break;
    }
    document.getElementById("netcomm").innerHTML =
      "Net Commision in Rs.:&nbsp &nbsp" + comm;
  }
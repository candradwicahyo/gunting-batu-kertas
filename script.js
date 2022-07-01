window.onload = () => {
  
  let player = document.querySelector('.player');
  let computer = document.querySelector('.computer');
  
  const alertContainer = document.querySelector('.alert-container');
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const choosePlayer = this.dataset.choose.toLowerCase();
      const chooseComputer = setComputer(Math.random());
      const result = setRules(choosePlayer, chooseComputer);
      const finalResult = getResult(choosePlayer, chooseComputer, result);
      alertContainer.innerHTML = finalResult;
      setNumber(result);
    });
  });
  
  function setComputer(math) {
    if (math < 0.34) return 'gunting';
    if (math > 0.34 && math < 0.67) return 'batu';
    return 'kertas';
  }
  
  function setRules(player, computer) {
    if (player == computer) return 'imbang!';
    if (player == 'gunting') return (computer == 'kertas') ? 'menang' : 'kalah';
    if (player == 'batu') return (computer == 'gunting') ? 'menang' : 'kalah';
    if (player == 'kertas') return (computer == 'batu') ? 'menang' : 'kalah';
    return 'error!';
  }
  
  function getResult(player, computer, result) {
    return `
      <div class="alert alert-warning my-3" role="alert">
        pemain memilih <span class="fw-bold">${player}</span> dan lawan memilih <span class="fw-bold">${computer}</span>. maka, hasilnya pemain <span class="fw-bold">${result}</span>
      </div>
    `;
  }
  
  function setNumber(result) {
    switch (result) {
      case 'menang' : player.innerText++; break;
      case 'kalah' : computer.innerText++; break;
      default: result = 'error';
    }
  }
  
}
// Cookies
    var cookies = 0; 
    var cookiesPercent = Math.floor(cookies * 0.1); 
    var interval = 5000;
    
    // Vovós
    var cookiesToBuyGrandma = 70;
    var costIncrease = 15;
    var grandmas = 0;

    // Vovôs
    var cookiesToBuyGrandpa = 1200;
    var grandpaCostIncrease = 320;
    var grandpas = 0;

    //Upgrade-Click
    var gainPerClick = 1;
    var gpcIncrease = 0;//
    var gpcCost = 50;
    var gpcCostIncrease = 25; 
    
    //Auto-Click
    var acCost = 300000;
    var acCostIncrease = 20000; 
    var autoClicks = 0;
    var acGpc = 5000;
    var acGpcIncrease = 1800;
    var acGpcIncreaseIncrease = 650;

    //Robôs
    var cookiesToBuyRobot = 50000;
    var robotCostIncrease = 600;
    var robots = 0;
    

    
    //Function getCookies
    function getCookies() {
      cookies += gainPerClick; 
    }
    //Function buyGrandma
    function buyGrandma() {
      if (cookies >= cookiesToBuyGrandma) {
        grandmas += 1;
        interval /= 1.15;
        cookies -= cookiesToBuyGrandma;
        setInterval(() => {
          cookies += 5;
        }, interval);
        setTimeout(() => {
          cookiesToBuyGrandma += costIncrease;
          costIncrease += 10; 
        }, 1);
      }
    }
    //Function buyGrandpa
    function buyGrandpa() {
      if(cookies >= cookiesToBuyGrandpa && grandpas < grandmas) {
        grandpas += 1;
        interval /= 1.25;
        cookies -= cookiesToBuyGrandpa; 
        setInterval(() => {
          cookies += 20;
        }, interval);
        setTimeout(() => {
          cookiesToBuyGrandpa += grandpaCostIncrease;
          grandpaCostIncrease += 30;
        }, 1);
      }
      else {
        grandpas === grandmas;
      }
    }

    //Function buyRobot
    function buyRobot() {
      if(cookies >= cookiesToBuyRobot) {
        robots += 1;
        interval /= 1.25;
        cookies -= cookiesToBuyRobot; 
        setInterval(() => {
          cookies += 400;
        }, interval);
        setTimeout(() => {
          cookiesToBuyRobot += robotCostIncrease;
          robotCostIncrease += 60;
        }, 1);
      }
    }

  
    
    //Function autoClick
    function autoClick() {
      if(cookies >= acCost) {
        autoClicks += 1
        interval /= 1.3;
        cookies -= acCost;
        setTimeout(() => {
          acCost += acCostIncrease;
          acCostIncrease += 70000
        }, 1);
        setInterval(() => {
          cookies += acGpc
        }, interval);
      }
    }
    
    //Function clickUpgrade
    function clickUpgrade() {
      if (cookies >= gpcCost) {
        cookies -= gpcCost;
        gpcCost += gpcCostIncrease;
        gpcCostIncrease += 15;
        gpcIncrease += 1;
        gainPerClick += gpcIncrease;
      }
    }
    function startScreen() {
      alert("Bem vindo à este clicker simples!\nClique em \"Obter Cookies\" para começar \na juntar cookies.\nLembre-se: você não pode ter mais vovôs\n que vovós pois eles servem para ajudá-las!");
    }


    
    setInterval(() => {
      document.getElementById("game").innerHTML = "   " + cookies + "🍪"; //
      document.getElementById("grandmaCost").innerHTML =
        "Custo para comprar uma vovó: " +
        cookiesToBuyGrandma +
        "🍪. ⠀⠀⠀⠀⠀⠀⠀⠀Quantidade de vovós: " +
        grandmas + //
        "👵. ⠀⠀⠀⠀⠀⠀⠀";
      document.getElementById("clickPower").innerHTML =
        "Cookies por clique: " + gainPerClick + "🖱️.";
      document.getElementById("clickUpgradeCost").innerHTML =
        "Custo do upgrade de clicks: " + gpcCost + " 🍪.";
      document.getElementById("grandpaCost").innerHTML = "Custo de um vovô: " + cookiesToBuyGrandpa + "🍪."; 
      document.getElementById("grandpaAmmount").innerHTML = "Quantidade de vovôs: " + grandpas + "👴.";
      document.getElementById("acCost").innerHTML = "Custo de um auto clicker: " + acCost+"🍪.";
      document.getElementById("acAmount").innerHTML = "Nível do auto clicker: " + autoClicks+"⚡.";
      document.getElementById("robotCost").innerHTML = "Custo de um robô: " +cookiesToBuyRobot+"🍪.";
      document.getElementById("robotAmount").innerHTML = "Quntidade de Robôs: " +robots+"🤖.";
    }, 1); 

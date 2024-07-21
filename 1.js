(function () {
  var _0x447227 = 0;
  var _0x3c82a5 = 0;
  var _0x42b615 = 0;
  var _0x19bdad = 0;
  var _0xddba7c = 0;
  var _0x5f23c7 = document.createElement("div");
  _0x5f23c7.className = "modal";
  _0x5f23c7.style.cssText = "display:block;position:fixed;z-index:9999;left:0;top:0;transform:translate(0,0);width:300px;background:linear-gradient(135deg,#8a2be2,#000);border-radius:8px;box-shadow:0px 4px 8px rgba(0,0,0,0.2);touch-action:none";
  var _0x7a494f = false;
  var _0x24745d = {
    'x': 0x0,
    'y': 0x0
  };
  var _0x12dca3 = 0;
  var _0x506015 = document.createElement("div");
  _0x5f23c7.addEventListener("mousedown", _0x552c83);
  _0x5f23c7.addEventListener("touchstart", _0x552c83);
  _0x5f23c7.addEventListener("mousemove", _0x3fbbc2);
  _0x5f23c7.addEventListener("touchmove", _0x3fbbc2);
  _0x5f23c7.addEventListener("mouseup", _0x17d0e7);
  _0x5f23c7.addEventListener("touchend", _0x17d0e7);
  function _0x552c83(_0x59f305) {
    _0x59f305.preventDefault();
    _0x7a494f = true;
    if (_0x59f305.type === "mousedown") {
      _0x24745d.x = _0x59f305.clientX - _0x5f23c7.getBoundingClientRect().left;
      _0x24745d.y = _0x59f305.clientY - _0x5f23c7.getBoundingClientRect().top;
    } else if (_0x59f305.type === "touchstart") {
      _0x24745d.x = _0x59f305.touches[0].clientX - _0x5f23c7.getBoundingClientRect().left;
      _0x24745d.y = _0x59f305.touches[0].clientY - _0x5f23c7.getBoundingClientRect().top;
    }
  }
  function _0x17d0e7() {
    _0x7a494f = false;
  }
  // Variáveis para armazenar as coordenadas iniciais do mouse ou toque
  var initialX = 0;
  var initialY = 0;
  var offsetX = 0;
  var offsetY = 0;
  var isDragging = false;

  // Adiciona listeners de eventos para começar e parar o arrastamento
  _0x5f23c7.addEventListener('mousedown', startDragging);
  _0x5f23c7.addEventListener('touchstart', startDragging);
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchend', stopDragging);

  function startDragging(event) {
      event.preventDefault();

      isDragging = true;

      // Captura a posição inicial do mouse ou toque e a posição atual do elemento
      initialX = event.clientX || event.touches[0].clientX;
      initialY = event.clientY || event.touches[0].clientY;

      offsetX = _0x5f23c7.offsetLeft;
      offsetY = _0x5f23c7.offsetTop;

      // Adiciona listeners de eventos para o movimento do mouse ou toque
      document.addEventListener('mousemove', _0x3fbbc2);
      document.addEventListener('touchmove', _0x3fbbc2);
  }

  function stopDragging() {
      isDragging = false;

      // Remove os listeners de eventos de movimento do mouse ou toque
      document.removeEventListener('mousemove', _0x3fbbc2);
      document.removeEventListener('touchmove', _0x3fbbc2);
  }

  function _0x3fbbc2(_0x4271d1) {
      if (isDragging) {
          // Calcula a diferença entre a posição atual do mouse ou toque e a posição inicial do elemento
          var deltaX = (_0x4271d1.clientX || _0x4271d1.touches[0].clientX) - initialX;
          var deltaY = (_0x4271d1.clientY || _0x4271d1.touches[0].clientY) - initialY;

          // Define as novas coordenadas do elemento
          _0x5f23c7.style.left = offsetX + deltaX + 'px';
          _0x5f23c7.style.top = offsetY + deltaY + 'px';
      }
  }

  var _0xa7cdce = document.createElement("div");
  _0xa7cdce.className = "modal-content";
  _0xa7cdce.style.padding = "20px";
  _0xa7cdce.style.color = "white";
  _0xa7cdce.style.textAlign = "center";
  var _0x4b336c = document.createElement("div");
  _0x4b336c.style.display = "flex";
  _0x4b336c.style.justifyContent = "center";
  var _0xf3e729 = document.createElement("img");
  _0xf3e729.src = "https://e5bacb7c-aa6d-4eae-8265-cf20d0f9506d-00-n781ph6hauzj.spock.replit.dev/fox-leaf-logo-design-vector_179537-70-removebg.png";
  _0xf3e729.alt = "Hacker Image";
  _0xf3e729.style.width = "100px";
  _0xf3e729.style.height = "100px";
  _0xf3e729.style.borderRadius = "50%";
  _0xf3e729.style.marginBottom = "10px";
  _0x4b336c.appendChild(_0xf3e729);
  _0xa7cdce.appendChild(_0x4b336c);
  var _0x5340e8 = document.createElement('p');
  _0x5340e8.innerHTML = "<strong>Projeto Omega</strong>";
  _0xa7cdce.appendChild(_0x5340e8);
  var _0xa338e8 = document.createElement('p');
  _0xa338e8.id = "message";
  _0xa7cdce.appendChild(_0xa338e8);
  _0x5f23c7.appendChild(_0xa7cdce);
  document.body.appendChild(_0x5f23c7);
  var _0x27fe08 = document.createElement("span");
  _0x27fe08.className = "text-animation";
  _0x27fe08.style.color = "#FF0000";
  _0xa338e8.appendChild(_0x27fe08);
  var _0x323eed = 0;
  function _0x161cb4() {
    if (_0x323eed < "SCRIPT SENDO INJETADO EM: jhonbet/html-app-jhonbet...".length) {
      _0x27fe08.textContent += "SCRIPT SENDO INJETADO EM: jhonbet/html-app-jhonbet..."[_0x323eed++];
      setTimeout(_0x161cb4, 100);
    } else {
      setTimeout(function () {
        _0xa7cdce.removeChild(_0x27fe08);
        _0x4fd9c7();
      }, 3000);
    }
  }
  function _0x4fd9c7() {
    var _0x28d0df = 0;
    var _0x10222d = setInterval(function () {
      if (_0x28d0df < "Procurando jogos".length) {
        _0xa338e8.textContent += "Procurando jogos"[_0x28d0df];
        _0xa338e8.style.color = "#FF0000";
        _0x28d0df++;
      } else {
        clearInterval(_0x10222d);
        setTimeout(function () {
          _0x847a84();
        }, 4000);
      }
    }, 100);
  }
  function _0x847a84() {
    var _0x369433 = ["filesgames", "pggames", "pgsoft", "games/files", "programtic/games"];
    var _0x1e2144 = 0;
    var _0x48431a = setInterval(function () {
      _0xa338e8.textContent = "Search in:" + _0x369433[_0x1e2144++];
      if (_0x1e2144 === _0x369433.length) {
        _0x1e2144 = 0;
      }
    }, 42);
    setTimeout(function () {
      clearInterval(_0x48431a);
      _0xa338e8.textContent = '';
      _0x4211e2();
    }, 7000);
  }
  function _0x4211e2() {
    _0xa338e8.textContent = "Jogos encontrados";
    _0xa338e8.style.color = "#00FF00";
    _0x8bfb96();
  }
  function _0x8bfb96() {
    var _0x3c238c = ["Fortune Dragon", "Fortune Tiger", "Fortune Ox", "Fortune Mouse", "Fortune Rabbit", "Mines"];
    var _0x19424c = document.createElement("div");
    _0x19424c.style.display = "grid";
    _0x19424c.style.gridTemplateColumns = "repeat(2, 1fr)";
    _0x19424c.style.gridGap = "10px";
    _0x19424c.style.alignItems = "center";
    _0x19424c.style.justifyItems = "center";
    _0xa7cdce.appendChild(_0x19424c);
    for (var _0x26a6c3 = 0; _0x26a6c3 < 6; _0x26a6c3++) {
      var _0x18f26e = document.createElement("div");
      _0x18f26e.style.textAlign = "center";
      _0x18f26e.style.color = "red";
      _0x18f26e.style.cursor = "pointer";
      var _0x1aa98f = _0x3c238c[_0x26a6c3].split(" ");
      var _0x2b1a3e = document.createElement("div");
      _0x2b1a3e.textContent = _0x1aa98f[0];
      _0x18f26e.appendChild(_0x2b1a3e);
      if (_0x1aa98f.length > 1) {
        var _0x40fb6f = document.createElement("div");
        _0x40fb6f.textContent = _0x1aa98f.slice(1).join(" ");
        _0x18f26e.appendChild(_0x40fb6f);
      }
      var _0x1a6d80 = document.createElement('hr');
      _0x1a6d80.style.border = "none";
      _0x1a6d80.style.borderTop = "1px solid red";
      _0x1a6d80.style.width = _0x18f26e.offsetWidth + 'px';
      _0x18f26e.appendChild(_0x1a6d80);
      if (_0x26a6c3 === 0) {
        _0x506015 = _0x18f26e;
        _0x506015.addEventListener("click", function () {
          if (_0x12dca3 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x39e6bb();
          } else {
            _0x506015.style.color = "orange";
          }
        });
        _0x506015.addEventListener("touchstart", function () {
          if (_0x12dca3 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x39e6bb();
          } else {
            _0x506015.style.color = "orange";
          }
        });
      } else if (_0x26a6c3 === 5) {
        _0x18f26e.addEventListener("click", function () {
          if (_0xddba7c < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x4cc6cb(_0x18f26e);
            _0xddba7c++;
          } else {
            _0x18f26e.style.color = "orange";
            _0x18f26e.disabled = true;
            setTimeout(function () {
              _0x18f26e.style.color = "red";
              _0x18f26e.disabled = false;
              _0xddba7c = 0;
            }, 60000);
          }
        });
        _0x18f26e.addEventListener("touchstart", function () {
          if (_0xddba7c < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x4cc6cb(_0x18f26e);
            _0xddba7c++;
          } else {
            _0x18f26e.style.color = "orange";
            _0x18f26e.disabled = true;
            setTimeout(function () {
              _0x18f26e.style.color = "red";
              _0x18f26e.disabled = false;
              _0xddba7c = 0;
            }, 60000);
          }
        });
      }
      if (_0x26a6c3 === 1) {
        fortuneTigerButton = _0x18f26e;
        fortuneTigerButton.addEventListener("click", function () {
          if (_0x447227 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x5b2db();
          } else {
            fortuneTigerButton.style.color = "orange";
            fortuneTigerButton.disabled = true;
            setTimeout(function () {
              fortuneTigerButton.style.color = "red";
              fortuneTigerButton.disabled = false;
              _0x447227 = 0;
            }, 60000);
          }
          _0x447227++;
        });
        fortuneTigerButton.addEventListener("touchstart", function () {
          if (_0x447227 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x5b2db();
          } else {
            fortuneTigerButton.style.color = "orange";
            fortuneTigerButton.disabled = true;
            setTimeout(function () {
              fortuneTigerButton.style.color = "red";
              fortuneTigerButton.disabled = false;
              _0x447227 = 0;
            }, 60000);
          }
          _0x447227++;
        });
      }
      if (_0x26a6c3 === 2) {
        fortuneOxButton = _0x18f26e;
        fortuneOxButton.addEventListener("click", function () {
          if (_0x3c82a5 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x4b9211();
          } else {
            fortuneOxButton.style.color = "orange";
            fortuneOxButton.disabled = true;
            setTimeout(function () {
              fortuneOxButton.style.color = "red";
              fortuneOxButton.disabled = false;
              _0x3c82a5 = 0;
            }, 60000);
          }
          _0x3c82a5++;
        });
        fortuneOxButton.addEventListener("touchstart", function () {
          if (_0x3c82a5 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x4b9211();
          } else {
            fortuneOxButton.style.color = "orange";
            fortuneOxButton.disabled = true;
            setTimeout(function () {
              fortuneOxButton.style.color = "red";
              fortuneOxButton.disabled = false;
              _0x3c82a5 = 0;
            }, 60000);
          }
          _0x3c82a5++;
        });
      }
      if (_0x26a6c3 === 3) {
        fortuneMouseButton = _0x18f26e;
        fortuneMouseButton.addEventListener("click", function () {
          if (_0x42b615 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x9311cd();
          } else {
            fortuneMouseButton.style.color = "orange";
            fortuneMouseButton.disabled = true;
            setTimeout(function () {
              fortuneMouseButton.style.color = "red";
              fortuneMouseButton.disabled = false;
              _0x42b615 = 0;
            }, 60000);
          }
          _0x42b615++;
        });
        fortuneMouseButton.addEventListener("touchstart", function () {
          if (_0x42b615 < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x9311cd();
          } else {
            fortuneMouseButton.style.color = "orange";
            fortuneMouseButton.disabled = true;
            setTimeout(function () {
              fortuneMouseButton.style.color = "red";
              fortuneMouseButton.disabled = false;
              _0x42b615 = 0;
            }, 60000);
          }
          _0x42b615++;
        });
      }
      if (_0x26a6c3 === 4) {
        fortuneRabbitButton = _0x18f26e;
        fortuneRabbitButton.addEventListener("click", function () {
          if (_0x19bdad < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x1dae54();
          } else {
            fortuneRabbitButton.style.color = "orange";
            fortuneRabbitButton.disabled = true;
            setTimeout(function () {
              fortuneRabbitButton.style.color = "red";
              fortuneRabbitButton.disabled = false;
              _0x19bdad = 0;
            }, 60000);
          }
          _0x19bdad++;
        });
        fortuneRabbitButton.addEventListener("touchstart", function () {
          if (_0x19bdad < 3) {
            document.getElementById("message").style.display = "none";
            _0x19424c.innerHTML = '';
            _0x1dae54();
          } else {
            fortuneRabbitButton.style.color = "orange";
            fortuneRabbitButton.disabled = true;
            setTimeout(function () {
              fortuneRabbitButton.style.color = "red";
              fortuneRabbitButton.disabled = false;
              _0x19bdad = 0;
            }, 60000);
          }
          _0x19bdad++;
        });
      }
      _0x19424c.appendChild(_0x18f26e);
    }
  }
  function _0x39e6bb() {
    var _0x40562c = document.createElement("span");
    _0x40562c.textContent = "< ";
    _0x40562c.style.cursor = "pointer";
    _0x40562c.style.color = "#FFFFFF";
    _0x40562c.addEventListener("click", function () {
      _0x12dca3++;
      if (_0x12dca3 >= 3) {
        _0x506015.style.color = "orange";
        _0x506015.removeEventListener("click", null);
        _0x506015.removeEventListener("touchstart", null);
        setTimeout(function () {
          _0x12dca3 = 0;
          _0x506015.style.color = "red";
        }, 60000);
      }
      var _0x27acd1 = _0x47c490.nextSibling;
      _0xa7cdce.removeChild(_0x27acd1);
      _0xa7cdce.removeChild(_0x47c490);
      _0xa7cdce.removeChild(_0x40562c);
      _0x4211e2();
    });
    _0x40562c.addEventListener("touchstart", function () {
      _0x12dca3++;
      if (_0x12dca3 >= 3) {
        _0x506015.style.color = "orange";
        _0x506015.removeEventListener("click", null);
        _0x506015.removeEventListener("touchstart", null);
        setTimeout(function () {
          _0x12dca3 = 0;
          _0x506015.style.color = "red";
        }, 60000);
      }
      var _0x5f1b0b = _0x47c490.nextSibling;
      _0xa7cdce.removeChild(_0x5f1b0b);
      _0xa7cdce.removeChild(_0x47c490);
      _0xa7cdce.removeChild(_0x40562c);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x40562c, _0x47c490);
    var _0x47c490 = document.createElement('p');
    _0x47c490.style.color = "red";
    _0x47c490.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x47c490);
    var _0x4f68a7 = document.createElement("span");
    _0x4f68a7.className = "text-animation";
    _0x4f68a7.style.color = "#FF0000";
    _0x47c490.appendChild(_0x4f68a7);
    var _0x43b589 = 0;
    function _0x39f948() {
      if (_0x43b589 < "Brecha Extraída: 🐉".length) {
        _0x4f68a7.textContent += "Brecha Extraída: 🐉"[_0x43b589++];
        setTimeout(_0x39f948, 100);
      } else {
        setTimeout(function () {
          _0x3859c4();
        }, 1000);
      }
    }
    function _0x3859c4() {
      var _0xaa3512 = document.createElement("div");
      _0xa7cdce.appendChild(_0xaa3512);
      var _0x4b5efc = Math.floor(Math.random() * 12) + 5;
      var _0x5e2b41 = document.createElement('p');
      _0x5e2b41.textContent = "💸 Nº de Jogadas: " + _0x4b5efc;
      _0xaa3512.appendChild(_0x5e2b41);
      var _0x17828b = new Date();
      var _0x1df645 = new Date(_0x17828b.getTime() + 1200000);
      var _0x3317a2 = document.createElement('p');
      _0x3317a2.textContent = "⏰ Válido até: " + _0x1df645.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0xaa3512.appendChild(_0x3317a2);
      var _0x2b46e2 = Math.floor(Math.random() * 8) + 1;
      var _0x202059 = _0x4b5efc - _0x2b46e2;
      var _0xc11806 = document.createElement('p');
      _0xc11806.textContent = "✅ " + _0x2b46e2 + "X Normal";
      _0xaa3512.appendChild(_0xc11806);
      var _0x481d68 = document.createElement('p');
      _0x481d68.textContent = "🔄 Alternando";
      _0xaa3512.appendChild(_0x481d68);
      var _0x1c58ed = document.createElement('p');
      _0x1c58ed.textContent = "⚡️ " + _0x202059 + "X Turbo";
      _0xaa3512.appendChild(_0x1c58ed);
    }
    _0x39f948();
  }
  function _0x5b2db() {
    var _0x57e267 = document.createElement("span");
    _0x57e267.textContent = "< ";
    _0x57e267.style.cursor = "pointer";
    _0x57e267.style.color = "#FFFFFF";
    _0x57e267.addEventListener("click", function () {
      _0x12dca3++;
      if (_0x12dca3 >= 3) {
        fortuneTigerButton.style.color = "orange";
        fortuneTigerButton.removeEventListener("click", null);
        fortuneTigerButton.removeEventListener("touchstart", null);
        setTimeout(function () {
          _0x12dca3 = 0;
          fortuneTigerButton.style.color = "red";
        }, 60000);
      }
      var _0x251664 = _0x426f09.nextSibling;
      _0xa7cdce.removeChild(_0x251664);
      _0xa7cdce.removeChild(_0x426f09);
      _0xa7cdce.removeChild(_0x57e267);
      _0x4211e2();
    });
    _0x57e267.addEventListener("touchstart", function () {
      _0x12dca3++;
      if (_0x12dca3 >= 3) {
        fortuneTigerButton.style.color = "orange";
        fortuneTigerButton.removeEventListener("click", null);
        fortuneTigerButton.removeEventListener("touchstart", null);
        setTimeout(function () {
          _0x12dca3 = 0;
          fortuneTigerButton.style.color = "red";
        }, 60000);
      }
      var _0x1c1d38 = _0x426f09.nextSibling;
      _0xa7cdce.removeChild(_0x1c1d38);
      _0xa7cdce.removeChild(_0x426f09);
      _0xa7cdce.removeChild(_0x57e267);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x57e267, _0x426f09);
    var _0x426f09 = document.createElement('p');
    _0x426f09.style.color = "red";
    _0x426f09.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x426f09);
    var _0x20cbd0 = document.createElement("span");
    _0x20cbd0.className = "text-animation";
    _0x20cbd0.style.color = "#FF0000";
    _0x426f09.appendChild(_0x20cbd0);
    var _0x525860 = 0;
    function _0x5d5119() {
      if (_0x525860 < "Brecha Extraída:🐯".length) {
        _0x20cbd0.textContent += "Brecha Extraída:🐯"[_0x525860++];
        setTimeout(_0x5d5119, 100);
      } else {
        setTimeout(function () {
          _0x5517a9();
        }, 1000);
      }
    }
    function _0x5517a9() {
      var _0x1f0f24 = document.createElement("div");
      _0xa7cdce.appendChild(_0x1f0f24);
      var _0x164858 = Math.floor(Math.random() * 12) + 5;
      var _0x5169f0 = document.createElement('p');
      _0x5169f0.textContent = "💸 Nº de Jogadas: " + _0x164858;
      _0x1f0f24.appendChild(_0x5169f0);
      var _0x49dbf3 = new Date();
      var _0x3a8a27 = new Date(_0x49dbf3.getTime() + 1200000);
      var _0x56d8ca = document.createElement('p');
      _0x56d8ca.textContent = "⏰ Válido até: " + _0x3a8a27.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0x1f0f24.appendChild(_0x56d8ca);
      var _0x2c1aa9 = Math.floor(Math.random() * 8) + 1;
      var _0x4b52fd = _0x164858 - _0x2c1aa9;
      var _0x47b211 = document.createElement('p');
      _0x47b211.textContent = "✅ " + _0x2c1aa9 + "X Normal";
      _0x1f0f24.appendChild(_0x47b211);
      var _0x568eff = document.createElement('p');
      _0x568eff.textContent = "🔄 Alternando";
      _0x1f0f24.appendChild(_0x568eff);
      var _0x4c1210 = document.createElement('p');
      _0x4c1210.textContent = "⚡️ " + _0x4b52fd + "X Turbo";
      _0x1f0f24.appendChild(_0x4c1210);
    }
    _0x5d5119();
  }
  function _0x4b9211() {
    var _0x166b55 = document.createElement("span");
    _0x166b55.textContent = "< ";
    _0x166b55.style.cursor = "pointer";
    _0x166b55.style.color = "#FFFFFF";
    _0x166b55.addEventListener("click", function () {
      fortuneOxButton.style.color = "red";
      var _0x4d7cce = _0x2c91cf.nextSibling;
      _0xa7cdce.removeChild(_0x4d7cce);
      _0xa7cdce.removeChild(_0x2c91cf);
      _0xa7cdce.removeChild(_0x166b55);
      _0x4211e2();
    });
    _0x166b55.addEventListener("touchstart", function () {
      fortuneOxButton.style.color = "red";
      var _0x3b44b2 = _0x2c91cf.nextSibling;
      _0xa7cdce.removeChild(_0x3b44b2);
      _0xa7cdce.removeChild(_0x2c91cf);
      _0xa7cdce.removeChild(_0x166b55);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x166b55, _0x2c91cf);
    var _0x2c91cf = document.createElement('p');
    _0x2c91cf.style.color = "red";
    _0x2c91cf.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x2c91cf);
    var _0x52abff = document.createElement("span");
    _0x52abff.className = "text-animation";
    _0x52abff.style.color = "#FF0000";
    _0x2c91cf.appendChild(_0x52abff);
    var _0x53e8f0 = 0;
    function _0x3c6cb6() {
      if (_0x53e8f0 < "Brecha Extraída:🐂".length) {
        _0x52abff.textContent += "Brecha Extraída:🐂"[_0x53e8f0++];
        setTimeout(_0x3c6cb6, 100);
      } else {
        setTimeout(function () {
          _0x2b2e9f();
        }, 1000);
      }
    }
    function _0x2b2e9f() {
      var _0xeb99e = document.createElement("div");
      _0xa7cdce.appendChild(_0xeb99e);
      var _0x3e55ee = Math.floor(Math.random() * 12) + 5;
      var _0x786171 = document.createElement('p');
      _0x786171.textContent = "💸 Nº de Jogadas: " + _0x3e55ee;
      _0xeb99e.appendChild(_0x786171);
      var _0x3614b1 = new Date();
      var _0x120f09 = new Date(_0x3614b1.getTime() + 1200000);
      var _0xb9fb98 = document.createElement('p');
      _0xb9fb98.textContent = "⏰ Válido até: " + _0x120f09.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0xeb99e.appendChild(_0xb9fb98);
      var _0x341752 = Math.floor(Math.random() * 8) + 1;
      var _0x3a96ef = _0x3e55ee - _0x341752;
      var _0x29edab = document.createElement('p');
      _0x29edab.textContent = "✅ " + _0x341752 + "X Normal";
      _0xeb99e.appendChild(_0x29edab);
      var _0x11fa36 = document.createElement('p');
      _0x11fa36.textContent = "🔄 Alternando";
      _0xeb99e.appendChild(_0x11fa36);
      var _0x5d180a = document.createElement('p');
      _0x5d180a.textContent = "⚡️ " + _0x3a96ef + "X Turbo";
      _0xeb99e.appendChild(_0x5d180a);
    }
    _0x3c6cb6();
  }
  function _0x9311cd() {
    var _0x4cbc3b = document.createElement("span");
    _0x4cbc3b.textContent = "< ";
    _0x4cbc3b.style.cursor = "pointer";
    _0x4cbc3b.style.color = "#FFFFFF";
    _0x4cbc3b.addEventListener("click", function () {
      fortuneMouseButton.style.color = "red";
      var _0x3af5ff = _0x10210d.nextSibling;
      _0xa7cdce.removeChild(_0x3af5ff);
      _0xa7cdce.removeChild(_0x10210d);
      _0xa7cdce.removeChild(_0x4cbc3b);
      _0x4211e2();
    });
    _0x4cbc3b.addEventListener("touchstart", function () {
      fortuneMouseButton.style.color = "red";
      var _0xefaf1 = _0x10210d.nextSibling;
      _0xa7cdce.removeChild(_0xefaf1);
      _0xa7cdce.removeChild(_0x10210d);
      _0xa7cdce.removeChild(_0x4cbc3b);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x4cbc3b, _0x10210d);
    var _0x10210d = document.createElement('p');
    _0x10210d.style.color = "red";
    _0x10210d.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x10210d);
    var _0x96db74 = document.createElement("span");
    _0x96db74.className = "text-animation";
    _0x96db74.style.color = "#FF0000";
    _0x10210d.appendChild(_0x96db74);
    var _0x36a7fb = 0;
    function _0x4bc7fa() {
      if (_0x36a7fb < "Brecha Extraída: 🐭".length) {
        _0x96db74.textContent += "Brecha Extraída: 🐭"[_0x36a7fb++];
        setTimeout(_0x4bc7fa, 100);
      } else {
        setTimeout(function () {
          _0x2acb96();
        }, 1000);
      }
    }
    function _0x2acb96() {
      var _0x34c8d7 = document.createElement("div");
      _0xa7cdce.appendChild(_0x34c8d7);
      var _0x4afe1d = Math.floor(Math.random() * 12) + 5;
      var _0x2bb6b1 = document.createElement('p');
      _0x2bb6b1.textContent = "💸 Nº de Jogadas: " + _0x4afe1d;
      _0x34c8d7.appendChild(_0x2bb6b1);
      var _0x48d62a = new Date();
      var _0x3c8597 = new Date(_0x48d62a.getTime() + 1200000);
      var _0x5896a6 = document.createElement('p');
      _0x5896a6.textContent = "⏰ Válido até: " + _0x3c8597.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0x34c8d7.appendChild(_0x5896a6);
      var _0x5ce067 = Math.floor(Math.random() * 8) + 1;
      var _0x38bd02 = _0x4afe1d - _0x5ce067;
      var _0x1203cd = document.createElement('p');
      _0x1203cd.textContent = "✅ " + _0x5ce067 + "X Normal";
      _0x34c8d7.appendChild(_0x1203cd);
      var _0x5bb5ef = document.createElement('p');
      _0x5bb5ef.textContent = "🔄 Alternando";
      _0x34c8d7.appendChild(_0x5bb5ef);
      var _0x18d6c5 = document.createElement('p');
      _0x18d6c5.textContent = "⚡️ " + _0x38bd02 + "X Turbo";
      _0x34c8d7.appendChild(_0x18d6c5);
    }
    _0x4bc7fa();
  }
  function _0x1dae54() {
    var _0x238549 = document.createElement("span");
    _0x238549.textContent = "< ";
    _0x238549.style.cursor = "pointer";
    _0x238549.style.color = "#FFFFFF";
    _0x238549.addEventListener("click", function () {
      fortuneMouseButton.style.color = "red";
      var _0xe2ab4b = _0x2604de.nextSibling;
      _0xa7cdce.removeChild(_0xe2ab4b);
      _0xa7cdce.removeChild(_0x2604de);
      _0xa7cdce.removeChild(_0x238549);
      _0x4211e2();
    });
    _0x238549.addEventListener("touchstart", function () {
      fortuneMouseButton.style.color = "red";
      var _0x582fa3 = _0x2604de.nextSibling;
      _0xa7cdce.removeChild(_0x582fa3);
      _0xa7cdce.removeChild(_0x2604de);
      _0xa7cdce.removeChild(_0x238549);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x238549, _0x2604de);
    var _0x2604de = document.createElement('p');
    _0x2604de.style.color = "red";
    _0x2604de.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x2604de);
    var _0x2dfbea = document.createElement("span");
    _0x2dfbea.className = "text-animation";
    _0x2dfbea.style.color = "#FF0000";
    _0x2604de.appendChild(_0x2dfbea);
    var _0x2eda72 = 0;
    function _0x16d68d() {
      if (_0x2eda72 < "Brecha Extraída: 🐰".length) {
        _0x2dfbea.textContent += "Brecha Extraída: 🐰"[_0x2eda72++];
        setTimeout(_0x16d68d, 100);
      } else {
        setTimeout(function () {
          _0xc6be2d();
        }, 1000);
      }
    }
    function _0xc6be2d() {
      var _0x5db9f5 = document.createElement("div");
      _0xa7cdce.appendChild(_0x5db9f5);
      var _0x1095e4 = Math.floor(Math.random() * 12) + 5;
      var _0x25bee0 = document.createElement('p');
      _0x25bee0.textContent = "🎰 Nº de Jogadas: " + _0x1095e4;
      _0x5db9f5.appendChild(_0x25bee0);
      var _0x30ca8c = new Date();
      var _0xda89ee = new Date(_0x30ca8c.getTime() + 1200000);
      var _0x43bc60 = document.createElement('p');
      _0x43bc60.textContent = "⏰ Válido até: " + _0xda89ee.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0x5db9f5.appendChild(_0x43bc60);
      var _0x195494 = Math.floor(Math.random() * 8) + 1;
      var _0x1311e2 = _0x1095e4 - _0x195494;
      var _0x4e1eb1 = document.createElement('p');
      _0x4e1eb1.textContent = "✅ " + _0x195494 + "X Normal";
      _0x5db9f5.appendChild(_0x4e1eb1);
      var _0x26a69a = document.createElement('p');
      _0x26a69a.textContent = "🔄 Alternando";
      _0x5db9f5.appendChild(_0x26a69a);
      var _0x3d69db = document.createElement('p');
      _0x3d69db.textContent = "⚡️ " + _0x1311e2 + "X Turbo";
      _0x5db9f5.appendChild(_0x3d69db);
    }
    _0x16d68d();
  }
  function _0x4cc6cb() {
    var _0x2fccd8 = document.createElement("span");
    _0x2fccd8.textContent = "< ";
    _0x2fccd8.style.cursor = "pointer";
    _0x2fccd8.style.color = "#FFFFFF";
    _0x2fccd8.addEventListener("click", function () {
      fortuneMouseButton.style.color = "red";
      var _0x23ed84 = _0x2b1a00.nextSibling;
      _0xa7cdce.removeChild(_0x23ed84);
      _0xa7cdce.removeChild(_0x2b1a00);
      _0xa7cdce.removeChild(_0x2fccd8);
      _0x4211e2();
    });
    _0x2fccd8.addEventListener("touchstart", function () {
      fortuneMouseButton.style.color = "red";
      var _0x4b084e = _0x2b1a00.nextSibling;
      _0xa7cdce.removeChild(_0x4b084e);
      _0xa7cdce.removeChild(_0x2b1a00);
      _0xa7cdce.removeChild(_0x2fccd8);
      _0x4211e2();
    });
    _0xa7cdce.insertBefore(_0x2fccd8, _0x2b1a00);
    var _0x2b1a00 = document.createElement('p');
    _0x2b1a00.style.color = "red";
    _0x2b1a00.style.fontWeight = "bold";
    _0xa7cdce.appendChild(_0x2b1a00);
    var _0x230d4f = document.createElement("span");
    _0x230d4f.className = "text-animation";
    _0x230d4f.style.color = "#FF0000";
    _0x2b1a00.appendChild(_0x230d4f);
    var _0xf38739 = 0;
    function _0x5aab4c() {
      if (_0xf38739 < "Brecha Extraída:💣".length) {
        _0x230d4f.textContent += "Brecha Extraída:💣"[_0xf38739++];
        setTimeout(_0x5aab4c, 100);
      } else {
        setTimeout(function () {
          _0x45bdcb();
        }, 1000);
      }
    }
    function _0x45bdcb() {
      var _0x4fa80b = document.createElement("div");
      _0xa7cdce.appendChild(_0x4fa80b);
      var _0x545bc4 = Math.floor(Math.random() * 31) + 70;
      var _0x3ad8dc = new Date(Date.now() + 1200000);
      var _0x118303 = Math.floor(Math.random() * 4) + 2;
      var _0x531eb7 = '';
      var _0x119c40 = [];
      while (_0x119c40.length < 4) {
        var _0x52cf80 = Math.floor(Math.random() * 5);
        var _0x18e28d = Math.floor(Math.random() * 5);
        var _0x2c72d2 = _0x52cf80 + ',' + _0x18e28d;
        if (!_0x119c40.includes(_0x2c72d2)) {
          _0x119c40.push(_0x2c72d2);
        }
      }
      for (var _0x42eec4 = 0; _0x42eec4 < 5; _0x42eec4++) {
        var _0x19a9d4 = '';
        for (var _0xb4a141 = 0; _0xb4a141 < 5; _0xb4a141++) {
          if (_0x119c40.includes(_0x42eec4 + ',' + _0xb4a141)) {
            _0x19a9d4 += '⭐️';
          } else {
            _0x19a9d4 += '🟦';
          }
        }
        _0x531eb7 += _0x19a9d4 + "<br>";
      }
      var _0x1f6a93 = document.createElement('p');
      _0x1f6a93.textContent = "💣 Minas: 4";
      _0x4fa80b.appendChild(_0x1f6a93);
      var _0x1d321a = document.createElement('p');
      _0x1d321a.textContent = "📊 % acerto: " + _0x545bc4 + '%';
      _0x4fa80b.appendChild(_0x1d321a);
      var _0x36acdc = document.createElement('p');
      _0x36acdc.textContent = "🕛 Válido durante: " + _0x3ad8dc.toLocaleTimeString([], {
        'hour': "numeric",
        'minute': "2-digit"
      });
      _0x4fa80b.appendChild(_0x36acdc);
      var _0x5b56a8 = document.createElement('p');
      _0x5b56a8.textContent = "🔁 Nº de tentativas: " + _0x118303;
      _0x4fa80b.appendChild(_0x5b56a8);
      var _0x3a29e6 = document.createElement("pre");
      _0x3a29e6.innerHTML = _0x531eb7;
      _0x4fa80b.appendChild(_0x3a29e6);
    }
    _0x5aab4c();
  }
  _0x161cb4();
  setTimeout(function () {
    var _0x387b9b = _0x27fe08.textContent.slice(-1);
    var _0xdcdddd = setInterval(function () {
      if (_0x387b9b === '.') {
        _0x27fe08.textContent = _0x27fe08.textContent.slice(0, -1) + '|';
        _0x387b9b = '|';
      } else {
        _0x27fe08.textContent = _0x27fe08.textContent.slice(0, -1) + '.';
        _0x387b9b = '.';
      }
    }, 500);
    setTimeout(function () {
      clearInterval(_0xdcdddd);
      _0xa338e8.textContent = '';
      _0x4fd9c7();
    }, 3000);
  }, "SCRIPT SENDO INJETADO EM: cassinopix/html-app-cassinopix...".length * 100);
})();

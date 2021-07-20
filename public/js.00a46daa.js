// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"images/cagev1.png":[function(require,module,exports) {
module.exports = "/cagev1.2b0cfe84.png";
},{}],"images/cagev2.png":[function(require,module,exports) {
module.exports = "/cagev2.81c67585.png";
},{}],"images/cagev3.png":[function(require,module,exports) {
module.exports = "/cagev3.04b6021b.png";
},{}],"images/cagev4.png":[function(require,module,exports) {
module.exports = "/cagev4.750c9310.png";
},{}],"images/cagev5.png":[function(require,module,exports) {
module.exports = "/cagev5.100b1ead.png";
},{}],"images/cagev6.png":[function(require,module,exports) {
module.exports = "/cagev6.db977ddc.png";
},{}],"images/cagev7.png":[function(require,module,exports) {
module.exports = "/cagev7.aec0c78c.png";
},{}],"images/cagev8.png":[function(require,module,exports) {
module.exports = "/cagev8.59126c9b.png";
},{}],"images/cagev9.png":[function(require,module,exports) {
module.exports = "/cagev9.7c3bae3f.png";
},{}],"js/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CAGES = exports.BASE_RATE = exports.BASE_SIZE = void 0;

var _cagev = _interopRequireDefault(require("../images/cagev1.png"));

var _cagev2 = _interopRequireDefault(require("../images/cagev2.png"));

var _cagev3 = _interopRequireDefault(require("../images/cagev3.png"));

var _cagev4 = _interopRequireDefault(require("../images/cagev4.png"));

var _cagev5 = _interopRequireDefault(require("../images/cagev5.png"));

var _cagev6 = _interopRequireDefault(require("../images/cagev6.png"));

var _cagev7 = _interopRequireDefault(require("../images/cagev7.png"));

var _cagev8 = _interopRequireDefault(require("../images/cagev8.png"));

var _cagev9 = _interopRequireDefault(require("../images/cagev9.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_SIZE = 50;
exports.BASE_SIZE = BASE_SIZE;
var BASE_RATE = 1.5;
exports.BASE_RATE = BASE_RATE;
var CAGES = [{
  img: _cagev.default
}, {
  img: _cagev2.default
}, {
  img: _cagev3.default
}, {
  img: _cagev4.default
}, {
  img: _cagev5.default
}, {
  img: _cagev6.default
}, {
  img: _cagev7.default
}, {
  img: _cagev8.default
}, {
  img: _cagev9.default
}];
exports.CAGES = CAGES;
},{"../images/cagev1.png":"images/cagev1.png","../images/cagev2.png":"images/cagev2.png","../images/cagev3.png":"images/cagev3.png","../images/cagev4.png":"images/cagev4.png","../images/cagev5.png":"images/cagev5.png","../images/cagev6.png":"images/cagev6.png","../images/cagev7.png":"images/cagev7.png","../images/cagev8.png":"images/cagev8.png","../images/cagev9.png":"images/cagev9.png"}],"js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStartButtonHTML = exports.updateSliderHTML = exports.updateSliderHeight = exports.updateScore = exports.updateScoreHTML = exports.resetGameBoard = exports.removeCage = exports.randomNumber = exports.pauseCages = exports.determinePosition = exports.determineAnimationTime = exports.addPointValueToScore = void 0;

var _enums = require("./enums");

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.randomNumber = randomNumber;

var updateSliderHeight = function updateSliderHeight() {
  var sliderContainer = document.querySelector('.sliderContainer');
  var slider = document.querySelector('.slider');
  var newHeight = sliderContainer.getBoundingClientRect().height;
  slider.setAttribute('style', "\n    width: ".concat(newHeight, "px;\n    transform-origin: ").concat(newHeight / 2, "px ").concat(newHeight / 2, "px\n  "));
}; // Update HTML methods


exports.updateSliderHeight = updateSliderHeight;

var updateScoreHTML = function updateScoreHTML(newScore) {
  return document.querySelector('#currentScore').innerHTML = newScore;
};

exports.updateScoreHTML = updateScoreHTML;

var updateStartButtonHTML = function updateStartButtonHTML(isPlaying) {
  return document.querySelector('#startButton').innerHTML = isPlaying ? 'Pause' : 'Start';
};

exports.updateStartButtonHTML = updateStartButtonHTML;

var updateSliderHTML = function updateSliderHTML(newValue) {
  return document.querySelector('#currentSpeed').innerHTML = "".concat(newValue, " px/s");
};

exports.updateSliderHTML = updateSliderHTML;

var updateScore = function updateScore(state, amtToAdd) {
  state.score += +amtToAdd;
  document.querySelector('#currentScore').innerHTML = state.score;
}; // Cage methods


exports.updateScore = updateScore;

var pauseCages = function pauseCages() {
  var isPlaying = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cages = document.querySelectorAll('.imageWrapper');
  cages.forEach(function (cage) {
    cage.style.WebkitAnimationPlayState = isPlaying ? 'running' : 'paused';

    if (isPlaying) {
      cage.disabled = false;
    } else {
      cage.disabled = true;
    }
  });
};

exports.pauseCages = pauseCages;

var removeCage = function removeCage(imageWrapper) {
  imageWrapper.removeEventListener("animationend", removeCage);
  imageWrapper.parentNode.removeChild(imageWrapper);
};

exports.removeCage = removeCage;

var determinePosition = function determinePosition(imageWidth) {
  var maxWidth = document.querySelector('.gameBoard').clientWidth;
  var leftPosition = randomNumber(0, maxWidth - imageWidth);
  return leftPosition;
};

exports.determinePosition = determinePosition;

var determineAnimationTime = function determineAnimationTime(desiredFallRate) {
  console.log('desiredFallRate: ', desiredFallRate, _enums.BASE_RATE);
  var windowHeight = window.innerHeight;
  return windowHeight / (desiredFallRate * _enums.BASE_RATE);
};

exports.determineAnimationTime = determineAnimationTime;

var addPointValueToScore = function addPointValueToScore(state, imageWrapper) {
  if (state.isPlaying) {
    updateScore(state, imageWrapper.dataset.pointvalue);
    removeCage(imageWrapper);
  }
};

exports.addPointValueToScore = addPointValueToScore;

var resetGameBoard = function resetGameBoard(gameState, myInterval) {
  gameState.score = 0;
  gameState.isPlaying = false;
  gameState.currentSpeed = 60;
  updateScoreHTML(gameState.score);
  updateSliderHTML(gameState.currentSpeed);
  updateStartButtonHTML(false);
  document.querySelector('#speedControl').value = 60;
  clearInterval(myInterval); // Remove all cages from dom

  var cages = document.querySelectorAll('.imageWrapper');
  cages.forEach(function (cage) {
    removeCage(cage);
  });
};

exports.resetGameBoard = resetGameBoard;
},{"./enums":"js/enums.js"}],"js/textFlash.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textFlash = void 0;

var textFlash = function textFlash(type) {
  var target = document.querySelector('.gameBoard');
  var flash = document.createElement('div');
  flash.classList.add('textFlash', "".concat(type));
  flash.setAttribute('style', "\n    animation: ".concat(type === 'restart' ? 'rotateAndFlash' : 'textFlash', " 750ms ease-in-out;\n  "));
  flash.addEventListener("animationend", function () {
    flash.parentNode.removeChild(flash);
  });
  target.appendChild(flash);
};

exports.textFlash = textFlash;
},{}],"js/cage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCage = void 0;

var _util = require("./util.js");

var _enums = require("./enums");

var addCage = function addCage(state) {
  var randNum = (0, _util.randomNumber)(1, 11);
  var randomCage = (0, _util.randomNumber)(0, _enums.CAGES.length);
  var imageWidth = randNum * 10 + _enums.BASE_SIZE;
  var wrapperData = {
    size: imageWidth,
    pointValue: 11 - randNum,
    position: (0, _util.determinePosition)(imageWidth)
  };
  var imageWrapper = document.createElement('button');
  imageWrapper.classList.add('imageWrapper');
  imageWrapper.setAttribute("style", "\n    height: ".concat(wrapperData.size, "px;\n    width: ").concat(wrapperData.size, "px;\n    animation: slideDown ").concat((0, _util.determineAnimationTime)(state.currentSpeed), "s linear;\n    left: ").concat(wrapperData.position, "px;\n    "));
  imageWrapper.setAttribute("data-pointValue", "".concat(wrapperData.pointValue));
  imageWrapper.addEventListener("click", function () {
    return (0, _util.addPointValueToScore)(state, imageWrapper);
  });
  imageWrapper.addEventListener("animationend", function () {
    return (0, _util.removeCage)(imageWrapper);
  });
  var innerImage = document.createElement('img');
  innerImage.setAttribute('style', 'width: 100%');
  innerImage.src = _enums.CAGES[randomCage].img;
  innerImage.alt = 'Nic Cage';
  imageWrapper.appendChild(innerImage);
  document.querySelector('.gameBoard').appendChild(imageWrapper);
};

exports.addCage = addCage;
},{"./util.js":"js/util.js","./enums":"js/enums.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _util = require("./util.js");

var _textFlash = require("./textFlash.js");

var _cage = require("./cage.js");

// Util
// Components
var slider = document.querySelector('#speedControl');
var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');
var instructionsButton = document.querySelector('#instructions');
var closeModalButton = document.querySelector('.close'); // Global variables

var gameState = {
  currentSpeed: slider.value,
  score: 0,
  isPlaying: false
};
var myInterval;
window.addEventListener('resize', function () {
  (0, _util.updateSliderHeight)();
});
(0, _util.updateSliderHTML)(gameState.currentSpeed);
(0, _util.updateScoreHTML)(0);
(0, _util.updateSliderHeight)(); // Update currentSpeed when slider is adjusted

slider.addEventListener('input', function (event) {
  var value = event.target.value;
  gameState.currentSpeed = value;
  (0, _util.updateSliderHTML)(value);
}); // Capture button press

startButton.addEventListener('click', function () {
  var isPlaying = gameState.isPlaying;
  gameState.isPlaying = !isPlaying;
  (0, _util.updateStartButtonHTML)(gameState.isPlaying);
  (0, _textFlash.textFlash)(gameState.isPlaying ? 'play' : 'pause'); // Add a cage to a random spot every second

  if (gameState.isPlaying) {
    myInterval = setInterval(function () {
      return (0, _cage.addCage)(gameState);
    }, 1000);
  } else {
    clearInterval(myInterval);
  } // Grab all cages from the dom and pause animation


  (0, _util.pauseCages)(gameState.isPlaying);
}); // Reset game

resetButton.addEventListener('click', function () {
  (0, _textFlash.textFlash)('restart');
  (0, _util.resetGameBoard)(gameState, myInterval);
}); // Open modal

instructionsButton.addEventListener('click', function () {
  var modal = document.querySelector('.modalOverlay');
  modal.classList.add('active');
  (0, _util.pauseCages)();
  (0, _util.updateStartButtonHTML)(false);
  gameState.isPlaying = false;
  clearInterval(myInterval);
}); // Close modal

closeModalButton.addEventListener('click', function () {
  var modal = document.querySelector('.modalOverlay');
  modal.classList.remove('active');
});
},{"./util.js":"js/util.js","./textFlash.js":"js/textFlash.js","./cage.js":"js/cage.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49825" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map
// ✅ Text-to-Speech
document.getElementById("ttsBtn").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: {tabId: chrome.tabs.TAB_ID_CURRENT}, // will be replaced dynamically
    func: () => {
      let text = window.getSelection().toString() || document.body.innerText;
      let utterance = new SpeechSynthesisUtterance(text.substring(0, 500)); 
      speechSynthesis.speak(utterance);
    }
  });
});

// ✅ High Contrast Mode
document.getElementById("contrastBtn").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: {tabId: chrome.tabs.TAB_ID_CURRENT},
    func: () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "yellow";
    }
  });
});

// ✅ Font Resize
document.getElementById("fontBtn").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: {tabId: chrome.tabs.TAB_ID_CURRENT},
    func: () => {
      document.body.style.fontSize = "20px";
    }
  });
});

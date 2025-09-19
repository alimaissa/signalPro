function calculateLoss() {
  let length = prompt("أدخل طول الكابل بالكيلومتر:");
  if (!length) return;
  let loss = (parseFloat(length) * 0.35 + 2*0.5 + 0.1).toFixed(2);
  document.getElementById("result").innerText =
    "📉 إجمالي الفقد: " + loss + " dB";
}

function maxLength() {
  let category = prompt("أدخل نوع الكابل (Cat5, Cat6, Cat6a):");
  let lengths = { "cat5": 100, "cat6": 100, "cat6a": 100 };
  let max = lengths[category.toLowerCase()] || 100;
  document.getElementById("result").innerText =
    "📏 أقصى طول مسموح: " + max + " متر";
}

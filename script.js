let unlocked = false;
let PASSWORD = "src1234";

function unlock() {

  let p = document.getElementById("pass").value;

  if (p === PASSWORD) {

    unlocked = true;
    document.getElementById("status").innerText = "ปลดล็อกแล้ว";

  } else {
    alert("รหัสผิด");
  }

}

function get(key) {
  return Number(localStorage.getItem(key)) || 0;
}

function add(el) {

  if (!unlocked) {
    alert("ต้องปลดล็อกก่อน");
    return;
  }

  let v = get(el.id) + 1;
  el.value = v;

  localStorage.setItem(el.id, v);

}

function loadPage() {

  let boxes = document.getElementsByClassName("score");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].value = get(boxes[i].id);
  }

}

function manual(el) {

  if (!unlocked) {

    alert("กรุณาปลดล็อกก่อน");
    el.value = get(el.id);
    return;

  }

  if (el.value === "" || isNaN(el.value)) {
    el.value = 0;
  }

  localStorage.setItem(el.id, Number(el.value));

}

function resetPage() {

  if (!unlocked) {
    alert("ต้องปลดล็อกก่อน");
    return;
  }

  if (!confirm("ยืนยันการรีเซ็ตคะแนนหน้านี้ ?")) return;

  let boxes = document.getElementsByClassName("score");

  for (let i = 0; i < boxes.length; i++) {

    let id = boxes[i].id;
    localStorage.setItem(id, 0);
    boxes[i].value = 0;

  }

  alert("รีเซ็ตเรียบร้อยแล้ว");

}

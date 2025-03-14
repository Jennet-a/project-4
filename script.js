function showAll() {
    let len = document.getElementById("lenovo2");
    let sam = document.getElementById("samsung2");
    let app = document.getElementById("apple2");
    let btn = document.getElementById("exp");
    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");

   if (len.style.display === "none") {
    len.style.display="flex";
    sam.style.display="flex";
    app.style.display="flex";
    icon1.style.display="none";
    icon2.style.display="flex";
    btn.innerHTML="Скрыть";
    
   } else {
    len.style.display="none";
    sam.style.display="none";
    app.style.display="none";
    icon1.style.display="flex";
    icon2.style.display="none";
    btn.innerHTML="Показать все";
   }
}
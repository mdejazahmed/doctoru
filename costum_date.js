let daySelect=document.getElementById("day")
let monthSelect=document.getElementById("month")
let yearSelect=document.getElementById("year")


for (let i=1;i<=31;i++){
    let option=document.createElement("option")
    option.value=i 
    option.textContent=i 
    daySelect.appendChild(option)

}
for (let i=1;i<=12;i++){
    let option=document.createElement("option")
    option.value=i 
    option.textContent=i 
    monthSelect.appendChild(option)

}
for (let i=2000;i<=2030;i++){
    let option=document.createElement("option")
    option.value=i 
    option.textContent=i 
    yearSelect.appendChild(option)

}


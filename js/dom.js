const apply=document.getElementById("apply-btn");
apply.disabled=true;
apply.style.cursor="not-allowed";
apply.style.backgroundColor="#EC75B9";

document.getElementById("coupon-field").addEventListener("input", function(event){
    const field=event.target;
    const apply_btn=document.getElementById("apply-btn");
    if(field.value==="SALE200"){
        apply_btn.disabled=false;
        apply_btn.style.cursor="pointer";
        apply_btn.style.backgroundColor="#D322A4";
    }
    else{
        apply_btn.disabled=true;
        apply_btn.style.cursor="not-allowed";
        apply_btn.style.backgroundColor="#EC75B9";
    }
})



const handle=(id)=>{

    const card=document.getElementById(id);
    const card_title=document.getElementById(`${id}-title`).innerText;
    const card_price=parseFloat(document.getElementById(id+"-price").innerText);
    const items_list=document.getElementById("selected-items");
    const item=document.createElement('li');
    item.id=`${id}-item`;
    item.classList=`selected-item`;
    item.innerHTML=`
        <h1 class="cart-title my-10">${card_title}</h1>
        <button class="remove-btn" onclick="remove('${item.id}')">Remove</button>
    `
    items_list.appendChild(item);
}   


const remove=id=>{
    console.log(id)
    const item=document.getElementById(id);
    const items_list=document.getElementById("selected-items");
    items_list.removeChild(item);
}
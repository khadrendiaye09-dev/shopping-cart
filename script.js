let total = document.getElementById('total-price');
function updateTotal(){
  let cards = document.querySelectorAll('.card');
  let sum = 0;
  cards.forEach(c=>{
    let q = parseInt(c.querySelector('.quantity').innerText);
    let p = parseInt(c.querySelector('.unit-price').innerText);
    sum += q*p;
  });
  total.innerText = sum;
}
document.querySelectorAll('.plus').forEach(btn=>{
  btn.addEventListener('click',()=>{ let q=btn.parentElement.querySelector('.quantity'); q.innerText=parseInt(q.innerText)+1; updateTotal(); })
});
document.querySelectorAll('.minus').forEach(btn=>{
  btn.addEventListener('click',()=>{ let q=btn.parentElement.querySelector('.quantity'); if(parseInt(q.innerText)>0){ q.innerText=parseInt(q.innerText)-1; updateTotal(); } })
});
document.querySelectorAll('.like').forEach(h=>{ h.addEventListener('click',()=>{ h.style.color = h.style.color=='red' ? 'black' : 'red'; }) });
document.querySelectorAll('.delete').forEach(d=>{ d.addEventListener('click',()=>{ d.closest('.card-container').remove(); updateTotal(); }) });
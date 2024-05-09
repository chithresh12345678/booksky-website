//selcting popupbocs,popupoverlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbocs=document.querySelector(".popupbocs")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbocs.style.display="block"
})
//selcting cancel button
cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbocs.style.display="none"
})
//selcet container,add-book button,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescritioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
   event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescritioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbocs.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}
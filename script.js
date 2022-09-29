

if (localStorage.length == 0) {
    ans = document.getElementById("ans");

    ans.style = "background-color:#253c36a1;"
    h1 = document.createElement("h1");
    h1.innerHTML = "<center><span style='font-family: sans-serif;'>No note is added!</span></center>";
    ans.appendChild(h1);
} else {
    for (let i = 0; i < localStorage.length; i++) {
        div1 = document.createElement("div");
        div1.classList.add("note");

        ans = document.getElementById("ans");
        ans.appendChild(div1)
    }
    for (let i = 0; i < localStorage.length; i++) {
        div1 = document.getElementsByClassName("note")[i];

        h1 = document.createElement("h1");
        h1.classList.add("accordion");
        h1.innerText = localStorage.key(i);

        div1.appendChild(h1);

        p1 = document.createElement("div");
        p1.classList.add("panel");

        div1.appendChild(p1)
        
        p = document.createElement("p");
        p.innerText = localStorage.getItem(localStorage.key(i));

        p1.appendChild(p)
    }
    for (let i = 0; i < localStorage.length; i++) {
        panel = document.getElementsByClassName("panel")[i];

        btns = document.createElement("div");
        btns.classList.add("btns")
        panel.appendChild(btns);

        update_btn = document.createElement("button");
        update_btn.innerText = "Update"
        update_btn.classList.add("update");
        btns.appendChild(update_btn)

        delet_btn = document.createElement("button");
        delet_btn.innerText = "Delet"
        delet_btn.classList.add("delet");
        btns.appendChild(delet_btn)

    }
}




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.style = "transition: 0.5s;"
    }
}







document.getElementById("TriBar").addEventListener("click", function () {
    if (document.getElementsByClassName("right")[0].style.display == "none" ) {
        document.getElementsByClassName("nav")[0].style = "height: 150px";
        document.getElementsByClassName("right")[0].style.display = "flex";
    }else{
        document.getElementsByClassName("nav")[0].style = "height: 67px";
        document.getElementsByClassName("right")[0].style.display = "none";
    }
})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style = "display:none; transition: 0.4s";

        } else {
            panel.style = "display:block; transition: 0.4s";

        }
    });
}



// Add Function

document.getElementById("Add1").addEventListener("click", function () {
    note_title = document.getElementById("title").value;
    note_description = document.getElementById("description").value;


    if (localStorage.getItem(note_title) == null) {
        // alert("Already added");
        localStorage.setItem(note_title, note_description);
        window.location.reload()
    } else{
        window.location.reload()
    }

})



update_buttons = document.getElementsByClassName("update");
for (let i = 0; i < update_buttons.length; i++) {
    update_buttons[i].addEventListener("click", ()=>{
        form = document.getElementById("Add")
        form.click();

        title = document.getElementById("title");
        title.disabled = true
        description = document.getElementById("description");

        title.value = localStorage.key(i);
        
        description.innerText = localStorage.getItem(localStorage.key(i))
                
    });
}




update = document.getElementsByClassName("update");
for (let i = 0; i < update.length; i++) {

    update[i].addEventListener("click", function (){
        title = document.getElementById("title");
        add_btn_bar = document.getElementById("Add")
        title.disabled = true
        add_btn_bar.click();        
    })
    
}

update22 = document.getElementById("update22");
update22.addEventListener("click", function () {
    var ttle = document.getElementById("title").value;
    var new_description = document.getElementById("description").value;

    if (new_description != null) {
        localStorage.setItem(ttle, new_description) 
        location.reload()       
    }

})



dele = document.getElementsByClassName("delet")
for (let i = 0; i < dele.length; i++) {
    dele[i].addEventListener("click", function (){
        title = localStorage.key(i);
        localStorage.removeItem(title)
        location.reload()
    })
}

// Searching

const search = ()=>{
    let filter = document.getElementById("search").value.toUpperCase();
    let note = document.getElementsByClassName("note");
    

    for (let i = 0; i < note.length; i++) {
        let h1 = note[i].getElementsByTagName("h1")
        let name = h1[0].textContent;

        if (name.toUpperCase().indexOf(filter) > -1) {
            note[i].style.display = '';
        }else{
            note[i].style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const addButton = document.getElementById("add")
    ,     removeButton = document.getElementById("remove")
    ,     fieldsDiv = document.getElementsByClassName("forms")[0];

    addButton.addEventListener("click", addField);
    removeButton.addEventListener("click", removeField);

    function addField(){
        const newField = document.createElement("input");
        newField.placeholder = "New field";

        fieldsDiv.appendChild(newField);
    }

    function removeField(){
        const fields = document.getElementsByTagName("input");
        fields[fields.length-1].remove();
    }
});
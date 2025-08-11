const list = [];

const name_input = document.getElementById("name");
const description_input = document.getElementById("description");
const category_input = document.getElementById("select_box");
const add_ptn = document.getElementById("add_ptn");
const data_table = document.getElementById("table_body");

const savedList = localStorage.getItem('myList');
if (savedList) {
    list.push(...JSON.parse(savedList));
    display();
}
function display(search_term =''){
    data_table.innerHTML = '';
    list.forEach(({name, description , category }, index) => {
        const items = document.createElement("tr");
        items.innerHTML = `
            <td>${index+1}</td>
            <td>${name}</td>
            <td>${description}</td>
            <td>${category}</td>
            <td>
                <button  class="edit_ptn" data-index="${index}">Edit</button>
                <button  class="delete_ptn" data-index="${index}">Delete</button>

            </td>
        `
        data_table.appendChild(items);
    });

}

add_ptn.addEventListener("click",(event) =>{
    event.preventDefault();
    const name = name_input.value.trim();
    const description =  description_input.value.trim();
    const category = category_input.value;
    if(!name || !description || !category ){
        alert("Please fill all the fields");
        return ;
    }
    list.push({name,description,category});
    localStorage.setItem('myList', JSON.stringify(list));
    display();
    name_input.value = '';
    description_input.value = '';
})


data_table.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete_ptn")) {
        const index = parseInt(e.target.dataset.index);
        list.splice(index, 1);
        localStorage.setItem('myList', JSON.stringify(list));
        display();
        
    }
    });

    const editModal = document.getElementById('editModal');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    const modalSaveBtn = document.getElementById('modalSaveBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');
    
    let editIndex = -1;
    
    data_table.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit_ptn')) {
        editIndex = parseInt(e.target.dataset.index);
        const item = list[editIndex];
    
        modalName.value = item.name;
        modalDescription.value = item.description;
        modalCategory.value = item.category;
    
        editModal.style.display = 'block'; 
        }
    });
    
    modalSaveBtn.addEventListener('click', () => {
        const newName = modalName.value.trim();
        const newDescription = modalDescription.value.trim();
        const newCategory = modalCategory.value;
    
    if (!newName || !newDescription || !newCategory) {
        alert('Please fill all fields');
        return;
    }
    
    list[editIndex] = { name: newName, description: newDescription, category: newCategory };
    localStorage.setItem('myList', JSON.stringify(list));
    display();
        editModal.style.display = 'none'; 
    });
    
    modalCancelBtn.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

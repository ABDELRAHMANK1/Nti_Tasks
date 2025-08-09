var newarray = [];
function add_item(){
        var item = document.getElementById("addNewItem").value;
        if (item){
                newarray.push(item);
                item.innerHTML ="";
                displayItems();
        }
        newarray +=item;
}
function displayItems() {
        var itemsList = document.getElementById("updateBtn");
        itemsList.innerHTML = '';
        
        items.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                <span>
                        <span class="index">[${index}]</span>
                        <span>${item}</span>
                </span>
                <span>
                        <button onclick="handleUpdatePrompt(${index})">Edit</button>
                </span>
                `;
                itemsList.appendChild(listItem);
        });
        }

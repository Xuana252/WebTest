const saveButton = document.getElementById("SaveButton")
saveButton.addEventListener("click",function(event) {
    event.preventDefault()
    const categoriesList = document.getElementById('CategoriesList');
    const categories = [];

    categoriesList.querySelectorAll(".Category").forEach(category => {
        const categoryName = category.querySelector(".Name").textContent
        const categoryColor = category.style.backgroundColor
        const tasks=[]

        category.querySelectorAll("li").forEach(task => {
            const taskContent = task.querySelector(".Content").textContent
            const taskStatus = task.classList.contains('In-Progress') ? 'In-Progress' : task.classList.contains('Completed') ? 'Completed' : 'Pending'
            tasks.push({ content: taskContent, status: taskStatus});
        })
        categories.push({ name: categoryName, color: categoryColor, tasks: tasks });
    })
    // Save categories array to localStorage
    localStorage.setItem('categories', JSON.stringify(categories));

    // Display alert or message indicating successful save
    alert('Đã lưu vào localStorage không tin vào kiểm tra!');
})

const categoriesList = JSON.parse(localStorage.getItem("categories"))
if(categoriesList){
    for(let category of categoriesList){
        const categoryinfo = {
            name:category.name,
            color:category.color
        }
        const Category = addCategory(categoryinfo)
        for(let task of category.tasks)
        {
            const Task  ={
                content: task.content,
                status: task.status,
                container: Category.querySelector(".TasksList")
            }
            addTask(Task)
        }

    }
}
function addTask(Task) {
    const newTask = document.createElement("li")
    newTask.classList.add(Task.status)

    const removeTaskButton = document.createElement("button")

    removeTaskButton.classList.add("RemoveTaskButton")
    removeTaskButton.textContent= "✖"
    removeTaskButton.addEventListener("click",function() {
        this.parentElement.style.animation = "slideOut 0.3s linear"
        this.parentElement.style.backgroundColor = "transparent"
        this.parentElement.addEventListener('animationend', function() {
            Task.container.removeChild(newTask)
        })
        
    })
    
    newTask.appendChild(removeTaskButton)

    const contentText = document.createElement("p");        
    contentText.classList.add("Content")
    contentText.innerText = Task.content

    let currentStyleIndex = 0;
    const styles = ['Pending', 'In-Progress', 'Completed'];
    newTask.addEventListener("click", function(){
        newTask.classList.remove(...styles);

        currentStyleIndex++;

        if (currentStyleIndex >= styles.length) {
            currentStyleIndex = 0;
        }

        newTask.classList.add(styles[currentStyleIndex]);
    })

    newTask.appendChild(contentText);
    Task.container.appendChild(newTask)
}
function addCategory(Category){
    //get the CategoriesList
    const categoriesList = document.getElementById("CategoriesList")

    //create new Category
    const category = document.createElement("li")
    category.style.backgroundColor = Category.color
    category.classList.add("Category")
    
    //create new CategoryName
    const categoryName = document.createElement("div")
    categoryName.classList.add("CategoriesName")

    const name = document.createElement("p")
    name.innerText = Category.name
    name.classList.add("Name")


    //create tasksListContainer
    const tasksListContainer = document.createElement("div")
    tasksListContainer.classList.add("TasksListContainer")

    //create tasksList
    const tasksList = document.createElement("ul")
    tasksList.classList.add("TasksList")

    const inputTask = document.createElement("input")
    inputTask.type = "text"
    inputTask.id ="TaskInput"
   
    inputTask.addEventListener("keypress",function(event) {
        if (event.key === "Enter" && inputTask.value!== "") {
            const Task = {
                content: inputTask.value,
                status: "Pending",
                container: tasksList
            }
            addTask(Task)
            
            inputTask.style.display = "none"

            inputTask.value =""
        }
    })

    inputTask.addEventListener("blur",function(event) {
        inputTask.style.display = "none"

        inputTask.value =""
    })

    //create new buttonContainer
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("ButtonContainer")
    
    //create addButton
    const addButton = document.createElement('button');
    addButton.classList.add('AddButton');
    addButton.textContent = '✎';  

    addButton.addEventListener("click",()=> {
        
        

        inputTask.style.display = "inline-block"
        inputTask.style.position = "absolute"
        inputTask.focus()

        
        
        inputTask.style.top = categoryName.offsetTop + "px"
        inputTask.style.left = categoryName.offsetLeft + "px"
        const computedStyle = getComputedStyle(categoryName);
        inputTask.style.width = categoryName.offsetWidth - parseInt(computedStyle.paddingLeft, 10) + "px"
        inputTask.style.height = categoryName.offsetHeight - parseInt(computedStyle.paddingTop, 10) + "px"

       
       
    })
    //create removeButton
    const removeButton = document.createElement('button');
    removeButton.classList.add('RemoveButton');
    removeButton.textContent = '🗑️';
    removeButton.addEventListener("click",()=> { 
        category.style.animation = "deleted 0.3s linear"
        category.addEventListener('animationend', function() {
            categoriesList.removeChild(category);
        })
    })

    //add the tasksList to the tasksListContainter
    tasksListContainer.appendChild(tasksList)

    //add buttons to the buttonContainer
    buttonContainer.appendChild(addButton)
    buttonContainer.appendChild(removeButton)

    //add name and buttonContainer to CategoryName 
    categoryName.appendChild(name)
    categoryName.appendChild(buttonContainer)
    category.appendChild(inputTask)


    //add CategoryName and tasksListContainer to the Category
    category.appendChild(categoryName)
    category.appendChild(tasksListContainer)    

    //add Category to the CategoriesList
    categoriesList.appendChild(category)

    return category

}


document.getElementById("SubmitButton").addEventListener("click", function(event) {
    event.preventDefault();
    const textBox = document.getElementById("TextBox")
    const categoryName = textBox.value.trim(); // Use .value to get input value
    const colorPicker = document.getElementById("ColorPicker")
    const Categories =document.getElementsByClassName("Category")
    let count = 0
    for (let i = 0; i < Categories.length; i++) {
        const category = Categories[i];
        
        // Check if the string is present in the category's text content
        if (category.querySelector(".Name").textContent === categoryName && categoryName!=="") {
            count++;
        }
    }
    if (categoryName !== "" && count<=0 ) {
        textBox.setAttribute("readonly",true)
        colorPicker.style.display = "inline-block"
        
        // Clear the input field after adding task
    }
    else if(count>0) {
        alert("Category đã tồn tại")
    }
    count = 0
});

const colorButtons = document.getElementsByClassName("ColorButton");

// Loop through each element and attach the click event listener
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        const textBox = document.getElementById("TextBox");
        const categoryName = textBox.value.trim(); // Use .value to get input value
        const color = window.getComputedStyle(this).backgroundColor; // Use window.getComputedStyle

        // Assuming you have a function addTask defined elsewhere
        const category ={
            name:categoryName,
            color: color
        }
        textBox.removeAttribute("readonly")
        addCategory(category);

        // Hide the color picker (assuming ColorPicker is an element)

        const colorPicker = document.getElementById("ColorPicker");
        colorPicker.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded",function (){

})

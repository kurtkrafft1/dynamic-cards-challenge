let cardCounter = 1;
let globalDeletes = [];
const createCard = (event) => {
    //creates new html block for whatever was in the text area
    const textField = document.getElementById('userText');
    const textDestination = document.getElementById('cardsGoHere');
    const html = `<article class="card" id="card--${cardCounter}">
    <div>${textField.value}</div>
    <div>
        <button class="deleteMe" id="delete--${cardCounter}">Delete This Card</button>
    </div>
</article>`;
textDestination.innerHTML += html;
//reverts input value to placeholder
textField.value = "";


//create click ability on delete button (this is a doozy)
let newID = `delete--${cardCounter}`;
//add each ID to global variable of all delete buttons
globalDeletes.push(newID);
//access master node to delete from
const mamaNode = document.getElementById('cardsGoHere');
//magic......iterate through the globale deletes array and then get each element byt its ID which is the global deletes array[i]
// add an event listener to that specific button that all performs the same function....you okay?
globalDeletes.forEach(item=> document.getElementById(`${item}`).addEventListener('click', (event) =>{
    //split the ID  into an array that has the word 'delete' and whatever number it was 'i'
    let evID = event.target.id.split('--');
//get the id of the general card you want to delete by inputting the second element in the evID array which is a number
    let secondID = document.getElementById(`card--${evID[1]}`)
//access the variable outside this function  that is called mamanode  and remove the child node of whatever you declared in 
//second ID 
    mamaNode.removeChild(secondID);
//find the index in the global array of the id of your 
    let index = globalDeletes.indexOf(event.target.id);
//go through the array and find the specific element and remove it from the array phew...are you alive?
    if (index > -1) {
        globalDeletes.splice(index,1);
    }
}))
cardCounter++;
}

document.getElementById('submitBtn').addEventListener('click', createCard);
// globalDeletes.forEach(item => item.addEventListener('click', ()=>deleteCard(event)));


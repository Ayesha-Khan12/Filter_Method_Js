const contacts = [
    {
        id : 1,
        name : "Mehwish Khan",
        gmail : "mehwishkhan345@gmail.com"
    },
    {
        id : 2,
        name : "Faraz Khan",
        gmail : "farazkhan673@gmail.com"
    },
    {
        id : 3,
        name : "Ammad Khan",
        gmail : "ammadkhan972@gmail.com"
    },
    {
        id : 4,
        name : "Ayman Khan",
        gmail : "aymankhan426@gmail.com"
    },
    {
        id : 5,
        name : "Ayesha Khan",
        gmail : "ayeshakhan582@gmail.com"
    }
];

function renderContacts(contacts){
    const contactsList = document.getElementById('contact-list');
    contactsList.innerHTML = "";
for(const contact of contacts){
    const contactDiv = document.createElement('div');
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <br> ${contact.name} </br>
    <br> ${contact.gmail} </br>
    `
    contactsList.appendChild(contactDiv)
}
}
renderContacts(contacts);

function filterContact(){
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filterContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filterInput));
    renderContacts(filterContact);
}
renderContacts(contacts)
document.getElementById('filter-button').addEventListener('click', filterContact);

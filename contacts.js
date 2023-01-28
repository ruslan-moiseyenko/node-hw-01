const express = require("express");
const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);

// TODO: задокументировать каждую функцию
function listContacts() {
  let contacts;
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
    contacts = JSON.parse(data);
  });
  return contacts;
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
listContacts();

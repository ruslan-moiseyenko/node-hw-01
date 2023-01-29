const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      console.log(JSON.parse(data));
    } catch (error) {
      console.error(error);
    }
  })();
}

function getContactById(contactId) {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      console.log(
        contacts.filter((contact) => contact.id === contactId.toString())
      );
    } catch (error) {
      console.error(error);
    }
  })();
}

function removeContact(contactId) {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      console.log(data);
      const contacts = JSON.parse(data);
      await fs.writeFile(
        contactsPath,
        JSON.stringify(
          contacts.filter((contact) => contact.id !== contactId.toString())
        )
      );
    } catch (error) {
      console.error(error);
    }
  })();
}

function addContact(name, email, phone) {
  if (!name && email && phone) {
    throw new Error("Fill all the data!");
  }

  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      //console.log(data);
      const contacts = JSON.parse(data);
      contacts.push({
        id: email,
        name,
        email,
        phone
      });
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
    } catch (error) {
      console.error(error);
    }
  })();
}

//console.log(listContacts());
//console.log(getContactById(1));
//removeContact(1);
addContact("Ruslan", "ruscom5@gmail.com", "0675743133");

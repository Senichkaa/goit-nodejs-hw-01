import fs from "fs/promises";
import path from "node:path";
import { nanoid } from "nanoid";

// contacts.js

// Розкоментуй і запиши значення

// const contactsPath = path.join(__dirname, "./db/contacts.json");
// or
const contactsPath = path.resolve("db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const findContact = allContacts.find((contact) => contact.id === contactId);
  return findContact || null;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  const [contactsResults] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 3));
  return contactsResults;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 3));
  return newContact;
}

export { listContacts, getContactById, removeContact, addContact };

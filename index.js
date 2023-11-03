import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const addNewContact = await addContact(name, email, phone);
      console.log(addNewContact);
      break;

    case "remove":
      const removeOldContact = await removeContact(id);
      console.log(removeOldContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);

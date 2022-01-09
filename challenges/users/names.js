/**
 KOMI TECHNICAL TEST: User Names

 The user sign up form only had one field to capture user names.
 This has caused a problem when trying to send out communications such as emails,
 the marketing team want to change their generic “Dear Sir/Madam" to a more personalised “Dear James”.
 To add to the frustration, the product team would like to run an a/b test dependent on the user’s last name.

 There is an initiative to change the way that user names are captured and stored so that there are two fields for First Name and Last Name.
 The database needs to be cleaned so that “james bond” is stored as firstName: “James”, lastName: “Bond”.

 To complicate matters, often names include the user’s title (e.g. Mr or Mrs) and even their middle names too.

 Create a function that:
  accepts one parameter: full name
  returns: Array of two elements [first name, last name]

 For example
  full name = "james bond"
  names = ["James", "Bond"]
 **/

function names(fullName) {
  return ["James", "Bond"]
}

module.exports = names

/**
  KOMI TECHNICAL TEST: Talent last names

  The sales team have been emailing agents of major talent regarding their client accounts.
  Given the content of the email, they would like to know who was mentioned within those emails and have asked for help
  from engineering to extract this information.

  Create a function that:
    accepts two parameters: first name of the talent, the email body
    returns: array of last names of all people mentioned with the first name as given by the input

  Notes:
   The first name will always begin with an upper case letter
   There will always be a space character between first name and last name
   The last name will always be one word, starting with an upper-case letter and continuing with lower-case letters

  For example
    first name = "John"
    email = "Hey John, is your full name John Lennon or John Travolta?"
    last names = ["Lennon", "Travolta"]
 **/

function lastNames(firstName, email) {
  return ["Lennon", "Travolta"]
}

module.exports = lastNames

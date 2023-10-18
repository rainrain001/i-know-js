/** String to Array excluded space
* Converting the string to array without using split and join methods.
**/
function convertStringToArray(string) {
  return string.match(/(?:[a-z])/gi)
}

/** Rearrange in descending order
* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
* @param integer: non-negative number
**/
function descendingOrder(integer) {
  return parseInt(String(integer).split("").sort((a, b) => b - a).join(""))
}

/** String vowel remove
* Trolls are attacking your comment section!
* A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
* Your task is to write a function that takes a string and return a new string with all vowels removed.
* For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
* Note: for this kata y isn't considered a vowel.
*/
function disemvowel(string) {
  return string.replaceAll(/([aeiouAEIOU])/g, "");
}


/** Pangram
* A pangram is a sentence that contains every single letter of the alphabet at least once. 
* For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses
* the letters A-Z at least once (case is irrelevant).
* Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
* Ignore numbers and punctuation.
*/
function isPangram(string) {
  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}


/** GroupBy: Array of object into Array of array
* Transform the collection from Array of object into Array of array which is group by `type` as object key as example.
* @param collection: The Array of object to be transform into Array of array.
* @param type: Object key to use for grouping.
*
* @example Collection
*  [
*     { name: 'Task 1', status: 'todo' }, 
*     { name: 'Task 2', status: 'in-progress' }, 
*     { name: 'Task 3', status: 'done' }, 
*     { name: 'Task 4', status: 'in-progress'}
*  ]
*
* @example Tranform and group by
*  [
*     [ { name: 'Task 1', status: 'todo' } ],
*     [ { name: 'Task 2', status: 'in-progress' }, { name: 'Task 4', status: 'in-progress' } ],
*     [ { name: 'Task 3', status: 'done' } ]
*  ]
**/
function transformGroupBy(collection, type) {
  return Object.values(collection.reduce((accumulator, item) => {
    const key = item[type]
    
    accumulator[key] = accumulator[key] ?? []
    accumulator[key].push(task)
    return accumulator
  }, {}))
}

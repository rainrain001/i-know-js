## String to Array excluded space
> Converting the string to array without using split and join methods.

```
function convertStringToArray(string) {
  return string.match(/(?:[a-z])/gi)
}
```

## Rearrange in descending order
> Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

`@param integer: non-negative number`

```
function descendingOrder(integer) {
  return parseInt(String(integer).split("").sort((a, b) => b - a).join(""))
}
```

## String vowel remove
> Trolls are attacking your comment section!
> A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
> Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

```
function disemvowel(string) {
  return string.replaceAll(/([aeiouAEIOU])/g, "");
}
```


## Pangram
> A pangram is a sentence that contains every single letter of the alphabet at least once. 

> For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

> Given a string, detect whether or not it is a pangram. Return True if it is, False if not.  Ignore numbers and punctuation.

```
function isPangram(string) {
  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}
```

```
function isPangram(str) {
  const result = new Set()
  for (let i=0; i < str.length; i++) {
    const char = str[i].charCodeAt()
    if ((char >= 97 || char <= 122  || char >= 65 || char <= 90) && str[i] != ' ') {
      result.add(str[i])
    }
  }
  return result.size == 26
}
```


## GroupBy: Array of object into Array of array
> Transform the collection from Array of object into Array of array which is group by `type` as object key as example.

`@param collection: The Array of object to be transform into Array of array.`

`@param type: Object key to use for grouping.`

`@example Collection`
```
  [
     { name: 'Task 1', status: 'todo' }, 
     { name: 'Task 2', status: 'in-progress' }, 
     { name: 'Task 3', status: 'done' }, 
     { name: 'Task 4', status: 'in-progress'}
  ]
```
`@example Tranform and group by`
```
  [
     [ { name: 'Task 1', status: 'todo' } ],
     [ { name: 'Task 2', status: 'in-progress' }, { name: 'Task 4', status: 'in-progress' } ],
     [ { name: 'Task 3', status: 'done' } ]
  ]
```

```
function transformGroupBy(collection, type) {
  return Object.values(collection.reduce((accumulator, item) => {
    const key = item[type]
    
    accumulator[key] = accumulator[key] ?? []
    accumulator[key].push(task)
    return accumulator
  }, {}))
}
```


## Define Vue component instance out of `defineComponent`
[Referrence](https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086)
```
import { ComponentPublicInstance } from 'vue';
let instance: ComponentPublicInstance<{ prop: string }, { value: string }>;
```

## Fibonacci

Imperative
```
  function fibonacci(n) {	
    let flag = 0
    const seq = []

    while (flag <= n) {
      if (flag === 0) {
        seq.push(0)
      } else if (flag === 1 || flag === 2) {
        seq.push(1)
      } else {
        seq.push(seq[flag - 2] + seq[flag - 1])
      }

      flag++
    }

    return seq
  }
```

Recursion
```
function fibonacci(n) {
  if (n < 2) {
    return n
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}
```

## Capitalize each word in a single string
```
function toCapitalize(str) {
	return str.replaceAll(/\b[a-zA-Z0-9]/gi, (value) => {
		return value.toUpperCase()
	})
}
```

## Factorial

```
function factorial (n) {
	return (n === 0) ? 1 : n * factorial(n - 1)
}
```

Tail recursion
```
function factorial (n) {
	function iter (ctr, result) {
		return (ctr === 0) ? result : iter(ctr - 1, ctr * result)
	}
	return iter(n, 1)
}
```

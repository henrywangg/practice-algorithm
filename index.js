// Start n
let n = 12

if (n <= 0)
    throw new Error('Only positive numbers are allowed')

let loop = true
  
console.log(n)

// Loop
while (loop) {
  if (n % 2 == 0)
    n /= 2
  else
    n = 3 * n + 1
  
  console.log(n)
    
  if (n == 1)
    loop = false
}
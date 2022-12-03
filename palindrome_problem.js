function palindrome(string, A)

  let bag = ""
  for(let i=A; i>=0; i++){
      bag += str[i]
  }
  if(str==string){
      console.log("Yes")
  }else {
      console.log("No")
  }

palindrome("masai",5)
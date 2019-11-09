// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function
function generateTrashTalk() {
  // define things user might want
  const variables = require('./trash_talk_variables.json')
  
  // dummy data of req.body for test
  const options = {
      target: 'engineer',
//      target: 'designer',
//      target: 'entrepreneur'
    }  
//  console.log('options:', options)
  
  // create a collection to store career user picked up
　let collection = []

  // define how to get variables for trash talk
  function listVariables(index, career) {
      collection.push(variables.target[index])
      collection.push(sample(career))
      collection.push(sample(variables.phrase))
    }  
  if (options.target === 'engineer') {
    listVariables(0, variables.task.engineer)    
  } else if (options.target === 'designer') {
    listVariables(1, variables.task.designer) 
  } else if (options.target === 'entrepreneur') {
    listVariables(2, variables.task.entrepreneur) 
  } else {
    collection = ['像你一樣的網路酸民', '不找對象說幹話', '很不舒服']
  }    
//  console.log('collection:', collection)
    
  // return the generated trash talk
  let trashTalk = `身為一個${collection[0]}，${collection[1]}，${collection[2]}吧！`
  console.log('trashTalk:', trashTalk)
  return trashTalk
}
// invoke generateTrashTalk function 
generateTrashTalk()

// export generatePassword function for other files to use
//module.exports = generateTrashTalk
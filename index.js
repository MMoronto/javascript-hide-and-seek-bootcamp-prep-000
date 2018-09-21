function getFirstSelector(selector) {
 return  document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll("ul.ranked-list li")
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  
  let children = firstList.children
  let start = 1
  for (let i = 0; i < children.length; i++) {
    return (parseInt(children[i].innerHTML))
}


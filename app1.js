let $add = $('#add1')
let $minus1 = $('#minus1')
let $multiply2 = $("#multiply2")
let $divide2 = $("#divide2")
let $result = $("#result")
let nInit = localStorage.getItem("n") || 100
$result.text(nInit)
$add.on("click",()=>{
    let n = JSON.parse($result.text().toString())
    n +=1
    $result.text(n)
    localStorage.setItem("n",n)
})
$minus1.on("click",()=>{
    let n = JSON.parse($result.text().toString())
    n -=1
    $result.text(n)
    localStorage.setItem("n",n)
})
$multiply2.on("click",()=>{
    let n = JSON.parse($result.text().toString())
    n *=2
    $result.text(n)
    localStorage.setItem("n",n)
})
$divide2.on("click",()=>{
    let n = JSON.parse($result.text().toString())
    n /=2
    $result.text(n)
    localStorage.setItem("n",n)
})

//intial styling of hiiden container block and size of the container


const handleDisplay = ()=>{
  document.getElementById('first').style.display='none'
  document.getElementById('second').style.display='none'
  document.getElementById('third').style.display='none'
   document.getElementById('container').style.height='73vh'
}
handleDisplay()

//addding event listners to both of the third containers

document.getElementById('thirdContainer').addEventListener('click' ,function(){

 // this function call make sure that the  open containers should close when we click on other container
  handleParellel('first','firstContainer','second','secondContainer')

handleClick('third','thirdContainer','container','amount','flex','none','84vh','Total : $ 36.00 USD')
})
document.getElementById('third').addEventListener('click', function(){

  handleClick('thirdContainer','third','container','amount','flex','none','70vh','Total : $ 00.00 USD')
 
})

//addding event listners to both of the first containers

document.getElementById('firstContainer').addEventListener('click' ,function(){
  
  handleParellel('third','thirdContainer','second','secondContainer')

  handleClick('first','firstContainer','container','amount','flex','none','84vh','Total : $ 18.00 USD')
  
  })
  document.getElementById('first').addEventListener('click', function(){
  
    handleClick('firstContainer','first','container','amount','flex','none','70vh','Total : $ 00.00 USD')
   
  })

  //addding event listners to both of the second containers


  document.getElementById('secondContainer').addEventListener('click' ,function(){
  
    handleParellel('third','thirdContainer','first','firstContainer')
  
    handleClick('second','secondContainer','container','amount','flex','none','84vh','Total : $ 24.00 USD')
    
    })
    document.getElementById('second').addEventListener('click', function(){
    
      handleClick('secondContainer','second','container','amount','flex','none','70vh','Total : $ 00.00 USD')
     
    })


//this container handles the click events and changes the properties according to that

const handleClick = ( idProperty1,idProperty2,idProperty3,idProperty4,styleProperty1,styleProperty2,styleProperty3,valueProperty) =>{
  
  const handleFirst = document.getElementById(idProperty1);
  const handleSecond = document.getElementById(idProperty2);
  const handleThird = document.getElementById(idProperty3);
  const handleFourth = document.getElementById(idProperty4)
  

  handleSecond.style.display = styleProperty2;
  handleFirst.style.display= styleProperty1;
  handleThird.style.height = styleProperty3;
  handleFourth.innerHTML = valueProperty;

}

// this function handles the opening and closing of other containers when we clicked on one


const handleParellel = (firstContainerOne,firstContainerTwo,secondContainerOne,secondContainerTwo) =>{
  
  document.getElementById(firstContainerOne).style.display='none'
  document.getElementById(firstContainerTwo).style.display='flex'
  document.getElementById(secondContainerOne).style.display='none'
  document.getElementById(secondContainerTwo).style.display='flex'
  

}


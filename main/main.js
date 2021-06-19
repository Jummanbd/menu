const menu = [
    {
        id:1,
        title:'Breakfast', 
        category:'breakfast',
        price:20.25,
        img:"img/breakfast.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:2,
        title:'Lunch', 
        category:'lunch',
        price:85.35,
        img:"img/lunch.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:3,
        title:'Dinner ', 
        category:'dinner',
        price:90.85,
        img:"img/dinner.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:4,
        title:'Breakfast', 
        category:'breakfast',
        price:15.12,
        img:"img/breakfast1.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:5,
        title:'Lunch', 
        category:'lunch',
        price:40.10,
        img:"img/lunch1.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    }, 
    {
        id:6,
        title:'Dinner ', 
        category:'dinner',
        price:60.25,
        img:"img/dinner1.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:7,
        title:'Breakfast', 
        category:'breakfast',
        price:20.25,
        img:"img/breakfast2.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:8,
        title:'Lunch', 
        category:'lunch',
        price:85.35,
        img:"img/lunch2.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    },
    {
        id:9,
        title:'Dinner', 
        category:'dinner',
        price:85.35,
        img:"img/dinner2.jpg",
        desc:'I am baby woke mlksk wolf bitters liv-edge blue bottle, hammock freegan coper one one ',
    }
   
];

const allText = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('load', function(){
    displayMenuItems(menu);
});

filterBtns.forEach(function (btn){
    btn.addEventListener('click', function(e){

        const valued = e.target.dataset.id;

        
        const coned = menu.filter(function(menuItem){
            if(menuItem.category === valued){
                return menuItem
            }
           
              
        });
        if(valued === 'all'){
            displayMenuItems(menu)
           
        }
        else{
            displayMenuItems(coned)
        }


    });
});

 function displayMenuItems(menuItems){
     const displayed = menuItems.map(function(item){
        

       return `<article>
       <img src = ${item.img} class ="photo" alt = ${item.title}/>
 <div class="item-info">
 
    <header>
       <h1>${item.title}</h1>
       <h3 class="price">${item.price}</h3>
      </header>
      <p class = "item-text">
      ${item.desc}
      </p>
  </div>
 </article>`;
     });
    var  displayMenus = displayed.join(" ");
  allText.innerHTML = displayMenus;
 }
 


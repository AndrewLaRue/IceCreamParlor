const iceCream = [{
    name: 'Chocolate',
    image: 'https://thumbs.dreamstime.com/b/chocolate-ice-cream-scoop-ice-cream-ice-cream-scoop-isolated-delicious-indulgence-dessert-sweet-118155804.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://www.decorcentral.com/images/D/ICS113-L.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.foodservicedirect.com/media/catalog/product/1/0/10070640050106_ykgyv9h359dl67o6.jpg?width=1200&height=1200&quality=85&fit=bounds',
    price: 2
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
  }, {
  name: 'Choco-Waffle',
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQO4X-hPRCo8sJdfE1tEqGiJ2hIo0_t8uefu11uB_x0kqBZ8EwM_mwMncKNCbIOSChPd7cF14juC8s&usqp=CAc',
  price: 3
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
  }, {
  name: 'Mini Reeses',
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuK5ZIk_qn3ryOkj5OWc0jxZSWNAluX5kbX8TmDA-Mle84W4m23ry5dDu35_7bhUUcai9aDCpJhKUU1_rer2q_m8FwmykZ63TL8pOe85o&usqp=CAc',
    price: 3
  }]

let vesselOrders = []
let iceCreamOrders = []
let toppingsOrders = []

function drawVesselOrders() {
  let template = ''
  vesselOrders.forEach(order => template += `
            <div class="col-9 d-flex flex-row">
              <div>
                <h5 class="ms-1"> ${order.name}</h5>
              </div>
              <div>
                <img class="mini-img" src="${order.image}">
              </div>
              <div class="col-2">
                <h5 class="text-center">${order.price}</h5>
              </div>
            </div>
  `)

  let orderElm = document.getElementById('vesselOrder')
  // @ts-ignore
  orderElm.innerHTML = template
}

function drawIceCreamOrders() {
  let template = ''
  iceCreamOrders.forEach(order => template += `
            <div class="col-9 d-flex flex-row">
              <div >
                <h5 class="ms-1"> ${order.name}</h5>
              </div>
              <div>
                <img class="mini-img" src="${order.image}">
              </div>
              <div class="col-2">
                <h5 class="text-center">${order.price}</h5>
              </div>
            </div>
  `)

  let orderElm = document.getElementById('iceCreamOrder')
  // @ts-ignore
  orderElm.innerHTML = template
}

function drawToppingsOrders() {
  let template = ''
  toppingsOrders.forEach(order => template += `
            <div class="col-9 d-flex flex-row">
              <div >
                <h5 class="ms-1"> ${order.name}</h5>
              </div>
              <div>
                <img class="mini-img" src="${order.image}">
              </div>
              <div class="col-2">
                <h5 class="text-center">${order.price}</h5>
              </div>
            </div>
  `)

  let orderElm = document.getElementById('toppingsOrder')
  // @ts-ignore
  orderElm.innerHTML = template
}

function drawTotal() {
  let subtotal = 0
  vesselOrders.forEach( order => subtotal += order.price)
  iceCreamOrders.forEach( order => subtotal += order.price)
  toppingsOrders.forEach(order => subtotal += order.price)
  let totalElm = document.getElementById('total')
  totalElm.innerText = subtotal.toFixed(2)
}




function orderVessel(name) {
  let foundOrder = vessels.find(vessel => vessel.name == name)
  vesselOrders.push(foundOrder)
  drawVesselOrders()
  drawTotal()
}

function orderIceCream(name) {
  let foundOrder = iceCream.find(iceCream => iceCream.name == name)
  iceCreamOrders.push(foundOrder)
  drawIceCreamOrders()
  drawTotal()
}

function orderToppings(name) {
  let foundOrder = toppings.find(toppings => toppings.name == name)
  toppingsOrders.push(foundOrder)
  drawToppingsOrders()
  drawTotal()
}














function drawAll() {
  drawVessels()
  drawIcecream()
  drawToppings()
  }

function drawVessels() {
  let template = ''
  vessels.forEach(item => {
    template += `
            <div class="col-4" onclick="orderVessel('${item.name}')">
              <div class="bg-secondary text-light rounded shadow-lg m-2">
                <div class="text-center">${item.name}</div>
                  <img class="img-fluid"
                  src="${item.image}"
                  alt="">
                <div class="text-center">$${item.price}</div>
              </div>
            </div>`
  })
  let vesselElm = document.getElementById('vessels')
  // @ts-ignore
  vesselElm.innerHTML = template
}

function drawIcecream() {
  let template = ''
  iceCream.forEach(item => {
    template += `
            <div class="col-4" onclick="orderIceCream('${item.name}')">
              <div class="bg-secondary text-light rounded shadow-lg m-2">
                <div class="text-center">${item.name}</div>
                  <img class="img-fluid"
                  src="${item.image}"
                  alt="">
                <div class="text-center">$${item.price}</div>
              </div>
            </div>
    `
  })
  let icecreamElm = document.getElementById('icecream')
  // @ts-ignore
  icecreamElm.innerHTML = template
}

function drawToppings() {
  let template = ''
  toppings.forEach(item => {
    template += `
            <div class="col-4" onclick="orderToppings('${item.name}')">
              <div class="bg-secondary text-light rounded shadow-lg m-2">
                <div class="text-center">${item.name}</div>
                  <img class="img-fluid"
                  src="${item.image}"
                  alt="">
                <div class="text-center">$${item.price}</div>
              </div>
            </div>`
  })
  let toppingsElm = document.getElementById('toppings')
  // @ts-ignore
  toppingsElm.innerHTML = template
}

drawAll()
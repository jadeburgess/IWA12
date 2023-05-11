// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.querySelector('#book1');
const status1 = book1.querySelector('.status')
const reserve1 = book1.querySelector('.reserve')
const checkout1 = book1.querySelector('.checkout')
const checkin1 = book1.querySelector('.checkin')

const book2 = document.querySelector('#book2');
const status2 = book2.querySelector('.status')
const reserve2 = book2.querySelector('.reserve')
const checkout2 = book2.querySelector('.checkout')
const checkin2 = book2.querySelector('.checkin')

const book3 = document.querySelector('#book3');
const status3 = book3.querySelector('.status')
const reserve3 = book3.querySelector('.reserve')
const checkout3 = book3.querySelector('.checkout')
const checkin3 = book3.querySelector('.checkin')



status1.style.color = STATUS_MAP.overdue.color
reserve1.disabled = STATUS_MAP.overdue.canReserve
checkout1.disabled = STATUS_MAP.overdue.canCheckout
checkin1.disabled = STATUS_MAP.overdue.canCheckIn

status2.style.color = STATUS_MAP.reserved.color
reserve2.disabled = STATUS_MAP.reserved.canReserve
checkout2.disabled = STATUS_MAP.reserved.canCheckout
checkin2.disabled = STATUS_MAP.reserved.canCheckIn

status3.style.color = STATUS_MAP.shelf.color
reserve3.disabled = STATUS_MAP.shelf.canReserve
checkout3.disabled = STATUS_MAP.shelf.canCheckout
checkin3.disabled = STATUS_MAP.shelf.canCheckIn




//document.getElementById("myBtn").disabled = true;

/*function updateBook(book, status) {   
    

    const statusInfo = STATUS_MAP[status.textContent]
    const color = statusInfo.color
    const canReserve = statusInfo.canReserve
    const canCheckout = statusInfo.canCheckout
    const canCheckIn = statusInfo.canCheckIn
    
    book.style.filter = 'grayscale(100%)'
    book.style.color = color
    reserve.disabled = !canReserve
    checkout.disabled = !canCheckout
    checkin.disabled = !canCheckIn
    }
    
    updateBook(book1, status1)
    updateBook(book2, status2)
    updateBook(book3, status3)

*/
/*
const checkin1.color = none
const status1.style.color = STATUS_MAP.status.color
const reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
const checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
const checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

const checkin2.color = none
const status2.style.color = STATUS_MAP.status.color
const reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
const checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
const checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

const checkin3.color = none
const status3.style.color = STATUS_MAP.status.color
const reserve3 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
const checkout3 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
const checkin3 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
*/
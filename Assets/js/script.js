function Room(number, booked, tv, acc) {
    this.number = number;
    this.booked = booked;
    this.tv = tv;
    this.acc = acc;
    this.checkAvailability = () => this.number - this.booked;
}

let small = new Room(150, 1, true, true);
let medium = new Room(50, 18, true, true);
let big = new Room(7, 3, true, true);


//small rooms

const small_rooms = 'Liczba pokoi: ' + small.number;
const room_sr = document.getElementById('small-rooms');
room_sr.textContent = small_rooms;

const small_booked = 'Wolne pokoje: ';
let small_available = small.checkAvailability();
let room_sb = document.getElementById('small-booked');
room_sb.textContent = small_booked + small_available;

let room_st = document.getElementById('small_icon_tv').classList.add('fa-check');

let room_sa = document.getElementById('small_icon_acc').classList.add('fa-check');

//big rooms
const big_rooms = 'Liczba pokoi: ' + big.number;
const room_br = document.getElementById('big-rooms');
room_br.textContent = big_rooms;

const big_booked = 'Wolne pokoje: ';
let big_available = big.checkAvailability();
let room_bb = document.getElementById('big-booked');
room_bb.textContent = big_booked + big_available;

let room_bt = document.getElementById('big_icon_tv').classList.add('fa-check');

let room_ba = document.getElementById('big_icon_acc').classList.add('fa-check');

//medium rooms
const medium_rooms = 'Liczba pokoi: ' + medium.number;
const room_mr = document.getElementById('medium-rooms');
room_mr.textContent = medium_rooms;

const medium_booked = 'Wolne pokoje: ';
let medium_available = medium.checkAvailability();
let room_mb = document.getElementById('medium-booked');
room_mb.textContent = medium_booked + medium_available;

let room_mt = document.getElementById('medium_icon_tv').classList.add('fa-check');

let room_ma = document.getElementById('medium_icon_acc').classList.add('fa-check');

//small reservation and canceling
let small_reserve = document.getElementById('small-reserve');

small_reserve.onclick = () => {
    small_available--;
    small_cancel.disabled = false;
    small_cancel.classList.remove('disabled');
    if (small_available <= 0) {
        small_reserve.disabled = true;
        small_reserve.classList.add('disabled');
    }
    room_sb.textContent = small_booked + small_available;
};

let small_cancel = document.getElementById('small-cancel');

small_cancel.onclick = () => {
    small_available++;
    room_sb.textContent = small_booked + small_available;
    small_reserve.disabled = false;
    small_reserve.classList.remove('disabled');
    if (small_available >= small.number) {
        small_cancel.disabled = true;
        small_cancel.classList.add('disabled');
    }
    room_sb.textContent = small_booked + small_available;
};

//medium reservation and canceling
let medium_reserve = document.getElementById('medium-reserve');

medium_reserve.onclick = () => {
    medium_available--;
    medium_cancel.disabled = false;
    medium_cancel.classList.remove('disabled');
    if (medium_available <= 0) {
        medium_reserve.disabled = true;
        medium_reserve.classList.add('disabled');
    }
    room_mb.textContent = medium_booked + medium_available;
};

let medium_cancel = document.getElementById('medium-cancel');

medium_cancel.onclick = () => {
    medium_available++;
    room_mb.textContent = medium_booked + medium_available;
    medium_reserve.disabled = false;
    medium_reserve.classList.remove('disabled');
    if (medium_available >= medium.number) {
        medium_cancel.disabled = true;
        medium_cancel.classList.add('disabled');
    }
    room_mb.textContent = medium_booked + medium_available;
};


//big reservation and canceling
let big_reserve = document.getElementById('big-reserve');

big_reserve.onclick = () => {
    big_available--;
    big_cancel.disabled = false;
    big_cancel.classList.remove('disabled');
    if (big_available <= 0) {
        big_reserve.disabled = true;
        big_reserve.classList.add('disabled');
    }
    room_bb.textContent = big_booked + big_available;
};

let big_cancel = document.getElementById('big-cancel');

big_cancel.onclick = () => {
    big_available++;
    room_mb.textContent = big_booked + big_available;
    big_reserve.disabled = false;
    big_reserve.classList.remove('disabled');
    if (big_available >= big.number) {
        big_cancel.disabled = true;
        big_cancel.classList.add('disabled');
    }
    room_bb.textContent = big_booked + big_available;
};
//Initial ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    visio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
}

//Total stars
const starsTotal = 5;
//Run getRatings() when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);
//Form elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');
//Init product
let product;

//Product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    //Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
    //Check for valid rating
    if (rating > 5) {
        alert('Please rate 1-5');
        return;
    }
    //Change rating
    ratings[product] = rating;
    getRatings();
});

//Get ratings
function getRatings() {
    for (let i in ratings) {
        //Get percentage
        const starPercentage = (ratings[i] / starsTotal) * 100;
        //Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10 * 10)}%`;
        //Set width of star-inner to percentage
        document.querySelector(`.${i} .stars-inner`).style.width = starPercentageRounded;
        //Add number rating
        document.querySelector(`.${i} .number-rating`).innerHTML = ratings[i];
    }
}
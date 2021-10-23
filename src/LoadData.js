
export function LoadRestaurants( f ) {
    fetch('/data/restaurants.json')
        .then(response => response.json())
        .then(data => {
            f(data);
        });
}

export function LoadShops( f ) {
    fetch('/data/shops.json')
        .then(response => response.json())
        .then(data => {
            f(data);
        });
}

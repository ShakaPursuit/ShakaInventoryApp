const form = document.querySelector('#sneaker-form');
const tablee = document.querySelector('#cart tbody');

let inventory = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const brand = e.target.brand.value;
    const model = e.target.model.value;
    const size = e.target.size.value;
    const quantity = e.target.quantity.value;
    const image = e.target.image.value;
    const price = e.target.price.value;


    const newSneaker = {
        brand,
        model,
        size,
        quantity,
        image,
        price


    };

    inventory.push(newSneaker);
    displayInventory();
    form.reset();
});

function displayInventory() {
    tablee.innerHTML = '';

    inventory.forEach((sneaker, index) => {
        const row = document.createElement('tr');

        const brandCell = document.createElement('td');
        brandCell.textContent = sneaker.brand;
        row.appendChild(brandCell);

        const modelCell = document.createElement('td');
        modelCell.textContent = sneaker.model;
        row.appendChild(modelCell);

        const sizeCell = document.createElement('td');
        sizeCell.textContent = sneaker.size;
        row.appendChild(sizeCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = sneaker.quantity;
        row.appendChild(quantityCell);

        const imageCell = document.createElement("img");

        imageCell.src = sneaker.image
        row.appendChild(imageCell);

        const priceCell = document.createElement("td");
        const q = document.querySelector("input#quantity").value;
        priceCell.className = "priceCells"

        priceCell.textContent = sneaker.price * q
        row.appendChild(priceCell)


        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editSneaker(index);
        });
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteSneaker(index);
        });
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        tablee.appendChild(row);


    });


}

function editSneaker(index) {
    const sneaker = inventory[index];

    const brand = prompt('Enter new brand:', sneaker.brand);
    if (brand) {
        sneaker.brand = brand;
    }

    const model = prompt('Enter new model:', sneaker.model);
    if (model) {
        sneaker.model = model;
    }

    const size = prompt('Enter new size:', sneaker.size);
    if (size) {
        sneaker.size = size;
    }

    const quantity = prompt('Enter new quantity:', sneaker.quantity);
    if (quantity) {
        sneaker.quantity = quantity;
    }

    const image = prompt('Enter image address:', sneaker.image);
    if (image) {

        sneaker.image = image;
    }


    displayInventory();
}

function deleteSneaker(index) {
    inventory.splice(index, 1);
    displayInventory();
}
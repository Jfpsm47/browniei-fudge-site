fetch('produtos.json').then(response => {return response.json();}).then(produtos => {
    const container = document.getElementsByClassName('product-container')[0];
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const img = document.createElement('img');
      img.src = produto.image;
      img.alt = produto.name;
      img.classList.add('product-image'); 

      const info = document.createElement('div');
      info.classList.add('product-info');

      const name = document.createElement('h3');
      name.classList.add('product-name');
      name.textContent = produto.name;

      const description = document.createElement('p');
      description.classList.add('product-description');
      description.textContent = produto.description;

      const price = document.createElement('p');
      price.classList.add('product-price');
      price.textContent = `R$ ${produto.price.toFixed(2)}`;

      const button = document.createElement('button');
      button.classList.add('buy-button');
      button.textContent = 'Mais Informações';

      info.appendChild(name);
      info.appendChild(description);
      info.appendChild(price);
      info.appendChild(button);
      
      card.appendChild(img);
      card.appendChild(info);

      container.appendChild(card);
    });
  })

  function detectarCategoriaClicada() {
    document.querySelectorAll('.nav ul li').forEach(item => {
        item.addEventListener('click', () => {
            const categoria = item.getAttribute('data-categoria');
            console.log("Categoria selecionada:", categoria);

            let jsonFile;
            switch (categoria) {
                case "Bolos e Tortas":
                    jsonFile = 'bolos.json';
                    break;
                case "Sorvetes":
                    jsonFile = 'sorvetes.json';
                    break;
                case "Para festas":
                    jsonFile = 'festas.json';
                    break;
                default:
                    jsonFile = 'produtos.json';
            }

            const container = document.getElementById('produtos'); // Obtém o contêiner pelo ID
            container.innerHTML = ''; // Limpa o contêiner de produtos

            fetch(jsonFile)
                .then(response => response.json())
                .then(produtos => {
                    produtos.forEach(produto => {
                        const card = document.createElement('div');
                        card.classList.add('product-card');

                        const img = document.createElement('img');
                        img.src = produto.image;
                        img.alt = produto.name;
                        img.classList.add('product-image');

                        const info = document.createElement('div');
                        info.classList.add('product-info');

                        const name = document.createElement('h3');
                        name.classList.add('product-name');
                        name.textContent = produto.name;

                        const description = document.createElement('p');
                        description.classList.add('product-description');
                        description.textContent = produto.description;

                        const price = document.createElement('p');
                        price.classList.add('product-price');
                        price.textContent = `R$ ${produto.price.toFixed(2)}`;

                        const button = document.createElement('button');
                        button.classList.add('buy-button');
                        button.textContent = 'Mais Informações';

                        info.appendChild(name);
                        info.appendChild(description);
                        info.appendChild(price);
                        info.appendChild(button);

                        card.appendChild(img);
                        card.appendChild(info);
                        container.appendChild(card);
                    });

                    // Faz a rolagem suave para o contêiner de produtos
                    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                })
                .catch(error => console.error("Erro ao carregar JSON:", error));
        });
    });
}

detectarCategoriaClicada();


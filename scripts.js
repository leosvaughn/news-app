const apiKey = process.env.NEWS_API_KEY;


const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles); 
  } catch (error) {
    console.error('There was an error!', error);
  }
}

// Function to display news
function displayNews(articles) {
  const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = '';

    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('card', 'mb-3', 'col-sm-3', 'col-md-5'); 

       
        if (article.urlToImage) {
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.classList.add('card-img-top'); 
            articleDiv.appendChild(image);
        }

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center'); 

      
        const title = document.createElement('h5');
        title.classList.add('card-title'); 
        title.textContent = article.title;
        cardBody.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('card-text'); 
        description.textContent = article.description;
        cardBody.appendChild(description);

      
        const link = document.createElement('a');
        link.classList.add('btn', 'btn-primary'); 
        link.textContent = 'Read More';
        link.href = article.url;
        link.target = '_blank'; 
        cardBody.appendChild(link);

        articleDiv.appendChild(cardBody);
        newsDiv.appendChild(articleDiv);
    }
}


  
  fetchNews();
  
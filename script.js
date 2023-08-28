const cardDataUrl = 'data.json';

const body = document.body;
body.style.backgroundImage = "url('img/background.png')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";


const postContainer = document.querySelector('.card-container');

const bioContainer = document.createElement('div');
bioContainer.classList.add('bio');

const bioImage = new Image();
bioImage.src = 'img/b.png';
bioImage.alt = 'Bio Image';
bioImage.classList.add('bio-image');
bioImage.style.borderRadius = '90px';
bioImage.style.marginBlock ="80px";
bioContainer.appendChild(bioImage);


bioContainer.classList.add('bio');
bioContainer.style.display = 'flex';
bioContainer.style.flexDirection = 'column';
bioContainer.style.alignItems = 'center';
bioContainer.style.color = 'white';

const bioHeading = document.createElement('h1');
bioHeading.textContent = "Netflix's Masterpieces Unveiled";
bioHeading.style.marginBottom = '60px';
bioHeading.style.color = "rgb(220, 220, 220)";
bioHeading.style.fontSize = "34px";



bioContainer.appendChild(bioHeading);

const bioText = document.createElement('p');
bioText.textContent = "Introducing 'Netflix's Masterpieces Unveiled': A curated collection of captivating movies and TV shows that transport you to realms of imagination, emotion, and endless entertainment. From heart-pounding thrillers to heartwarming comedies, experience award-winning performances and diverse narratives that ignite your imagination. Explore the artistry and brilliance of visionary storytellers, as each frame leaves an indelible mark on your heart and mind. Discover the power of storytelling, bridging gaps, and fostering empathy, all within the comfort of your own home. Prepare to be captivated, challenged, and inspired by this extraordinary collection. Welcome to a world where each masterpiece holds the potential to create unforgettable moments. Immerse yourself in captivating worlds, embark on unforgettable journeys, and let the magic of cinema unfold before your eyes. This collection celebrates the diversity of human experiences and invites you to witness the triumphs, struggles, and personal growth of characters from all walks of life. Unveil the power of stories that transcend the screen and leave a lasting impact.";
bioText.style.marginInline = "60px";
bioText.style.color = "rgb(220, 220, 220)";
bioText.style.textAlign = "justify";
bioText.style.fontSize = "22px";
bioText.style.marginInline = "10%";
bioContainer.appendChild(bioText);
document.body.insertBefore(bioContainer, postContainer);


const postMethods = async () => {
    try {
        const response = await fetch(cardDataUrl);
        const cardData = await response.json();

        cardData.forEach((postData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card');

            const imageElement = new Image();
            imageElement.src = postData.thumbnail;
            imageElement.alt = 'Post Image';
            imageElement.classList.add('card-image');

            const headingElement = document.createElement('h3');
            headingElement.classList.add('card-heading');
            headingElement.textContent = postData.heading;

            const titleElement = document.createElement('h4');
            titleElement.classList.add('card-title');
            titleElement.textContent = postData.title;

            const bodyElement = document.createElement('p');
            bodyElement.classList.add('card-body');
            bodyElement.textContent = postData.body;

            const linkElement = document.createElement('a');
            linkElement.href = postData.link;
            linkElement.textContent = 'Watch Trailer';
            linkElement.style.color = 'pink';

            postElement.addEventListener('mouseover', () => {
                bodyElement.style.color = 'black';
                linkElement.style.color = 'purple';
            });

            postElement.addEventListener('mouseout', () => {
                bodyElement.style.color = '';
                linkElement.style.color = 'pink';
            });

            postElement.appendChild(imageElement);
            postElement.appendChild(headingElement);
            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);
            postElement.appendChild(linkElement);

            postContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching card data:', error);
    }
};

postMethods()
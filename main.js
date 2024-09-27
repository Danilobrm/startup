function mountPage() {
    const hashImgs = [
      "https://example.com/images/img1.jpg",
      "https://example.com/images/img2.jpg",
      "https://example.com/images/img3.jpg",
      "https://example.com/images/img4.jpg",
      "https://example.com/images/img5.jpg",
      "https://example.com/images/img6.jpg",
      "https://example.com/images/img7.jpg",
      "https://example.com/images/img8.jpg",
      "https://example.com/images/img9.jpg",
    ];
    
    const cardHash = document.getElementsByClassName("hero");
    
    // Ensure the number of image URLs matches the number of hero elements
    for (let i = 0; i < cardHash.length; i++) {
      let card = document.createElement("img");
      card.src = hashImgs[i]; // Using `src` for image URL
      
      // Append the image element to each card in the HTML
      cardHash[i].appendChild(card);
      
      console.log(card);
    }
  }
  
  mountPage();
  
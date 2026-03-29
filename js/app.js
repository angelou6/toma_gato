const cat_container = document.querySelector(".cat_container");

function shareCat(e) {
  const shareBtn = e.target;
  navigator.clipboard.writeText(location.href);
  shareBtn.textContent = "¡Enlace copiado!";
  shareBtn.classList.add("copied");
}

function showCat() {
  cat_container.innerHTML = "";

  const loading = document.createElement("div");
  loading.className = "loading";
  cat_container.appendChild(loading);

  fetch("https://cataas.com/cat")
    .then((r) => r.blob())
    .then((blob) => {
      cat_container.innerHTML = "";

      const image = document.createElement("img");
      image.src = URL.createObjectURL(blob);
      cat_container.appendChild(image);

      const btn = document.createElement("button");
      btn.className = "share-btn";
      btn.textContent = "¿Compartir un gato?";
      btn.addEventListener("click", shareCat);
      cat_container.appendChild(btn);
    });
}

document.querySelector(".gift-wrapper").addEventListener("click", showCat);

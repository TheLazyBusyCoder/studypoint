async function loadHome() {
  await fetch("../data/home.json")
    .then((res) => res.json())
    .then((res) => {
      const keys = Object.keys(res);
      for (const key of keys) {
        document.querySelector(`#${key}`).innerHTML = res[key];
      }
    });
}

loadHome();

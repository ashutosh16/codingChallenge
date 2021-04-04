(function () {
  function Accordion(list = [], targetId) {
    const clickHandler = (e) => {
      const prev = document.querySelector(".accordion-container .list-body.active");
      prev && (prev.style.display = "none");
      prev && prev.classList.remove("active");
      const active = document.querySelector(`.accordion-container .list-body.${e.target.dataset.id}`);
      active && (active.style.display = "block");
      active && active.classList.add("active");
    };
    const create = (list, clickHandler, targetId) => {
      let accordionListItem = "";
      for (let i = 0; i < list.length; i++) {
        accordionListItem += `
            <li>
                <p data-id="body-${i}">${list[i].title}</p>
                <div class="list-body body-${i}" style="display: none;">${typeof list[i].body === "string" ? list[i].body : list[i].body.innerHTML}</div>
            </li>`;
      }
      const target = document.getElementById(`${targetId}`);
      target.innerHTML = `
        <div class="accordion-container">
            <ul>
                ${accordionListItem}
            </ul>
        </div>`;
      target.querySelector(".accordion-container").addEventListener("click", clickHandler);
    };
    create(list, clickHandler, targetId);
  }

  const newDiv = document.createElement("div");
  newDiv.textContent = "container 1";

  const newDiv2 = document.createElement("div");
  newDiv2.textContent = "conterner 2";

  Accordion(
    [
      { title: "Name", body: newDiv },
      { title: "Address", body: newDiv2 },
      { title: "Compony", body: "<div>i am text</div>" },
    ],
    "accordion"
  );
})();

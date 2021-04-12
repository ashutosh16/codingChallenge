(function () {
  const createAutoSuggestion = (id, getSuggestion) => {
    const target = document.getElementById(id);

    const debounce = (callback, time) => {
      let timer = null;
      return (...args) => {
        if(timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(()=> callback(...args), time)
      }
    };

    const reqSuggestion = debounce((val)=>{
      const ulEle = wrapper.getElementsByClassName("suggestion-list")[0];
      if(val === "") {
        ulEle.innerHTML = "";
        return false;
      }
      getSuggestion(val).then((suggestions) => {
        ulEle.innerHTML = suggestions.reduce((acc, item) => acc + `<li class="list-item">${item}</li>`, "");
      });
    }, 1000);

    const onChangeHandler = (e) => {
      reqSuggestion(e.target.value);
    };
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("suggestion-wrapper");
    wrapper.innerHTML = `<input class="inputBox" value="" /><ul class="suggestion-list"></ul>`;
    wrapper.getElementsByClassName("inputBox")[0].addEventListener("keyup", onChangeHandler);
    target.appendChild(wrapper);
  };

  const getSuggestion = (text) => {
    const names = ["java", "java script", "python", "C++", "C", "Panda", "scala"];
    return new Promise((res, rej) => res(names.filter((name) => name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) > -1)));
  };

  createAutoSuggestion("main-page", getSuggestion);
  createAutoSuggestion("main-page", getSuggestion);
})();

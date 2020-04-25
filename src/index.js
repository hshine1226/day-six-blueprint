// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selectElement = document.querySelector("select");
const COUNTRY_LS = "country";

/*option을 현재 localStorage에 있는 값으로 selected해준다.*/
function paintCountry(index) {
  selectElement.options[index].selected = "True";
}
function saveCountry(value) {
  localStorage.setItem(COUNTRY_LS, JSON.stringify(value));
}
/*select에 change event가 발생하면 수행하는 함수*/
function handleChange(event) {
  const selectedIndex = event.target.selectedIndex;
  const selectedValue = selectElement.options[selectedIndex].value;
  const valueObject = {
    country: selectedValue,
    index: selectedIndex,
  };
  saveCountry(valueObject);
}
/* localStorage에 값이 있다면 paintCountry를 index 파라미터로
호출한다.*/
function loadCountry() {
  const loadedCountry = localStorage.getItem(COUNTRY_LS);
  if (loadedCountry !== null) {
    const parseItem = JSON.parse(loadedCountry);
    const index = parseItem["index"];
    paintCountry(index);
  }
}

function init() {
  loadCountry();
  selectElement.addEventListener("change", handleChange);
}
init();
